export const SET_POSTS_MUTATION = 'SET_POSTS'
export const ADD_POST_MUTATION = 'ADD_POST'

export default {
  [SET_POSTS_MUTATION](state, posts) {
    state.posts = posts
  },
  [ADD_POST_MUTATION](state, post) {
    state.posts.push(post)
  },
}
