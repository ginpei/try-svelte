<script lang="ts">
	import { session } from '$app/stores';
	import { getUserById } from '$lib/db/user';
	import BasicLayout from '$lib/layouts/basic/BasicLayout.svelte';

	_initLoginUser();

	async function _initLoginUser() {
		if (typeof window === 'undefined') {
			return;
		}

		session.subscribe((values) => {
			// console.log('# session', values);
		});

		const userId = window.sessionStorage.getItem('userId');
		if (!userId) {
			session.update((v) => ({ ...v, user: null }));
			return;
		}

		const user = await getUserById(userId);
		if (!user) {
			session.update((v) => ({ ...v, user: null }));
			return;
		}

		session.update((v) => ({ ...v, user }));
	}
</script>

<BasicLayout>
	<slot />
</BasicLayout>
