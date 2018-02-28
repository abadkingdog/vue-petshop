<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Product',

  mounted () {
    const { id } = this.$route.params

    this.getPetById({ id })
  },

  methods: {
    ...mapActions('pets', [
      'getPetById'
    ])
  },

  computed: {
    ...mapState('pets', [
      'currentPet'
    ])
  }
}
</script>

<template>
  <div class="row">
    <div class="col-8">
    <div class="card">
      <img class="card-img-top" :src="currentPet.imageUrl" :alt="currentPet.title">
      <div class="card-body">
        <h5 class="card-title">{{currentPet.title}}</h5>
        <p class="card-text">{{currentPet.description}}</p>
        <p class="card-text"><small class="text-muted">Last updated {{currentPet.updatedAt}} ago</small></p>
      </div>
    </div>
  </div>
    <div class="col-4">
      Recently
    </div>
  </div>
</template>
