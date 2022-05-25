<template>
  <div class="card bg-primary">
    <div class="userdetails">
      <div class="imgbox">
        <img :src="imgUrl" alt="">
      </div>
      <div class="detbox">
        <p class="name text-white">
          {{ name }}
        </p>
        <p class="designation text-light">
          {{ designation }}
        </p>
      </div>
    </div>
    <div class="review">
      <p>{{ reviewTitle }}</p>
      <hr v-if="reviewMore !== ''">
      <a :href="reviewMore" target="__blank" ref="noreferrer" class="text-light">
          {{ reviewMore }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    reviewTitle: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    reviewMore: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
.card {
    padding: 1rem 2rem;
    border-radius: 0.8rem;
}
.userdetails
{
    display: flex;
}
.imgbox
{
    margin-right: 1rem;
}
.imgbox img
{
    min-width: 64px;
    max-width: 64px;
    width: 64px;
    height: 64px;
    min-height: 64px;
    max-height: 64px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #cec5c5;
}
.detbox
{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.detbox p
{
    margin: 0;
}
.detbox .name
{
    /* font-size: 0.9rem; */
    margin-bottom: 0.1rem;
    font-weight: 600;
}
.detbox .designation
{
    opacity: 60%;
    /* font-size: 0.8rem; */
}

.review p
{
    /* font-size: 1.4rem; */
    color: #F3DEFF;
    line-height: 1.5;
    margin-bottom: 0.8rem;
}

</style>
