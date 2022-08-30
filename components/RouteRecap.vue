<template>
<div class="row">
    <div
        v-for="(g, index) in routesGroup"
        :key="index"
        class="col"
    >
        <div>
            <b>{{ g.name }}:</b>
            <br>
            <div v-for="(r, rindex) in g.routes" :key="rindex">
                - <nuxt-link
                    :to="r.url"
                >
                    {{r.label}}
                </nuxt-link>

            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue'

import routes, { RouteGroup } from '../routes'

interface DataInterface{
    routesGroup: RouteGroup[]
}

export default Vue.extend({
    data(): DataInterface {
        return {
            routesGroup: routes
        };
    },
})
</script>
