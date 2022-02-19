<script lang="ts">
  import TextField from "$lib/complex/TextField.svelte";
  import BasicHeading from "$lib/layouts/basic/BasicHeading.svelte";
  import NiceButton from "$lib/primaries/NiceButton.svelte";
  import VStack from "$lib/utils/VStack.svelte";

  let email = '';
  let password = '';

  function onSubmit(event: Event) {
    event.preventDefault();

    // TODO
    console.log('# ', { email, password });
  }
</script>

<BasicHeading>Login</BasicHeading>

<form on:submit={onSubmit}>
  <VStack>
    <TextField label="Email" name="email" type="email" value={email} />
    <TextField label="Password" name="password" type="password" value={password} />
    <NiceButton>Send</NiceButton>
  </VStack>
</form>
