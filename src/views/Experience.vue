<template>
  <div class="experience-page">
    <h2 class="text-h4 text-primary mb-4">Where I have been</h2>
    <v-timeline
      :class="['mx-auto', { 'w-75': lgAndUp }]"
      :density="smAndDown ? 'compact' : 'default'"
    >
      <v-timeline-item
        v-for="(item, index) in experiences"
        :key="`experience${index}`"
        dot-color="primary"
      >
        <template
          v-if="mdAndUp"
          v-slot:opposite
        >
          <span class="timeline-duration">{{ item.duration }}</span>
        </template>

        <v-card class="elevation-2">
          <v-card-title class="pb-0">{{ item.position }}</v-card-title>
          <v-card-subtitle>
            <p>{{ item.company }}</p>
          </v-card-subtitle>

          <v-card-text>
            <p>{{ item.responsibility }}</p>
            <v-chip
              v-for="(skill, i) in item.tech"
              :key="`skill${i}`"
              class="mr-2 mt-2"
            >
              {{ skill }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const experiences = [
  {
    company: 'Beacon Hills Staffing - contract for ADT',
    position: 'Senior Software Engineer',
    duration: 'Jun 2023 - Jan 2024',
    responsibility:
      'Built a web portal using Vue 3, Prime Vue, and Pinia to aid Care Agents, improving their ability to assist customers',
    tech: ['Vue.js', 'Pinia', 'PrimeVue', 'Webpack', 'SCSS', 'Vitest', 'Goggle Cloud Platform'],
  },
  {
    company: 'LTK',
    position: 'Senior Software Engineer II',
    duration: 'Oct 2019 - Apr 2023',
    responsibility:
      'Developed a responsive website for consumers to shop curated content from creators. \n ',
    tech: [
      'Vue.js',
      'Vuex',
      'Nuxt',
      'TypeScript',
      'Vuetify',
      'Webpack',
      'SCSS',
      'Jest',
      'Cypress',
      'AWS',
      'Algolia',
    ],
  },
  {
    company: 'Fujitsu Network Communication',
    position: 'Full Stack Developer II',
    duration: 'Sep 2018 - Sep 2019',
    responsibility: "Developed the Network Operation Center's real-time dashboard",
    tech: [
      'Vue.js',
      'Vuetify',
      'NodeJS (Express)',
      'REST API',
      'webpack',
      'docker',
      'nginx',
      'MySQL',
      'Oracle',
    ],
  },
  {
    company: 'GoQuo',
    position: 'Front-end Developer',
    duration: 'Jul 2017 - July 2018 ',
    responsibility: "Redesigned and created new clients' holiday packages booking sites.",
    tech: ['Vue.js', 'Rest API', 'SASS', 'CSS3', 'webpack', 'AWS'],
  },
  {
    company: 'JPMorgan Chase',
    position: 'Project Lead',
    duration: 'Jun 2013 - Nov 2016',
    responsibility:
      'Led a team of 5 on maintaining, improving and developing new features for a web reporting system',
    tech: [
      'Java, JSP',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'XML',
      'Microsoft SQL server',
    ],
  },
];

const { mdAndUp, lgAndUp, smAndDown } = useDisplay();
</script>
