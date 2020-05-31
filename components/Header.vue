<template>
  <b-navbar transparent class="container">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://ayyopain.com/wp-content/uploads/2017/10/logo.png"
          alt="AyyoPain"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item :to="{path: '/'}" tag="router-link">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item tag="router-link"  v-for="item in categories" :key="item.id" :to="slugToUrl(item.slug)">
          {{item.name}}
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  props: ['categories'],
  methods: {
    slugToUrl(slug) {
      return `/category/${slug}`
    }
  }
}
</script>
