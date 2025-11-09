<script lang="ts">
  import { Button } from '$lib/shadcn/components/ui/button';
  import { Copy, ExternalLink } from '@lucide/svelte';
  import copy from 'copy-text-to-clipboard';
  import { toast } from 'svelte-sonner';
</script>

{#snippet heading({ text }: { text: string })}
  <p class="mt-8 mb-2">
    <span class="text-muted-code">###</span>
    {text}
  </p>
{/snippet}

{#snippet separator()}
  <p class="text-muted-code mt-1 mb-4">---</p>
{/snippet}

{#snippet line({ text }: { text: string })}
  <p>
    <span class="text-muted-code">*</span>
    {text}
  </p>
{/snippet}

{#snippet yamlKeyVal({ key, val, valUrl }: { key: string; val: string; valUrl?: string })}
  <p>
    <span class="text-muted-foreground">{key}:</span>
    {#if valUrl != null}
      <Button variant="link" href={valUrl} target="_blank" class="h-fit p-0 text-lg font-normal">
        <span class="flex">
          <span class="text-muted-code">[</span>
          {val}
          <span class="text-muted-code">](gen.tech)</span>
          <ExternalLink class="text-muted-code ml-1.5 size-4 my-auto" />
        </span>
      </Button>
    {:else}
      {val}
    {/if}
  </p>
{/snippet}

<p class="mb-2">Hi! My name is Mark.</p>

{@render line({ text: 'I am interested in economics, machine learning, design, and great software.' })}
{@render line({ text: 'I enjoy building pretty apps using Svelte and Flutter.' })}

<!-- {@render separator()} -->

{@render heading({ text: 'Quick info' })}

<div class="font-mono">
  <p class="text-muted-code">```yaml</p>
  {@render yamlKeyVal({ key: 'Age', val: '22' })}
  {@render yamlKeyVal({ key: 'Location', val: 'Kyiv, Ukraine' })}
  {@render yamlKeyVal({ key: 'Languages', val: 'English, Ukrainian' })}

  {@render yamlKeyVal({ key: 'Occupation', val: 'Genesis Tech', valUrl: 'https://gen.tech' })}

  <p class="text-muted-code">```</p>
</div>

{@render heading({ text: 'Links' })}

{#snippet ref({ n, url, text, isCopy }: { n: number; url: string; text: string; isCopy?: boolean })}
  <div>
    <Button
      variant={isCopy ? 'ghost' : 'link'}
      href={isCopy ? undefined : 'https://' + url}
      target={isCopy ? undefined : '_blank'}
      onclick={() => {
        copy(url);
        toast.success('Copied to clipboard!');
      }}
      class="h-fit p-0! text-lg font-normal">
      <p class="flex font-mono">
        <span class="text-muted-code">[{n}]:</span>
        <span class="text-muted-code">&nbsp;&lt;</span>
        <span class="text-muted-code">{url}</span>
        <span class="text-muted-code">&gt;</span>

        <span class="text-muted-code">&nbsp;"</span>
        <span>{text}</span>
        <span class="text-muted-code">"</span>
      </p>
      {#if isCopy}
        <Copy class="text-muted-code ml-1.5 size-4" />
      {:else}
        <ExternalLink class="text-muted-code ml-1.5 size-4" />
      {/if}
    </Button>
  </div>
{/snippet}

{@render ref({ n: 1, url: 'mark.motliuk@gmail.com', text: 'Email', isCopy: true })}
{@render ref({ n: 2, url: 't.me/mmar4ik', text: 'Telegram' })}
{@render ref({ n: 3, url: 'github.com/marchellodev', text: 'GitHub' })}
{@render ref({ n: 4, url: 'linkedin.com/in/mark-motliuk', text: 'LinkedIn' })}

<!-- todo: -->
<!-- - Add a cat -->
<!-- - Dark theme -->
