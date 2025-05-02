<script setup lang="ts">
import {NAvatar, NCard, NPageHeader, NButton, NDivider, NLayout, NLayoutSider, NGrid, NGi, NLayoutHeader, NStatistic} from 'naive-ui'
import {Account} from '../../scripts/entity/Account.ts'
import {Icon} from "@iconify/vue";
import {openUrl} from "@tauri-apps/plugin-opener";

interface Props {
  readonly account: Account
}

const props = defineProps<Props>()
</script>

<template>
  <n-layout embedded content-style="padding: 10px 24px;">
    <n-card style="height: 400px">
      <n-page-header>
        <template #avatar>
          <n-avatar size="small" :src="props.account.source.icon"/>
        </template>
        <template #title>
          {{ props.account.source.name }}
        </template>
        <template #extra>
          <n-button quaternary type="success" icon-placement="right" :disabled="props.account.active">
            <template #icon>
              <Icon v-if="!props.account.active" icon="mdi:star-outline"/>
              <Icon v-else icon="mdi:star"/>
            </template>
            {{ props.account.active ? "Selected" : "Select" }}
          </n-button>
          <n-button quaternary type="tertiary" icon-placement="right" @click="openUrl('https://namemc.com/profile/' + props.account.username)">
            <template #icon>
              <Icon icon="mdi:external-link"/>
            </template>
            NameMC
          </n-button>
          <n-button quaternary type="error" icon-placement="right">
            <template #icon>
              <Icon icon="mdi:logout"/>
            </template>
            Logout
          </n-button>
        </template>
        <n-divider/>
        <n-layout has-sider style="height: 275px">
          <n-layout-sider bordered width="175px" class="skin-container" content-style="padding: 12px 24px">
            <img :src="'https://mineskin.eu/armor/body/' + props.account.username + '/120.png'" alt="player-skin">
          </n-layout-sider>
          <n-layout>
            <n-layout-header style="height: 275px">
              <div style="padding: 24px">
                <n-grid :cols="1" :y-gap="10">
                  <n-gi>
                    <n-statistic label="Username" :value="props.account.username" />
                  </n-gi>
                  <n-gi>
                    <n-statistic label="UUID" :value="props.account.uuid" />
                  </n-gi>
                </n-grid>
              </div>
            </n-layout-header>
          </n-layout>
        </n-layout>
      </n-page-header>
    </n-card>
  </n-layout>
</template>

<style scoped>

</style>