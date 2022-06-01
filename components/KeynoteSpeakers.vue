<template>
  <div class="container">
    <h1>Keynote Speakers</h1>
    <div class="row is-horizontal-align is-vertical-align">
      <div v-for="(q, i) in knspeakers" :key="i" class="col-6 card-container">
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
          title: `Keynote: "What I don't like about Brightway"`,
          imgUrl: '/images/speakers/2018-08-23-Michael.jpg',
          github: 'https://github.com/msrocka',
          more: 'Bio: Michael Srocka works with GreenDelta since more than 15 years; environmental engineer by education (TU Berlin, 2004) he also holds a degree in practical informatics from Fernuni Hagen. Michael leads the IT development in GreenDelta. He is a highly skilled senior programmer, with a special dedication to Java and databases, and has written most of the parts of the openLCA software.',
        },
        {
          name: 'Sasha Kim',
          designation: 'PhD Student at ETH Zurich',
          title: 'Keynote: "GSA Framework"',
          imgUrl: '/images/speakers/a_kim.png',
          github: 'https://github.com/aleksandra-kim',
	  linkedIn: 'https://www.linkedin.com/in/aleksandra-kim/',
          more: 'Bio: Sasha has been pursuing her doctoral degree since March 2018 in the Technology Assessment Group under the supervision of Dr. Chris Mutel from PSI and Prof. Dr. Stefanie Hellweg from ETH Zurich. She is part of the OASES project that addresses integrated sustainability assessment of Swiss pro- duction and consumption. Her academic interests are Uncertainty and Global Sensitivity Analysis (GSA) applied to high-dimensional Life Cycle Assessment models. She is particularly keen on studying robustness and convergence properties of GSA methods, as well as their computational complexity and efficient implementation.',
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
