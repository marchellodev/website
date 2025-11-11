<script lang="ts">
  import { ArrowRight } from '@lucide/svelte';
  import {
    experienceVolunteering,
    experienceEducation,
    experienceTests,
    experienceWork,
    type Experience,
    experienceCompetitions
  } from './experience';
</script>

{#snippet experienceEntryRender(block: Experience)}
  {#if block.type == 'regular'}
    <div class="mt-2 flex w-full justify-between gap-4">
      <div>
        <h3 class="text-md">
          <span class="font-semibold">{block.name}</span>
          {#if block.nameDesc}
            <span class="font-normal">-- {block.nameDesc}</span>
          {/if}
        </h3>
        <p class="text-muted-foreground text-sm italic">{block.position}</p>
      </div>

      <p class="shrink-0 font-medium">{block.time}</p>
    </div>

    <ul class="mb-2 list-disc pl-5">
      {#each block.points as p (p)}
        <li>
          {p}
        </li>
      {/each}
    </ul>
  {/if}
  {#if block.type == 'point'}
    <div class="flex w-full justify-between gap-4">
      <ul class="list-disc pl-5">
        <li>
          {block.point}
        </li>
      </ul>

      <p class="shrink-0 font-medium">{block.time}</p>
    </div>
  {/if}
{/snippet}

{#snippet experienceBlockRender(name: string, experiences: Experience[])}
  <div class="mt-4">
    <h2 class="text-center text-base font-semibold uppercase">{name}</h2>

    {#each experiences as e, i (i)}
      {@render experienceEntryRender(e)}
    {/each}
  </div>
{/snippet}

<div class="text-sm">
  <h1 class="text-center text-base font-semibold">Mark Motliuk</h1>
  <div class="text-muted-foreground flex justify-center gap-2">
    <a href="tel:+380950773309">+380950773309</a>
    <p class="text-muted-foreground">|</p>
    <a href="https://mark.vin" target="_blank">https://mark.vin</a>
    <p class="text-muted-foreground">|</p>
    <a href="mailto:mark.motliuk@gmail.com" target="_blank">mark.motliuk@gmail.com</a>
  </div>

  {@render experienceBlockRender('Work Experience', experienceWork)}
  {@render experienceBlockRender('Education', experienceEducation)}
  <p class="mt-4 flex break-after-page justify-end">
    STANDARDIZED TESTS, COMPETITIONS, INTERNSHIPS <ArrowRight class="ml-1 size-4" />
  </p>

  {@render experienceBlockRender('Standardized tests', experienceTests)}
  {@render experienceBlockRender('Competitions', experienceCompetitions)}
  {@render experienceBlockRender('Internships / Social Projects', experienceVolunteering)}
</div>
