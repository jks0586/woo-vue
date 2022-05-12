<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from './components/header/Header.vue';
</script>
<template>
<b-container fluid>
  <Header />
  <RouterView />
</b-container>
</template>
