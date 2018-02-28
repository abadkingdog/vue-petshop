<script>
import Index from './components/Index.vue'
import Navigation from './components/Common/Navigation.vue'

export default {
  name: 'app',
  components: {
    Index,
    Navigation
  }
}
</script>

<template>
  <div id="app">
    <navigation />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

