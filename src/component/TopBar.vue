<script setup lang="ts">
import {NLayoutHeader, NPageHeader, NAvatar, NDropdown, NModal} from "naive-ui";
import type { DropdownOption } from "naive-ui";
import {h, ref} from "vue";
import {Icon} from "@iconify/vue";
import {useNavigationStore} from "../scripts/NavigationStore.ts";

const navStore = useNavigationStore();
const accountOptions: DropdownOption[] = [
  {
    label: "Settings",
    key: "settings",
    icon: () => h(Icon, { icon: "mdi:settings" }),
  },
  {
    label: "Switch Account",
    key: "switch",
    icon: () => h(Icon, { icon: "mdi:swap-horizontal" }),
    children: [
      {
        label: "Sgod06",
        key: "sgod06",
        icon: () => h(NAvatar, { src: "https://mineskin.eu/helm/Sgod06", round: true, size: "small" }),
      },
      {
        label: "Artex54",
        key: "artex54",
        icon: () => h(NAvatar, { src: "https://mineskin.eu/helm/Artex54", round: true, size: "small" }),
      }
    ]
  },
  {
    label: "Log Out",
    key: "logout",
    icon: () => h(Icon, { icon: "mdi:logout" }),
  }
];

function handleMenuClick(key: string) {
  if (key === "settings") {
    navStore.setActiveScreen("settings");
    return;
  }
}
</script>

<template>
  <n-layout-header style="height: 64px; padding: 12px 24px" bordered>
    <n-page-header>
      <template #title>
        Crafted Launcher
      </template>
      <template #extra>
        <n-dropdown trigger="click" size="large" :options="accountOptions" @select="handleMenuClick">
          <n-avatar round size="large" src="https://mineskin.eu/helm/RaftDev"/>
        </n-dropdown>
      </template>
    </n-page-header>
  </n-layout-header>

  <n-modal v-model:show="displaySettings" transform-origin="center">
    <Settings/>
  </n-modal>
</template>

<style scoped>

</style>
