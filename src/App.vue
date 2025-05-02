<script setup lang="ts">
import { NConfigProvider, darkTheme, NNotificationProvider,NModalProvider } from 'naive-ui'
import TopBar from "./component/TopBar.vue";
import Main from "./windows/Main.vue";
import Settings from "./windows/Settings.vue"
import {GenericComponentMap} from "./main.ts";
import {useNavigationStore} from "./scripts/NavigationStore.ts";

const navStore = useNavigationStore();
const pages: GenericComponentMap = {
  main: Main,
  settings: Settings
}
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-notification-provider>
      <n-modal-provider>
        <TopBar/>
        <div style="height: calc(100vh - 64px);">
          <component :is="pages[navStore.activeScreen]"/>
        </div>
      </n-modal-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<style>
#app {
  max-width: 1920px;
}
</style>
