<script lang="ts">
  import ErrorBox from "$lib/complex/ErrorBox.svelte";
  import TextField from "$lib/complex/TextField.svelte";
  import { findLoginUser } from "$lib/data/userDb";
  import { loginUser } from "$lib/data/loginUserStore";
  import BasicHeading from "$lib/layouts/basic/BasicHeading.svelte";
  import NiceButton from "$lib/primaries/NiceButton.svelte";
  import { toError } from "$lib/utils/errors";
  import { sleep } from "$lib/utils/time";
  import VStack from "$lib/utils/VStack.svelte";

  export let title: string;

  let email = "test@example.com";
  let password = "123456";
  let loginError: Error | null = null;
  let loggingIn = false;

  async function onSubmit(event: Event) {
    event.preventDefault();

    const data = { email, password };

    loginError = null;
    loggingIn = true;
    try {
      const [res] = await Promise.all([_login(data), sleep(500)]);
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    } catch (error) {
      loginError = toError(error);
    } finally {
      loggingIn = false;
    }
  }

  async function _login(data: { email: string; password: string }) {
    const user = await findLoginUser(data.email, data.password);
    if (!user) {
      return {
        ok: false,
        status: 401,
        statusText: "Unauthorized",
      };
    }

    // TODO extract
    window.sessionStorage.setItem("userId", user.id);
    $loginUser = user;

    return {
      ok: true,
      status: 200,
      statusText: "OK",
    };
  }
</script>

<VStack>
  <BasicHeading>{title}</BasicHeading>
  {#if loginError}
    <ErrorBox error={loginError} />
  {/if}
  <form on:submit={onSubmit}>
    <fieldset disabled={loggingIn}>
      <VStack>
        <TextField label="Email" name="email" type="email" bind:value={email} />
        <TextField
          label="Password"
          name="password"
          type="password"
          bind:value={password}
        />
        <NiceButton>Send</NiceButton>
      </VStack>
    </fieldset>
  </form>
</VStack>
