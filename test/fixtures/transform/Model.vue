<script setup>
import { ref } from 'vue'

const model = ref('')
</script>

<template>
  <CustomComponent v-model:data-test="model" />
</template>
