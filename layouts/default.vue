<template>
  <div class="container">
    <Nuxt />
  </div>
</template>
<style>
html {
  font-family: 'Goldplay', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  transition-timing-function: ease-out;
  transition-duration: 3000ms;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

*::-webkit-scrollbar {
  width: 8px; /* Tamaño del scroll en vertical */
  height: 8px; /* Tamaño del scroll en horizontal */
}

/* Ponemos un color de fondo y redondeamos las esquinas del thumb */
*::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
*::-webkit-scrollbar-thumb:hover {
  background: #00937f;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
*::-webkit-scrollbar-thumb:active {
  background-color: #00937f;
}

/* Ponemos un color de fondo y redondeamos las esquinas del track */
*::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 4px;
}

/* Cambiamos el fondo cuando esté en active o hover */
*::-webkit-scrollbar-track:hover,
*::-webkit-scrollbar-track:active {
  background: #fff;
}

*::selection {
  background: #00937f;
  color: #fff;
}

.container {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-image: url(/img/pattern-background-desktop.svg);
  background-color: #e0e8ff;
  background-size: auto;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
