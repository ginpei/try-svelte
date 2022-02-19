<script lang="ts">
	import { page } from '$app/stores';
	import Container from '$lib/utils/Container.svelte';
	import logo from './svelte-logo.svg';
</script>

<header class="BasicHeader">
	<Container>
		<div class="contents">
			<a href="/">
				<img class="titleLogo" src={logo} alt="Try Svelte" />
			</a>
			<nav class="linkList">
				<a
					class:active={$page.url.pathname === '/'}
					href="/"
					sveltekit:prefetch
				>
					Home
				</a>
				<a
					class:active={$page.url.pathname === '/about'}
					href="/about"
					sveltekit:prefetch
				>
					About
				</a>
				<a
					class:active={$page.url.pathname === '/todos'}
					href="/todos"
					sveltekit:prefetch
				>
					Todos
				</a>
			</nav>
			<div class="userTools">
				<a href="/login">Login</a>
			</div>
		</div>
	</Container>
</header>

<style>
	.BasicHeader {
		background-color: black;
		color: white;
		display: grid;
		height: 2rem;
		line-height: 2rem;
	}

	.BasicHeader a {
		color: inherit;
		text-decoration: none;
	}

	.BasicHeader a:hover {
		text-decoration: underline;
	}

	.contents {
		align-items: stretch;
		display: grid;
		gap: 1rem;
		grid-template-columns: max-content auto max-content;
		height: 2rem;
	}

	.titleLogo {
		height: 2rem;
		vertical-align: bottom;
		width: 4rem;
	}

	.linkList {
		display: flex;
		gap: 1rem;
	}
</style>
