<template>
  <div class="pagination" v-if="pagesCount > 0">
    <ul>
      <li v-if="value > 1">
        <a href="#" @click.prevent="$emit('@input', value - 1)">&lt;</a>
      </li>

      <template v-if="previousPages.length > 0 && !previousPages.includes(1)">
        <li>
          <a href="#" @click.prevent="$emit('@input', 1)">1</a>
        </li>
        <li v-if="previousPages[0] > 2">
          <span>...</span>
        </li>
      </template>

      <li
        v-for="(page, index) in previousPages"
        :key="index"
      >
        <a href="#" @click.prevent="$emit('@input', page)">{{ page }}</a>
      </li>

      <li>
        <a class="active" href="#" @click.prevent>{{ this.value }}</a>
      </li>

      <li
        v-for="(page, index) in nextPages"
        :key="index"
      >
        <a href="#" @click.prevent="$emit('@input', page)">{{ page }}</a>
      </li>

      <template v-if="nextPages.length > 0 && !nextPages.includes(this.pagesCount)">
        <li v-if="(this.pagesCount - nextPages[nextPages.length - 1]) > 1">
          <span>...</span>
        </li>
        <li>
          <a href="#" @click.prevent="$emit('@input', pagesCount)">{{ pagesCount }}</a>
        </li>
      </template>

      <li v-if="value < pagesCount">
        <a href="#" @click.prevent="$emit('@input', value + 1)">&gt;</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EdvisorPagination',
  props: {
    value: {
      type: Number,
    },
    pagesCount: {
      type: Number,
    },
  },
  computed: {
    previousPages() {
      if (this.value === 1) {
        return [];
      }

      const pages = [];
      for (let i = this.value - 1; i >= 1 && i > (this.value - 3); i--) {
        pages.unshift(i);
      }

      return pages;
    },
    nextPages() {
      if (this.value === this.pagesCount) {
        return [];
      }

      const pages = [];
      for (let i = this.value + 1; i <= this.pagesCount && i < (this.value + 3); i++) {
        pages.push(i);
      }

      return pages;
    },
  },
};
</script>
