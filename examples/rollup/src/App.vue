<script setup>
import { ref } from 'vue'

const test = ref('')
</script>

<template>
  <div data-test-attr data-test-attr2="a" data-test-attr3="abc" :data-test-attr4="'test'">
    test
  </div>
  <CustomComponent v-model:data-test-sus="test" data-test-attr="" :data-test.attr="''">
    testj
  </CustomComponent>
</template>
