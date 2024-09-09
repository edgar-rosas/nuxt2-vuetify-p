<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-btn icon color="green" @click="fetchPosts">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
      <CreatePostDialog />
      <v-simple-table dark>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'PostsPage',
  computed: { ...mapState('posts', ['posts']) },
  methods: {
    ...mapActions('posts', ['fetchPosts']),
  },
}
</script>
