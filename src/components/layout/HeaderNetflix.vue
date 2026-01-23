<template>
  <header class="header">
    <div class="header-container">
      <h1 class="logo">NETFLIX</h1>
      <nav>
        <a>Inicio</a>
        <a>Series</a>
        <a>Películas</a>
        <a>Novedades</a>
        <a>Mi lista</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 68px;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  z-index: 100;
}

.header-container {
  width: 100%;
  max-width: 1200px; 
  padding: 0 40px;
  display: flex;
  align-items: center;
}

.logo {
  color: #e50914;
  font-weight: bold;
  margin-right: 40px;
}

nav a {
  margin-right: 20px;
  cursor: pointer;
}
</style>