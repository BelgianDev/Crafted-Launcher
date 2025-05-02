<script setup lang="ts">
import {type MenuOption, NLayout, NLayoutSider, NMenu} from "naive-ui";
import {h, ref} from "vue";
import {Icon} from "@iconify/vue";
import {GenericComponentMap} from "../main.ts";
import {useNavigationStore} from "../scripts/NavigationStore.ts";
import Accounts from "../menu/settings/Accounts.vue";
import Game from "../menu/settings/Game.vue";

const navStore = useNavigationStore();
const sideMenuCollapsed = ref<boolean>(false)
const selectedMenu = ref<string>("accounts");

const menuOptions: MenuOption[] = [
  {
    label: "Back",
    key: "back",
    icon: () => h(Icon, { icon: "mdi:arrow-u-left-top" }),
    onClick: () => {
      navStore.setActiveScreen("main")
    }
  },
  {
    key: "divider",
    type: 'divider'
  },
  {
    label: "Accounts",
    key: "accounts",
    icon: () => h(Icon, { icon: "mdi:account" }),
  },
  {
    label: "Styling",
    key: "styling",
    icon: () => h(Icon, { icon: "mdi:pen" }),
    disabled: true
  },
  {
    label: "Game",
    key: "game",
    icon: () => h(Icon, { icon: "mdi:minecraft" }),
  },
]

const menuContents: GenericComponentMap = {
  accounts: Accounts,
  game: Game
}

function handleMenuSelection(key: string) {
  selectedMenu.value = key;
}
</script>

<template>
  <n-layout has-sider style="height: 100%">
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="sideMenuCollapsed"
                    show-trigger @collapse="sideMenuCollapsed = true" @expand="sideMenuCollapsed = false">
      <n-menu :collapsed="sideMenuCollapsed" :collapsed-width="64" :collapsed-icon-size="24" :options="menuOptions"
              @update:value="handleMenuSelection" :value="selectedMenu"/>
    </n-layout-sider>
    <n-layout>
      <component :is="menuContents[selectedMenu]"/>
    </n-layout>
  </n-layout>
</template>

<style scoped>

</style>