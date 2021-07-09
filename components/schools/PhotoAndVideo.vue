<template>
  <div v-html="school.school_meta.videos || ''"/>
</template>

<script>
export default {
  name: 'PhotoAndVideo',
  props: {
    school: {
      type: Object,
    },
  },
};
</script>
