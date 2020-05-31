<template>
  <div class="categories-menu">
    <div>
       <a href="https://github.com/srhise/nuxt-wordpress-pwa" rel="noopener">github</a>
    </div>
    <div>
       <nuxt-link to="/">home</nuxt-link>
    </div>
    <div v-for="item in categories" :key="item.id">
      <nuxt-link :to="slugToUrl(item.slug)">{{ item.name }}</nuxt-link>
    </div>
  </div>
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



