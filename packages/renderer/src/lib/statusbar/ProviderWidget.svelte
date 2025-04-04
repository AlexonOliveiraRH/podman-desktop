<script lang="ts">
import { Tooltip } from '@podman-desktop/ui-svelte';
import { router } from 'tinro';

import type { ProviderInfo } from '/@api/provider-info';

import IconImage from '../appearance/IconImage.svelte';
import ProviderWidgetStatus from './ProviderWidgetStatus.svelte';
import ProviderWidgetStatusStyle from './ProviderWidgetStatusStyle.svelte';

interface Props {
  entry: ProviderInfo;
  command?: () => void;
  disableTooltip?: boolean;
  class?: string;
  tooltipTopRight?: boolean;
}

let {
  entry,
  command = (): void => router.goto('/preferences/resources'),
  disableTooltip = false,
  class: className,
  tooltipTopRight = false,
}: Props = $props();

let connections = $derived.by(() => {
  if (entry.containerConnections.length > 0) {
    return entry.containerConnections;
  } else if (entry.kubernetesConnections.length > 0) {
    return entry.kubernetesConnections;
  } else {
    return [entry];
  }
});
</script>

<Tooltip top={!tooltipTopRight} topRight={tooltipTopRight} class="mb-[20px]">
  <div slot="tip" class="py-2 px-4" hidden={disableTooltip}>
    <div class="flex flex-col">
      {#if entry.updateInfo?.version}
        <div class="flex flex-row h-fit pb-1">
          Update available
        </div>
      {/if}
      {#each connections as connection}
        <div class="flex flex-row items-center h-fit">
          <ProviderWidgetStatus status={connection.status} class="mr-1"/>
          <ProviderWidgetStatusStyle status={connection.status}/>
          : {connection.name}
        </div>
      {/each}
    </div>
  </div>
  <button
    onclick={command}
    class="px-1 py-px flex flex-row h-full items-center gap-1 min-w-fit hover:bg-[var(--pd-statusbar-hover-bg)] hover:cursor-pointer relative {className}"
    aria-label={entry.name}>
    {#if entry.containerConnections.length > 0 || entry.kubernetesConnections.length > 0 || entry.status }
      <ProviderWidgetStatus entry={entry} />
    {/if}
    {#if entry.images.icon}
      <IconImage image={entry.images.icon} class="max-h-3 grayscale" alt={entry.name}></IconImage>
    {/if}
    {#if entry.name}
      <span class="whitespace-nowrap h-fit">{entry.name}</span>
    {/if}
  </button>
</Tooltip>
