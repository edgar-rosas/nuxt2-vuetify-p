<template>
  <v-dialog v-model="dialog" width="500">
    <template #activator="{ on, attrs }">
      <v-btn icon color="indigo" v-bind="attrs" v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 lighten-2"> Create Post </v-card-title>

      <v-card-text>
        <v-form id="create-post-form" @submit.prevent="submitForm">
          <v-text-field v-model="title" label="Title"></v-text-field>

          <v-text-field v-model="body" label="Body"></v-text-field>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :loading="loading"
          :disabled="loading"
          text
          class="mr-4"
          type="submit"
          form="create-post-form"
        >
          Create
        </v-btn>
        <v-btn color="error" class="mr-4" @click="dialog = false">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    loading: false,
    title: '',
    body: '',
  }),

  methods: {
    async submitForm(e) {
      this.loading = true
      await this.createPost({
        title: this.title,
        body: this.body,
        userId: 1,
      })
      this.title = ''
      this.body = ''
      this.loading = false
      this.dialog = false
    },
    ...mapActions('posts', ['createPost']),
  },
}
</script>
