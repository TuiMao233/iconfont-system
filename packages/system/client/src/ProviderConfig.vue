<template>
  <App />
</template>

<script lang="ts" setup>
  import App from './App.vue'
  import { DefaultApolloClient } from '@vue/apollo-composable'
  import { apolloClient } from './graphql'
  import { provide } from 'vue-demi'
  provide(DefaultApolloClient, apolloClient)
</script>

<style lang="scss" scoped></style>
