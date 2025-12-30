<script setup>
const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? (storyName = slug.join('/')) : 'home',
  { version: 'draft' }
);
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>
