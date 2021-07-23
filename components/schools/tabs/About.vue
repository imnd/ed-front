<template>
  <div v-html="school.description"/>
</template>

<script>
export default {
  name: 'About',
  props: {
    school: {
      type: Object,
    },
  },
}
</script>
