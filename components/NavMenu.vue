<template>
<div class="overlay-container">
    <Transition name="fade">
        <div  v-if="value" class="overlay is-vertical-align">
            <div class="container bg-white">
                <div class="is-right" @click="toggleMenu">
                    <close-icon />
                </div>

                <div class="col">
                    <div
                        v-for="(g, index) in routesGroup"
                        :key="index"
                        class="col"
                    >
                        <div>
                            <nuxt-link v-if="g.url" :to="g.url"  @click.native="toggleMenu">
                                {{ g.name }}:
                            </nuxt-link>
                            <b v-else>
                                {{ g.name }}:
                            </b>
                            <br>
                            <div v-for="(r, rindex) in g.routes" :key="rindex">
                                - <nuxt-link
                                    :to="r.url"
                                    @click.native="toggleMenu"
                                >
                                    {{r.label}}
                                </nuxt-link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</div>
</template>
<script lang="ts">
import Vue from 'vue'

import routes, { RouteGroup } from '../routes'

interface DataInterface{
    routesGroup: RouteGroup[]
}

export default Vue.extend({
    model: {
        prop: "value",
        event: "update",
    },
    props: {
        value: {
            type: Boolean,
            required: true,
        }
    },
    data(): DataInterface {
        return {
            routesGroup: routes
        };
    },
    methods: {
        toggleMenu() {
            this.$emit("update", !this.$props.value);
        }
    }
})
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.overlay-container {
    position: sticky;
    top:0;
    left:0;
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