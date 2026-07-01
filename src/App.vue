<script setup lang="ts">
import { PdfAnnotator } from 'inklayer-vue'
import 'inklayer-vue/style'
</script>

<template>
  <PdfAnnotator
    url="https://inklayer.dev/inklayer-demo.pdf"
    :user="{ id: 'demo', name: 'Demo User' }"
    :layoutStyle="{ width: '100vw', height: '100vh' }"
    :defaultShowAnnotationsSidebar="true"
    @save="(annotations) => console.log('saved:', annotations)"
  />
</template>