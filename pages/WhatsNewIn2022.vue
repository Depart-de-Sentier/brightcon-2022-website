<template>
  <div class="container">
    <h1>What's new in Brightcon 2022 ?</h1>

    During Brightcon 2021, participants answered a poll to indicate how
    Brightcon could be improved. You can see the different answers as a word
    cloud below.

    <img
      src="/images/menti-poll-improve.png"
      alt="word cloud things to improve brightcon 2021"
    />

    <h2>Improvements</h2>

    The continuous development of Brightcon will focus this year on
    interactivity.

    <h3>Classes for beginners and advanced users of Brightway</h3>

    One of the best places to learn about brightway2 and brightway25 is
    Brightcon, because you can directly interact with the developers. Don't miss
    this opportunity to start learning or improve your brightway skills.

    <h3>Talks with running code</h3>

    Besides the selected talks invited by the organizing comittee, talks
    selected by a reviewing committee this year will feature code that can
    actually be run by participants.

    <h3>Lightning talks</h3>

    A session with Pecha Kucha style lightning talks is part of the agenda this
    year.

    <h3>Questions and Answers session</h3>

    If you ever wanted to rant or ask a specific question, you'll have a chance
    this year in the dedicated sessions.

    <h2>Novelties</h2>

    <h3>Promoting citizen science</h3>

    <span class="strike"
      >You will have the opportunity to join the network of people doing air
      quality measurement world-wide. An open source monitoring device will be
      available for buying during the conference, and a keynote related to the
      sensoring community will give you context on how to use such devices.
    </span>
    <p>
      <br />
      <span class="text-error">
        Due to the very low demand, this part of Brightcon will not take place
        this year. You can still buy your own sensor, build it, contribute and
        maybe even present your experience during Brighcon 2023.
      </span>
    </p>
    <ul>
      <li>
        To get more information about the sensors, visit the
        <a href="https://sensor.community/en/" target="_blank"
          >Sensor Community website.</a
        >
      </li>
      <li>
        You can build your own sensor following 
        <a href="https://sensor.community/en/sensors/airrohr/" target="_blank"> the shopping list and instructions. </a> You will also find there
        links to
        <a
          href="https://nettigo.eu/products/sensor-community-kit-sds011-bme280-english-language-harness-cable-edition" target="_blank"
          >suppliers</a
        >
        that provide the full kit, ready to be "assembled".
      </li>
    </ul>

    <h3>Contest</h3>

    In Brightcon 2022 there will be an oportunity to shine with your coding,
    chart creation and problem solving skills. A few weeks ahead of the
    conference, a contest will be published in the conference website. All
    registered participants will have a chance to present their solution during
    the conference, and the best solutions will receive a prize: 800 € for the
    first place, 500 € for the second place and 200 € for the third place. The
    rules and the details of the contest will be published on the conference
    website and through the brightcon mailing list. See the details on:
    <nuxt-link to="/contest"
      >Call for contest dedicated page in the website.</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: {
    title: `What's new - Brightcon 2022`,
  },
})
</script>
<style>
.strike {
  text-decoration: line-through;
  text-decoration-color: red;
}
</style>
