<template>
  <div class="background">
    <div class="container">
      <h1 class="text-center">{{ sponsorsTitle }}</h1>

      <div v-if="palladiumSponsors.length > 0 && palladiumSponsorsEnabled">
        <h2>Palladium</h2>
        <div
          class="row is-vertical-align is-horizontal-align bg-white with-padding"
        >
          <div
            v-for="(s, index) in palladiumSponsors"
            :key="index"
            class="col-4-md card-container"
          >
            <a :href="s.url" target="_blank">
              <nuxt-img format="webp" :src="s.imageSrc" :alt="s.imageAlt" />
            </a>
          </div>
        </div>
      </div>

      <div v-if="goldSponsors.length > 0 && goldSponsorsEnabled">
        <h2>Gold</h2>
        <div
          class="row is-vertical-align is-horizontal-align bg-white with-padding"
        >
          <div
            v-for="(s, index) in goldSponsors"
            :key="index"
            class="col-3-md card-container"
          >
            <a :href="s.url" target="_blank">
              <nuxt-img format="webp" :src="s.imageSrc" :alt="s.imageAlt" />
            </a>
          </div>
        </div>
      </div>

      <div v-if="nickelSponsors.length > 0 && nickelSponsorsEnabled">
        <h2>Nickel</h2>
        <div
          class="row is-vertical-align is-horizontal-align bg-white with-padding"
        >
          <div
            v-for="(s, index) in nickelSponsors"
            :key="index"
            class="col-2-md card-container"
          >
            <a :href="s.url" target="_blank">
              <nuxt-img format="webp" :src="s.imageSrc" :alt="s.imageAlt" />
            </a>
          </div>
        </div>
      </div>
      <div>
        JetBrains sponsors the conference with a free license of their products.
        <img
          src="/images/sponsors/jb_beam.svg"
          alt="JetBrains Logo (Main) logo."
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    palladiumSponsorsEnabled: { required: false, default: true, type: Boolean },
    goldSponsorsEnabled: { required: false, default: true, type: Boolean },
    nickelSponsorsEnabled: { required: false, default: true, type: Boolean },
    sponsorsTitle: {
      required: false,
      default: 'Thanks to our Sponsors!',
      type: String,
    },
  },
  data() {
    return {
      palladiumSponsors: [
        {
          url: 'https://www.rte-france.com/',
          imageSrc: '/images/sponsors/Logo_RTE+signCompactD_4c.jpg',
          imageAlt: "Logo Réseau de Transport d'Electricité (RTE)",
        },
        {
          url: 'https://www.circulartree.com/',
          imageSrc:
            '/images/sponsors/thumbnail_CircularTree Vertical-Vector-White square-40w.png',
          imageAlt: 'Logo CircularTree',
        },
        {
          url: 'https://www.sanofi.fr/',
          imageSrc: '/images/sponsors/sanofi_logo.png',
          imageAlt: 'Logo Sanofi',
        },
        {
          url: 'https://www.ecoinvent.org/',
          imageSrc: '/images/sponsors/ecoinvent Logo no tagline - spaced.png',
          imageAlt: 'Logo ecoinvent',
        },
      ],
      goldSponsors: [],
      nickelSponsors: [
        {
          url: 'https://www.cauldron.ch/',
          imageSrc: '/images/sponsors/Cauldron logo cropped.jpg',
          imageAlt: 'Logo Cauldron',
        },
      ],
    }
  },
})
</script>
<style scoped>
.background {
  background-color: #ebf8f6;
  padding: 2em;
}
.with-padding {
  padding: 1em;
}
.row {
  justify-content: space-around;
}
</style>
