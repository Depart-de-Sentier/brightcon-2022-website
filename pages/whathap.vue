<template>
  <div class="container">
    <h1>What happened in Brightcon 2022 ?</h1>
    <p>
      You will find here some figures about the participants and the outcome of
      Brightcon 2022. Brightcon 2022 was a 100% in person conference. All
      registered users were on site ate least for one of the parts of the
      conference (classes, conference and hackathon).
    </p>
    <div>
      <h2>The participants</h2>
      There were in total, 78 registered participants and speakers.
      <h3>by country</h3>
      This year, almost all participants came from Europe. There was one
      participant from Nort America ( 😉 Silvana ).
      <img src="/images/participants/chart_by_country.png" />
      <h3>by role</h3>
      Brightcon 2022 counted 4 registered Speakers, 52 Standard registrations
      and 22 Student and Trainee registrations.
      <img src="/images/participants/chart_by_type.png" />
      <h3>by classes level</h3>
      Beginner classes were the most demanded by the registered participants. We
      reached the limit of the room occupancy with 30 registrations for beginner
      classes. The advanced classes had a total of 20 registered participants.
      <img src="/images/participants/chart_by_classes_level.png" />
      <h3>presence in hackathon</h3>
      Every registered participant had the right to participate in the
      hackathon. Only 37 registered participants signed up to stay for the
      hackathon.
      <img src="/images/participants/chart_hackathon_by_org.png" />
    </div>
  <AwardDetails />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: {
    title: `What happened - Brightcon 2022`,
  },
})
</script>
