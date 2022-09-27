<template>
  <div class="row">
    <div v-for="(g, index) in routesGroup" :key="index" class="col">
      <div>
        <b>{{ g.name }}:</b>
        <br />
        <div v-for="(r, rindex) in g.routes" :key="rindex">
          <template v-if="r.external">
            -
            <a :href="r.url" target="_blank" @click.native="toggleMenu">
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
</template>
<script lang="ts">
import Vue from 'vue'

import routes, { RouteGroup } from '../routes'

interface DataInterface {
  routesGroup: RouteGroup[]
}

export default Vue.extend({
  data(): DataInterface {
    return {
      routesGroup: routes,
    }
  },
})
</script>
