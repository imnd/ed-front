<template>
  <div>
    <div
      v-for="media in school.media"
      :key="media.id"
    >
      <div class="wrapper-modal">
        <div v-if="media.type = 'video'">
          <a :href="media.link" class="show-popup show-video"></a>
          <iframe
            width="560"
            height="315"
            :src="media.link"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          />
        </div>
        <img v-else :src="media.link"/>
        <h5>{{ media.title }}</h5>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'PhotoAndVideo',
  props: {
    school: {
      type: Object,
    },
  },
}
</script>
