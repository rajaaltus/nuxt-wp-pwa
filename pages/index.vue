<template>
  <div>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to AYYOPAIN.COM
          </h1>
          <h2 class="subtitle">
            A blog for your pains
          </h2>
        </div>
      </div>
    </section>
    <section class="container">
      <div>
        <div class="content">
          <post-list
            v-if="posts"
            :posts="posts"
            title="Recent Posts"
          ></post-list>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import api from "../api/index";
import postList from "../components/postList.vue";
import recentPosts from "../components/recentPosts.vue";
import categories from "../components/categories.vue";

export default {
  components: { postList, categories, recentPosts },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await api.getPosts();

    return {
      posts: data,
    };
  },
  head() {
    return {
      title: `Nuxt WordPress | Home`,
      meta: [
        {
          name: "description",
          content: "This is the meta description of the content.",
        },
      ],
    };
  },
  data() {
    return {
      title: "default",
    };
  },
  mounted() {
    if (this.categories.length === 0) {
      this.$store.dispatch("getCategories");
    }
  },
  computed: {
    ...mapGetters(["categories"]),
  },
};
</script>
