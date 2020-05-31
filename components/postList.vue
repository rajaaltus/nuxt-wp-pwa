<template>
  <div>
    <div v-for="(item,index) in posts" :key="index" class="post">
        <h3><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h3>
        <div v-html="item.excerpt"></div>
        <strong class="more"><nuxt-link :to="slugToUrl(item.slug)">read more</nuxt-link></strong>
    </div>
  </div>
</template>

<script>

export default {
  props: ['posts', 'title'],
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    }
  }
}
</script>

