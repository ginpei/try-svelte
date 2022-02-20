<script>
	import { session } from '$app/stores';
	import BasicHeading from '$lib/layouts/basic/BasicHeading.svelte';
	import NiceButton from '$lib/primaries/NiceButton.svelte';
	import VStack from '$lib/utils/VStack.svelte';

	function onLogoutClick() {
		// TODO extract
		window.sessionStorage.removeItem('userId');
		session.update((v) => ({ ...v, user: null }));
	}
</script>

<VStack>
	<BasicHeading>Logout</BasicHeading>
	<NiceButton on:click={onLogoutClick}>Log out</NiceButton>
</VStack>
