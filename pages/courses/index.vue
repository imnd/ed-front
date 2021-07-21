<template>
  <div class="container middle-container">
    <CoursesList path="/courses" />
  </div>
</template>
<script>
import CoursesList from '@/components/courses/CoursesList'

export default {
  components: { CoursesList },
}
</script>
