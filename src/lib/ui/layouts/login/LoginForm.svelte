<script lang="ts">
  import ErrorBox from "$lib/ui/complex/ErrorBox.svelte";
  import TextField from "$lib/ui/complex/TextField.svelte";
  import { setLoginUser } from "$lib/data/loginUserStore";
  import { findLoginUser } from "$lib/data/userDb";
  import NiceButton from "$lib/ui/primaries/NiceButton.svelte";
  import { toError } from "$lib/utils/errors";
  import { sleep } from "$lib/utils/time";
  import VStack from "$lib/ui/utils/VStack.svelte";

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

    setLoginUser(user);

    return {
      ok: true,
      status: 200,
      statusText: "OK",
    };
  }
</script>

<section class="LoginForm">
  <VStack>
    <h1 class="heading">Login</h1>
    {#if loginError}
      <ErrorBox error={loginError} />
    {/if}
    <form on:submit={onSubmit}>
      <fieldset disabled={loggingIn}>
        <VStack>
          <TextField
            label="Email"
            name="email"
            type="email"
            bind:value={email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            bind:value={password}
          />
          <NiceButton>Log in</NiceButton>
        </VStack>
      </fieldset>
    </form>
    <a href="/404">Forgot password</a>
    <a href="/404">Sign up</a>
  </VStack>
</section>

<style>
  a {
    color: inherit;
  }

  .LoginForm {
    background-image: linear-gradient(180deg, #191927 0%, #441c88 100%);
    border-radius: 1rem;
    border: thin solid gray;
    box-shadow: 0 0 3rem 1rem #0009;
    box-sizing: border-box;
    color: white;
    padding: 3rem;
    width: 340px;
  }

  .heading {
    font-size: 1.5rem;
    text-align: center;
  }
</style>
