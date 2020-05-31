<template>
  <div>
    <Header :categories="categories" />
    <nuxt/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from "@/components/Header"
export default {
  components: {
    Header
  },
  computed: {
    ...mapGetters([
      'categories'
    ])
  },
  mounted() {
    this.$store.dispatch('getCategories');
  }
}
</script>