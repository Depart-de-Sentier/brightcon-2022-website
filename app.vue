<template>
  <div>
    <Head>
      <Title> Brightcon 2022</Title>
      <Link rel='icon' type='image/x-icon' href='/images/favicon-32x32.png'></Link>
    </Head>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  --color-primary: rgb(104,187, 179);
  /* --color-primary: #3f7565; */
  --color-dark: #2B2B2B;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import 'chota'
export default defineComponent({})
</script>