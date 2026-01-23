<template>
  <section class="hero">
    <div class="hero-wrapper">
      <div class="content">
        <h1>¿Cómo se traduce este amor?</h1>
        <p>
          Una actriz famosa se enamora de un intérprete que maneja muchos idiomas,
          menos el del amor.
        </p>
        <div class="buttons">
          <button class="play">▶ Reproducir</button>
          <button class="info">ℹ Más información</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 80vh;
  background: linear-gradient(to top, #111 5%, transparent 95%), 
              url('https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg');
  background-size: cover;
  background-position: center; 
  display: flex;
  justify-content: center;
}

.hero-wrapper {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  display: flex;
  align-items: center;
}

.content {
  max-width: 600px;
  z-index: 1;
}

.content h1 { font-size: 3.5rem; margin-bottom: 0.5rem; }
.content p { font-size: 1.2rem; margin-bottom: 1rem; }

.buttons button {
  margin-right: 10px;
  padding: 10px 25px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.play { background: white; color: black; }
.info { background: rgba(109, 109, 110, 0.7); color: white; }
</style>