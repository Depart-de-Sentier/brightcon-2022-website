<template>
    <nav class="nav">
        <div class="nav-left">
            <nuxt-link class="brand" href="/">
                <img src="/images/conf_logo.png" alt=""/>
                Brightcon 2022
            </nuxt-link>
        </div>
        <!-- <div class="nav-center hide-xs hide-sm hide-md">
            <span class="is-vertical-align">Open Sustainability Event</span>
        </div> -->
        <div class="nav-right">
            <nuxt-link to="/calls" active-class="active">Calls</nuxt-link>
           <!--  <nuxt-link to="/sponsors" active-class="active">Sponsors</nuxt-link> -->
            <nuxt-link to="/programme" active-class="active" class="button primary outline">Programme</nuxt-link>
            <nuxt-link to="/register" acitve-class="active" class="button primary">Register</nuxt-link>
        </div>
    </nav>
</template>