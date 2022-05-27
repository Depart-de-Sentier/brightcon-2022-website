<template>
  <div class="container">
    <h2>Only in Brightcon</h2>

    <div class="row is-vertical-align">
      <div v-for="(q, i) in quotes" :key="i" class="col-4-md card-container">
        <Quotes
          :name="q.name"
          :designation="q.designation"
          :review-title="q.reviewTitle"
          :img-url="q.imgUrl"
          :review-more="q.reviewMore"
          :linked-in="q.linkedIn"
          :github="q.github"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      quotes: [
        {
          name: 'Benjamin W. Portner',
          designation: 'LCA Expert at Bauhaus Luftfahrt e.V.',
          reviewTitle:
            'Brightcon is the best place to meet fellow open source LCA enthusiasts and to learn about current developments in LCA software, data and methods.',
          imgUrl: '/images/participants/BenPortner.jpg',
          linkedIn: 'https://www.linkedin.com/in/benjamin-w-portner/',
          github: 'https://github.com/BenPortner'
        },
        {
          name: 'Brightcon organizers',
          designation: '',
          reviewTitle:
            'The hackathon of Brightcon 2021 allowed Valentin Starlinger to write a python package that can be used to import data from openLCA into brightway.',
          imgUrl: '/images/BW_clear_with_background.png',
          reviewMore: 'https://github.com/brightway-lca/brightway-olca'
        }
      ]
    }
  }
})
</script>

<style scoped>
.card-container {
  flex-grow: 1;
}
.linkedInIcon {
  fill: blue;
}
</style>
