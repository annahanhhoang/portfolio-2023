<template>
  <v-container class="home-page">
    <about id="about-section" class="my-4" />
    <experience id="experience-section" class="mb-4" />
    <skill id="skill-section" class="mb-4" />
    <projects id="projects-section" class="mb-4" />
  </v-container>
</template>

<script lang="ts">
import about from '@/views/About.vue';
import experience from '@/views/Experience.vue';
import skill from '@/views/Skills.vue';
import projects from '@/views/Projects.vue';

export default {
  components: {
    about,
    experience,
    skill,
    projects,
  },
};
</script>
