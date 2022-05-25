<template>
  <footer>
    <div>
      <div class="container">
        <hr>
        <p class="center">
          Brightcon 2022 is being jointly organized by:
        </p>
        <div class="row">
          <div class="col is-horizontal-align">
            <a href="https://www.d-d-s.ch/">
              <img
                class="logo-img"
                src="/images/dds-logo.png"
                alt="Départ de Sentier (DdS)"
              >
            </a>
          </div>
          <div class="col is-horizontal-align">
            <a href="https://www.list.lu/">
              <img
                class="logo-img"
                src="/images/LIST-logo.jpg"
                alt="Luxembourg Institute of Science and Techonology (LIST)"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark text-light">
      <div class="container">
        <div class="center">
          ©2022 <a href="https://www.d-d-s.ch/">Départ de Sentier</a>,
          <a href="https://www.list.lu">Luxembourg Institute of Science and Technology</a>
          | Contact Us | <nuxt-link to="/legal">
            Legal Info
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* footer {
    position: fixed;
    width: 100%;
    bottom: 0;
} */
.center {
  text-align: center;
}
.logo-img {
  height: 84px;
}
</style>
