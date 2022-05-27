<template>
  <div class="main-container">
    <NavBar />
    <main>
      <slot />
    </main>
    <div class="spacer" />
    <Footer class="footer" />
  </div>
</template>
<style>
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
