<template>
  <div class="container">
    <h1 class="title">Registration</h1>
    <p>
      Brightcon 2022 has 2 registration fees. One to attend the Classes +
      Conference, and one to attend the Conference only. All registrations
      include the participation to the Conference and the Hackathon.
    </p>
    <p>
      Please take a look at the
      <nuxt-link to="/programme">Programme</nuxt-link> for more details on the
      Classes and Hackathon.
    </p>

    <h2 class="subtitle">Fees</h2>
    <h3>Classes + Conference</h3>
    <table>
      <tr>
        <th>Dates</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>September 26 - September 30</td>
        <td>€</td>
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
        <td>€</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
    useHead({
        title: `Register - Brightcon 2022`
    })
</script>