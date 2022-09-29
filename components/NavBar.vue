<template>
  <div>

    <!-- NAVBAR FOR LITTLE SCREEN -->

    <div class="hide-md hide-lg">
      <nav class="nav">
        <div class="nav-left is-horizontal-align">
         <div class="is-vertical-align menu-icon-container" @click="menuButtonCallback">
            <menu-icon></menu-icon>
          </div>
          <nuxt-link class="brand" to="/">
            <img src="/images/conf_logo.png" alt="">
            Brightcon 2022
          </nuxt-link>
        </div>
      </nav>
      <div class="is-center">
        <nuxt-link
          to="/venue"
          active-class="active"
          class="button primary outline"
        >
          Venue
        </nuxt-link>
        <nuxt-link
          to="/call-for-contest"
          active-class="active"
          class="button primary success"
        >
         Contest 
        </nuxt-link>
        <nuxt-link
          to="/calls"
          active-class="active"
          class="button primary outline"
        >
          Calls
        </nuxt-link>
        <nuxt-link
          to="/programme"
          active-class="active"
          class="button primary outline"
        >
          Programme
        </nuxt-link>
      </div>
      <br>
      <div class="is-center">
        <nuxt-link
          to="/sponsors"
          class="button clear"
          active-class="active"
        >
          Become a sponsor
        </nuxt-link>
        <nuxt-link to="/register" acitve-class="active" class="button primary">
          <span class="strike">Register</span>
        </nuxt-link>
      </div>
    </div>


    <!-- NAVBAR FOR BIG SCREEN -->


    <div class="hide-xs hide-sm">
      <nav class="nav">
        <div class="nav-left">
          <div class="is-vertical-align menu-icon-container" @click="menuButtonCallback">
            <menu-icon></menu-icon>
          </div>
          <nuxt-link class="brand" to="/">
            <img src="/images/conf_logo.png" alt="">
            Brightcon 2022
          </nuxt-link>
        </div>
        <div class="nav-right">
          <nuxt-link
            to="/sponsors"
            class="button clear"
            active-class="active"
          >
            Become a sponsor
          </nuxt-link>
          <nuxt-link
            to="/venue"
            active-class="active"
            class="button primary outline"
          >
            Venue
          </nuxt-link>
        <nuxt-link
          to="/call-for-contest"
          active-class="active"
          class="button primary success"
        >
         Contest 
        </nuxt-link>
          <nuxt-link
            to="/calls"
            active-class="active"
            class="button primary outline"
          >
            Calls
          </nuxt-link>
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
            <span class="strike">Register</span>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    menuButtonCallback: {
      type: Function,
      required: true
    }
  }
})
</script>

<style>
.menu-icon-container {
  cursor: pointer;
}
.strike {
  text-decoration: line-through;
  text-decoration-color: black;
}
</style>
