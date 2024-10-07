<template>
  <span class="resume">
    <a
      class="mr-1 text-decoration-none"
      v-for="item in resumes"
      :key="item.id"
      :href="item.link"
      target="_blank"
    >
      <v-icon>{{ item.icon }}</v-icon>
    </a>
  </span>
</template>

<script setup lang="ts">
const resumes = [
  {
    id: 'Word',
    icon: 'mdi-file-word-box',
    link: 'https://docs.google.com/document/d/1JsnisVjwRgWtvzgQBRDtxKX_lReH8JFM/edit?usp=sharing&ouid=110887150260854891452&rtpof=true&sd=true',
  },
  {
    id: 'PDF',
    icon: 'mdi-file-pdf-box',
    link: 'https://drive.google.com/file/d/1XuERG0kdo7xOYGHgtGz2qMcvMc694lKX/view?usp=drive_link',
  },
];
</script>
