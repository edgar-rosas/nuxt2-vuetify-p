import { ADD_POST_MUTATION, SET_POSTS_MUTATION } from './mutations'

const POSTS_API = 'https://jsonplaceholder.typicode.com/posts'

export default {
  async fetchPosts({ commit }) {
    const posts = await this.$axios.$get(POSTS_API)
    commit(SET_POSTS_MUTATION, posts)
    return posts
  },
  async createPost({ commit }, post) {
    const newPost = await this.$axios.$post(POSTS_API, post, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    commit(ADD_POST_MUTATION, newPost)
    return post
  },
}
