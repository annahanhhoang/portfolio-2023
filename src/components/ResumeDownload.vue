<template>
  <span class="resume">
    <a class="mr-1 text-decoration-none" v-for="item in resumes" :key="item.id" :href="item.link">
      <v-icon>{{ item.icon }}</v-icon>
    </a>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      resumes: [
        {
          id: 'Word',
          icon: 'mdi-file-word-box',
          link: 'https://docs.google.com/document/d/114SdHlAJpKpK4h1DuesrqzhL20gOjTsv/edit',
        },
        {
          id: 'PDF',
          icon: 'mdi-file-pdf-box',
          link: 'https://drive.google.com/file/d/1qO7ylOofaKYBZUC551R5mVf3qmtrQlKW/view?usp=share_link',
        },
      ],
    };
  },
});
</script>
