<script setup lang="ts">
import {
  type MenuOption,
  NAvatar,
  NCard,
  NDropdown,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NMenu,
  NPageHeader
} from "naive-ui";
import {h, ref} from "vue";
import {Icon} from "@iconify/vue";
import Home from "./Home.vue";
import Browse from "./Browse.vue";
import Library from "./Library.vue";

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


</script>

<template>
  <n-layout has-sider style="height: 600px; max-width: 800px">
    <n-page-header>
      <template #title>
        Settings
      </template>
    </n-page-header>
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
</template>

<script scoped>

</script>
