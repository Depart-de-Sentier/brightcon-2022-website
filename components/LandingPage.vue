<template>
    <div class="background">
        <div class="container">
            <div class="row is-vertical-align is-horizontal-align hero">
                <div class="col">
                    <header>
                        <h1 class="header">An Open Sustainability Event</h1>
                    </header>
                    <div class="card">
                        from Sept. 26-30 in Esch-sur-Alzette, Luxembourg.
                    </div>
                    <br/>
                    <div class="row is-horizontal-align">
                        <nuxt-link to="/programme" class="button primary outline">
                            Programme
                        </nuxt-link>
                        <nuxt-link to="/register" class="button primary">
                            Register
                        </nuxt-link>
                        <!-- <nuxt-link to="/sponsor" class="button primary">
                            Become a sponsor
                        </nuxt-link> -->
                    </div>
                </div>
                <div class="col hide-xs">
                    <div class="card">
                        <p>
                            Registration will open in June. To stay updated on this annual conference, subscribe to our <a href="https://brightway.groups.io/g/brightcon"> mailing list </a>.
                        </p>
                        <p>
                            Participants will have the opportunity to become members of DdS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.background {
    display: block;
    position: relative;
}
.background:after {
    content: "";
    background: url("/images/leaf.png") center center;
    background-size: cover;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;  
}

.hero {
    height: 40vh;
}
</style>