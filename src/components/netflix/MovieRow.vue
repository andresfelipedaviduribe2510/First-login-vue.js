<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <section class="row">
    <div class="row-container">
      <h2>{{ title }}</h2>
      <div class="movies">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.row {
  width: 100%;
  display: flex;
  justify-content: center; 
  padding: 20px 0;
}

.row-container {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
}

.movies {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 20px 0;
}


.movies::-webkit-scrollbar {
  display: none;
}
</style>