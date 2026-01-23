<template>
  <div class="card">
    <img src="https://image.tmdb.org/t/p/w300/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" />
  </div>
</template>

<style scoped>
.card {
  min-width: 160px;
  flex-shrink: 0;
  transition: transform 0.3s;
  cursor: pointer;
}

.card img {
  width: 100%;
  border-radius: 4px;
  display: block;
}

.card:hover {
  transform: scale(1.08);
  z-index: 2;
}

@media (min-width: 1024px) {
  .card {
    min-width: 220px;
  }
}
</style>