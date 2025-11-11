<script lang="ts">
  let { children } = $props();
</script>

<svelte:head>
  <title>Mark's CV</title>
</svelte:head>

<div class="mx-auto max-w-3xl p-8">
  {@render children()}
</div>
