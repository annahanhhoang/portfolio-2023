<template>
  <v-row
    justify="space-around"
    class="skill-page"
  >
    <v-col cols="12">
      <h2 class="text-h4 text-primary mb-4">What I know</h2>
    </v-col>

    <!--
            BEGIN MY EDUCATION SECTION
    -->
    <v-col
      cols="12"
      md="6"
      xl="4"
      offset-xl="1"
      class="edu-content py-0"
    >
      <h2>My education</h2>
      <v-alert
        v-for="item in edu"
        :key="item.school"
        border="start"
        border-color="primary"
        class="mb-4 mb-md-12"
      >
        <p>{{ item.school }}</p>
        <p class="edu-item-degree text-h6 text-right">{{ item.degree }}</p>
        <p class="text-right">{{ item.time }}</p>
      </v-alert>
    </v-col>

    <!--
            BEGIN MY SKILLS SECTION
    -->
    <v-col
      cols="12"
      md="6"
      xl="6"
      offset-xl="1"
      class="py-0"
    >
      <h2>My skills</h2>
      <div
        class="mb-4"
        v-for="item in skills"
        :key="item.category"
      >
        <p class="skills-title text-primary text-uppercase font-weight-medium">
          {{ item.category }}
        </p>
        <v-chip
          v-for="(skill, i) in item.skillList"
          :key="`skill${i}`"
          class="mr-2 mt-2"
          >{{ skill }}</v-chip
        >
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const edu = [
  {
    school: 'UNIVERSITY OF TEXAS AT DALLAS',
    degree: 'Bachelor of Science in Software Engineering',
    time: '2012 - 2014',
  },
  {
    school: 'Richland College',
    degree: 'Associate of Science in Software Engineering',
    time: '2010 - 2012',
  },
  { school: 'NIIT', degree: 'Software Engineering', time: '2006 - 2009' },
];

const skills = [
  {
    category: 'language',
    skillList: [
      'HTML 5',
      'CSS 3',
      'SASS',
      'JavaScript',
      'NodeJS(Express)',
      'Java',
      '.NET',
      'batch and shell programming',
    ],
  },
  {
    category: 'Framework',
    skillList: ['Vue.js', 'Nuxt', 'Vuetify', 'Bootstrap', 'Spring MVC'],
  },
  {
    category: 'Database',
    skillList: ['MySQL', 'Microsoft SQL Server', 'Oracle'],
  },
  {
    category: 'Source control',
    skillList: ['GitHub', 'GitLab'],
  },
  {
    category: 'SOFTWARE DEVELOPMENT METHODOLOGY',
    skillList: ['Agile (Scrum, Kanban)', 'Waterfall', 'V - Model'],
  },
];
</script>
