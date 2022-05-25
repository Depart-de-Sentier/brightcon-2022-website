<template>
  <div class="container">
    <h2>Only in Brightcon</h2>

    <div class="row is-vertical-align">
      <div :key="i" v-for="(q, i) in quotes" class="col-4-md card-container">
        <Quotes
          :name="q.name"
          :designation="q.designation"
          :review-title="q.reviewTitle"
          :img-url="q.imgUrl"
          :review-more="q.reviewMore"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      quotes: [
        {
          name: 'Benjamin W. Portner',
          designation: 'LCA Expert at Bauhaus Luftfahrt e.V.',
          reviewTitle: 'Brightcon is the best place to meet fellow open source LCA enthusiasts and to learn about current developments in LCA software, data and methods.',
          imgUrl: '/images/participants/BenPortner.jpg'
        },
        {
          name: 'Brightcon organizers',
          designation: '',
          reviewTitle: 'The hackathon of Brightcon 2021 allowed Valentin Starlinger to write a python package that can be used to import data from openLCA into brightway.',
          reviewMore: 'https://github.com/brightway-lca/brightway-olca',
          imgUrl: '/images/BW_clear_with_background.png'
        },
      ]
    }
  }
})
</script>

<style scoped>
.card-container {
    flex-grow: 1;
}
</style>