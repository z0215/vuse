<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <main>
    <RouterView />
    <div>
      [{{ route.meta.title }} Layout]
    </div>
  </main>
</template>
