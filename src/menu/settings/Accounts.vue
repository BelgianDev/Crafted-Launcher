<script setup lang="ts">
import {NButton, NScrollbar, NLayout, NCard, NSpace, NP} from 'naive-ui'
import AccountCard from "../../component/settings/AccountCard.vue";
import {Account} from "../../scripts/entity/Account.ts";
import {Icon} from "@iconify/vue";

const activeAccount: Account = {
  username: "RaftDev",
  uuid: "37fed4eb-a213-44f8-9fa7-5f7e92e37770",
  active: true,
  source: {
    name: "Microsoft",
    icon: "/microsoft.ico"
  }
}
const inactiveAccount: Account = {
  username: "Sgod06",
  uuid: "3dbf8e00-cee1-4e04-aad0-b8a9957bea06",
  active: false,
  source: {
    name: "Microsoft",
    icon: "/microsoft.ico"
  }
}

</script>

<template>
  <n-scrollbar>
    <n-layout embedded content-style="padding: 24px;">
      <n-card>
        <n-space justify="space-between">
          <n-p/>
          <n-button>
            <template #icon>
              <Icon icon="mdi:add"/>
            </template>
            Add Account
          </n-button>
        </n-space>
      </n-card>
    </n-layout>
    <AccountCard :account="activeAccount"/>
    <AccountCard v-for="n in 19" :account="inactiveAccount"/>
  </n-scrollbar>
</template>

<style scoped>

</style>