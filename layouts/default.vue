<template>
  <div class="main-container">
    <NavBar />
    <main>
      <Nuxt />
    </main>
    <div class="spacer" />
    <Footer class="footer" />
  </div>
</template>
<style>
:root {
  --color-error: #ffcc00;
  /* BW2 */
  /* --color-primary: rgb(104, 187, 179); */
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