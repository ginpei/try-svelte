<script lang="ts">
  import ErrorBox from "$lib/complex/ErrorBox.svelte";
import TextField from "$lib/complex/TextField.svelte";
  import BasicHeading from "$lib/layouts/basic/BasicHeading.svelte";
  import NiceButton from "$lib/primaries/NiceButton.svelte";
  import { toError } from "$lib/utils/errors";
import { sleep } from "$lib/utils/time";
  import VStack from "$lib/utils/VStack.svelte";

  let email = '';
  let password = '';
  let loginError: Error | null = null;
  let loggingIn = false;

  async function onSubmit(event: Event) {
    event.preventDefault();

    const data = { email, password };

    loginError = null;
    loggingIn = true;
    try {
      const [res] = await Promise.all([
        fetch('/api/login', {
          body: JSON.stringify(data),
          method: 'POST',
        }),
        sleep(500),
      ]);
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      // TODO
      console.log('# res', res);
    } catch (error) {
      loginError = toError(error);
    } finally {
      loggingIn = false;
    }
  }
</script>

<VStack>
  <BasicHeading>Login</BasicHeading>
  {#if loginError}
    <ErrorBox error={loginError} />
  {/if}
  <form on:submit={onSubmit}>
    <fieldset disabled={loggingIn}>
      <VStack>
        <TextField label="Email" name="email" type="email" value={email} />
        <TextField label="Password" name="password" type="password" value={password} />
        <NiceButton>Send</NiceButton>
      </VStack>
    </fieldset>
  </form>
</VStack>
