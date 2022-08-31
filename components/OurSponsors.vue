<template>
<div class="background">
    <div class="container">
    <h1 class=" text-center">Thanks to our sponsors!</h1>

    <div v-if="palladiumSponsors.length > 0">
        <h2>Palladium</h2>
        <div class="row is-vertical-align is-horizontal-align bg-white with-padding">
            <div
                v-for="s, index in palladiumSponsors"
                :key="index"
                class="col-4-md card-container"
            >
                <a :href="s.url" target="_blank">
                    <nuxt-img
                        format="webp"
                        :src="s.imageSrc"
                        :alt="s.imageAlt"
                    />
                </a>
            </div>
        </div>
    </div>

    <div v-if="goldSponsors.length > 0">
        <h2>Gold</h2>
        <div class="row is-vertical-align is-horizontal-align bg-white with-padding">
            <div
                v-for="s, index in goldSponsors"
                :key="index"
                class="col-3-md card-container"
            >
                <a :href="s.url" target="_blank">
                    <nuxt-img
                        format="webp"
                        :src="s.imageSrc"
                        :alt="s.imageAlt"
                    />
                </a>
            </div>
        </div>
    </div>

    <div v-if="nickelSponsors.length > 0">
        <h2>Nickel</h2>
        <div class="row is-vertical-align is-horizontal-align bg-white with-padding">
            <div
                v-for="s, index in nickelSponsors"
                :key="index"
                class="col-2-md card-container"
            >
                <a :href="s.url" target="_blank">
                    <nuxt-img
                        format="webp"
                        :src="s.imageSrc"
                        :alt="s.imageAlt"
                    />
                </a>
            </div>
        </div>
    </div>


  </div>
</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            palladiumSponsors:[
                {
                    url: 'https://www.rte-france.com/',
                    imageSrc: "/images/sponsors/Logo_RTE+signCompactD_4c.jpg",
                    imageAlt: "Logo Réseau de Transport d'Electricité (RTE)"
                },
                {
                    url: 'https://www.circulartree.com/',
                    imageSrc: "/images/sponsors/thumbnail_CircularTree Vertical-Vector-White square-40w.png",
                    imageAlt: "Logo CircularTree"
                },
                {
                    url: 'https://www.sanofi.fr/',
                    imageSrc: "/images/sponsors/sanofi_logo.png",
                    imageAlt: "Logo Sanofi"
                },
                {
                    url: 'https://www.ecoinvent.org/',
                    imageSrc: "/images/sponsors/ecoinvent Logo no tagline - spaced.png",
                    imageAlt: "Logo ecoinvent"
                },

            ],
            goldSponsors: [
            ],
            nickelSponsors: [
                {
                    url: 'https://www.cauldron.ch/',
                    imageSrc: "/images/sponsors/Cauldron logo cropped.jpg",
                    imageAlt:"Logo Cauldron"
                }
            ]
        }
    }
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
