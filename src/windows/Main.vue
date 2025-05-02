<script setup lang="ts">
import {type MenuOption, NLayout, NLayoutSider, NMenu} from "naive-ui";
import {type Component, h, ref} from "vue";
import {Icon} from "@iconify/vue";
import Home from "../menu/Home.vue";
import Browse from "../menu/Browse.vue";
import Library from "../menu/Library.vue";
import {type GenericComponentMap} from '../main.ts'

const sideMenuCollapsed = ref<boolean>(false)
const selectedMenu = ref<string>("home");

const menuOptions: MenuOption[] = [
  {
    label: "Home",
    key: "home",
    icon: () => h(Icon, { icon: "mdi:home" }),
  },
  {
    label: "Browse",
    key: "browse",
    icon: () => h(Icon, { icon: "mdi:magnify" }),
  },
  {
    label: "Library",
    key: "library",
    icon: () => h(Icon, { icon: "mdi:layers-triple" }),
  },
  {
    key: "divider",
    type: 'divider'
  }
]

const menuContents: GenericComponentMap = {
  home: Home,
  browse: Browse,
  library: Library
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
    <n-layout content-style="padding: 24px;">
      <component :is="menuContents[selectedMenu]" style="overflow: hidden; max-height: 100%"/>
    </n-layout>
  </n-layout>
</template>

<style scoped>

</style>