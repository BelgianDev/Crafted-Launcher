<script setup lang="ts">
import { NConfigProvider, darkTheme, NNotificationProvider, NLayout, NLayoutSider, NModalProvider, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {h, ref} from "vue";
import {Icon} from "@iconify/vue";
import Home from "./menu/Home.vue";
import Browse from "./menu/Browse.vue";
import Library from "./menu/Library.vue";
import TopBar from "./component/TopBar.vue";

const sideMenuCollapsed = ref<boolean>(false)
const selectedMenu = ref<string>("browse");

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

const menuContents = {
  home: Home,
  browse: Browse,
  library: Library
}

function handleMenuSelection(key: string) {
  selectedMenu.value = key;
}
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-notification-provider>
      <n-modal-provider>
        <TopBar/>
        <n-layout has-sider style="height: calc(100vh - 64px);">
          <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="sideMenuCollapsed"
                          show-trigger @collapse="sideMenuCollapsed = true" @expand="sideMenuCollapsed = false">
            <n-menu :collapsed="sideMenuCollapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
                    @update:value="handleMenuSelection">

            </n-menu>
          </n-layout-sider>
          <n-layout>
            <component :is="menuContents[selectedMenu]" :key="selectedMenu"/>
          </n-layout>
        </n-layout>
      </n-modal-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<style>

</style>
