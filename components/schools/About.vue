<template>
  <div v-html="school.post_content"/>
</template>

<script>
export default {
  name: 'About',
  props: {
    school: {
      type: Object,
    },
  },
};
</script>
