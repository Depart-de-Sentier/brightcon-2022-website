<template>
  <div>
    <div class="container">
      <div class="row is-vertical-align is-horizontal-align hero">
        <div class="col">
          <div class="row is-horizontal-align">
            <header>
              <h1 class="header">Open Sustainability Event</h1>
            </header>
          </div>
          <div class="row is-horizontal-align">
            <span class="text-dark tag is-large">September</span>
            <span class="text-dark tag is-large">26-30</span>
            <span class="text-dark tag is-large"
              >Esch-sur-Alzette, Luxembourg</span
            >
          </div>
          <br />
          <div class="row is-horizontal-align">
            <!-- <nuxt-link to="/venue" class="button primary outline">
              Venue
            </nuxt-link> -->
            <nuxt-link to="/calls" class="button primary outline">
              Calls
            </nuxt-link>
            <!-- <nuxt-link to="/programme" class="button primary outline">
              Programme
            </nuxt-link> -->
            <nuxt-link to="/register" class="button primary">
              <span class="strike">Register</span>
            </nuxt-link>
            <!-- <nuxt-link to="/sponsor" class="button primary">
                            Become a sponsor
                        </nuxt-link> -->
          </div>
        </div>
        <div class="col hide-xs hide-sm">
          <div class="">
            <p>
              To stay updated on this annual conference, subscribe to our
              <a href="https://brightway.groups.io/g/brightcon">
                mailing list </a
              >.
            </p>
            <p>
              Participants will have the opportunity to become members of
              <a href="https://www.d-d-s.ch">Départ de Sentier</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: block;
  position: relative;
}
.background:after {
  content: '';
  background: url('/images/leaf.png') center center;
  background-size: cover;
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.hero {
  height: 40vh;
}
.strike {
  text-decoration: line-through;
  text-decoration-color: black;
}
</style>
