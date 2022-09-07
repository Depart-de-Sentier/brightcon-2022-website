<template>
  <div>
    <div class="container">
      <h1 class="title">Registration</h1>
      <p>
        Brightcon 2022 has 2 registration fees. One to attend the Classes +
        Conference, and one to attend the Conference only.
      </p>
      <p>
        <b
          >All registrations include the participation to the Conference and the
          Hackathon.</b
        >
      </p>
      <div class="row col is-horizontal-align is-vertical-align">
        <a
          href="https://list.ungerboeck.com/PROD/emc00/register.aspx?aat=kJaG1Hj5rZYDQu8RUPpf6Ws4yp54y1lL98umQHo9Jqg%3d"
          class="button primary"
          >Register here</a
        >
      </div>
      <p>
        Please take a look at the
        <nuxt-link to="/programme">Programme</nuxt-link> for more details on the
        Classes and Hackathon.
      </p>

      <h2 class="subtitle">Fees</h2>
      <h3><span class="strike">Classes + Conference</span> Sold out!</h3>
      <table>
        <tr>
          <th>Dates</th>
          <th>Price</th>
        </tr>
        <tr>
          <td class="strike">September 26 - September 30</td>
          <td class="strike">400€</td>
        </tr>
      </table>
      <h3>Conference only</h3>
      <table>
        <tr>
          <th>Dates</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>September 28 - September 30</td>
          <td>220€</td>
        </tr>
      </table>
    </div>

    <our-sponsors />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: {
    title: `Register - Brightcon 2022`,
  },
})
</script>
<style>
.strike {
  text-decoration: line-through;
  text-decoration-color: red;
}
</style>
