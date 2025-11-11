<script lang="ts">
  import { ModeWatcher } from 'mode-watcher';
  import '../app.css';
  import { Toaster } from '$lib/shadcn/components/ui/sonner';

  let { children } = $props();
</script>

<svelte:head>
  <title>Mark's personal page</title>
</svelte:head>

<ModeWatcher />

<Toaster />

{@render children()}
