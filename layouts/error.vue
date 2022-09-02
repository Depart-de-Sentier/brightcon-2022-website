<template>
  <div class="container">
    <div v-if="error.statusCode === 404" class="">
      <div class="row is-horizontal-align is-vertical-align">
        <h1>ERROR 404: Page not found</h1>
        <div>
          <img
            src="/images/404caterpillar.jpg"
            alt="Error 404: A caterpillar eat brightway leaf"
          />
        </div>
        <div class="row is-full-width">
          <div class="col">A caterpillar eating brightway leaf.</div>
          <div class="col is-right">
            <span
              >Image by
              <a
                href="https://www.freepik.com/author/upklyak"
                target="_blank"
                rel="noopener noreferrer"
                >upklyak</a
              >,
              <a
                href="https://www.freepik.com/free-vector/cute-caterpillar-eat-plant-leaf-vector-cartoon-illustration-funny-worm-insect-larva-character-among-grass-stems-happy-little-green-maggot-with-yellow-spots-bite-leaf_25864501.htm#page=6&query=caterpillar&position=38&from_view=search"
                target="_blank"
                rel="noopener noreferrer"
                >on Freepik</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else>
        An error occured, contact Brightcon organizers.
    </div>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
