<template>
  <v-app>
    <v-app-bar v-if="mdAndDown" position="fixed" class="no-print">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <social-link class="mr-4" :xl="true"></social-link>
    </v-app-bar>

    <!--
    **
    **   SIDE MENU
    **
    -->
    <v-navigation-drawer v-model="drawer" class="app-side-menu">
      <v-list>
        <v-list-item class="text-center">
          <v-img class="mt-4" src="@/assets/logo.jpg" width="100%" />

          <p class="text-h4">Anna Hoang</p>

          <p class="menu-position">Full-stack Developer</p>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list nav :lines="false">
        <v-list-item v-for="item in menu" :key="item.title" :target="item.target" :to="item.to">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <social-link v-if="mdAndUp" class="mb-6"></social-link>
      </template>
    </v-navigation-drawer>

    <!--
        **
        **   MAIN CONTENT
        **
    -->
    <v-main>
      <router-view />
    </v-main>

    <v-footer
      v-if="route.name !== 'resume'"
      app
      height="auto"
      class="justify-center align-center no-print"
    >
      <v-card class="flex" flat rounded="0">
        <v-card-actions class="justify-center">
          <p>&copy;{{ currentYear }} - <strong>Anna Hoang</strong></p>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

import SocialLink from '@/components/SocialLink.vue';

export default defineComponent({
  components: {
    SocialLink,
  },
  setup() {
    const route = useRoute();

    const drawer = ref(false);
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
        to: '/resume',
        target: '_blank',
      },
    ];
    const currentYear = new Date().getFullYear();

    const { mdAndDown, mdAndUp } = useDisplay();

    watch(
      route,
      () => {
        toggleScroll();
        toggleDrawer();
      },
      { deep: true, immediate: true }
    );

    function toggleDrawer() {
      drawer.value = route.name !== 'landing' && route.name !== 'resume';
    }

    // disable scrolling for landing page
    function toggleScroll() {
      const scroll = route.name !== 'landing';

      if (!scroll) {
        document.body.className = 'no-scroll';
        document.documentElement.className = 'no-scroll';
      } else {
        document.documentElement.classList.remove('no-scroll');
      }
    }

    return {
      drawer,
      menu,
      currentYear,
      route,
      mdAndDown,
      mdAndUp,
      toggleScroll,
      toggleDrawer,
    };
  },
});
</script>

<style lang="scss">
a {
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));

  .v-icon {
    color: rgba(0, 0, 0, 0.54);
  }
}

.no-scroll {
  overflow: hidden;
}

//hide elements when print
@media print {
  .no-print,
  .no-print * {
    display: none !important;
  }
}

.v-list-item--active > .v-list-item__overlay {
  opacity: 0 !important;
}
</style>
