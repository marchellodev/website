<script lang="ts">
  import { Button } from '$lib/shadcn/components/ui/button';
  import { ArrowUpRight, Copy, ExternalLink } from '@lucide/svelte';
</script>

{#snippet heading({ text }: { text: string })}
  <p class="mt-8 mb-2">
    <span class="text-muted-foreground/50">###</span>
    {text}
  </p>
{/snippet}

{#snippet separator()}
  <p class="text-muted-foreground/50 mt-1 mb-4">---</p>
{/snippet}

{#snippet line({ text }: { text: string })}
  <p>
    <span class="text-muted-foreground/50 mr-2">*</span>
    {text}
  </p>
{/snippet}

{#snippet yamlKeyVal({ key, val, valUrl }: { key: string; val: string; valUrl?: string })}
  <p>
    <span class="text-muted-foreground">{key}:</span>
    {#if valUrl != null}
      <Button variant="link" href={valUrl} target="_blank" class="h-fit p-0 text-lg font-normal">
        <p class="flex">
          <span class="text-muted-foreground/50">[</span>
          {val}
          <span class="text-muted-foreground/50">](gen.tech)</span>
        </p>
      </Button>
    {:else}
      {val}
    {/if}
  </p>
{/snippet}

<p class="mb-2">Hi! My name is Mark.</p>

{@render line({ text: 'I am interested in economics, machine learning, design, and, above all, great software.' })}
{@render line({ text: 'I enjoy building pretty apps using Svelte and sometimes Flutter.' })}

<!-- {@render separator()} -->

{@render heading({ text: 'Quick info' })}

<div class="font-mono">
  <p class="text-muted-foreground/50">```yaml</p>
  {@render yamlKeyVal({ key: 'Age', val: '22' })}
  {@render yamlKeyVal({ key: 'Location', val: 'Kyiv, Ukraine' })}
  {@render yamlKeyVal({ key: 'Languages', val: 'English, Ukrainian' })}

  {@render yamlKeyVal({ key: 'Occupation', val: 'Genesis Tech', valUrl: 'https://gen.tech' })}

  <p class="text-muted-foreground/50">```</p>
</div>

{@render heading({ text: 'Links' })}

{#snippet ref({ url, text, isCopy }: { url: string; text: string; isCopy?: boolean })}
  <div>
    <Button
      variant={isCopy ? 'ghost' : 'link'}
      href={isCopy ? undefined : 'https://' + url}
      target={isCopy ? undefined : '_blank'}
      onclick={() => {
        console.log('a123');
      }}
      class="h-fit !p-0 text-lg font-normal">
      <p class="flex font-mono">
        <span class="text-muted-foreground/50 mr-2">[1]:</span>
        <span class="text-muted-foreground/50">&lt;</span>
        <span class="text-foreground/70">{url}</span>
        <span class="text-muted-foreground/50 mr-2">&gt;</span>

        <span class="text-muted-foreground/50">"</span>
        <span>{text}</span>
        <span class="text-muted-foreground/50">"</span>
      </p>
      {#if isCopy}
        <Copy class="text-muted-foreground/60 ml-2 size-4" />
      {:else}
        <ExternalLink class="text-muted-foreground/60 ml-2 size-4" />
      {/if}
    </Button>
  </div>
{/snippet}

{@render ref({ url: 'mark.motliuk@gmail.com', text: 'Email', isCopy: true })}
{@render ref({ url: 't.me/mmar4ik', text: 'Telegram' })}
{@render ref({ url: 'github.com/marchellodev', text: 'GitHub' })}
{@render ref({ url: 'linkedin.com/in/mark-motliuk', text: 'LinkedIn' })}

<!-- todo: -->
<!-- - flickering of: -->
<!-- ```Occupation:  -->
<!-- [ -->
<!-- Genesis Tech -->
<!-- ](gen.tech) -->
<!-- ``` -->
<!---->
<!-- - Links -->
<!-- - Links space in the underscore on hover -->
<!-- - Add a cat -->
<!-- - monospace? -->
