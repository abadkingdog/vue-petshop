<script>
export default {
  name: 'Sidebar',

  props: {
    list: { type: Array, default: () => [] }
  },

  data: () => ({
    isActive: 0
  }),

  methods: {
    handleClick (currentIndex) {
      this.isActive = currentIndex
    }
  }
}
</script>
<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="item, key in list"
      :key="key"
      :class="{ active: isActive === key }"
      @click="handleClick(key)"
    >{{item}}</li>
  </ul>
</template>