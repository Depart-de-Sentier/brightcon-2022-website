<template>
  <div class="overlay-container">
    <Transition name="fade">
      <div v-if="value" class="overlay">
        <div class="bg-white">
          <!-- <div class="is-right" @click="toggleMenu">
                    <close-icon />
                </div> -->

          <div class="container">
            <div class="row">
              <div v-for="(g, index) in routesGroup" :key="index" class="col">
                <div>
                  <b> {{ g.name }}: </b>
                  <br />
                  <div v-for="(r, rindex) in g.routes" :key="rindex">
                    <template v-if="r.external">
                      -
                      <a :href="r.url" @click.native="toggleMenu">
                        {{ r.label }}
                      </a>
                    </template>
                    <template v-else>
                      -
                      <nuxt-link :to="r.url" @click.native="toggleMenu">
                        {{ r.label }}
                      </nuxt-link>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dark-zone" @click="toggleMenu"></div>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import routes, { RouteGroup } from '../routes'

interface DataInterface {
  routesGroup: RouteGroup[]
}

export default Vue.extend({
  model: {
    prop: 'value',
    event: 'update',
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data(): DataInterface {
    return {
      routesGroup: routes,
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('update', !this.$props.value)
    },
  },
})
</script>

<style>
.dark-zone {
  height: 100%;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.overlay-container {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
}

.bg-white {
  background-color: white;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 3;
}
</style>
