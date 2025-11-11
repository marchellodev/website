<script lang="ts">
  import { Button } from '$lib/shadcn/components/ui/button';
  import { Card } from '$lib/shadcn/components/ui/card';
  import { ExternalLink } from '@lucide/svelte';
</script>

<h2 class="mb-4 font-semibold">Slides, extra materials, and contacts from my talk at AI Meetups</h2>

<p class="mt-6 mb-2 sm:mt-8">
  <span class="text-muted-code">###</span>
  Slides
</p>

<div class="mb-4">
  <Button
    variant="link"
    href="https://drive.google.com/file/d/10sGmmXrXMktEGP_Ey39rGqR_IfNTiFWI/view?usp=sharing"
    target="_blank"
    class="h-fit p-0 text-base font-normal sm:text-lg">
    <span class="flex flex-wrap items-center gap-1">
      <span class="text-muted-code">*</span>
      Link to the slides
      <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
    </span>
  </Button>
</div>

<p class="mt-6 mb-2 sm:mt-8">
  <span class="text-muted-code">###</span>
  More info on Evals
</p>

<div class="mb-4">
  <p class="mb-2">
    <Button
      variant="link"
      href="https://hamel.dev/blog/posts/evals-faq"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span class="text-muted-code">*</span>
        Evals FAQ
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
  <p>
    <Button
      variant="link"
      href="https://mastra.ai/en/reference/scorers/context-relevance"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span class="text-muted-code">*</span>
        Eval methods for RAG
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
</div>

<p class="mt-6 mb-2 sm:mt-8">
  <span class="text-muted-code">###</span>
  More info on RAG
</p>

<div class="mb-4">
  <p class="mb-2">
    <Button
      variant="link"
      href="https://jina.ai/news/late-chunking-in-long-context-embedding-models/"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span class="text-muted-code">*</span>
        Late Chunking
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
  <p>
    <Button
      variant="link"
      href="https://www.anthropic.com/engineering/contextual-retrieval"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span class="text-muted-code">*</span>
        Contextual retrieval
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
</div>

<p class="mt-6 mb-2 sm:mt-8">
  <span class="text-muted-code">###</span>
  More info on improving agent performance
</p>

<div class="mb-6">
  <p class="mb-2">
    <Button
      variant="link"
      href="https://www.anthropic.com/engineering/building-effective-agents"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span class="text-muted-code">*</span>
        On effective agents
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
  <p class="mb-2">
    <Button
      variant="link"
      href="https://www.anthropic.com/engineering/writing-tools-for-agents"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span class="text-muted-code">*</span>
        On effective tools
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
  <p class="mb-2">
    <Button
      variant="link"
      href="https://www.anthropic.com/engineering/claude-think-tool"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span class="text-muted-code">*</span>
        Claude's "think tool"
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
  <p class="mb-2">
    <Button
      variant="link"
      href="https://www.shloked.com/writing/claude-memory"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span class="text-muted-code">*</span>
        How Claude memory works
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
  <p>
    <Button
      variant="link"
      href="https://dspy.ai/learn/optimization/overview/"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span class="text-muted-code">*</span>
        DSPy prompt optimization
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
</div>

<p class="text-muted-code mt-1 mb-4">---</p>

<p class="mb-4">Would love to connect! Here are my contacts:</p>

<div class="mb-6">
  <p class="mb-2">
    <span class="text-muted-foreground">Telegram:&nbsp;</span>
    <Button
      variant="link"
      href="https://t.me/mmar4ik"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span>@mmar4ik</span>
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
  <p class="mb-2">
    <span class="text-muted-foreground">LinkedIn:&nbsp;</span>
    <Button
      variant="link"
      href="https://www.linkedin.com/in/mark-motliuk"
      target="_blank"
      class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span>mark-motliuk</span>
        <ExternalLink class="text-muted-code size-3.5 shrink-0 sm:size-4" />
      </span>
    </Button>
  </p>
  <p>
    <span class="text-muted-foreground">Email:&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <Button variant="link" href="mailto:mark.motliuk@gen.tech" class="h-fit p-0 text-base font-normal sm:text-lg">
      <span class="flex flex-wrap items-center gap-1">
        <span>mark.motliuk@gen.tech</span>
      </span>
    </Button>
  </p>
</div>

<Card class="p-4">
  <p>btw, we are always looking for great full-stack and AI engineers -- if that sounds interesting, drop me a line!</p>
</Card>
