<template>
  <div>
    <div class="hide-md hide-lg">
      <nav class="nav">
        <div class="nav-left is-horizontal-align">
          <nuxt-link class="brand" href="/">
            <img src="/images/conf_logo.png" alt="">
            Brightcon 2022
          </nuxt-link>
        </div>
      </nav>
      <div class="text-center">
          <nuxt-link
            to="/venue"
            active-class="active"
            class="button primary outline"
          >
            Venue
          </nuxt-link>
          <nuxt-link
            to="/calls"
            active-class="active"
            class="button primary outline"
          >
            Calls
          </nuxt-link>
          <!--  <nuxt-link to="/sponsors" active-class="active">Sponsors</nuxt-link> -->
          <nuxt-link
            to="/programme"
            active-class="active"
            class="button primary outline"
          >
            Programme
          </nuxt-link>
          <nuxt-link
            to="/register"
            acitve-class="active"
            class="button primary"
          >
            Register
          </nuxt-link>
        </div>
    </div>
    <div class="hide-xs hide-sm">
      <nav class="nav">
        <div class="nav-left">
          <nuxt-link class="brand" href="/">
            <img src="/images/conf_logo.png" alt="">
            Brightcon 2022
          </nuxt-link>
        </div>
        <!-- <div class="nav-center hide-xs hide-sm hide-md">
          <span class="is-vertical-align">Open Sustainability Event</span>
            </div> -->
        <div class="nav-right">
          <nuxt-link
            to="/venue"
            active-class="active"
            class="button primary outline"
          >
            Venue
          </nuxt-link>
          <nuxt-link
            to="/calls"
            active-class="active"
            class="button primary outline"
          >
            Calls
          </nuxt-link>
          <!--  <nuxt-link to="/sponsors" active-class="active">Sponsors</nuxt-link> -->
          <nuxt-link
            to="/programme"
            active-class="active"
            class="button primary outline"
          >
            Programme
          </nuxt-link>
          <nuxt-link
            to="/register"
            acitve-class="active"
            class="button primary"
          >
            Register
          </nuxt-link>
        </div>
      </nav>
    </div>
</div>
</template>

<style>
.text-center {
  text-align: center;
}
</style>
