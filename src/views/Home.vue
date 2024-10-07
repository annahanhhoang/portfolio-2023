<template>
  <div>
    <v-app-bar
      v-if="mdAndDown"
      position="fixed"
      class="no-print"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <social-link
        class="mr-4"
        :xl="true"
      ></social-link>
    </v-app-bar>

    <!--
      **
      **   SIDE MENU
      **
      -->
    <v-navigation-drawer
      v-model="drawer"
      class="app-side-menu"
    >
      <v-list>
        <v-list-item class="text-center">
          <v-img
            class="mt-4 mx-auto"
            src="@/assets/logo.svg"
            width="192"
            height="192"
          />

          <p class="text-h4">Anna Hoang</p>

          <p class="menu-position">Front-End Developer</p>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list
        nav
        :lines="false"
      >
        <v-list-item
          v-for="(item, index) in menu"
          :key="item.title"
          :target="item.target"
          :to="item.to"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title>
            {{ item.title }}
            <Resume v-if="index === menu.length - 1" />
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <social-link
          v-if="mdAndUp"
          class="mb-6"
        ></social-link>
      </template>
    </v-navigation-drawer>

    <!--
        **
        **   MAIN CONTENT
        **
    -->
    <v-container class="home-page">
      <about
        id="about-section"
        class="my-4"
      />
      <experience
        id="experience-section"
        class="mb-4"
      />
      <skill
        id="skill-section"
        class="mb-4"
      />
      <projects
        id="projects-section"
        class="mb-4"
      />
    </v-container>

    <!--
        **
        **   FOOTER
        **
    -->

    <v-footer
      app
      height="auto"
      class="justify-center align-center no-print"
    >
      <v-card
        class="flex"
        flat
        rounded="0"
      >
        <v-card-actions class="justify-center">
          <p>&copy;{{ currentYear }} - <strong>Anna Hoang</strong></p>
        </v-card-actions>
      </v-card>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

import about from '@/views/About.vue';
import experience from '@/views/Experience.vue';
import skill from '@/views/Skills.vue';
import projects from '@/views/Projects.vue';

import Resume from '@/components/ResumeDownload.vue';
import SocialLink from '@/components/SocialLink.vue';

const route = useRoute();

const drawer = ref(true);
const menu = [
  { title: 'Home', icon: 'mdi-home', to: '/home' },
  {
    title: 'About Me',
    icon: 'mdi-account',
    to: '/home#about-section',
    target: '_self',
  },
  {
    title: 'Experience',
    icon: 'mdi-briefcase',
    to: '/home#experience-section',
    target: '_self',
  },
  {
    title: 'Skills and Educations',
    icon: 'mdi-school',
    to: '/home#skill-section',
    target: '_self',
  },
  {
    title: 'My Projects',
    icon: 'mdi-lightbulb-on',
    to: '/home#projects-section',
    target: '_self',
  },
  {
    title: 'Resume',
    icon: 'mdi-file',
    to: '',
    target: '_blank',
  },
];
const currentYear = new Date().getFullYear();

const { mdAndDown, mdAndUp } = useDisplay();
</script>

<style lang="scss">
.v-list-item--active > .v-list-item__overlay {
  opacity: 0 !important;
}
</style>
