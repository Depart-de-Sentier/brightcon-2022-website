<template>
  <div>
    <Head>
      <Title> Brightcon 2022</Title>
      <Link
        rel="icon"
        type="image/x-icon"
        href="/images/favicon-32x32.png"
      ></Link>
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  /* BW2 */
  --color-primary: rgb(104, 187, 179);
  /* DDS */
  /*  --color-primary: #3C5343 ; */
  /* --color-primary: #3f7565; */
  --color-dark: #2b2b2b;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import "chota";
export default defineComponent({});
</script>
