<template>
  <div class="main-container">
    <Nav />
    <main>
      <slot></slot>
    </main>
    <div class="spacer"></div>
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
