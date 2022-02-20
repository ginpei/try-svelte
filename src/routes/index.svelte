<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import BasicHeading from '$lib/layouts/basic/BasicHeading.svelte';
	import NiceHeading from '$lib/primaries/NiceHeading.svelte';
	import VStack from '$lib/utils/VStack.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<VStack>
	<BasicHeading>Home</BasicHeading>

	<NiceHeading level={2}>Hello World!</NiceHeading>

	<NiceHeading level={3}>Good morning!</NiceHeading>

	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptates,
		perspiciatis possimus temporibus voluptatum libero eius eligendi? Iste iusto, ea, ipsum eum
		autem dolores voluptas laboriosam possimus dolore quia aliquam!
	</p>
</VStack>
