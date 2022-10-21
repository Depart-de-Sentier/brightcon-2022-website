<template>
  <div class="container">
    <AwardDetails />
    <br />
    <OurSponsors
      :nickelSponsorsEnabled="false"
      :goldSponsorsEnabled="false"
      sponsorsTitle="Thanks to our Sponsors for making the awards happen."
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: {
    title: 'Awards - Brightcon 2022',
  },
})
</script>
