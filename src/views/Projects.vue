<template>
  <v-row class="project-page">
    <v-col cols="12" class="py-0">
      <!--
        BEGIN WHAT I HAVE DONE
      -->
      <h2 class="text-h4 text-primary mb-4">What I have done</h2>
      <v-carousel light :show-arrows="false" :cycle="false" :height="carouselHeight">
        <v-carousel-item v-for="(item, i) in projects" :key="i">
          <v-container>
            <v-row align="stretch">
              <v-col cols="12" md="5" lg="3">
                <component
                  class="d-block text-h6 mb-1"
                  :href="item.link"
                  :is="item.link ? 'a' : 'p'"
                  target="_blank"
                  >{{ item.name }}</component
                >
                <p class="mb-6"><v-icon class="mr-1">mdi-calendar-range</v-icon> {{ item.date }}</p>

                <p class="mb-6">{{ item.desc }}</p>

                <v-img
                  v-for="(tech, i) in item.techList"
                  class="d-inline-block"
                  :alt="tech.name"
                  :key="i"
                  :src="imageURL(tech.path)"
                  height="35"
                  :width="logoWidth"
                />
              </v-col>
              <v-col cols="12" md="7" lg="9">
                <v-img :eager="true" max-height="725" max-width="100%" :src="imageURL(item.src)">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useDisplay } from 'vuetify';

export default defineComponent({
  setup() {
    const { name } = useDisplay();

    const projects = [
      {
        name: 'LTK',
        link: 'https://www.shopltk.com/',
        date: 'March 2020 - March 2023',
        desc: 'LTK is a platform that allows users to shop directly from their favorite creators on Instagram, TikTok, and other social media sites. LTK also allows creators to monetize their content by earning a commission on the products their followers purchase through the platform.',
        techList: [
          {
            name: 'Vue.js',
            path: 'logos/vue.svg',
          },
          {
            name: 'Nuxt',
            path: 'logos/nuxt.svg',
          },
          {
            name: 'Vuetify',
            path: 'logos/vuetify.svg',
          },
          {
            name: 'SASS',
            path: 'logos/sass.svg',
          },
        ],
        src: 'ltk.jpg',
      },
      {
        name: 'Talan Consultant (Desktop only)',
        link: 'https://talan.netlify.app/',
        date: 'March 2023 - March 2023',
        desc: 'The Talan Group is a boutique firm who specializes in clinical research, finance, and tech placements',
        techList: [
          {
            name: 'Vue.js',
            path: 'logos/vue.svg',
          },
          {
            name: 'Nuxt',
            path: 'logos/nuxt.svg',
          },
          {
            name: 'Vuetify',
            path: 'logos/vuetify.svg',
          },
          {
            name: 'SASS',
            path: 'logos/sass.svg',
          },
        ],
        src: 'talan.jpg',
      },
      {
        name: 'FNOC Dashboard',
        link: '',
        date: 'Oct 2018 - Nov 2018',
        desc: 'The real-time dashboard contains charts to track alarms, tickets, events, connections and devices. The charts are color-coded base on severity, i.e red is critical, orange is major, yellow is minor, green is clear. ',
        techList: [
          {
            name: 'Vue.js',
            path: 'logos/vue.svg',
          },
          {
            name: 'Vuetify',
            path: 'logos/vuetify.svg',
          },
          {
            name: 'SASS',
            path: 'logos/sass.svg',
          },
          {
            name: 'NodeJS',
            path: 'logos/node.svg',
          },
          {
            name: 'Maria DB',
            path: 'logos/mariadb.svg',
          },
          {
            name: 'nginx',
            path: 'logos/nginx.svg',
          },
        ],
        src: 'dashboard.jpg',
      },
      {
        name: 'FNOC Maintenance Tracker',
        link: '',
        date: 'Nov 2018 - Mar 2019',
        desc: "The maintenance tracker, displayed in calendar format, shows the color-coded maintenance windows. Users can view the calendar in week or month format, as well as click on the events to view the event's detail information",
        techList: [
          {
            name: 'Vue.js',
            path: 'logos/vue.svg',
          },
          {
            name: 'Vuetify',
            path: 'logos/vuetify.svg',
          },
          {
            name: 'SASS',
            path: 'logos/sass.svg',
          },
          {
            name: 'NodeJS',
            path: 'logos/node.svg',
          },
          {
            name: 'Oracle',
            path: 'logos/oracle.svg',
          },
          {
            name: 'IIS',
            path: 'logos/iis.svg',
          },
        ],
        src: 'tracker.jpg',
      },
    ];

    const imageURL = computed(() => {
      return (name: string) => {
        return name ? new URL(`/src/assets/${name}`, import.meta.url).href : null;
      };
    });

    const carouselHeight = computed(() => {
      switch (name.value) {
        case 'xl':
        case 'lg':
          return 750;
        case 'md':
          return 425;
        default:
          return 650;
      }
    });

    const logoWidth = computed(() => {
      switch (name.value) {
        case 'xl':
        case 'lg':
          return 100;
        default:
          return 75;
      }
    });

    return {
      projects,
      imageURL,
      carouselHeight,
      logoWidth,
    };
  },
});
</script>
