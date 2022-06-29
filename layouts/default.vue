<template>
  <div class="main-container">
    <div class="leaf">
      <leaf></leaf>
    </div>
    <NavBar />
    <main>
      <Nuxt />
    </main>
    <div class="spacer" />
    <Footer class="footer" />
  </div>
</template>

<script lang="ts">
</script>
<style>
:root {
  -font-family-mono: "Roboto" sans-serif;
  --font-family-mono: "Roboto", monaco, "Consolas", "Lucida Console", monospace;
  --color-error: #ffcc00;
  --color-lightGrey: #e8eaee;
  /* BW2 */
  /* --color-primary: #45BFB0; */
  /* DDS */
  /* --color-darkGrey: #3C5343; */
}
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.footer {
  justify-content: flex-end;
}

.spacer {
  flex-grow: 1;
}
</style>
<style @scoped>
.leaf {
  /* filter: blur(2px); */
  opacity: 0.1;
  position: fixed;
  z-index: -1;

}
</style>