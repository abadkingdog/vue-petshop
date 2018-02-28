<script>
import { mapState, mapActions } from 'vuex'

import Sidebar from '@/components/Common/Sidebar'

export default {
  name: 'Home',

  components: {
    Sidebar
  },

  data: () => ({
    list: ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros']
  }),

  mounted () {
    this.getPets()
  },

  methods: {
    ...mapActions('pets', [
      'getPets'
    ])
  },

  computed: {
    ...mapState('pets', [
      'products'
    ])
  }
}
</script>

<template>
  <div class="row">
    <div class="col-8">
      <div class="card-columns">
        <div class="card" v-for="item, key in products" :key="item.id">
          <img class="card-img-top" :src="item.imageUrl" :alt="item.title">
          <div class="card-body">
            <h5 class="card-title">
            <router-link :to="{ name: 'Product', params: { id: item.id }}">
              {{item.title}}
            </router-link>
            </h5>
            <p class="card-text">{{item.description}}</p>
            <p class="card-text"><small class="text-muted">Last updated {{item.updatedAt}} ago</small></p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <sidebar :list="list" />
    </div>
  </div>
</template>
