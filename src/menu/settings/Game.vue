<script setup lang="ts">
import {NScrollbar, NInputNumber, NSpace, NP, NDivider, NSwitch} from "naive-ui";
import Setting from "../../component/settings/Setting.vue";

</script>

<template>
  <n-scrollbar content-style="padding: 24px;">
    <Setting title="Game Window Size" description="Set the game windows size.">
      <template #actions>
        <n-space>
          <div>
            <n-p>Window Width</n-p>
            <n-input-number/>
          </div>
          <div>
            <n-p>Window Height</n-p>
            <n-input-number/>
          </div>
        </n-space>
      </template>
    </Setting>
    <n-divider/>
    <Setting title="Close Launcher" description="Close the launcher when the game is started.">
      <template #actions>
        <n-space>
          <n-switch/>
          <n-p>Close Launcher</n-p>
        </n-space>
      </template>
    </Setting>
    <n-divider/>

  </n-scrollbar>
</template>

<style scoped>

</style>