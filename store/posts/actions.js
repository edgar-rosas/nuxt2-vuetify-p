import { ADD_POST_MUTATION, SET_POSTS_MUTATION } from './mutations'

export default {
  async fetchPosts({ commit }) {
    const posts = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    commit(SET_POSTS_MUTATION, posts)
    return posts
  },
  async createPost({ commit }, post) {
    const newPost = await this.$axios.$post(
      'https://jsonplaceholder.typicode.com/posts',
      post,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
    commit(ADD_POST_MUTATION, newPost)
    return post
  },
}
