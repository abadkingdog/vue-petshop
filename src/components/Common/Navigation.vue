<script>
export default {
  name: 'Navigation',

  data: () => ({
    visible: false,
    query: ''
  }),

  methods: {
    handleDropdown () {
      this.visible = !this.visible
    },

    handleSearchSubmit (e) {
      console.log('submit', this.query)
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link
            :to="{ name: 'Home'}"
            class="nav-link"
          >Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown" :class="{'show': visible}">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            @click="handleDropdown"
          >
            Dropdown
          </a>
          <div
            class="dropdown-menu"
            :class="{'show': visible}"
          >
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          v-model="query"
        >
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="button"
          @click="handleSearchSubmit"
        >Search</button>
      </form>
    </div>
  </nav>
</template>
