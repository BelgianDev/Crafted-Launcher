<script setup lang="ts">
import {NH2, NP} from 'naive-ui'

interface Props {
  readonly title: string
  readonly description: string
}

const props = defineProps<Props>();

</script>

<template>
  <n-h2>{{ props.title }}</n-h2>
  <n-p>{{ props.description }}</n-p>
  <slot name="actions"/>
</template>

<style scoped>

</style>