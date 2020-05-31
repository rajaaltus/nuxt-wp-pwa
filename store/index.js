import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

export const state = () => ({
  page: {
    author: null,
    date: null,
    date_gmt: null,
    excerpt: null,
    featured_media: null,
    guid: null,
    link: null,
    slug: null,
    title: null,
    content: null,
  },
  posts: null,
  post: {
    title: null,
    content: null,
  },
  category: {
    id: null,
    name: null,
    slug: null,
  },
  categories: [],
});
