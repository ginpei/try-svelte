<script lang="ts">
	import { session } from '$app/stores';
	import type { User } from '$lib/db/user';
	import type { Writable } from 'svelte/store';
	import LoginPage from './_LoginPage.svelte';
	import LogoutPage from './_LogoutPage.svelte';

	let loginUser: User | null | undefined = undefined;

	(session as Writable<{ user: User | null }>).subscribe(({ user }) => {
		loginUser = user;
	});
</script>

{#if loginUser === undefined}
	...
{:else if loginUser}
	<LogoutPage />
{:else}
	<LoginPage />
{/if}
