<template>
  <div class="container">
    <h1>Keynote Speakers</h1>
    <div class="row is-vertical-align">
      <div
        v-for="(q, i) in knspeakers"
        :key="i"
        class="col-6 card-container"
      >
        <Quotes
          :name="q.name"
          :designation="q.designation"
          :title="q.title"
          :img-url="q.imgUrl"
          :more="q.more"
          :linked-in="q.linkedIn"
          :github="q.github"
          :is-green="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      knspeakers: [
        {
          name: 'Michael Srocka',
          designation: 'Lead Software Developer at Greendelta',
          title: `What I don't like about Brightway`,
          imgUrl: '/images/speakers/2018-08-23-Michael.jpg',
          github: 'https://github.com/msrocka',
          more:
            'Michael Srocka works with GreenDelta since more than 15 years; environmental engineer by education (TU Berlin, 2004) he also holds a degree in practical informatics from Fernuni Hagen. Michael leads the IT development in GreenDelta. He is a highly skilled senior programmer, with a special dedication to Java and databases, and has written most of the parts of the openLCA software.',
        },
      ],
    }
  },
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
