<template>
  <HeaderNetflix />

  <main class="page">
    <HeroMovie />

    <MovieRow title="Tendencias">
      <MovieCard v-for="n in 10" :key="n" />
    </MovieRow>

    <MovieRow title="Top 10 en Colombia">
      <MovieCard v-for="n in 10" :key="n" />
    </MovieRow>
  </main>
</template>

<script setup>
import HeaderNetflix from '@/components/layout/HeaderNetflix.vue'
import HeroMovie from '@/components/netflix/HeroMovie.vue'
import MovieRow from '@/components/netflix/MovieRow.vue'
import MovieCard from '@/components/netflix/MovieCard.vue'
</script>
