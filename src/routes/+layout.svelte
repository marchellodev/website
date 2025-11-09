<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import { Button } from '$lib/shadcn/components/ui/button';
  import { cn } from '$lib/shadcn/utils';
  import { page } from '$app/state';
  import { Toaster } from '$lib/shadcn/components/ui/sonner';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{#snippet navButton(opts: { text: string; url: string; newTab?: boolean })}
  {@const isActive = page.url.pathname == opts.url}

  <Button
    variant="link"
    size="lg"
    href={opts.url}
    class={cn('px-4 text-lg font-medium', isActive ? 'font-semibold' : 'text-muted-foreground/90')}
    target={opts.newTab ? '_blank' : '_self'}>
    <p>
      <span class="text-muted-code">#</span>
      {opts.text}
    </p>
  </Button>
{/snippet}

<Toaster />

<div class="mx-auto max-w-5xl p-2 font-mono text-lg">
  <header class="bg-muted px-6 py-4">
    {@render navButton({ text: 'About me', url: '/' })}
    {@render navButton({ text: 'CV', url: 'https://mark.vin/cv.pdf', newTab: true })}
  </header>
  <main class="bg-muted/30 px-6 py-6">
    {@render children()}
  </main>
</div>
