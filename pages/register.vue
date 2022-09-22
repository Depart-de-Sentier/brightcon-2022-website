<template>
  <div>
    <div class="container">
      <h1 class="title">Registration</h1>

      <div class="card bg-light is-center bd-success">
        <div class="row">
          <div class="col is-center">
            <h2>We're sold out this year !</h2>
          </div>
          <div class="col">
            <img src="/images/undraw_working_late_re_0c3y.svg" />
          </div>
        </div>
      </div>
      <br />
      <details>
        <p>
          Brightcon 2022 ha<i>d</i> 2 registration fees. One to attend the
          Classes + Conference, and one to attend the Conference only.
        </p>
        <p>
          <b
            >All registrations include<i>d</i> the participation to the
            Conference and the Hackathon.</b
          >
        </p>
        <p>
          Please take a look at the
          <nuxt-link to="/programme">Programme</nuxt-link> for more details on
          the Classes and Hackathon.
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
        <h3><span class="strike">Conference only</span> Sold out!</h3>
        <table>
          <tr>
            <th>Dates</th>
            <th>Price</th>
          </tr>
          <tr>
            <td><span class="strike">September 28 - September 30</span></td>
            <td><span class="strike" <span class="strike">>220€</span></td>
          </tr>
        </table>
      </details>
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
  text-decoration-color: black;
}
</style>
