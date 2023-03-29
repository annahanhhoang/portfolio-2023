<template>
  <v-card
    class="resume-page mx-auto"
    elevation="24"
    rounded="0"
    :width="mdAndUp ? '8.5in' : '100%'"
  >
    <div class="resume-page-content">
      <!--
          INFO
        -->
      <section class="mb-6">
        <h1 class="text-h4">Anna Hoang</h1>
        <p class="font-weight-medium mb-1">Green card holder</p>
        <v-row no-gutters>
          <v-col cols="12" sm="7">
            <p class="d-inline-block mr-6">
              <v-icon class="mr-2" color="primary" icon="mdi-email" />
              <a href="mailto:anna.hoang.job@gmail.com"></a>anna.hoang.job@gmail.com
            </p>
          </v-col>
          <v-col cols="12" sm="5">
            <p class="d-inline-block">
              <v-icon class="mr-2" color="primary" icon="mdi-phone" />
              <a href="">1 469 831 0504</a>
            </p>
          </v-col>
          <v-col cols="12" sm="7">
            <p>
              <v-icon class="mr-2" color="primary" icon="mdi-github" />
              <a href="https://github.com/annahanhhoang">https://github.com/annahanhhoang</a>
            </p>
          </v-col>
          <v-col cols="12" sm="5">
            <p>
              <v-icon class="mr-2" color="primary" icon="mdi-web" />
              <a href="https://annahoang.dev">https://annahoang.dev</a>
            </p>
          </v-col>
          <v-col cols="12">
            <p>
              <v-icon class="mr-2" color="primary" icon="mdi-linkedin" />
              <a href="https://www.linkedin.com/in/anna-hoang-67023654/"
                >https://www.linkedin.com/in/anna-hoang-67023654/</a
              >
            </p>
          </v-col>
        </v-row>
      </section>

      <p class="mb-6">
        <!--
          SUMMARY
        -->

        Highly skilled, self-motivated, solutions-driven and detail-oriented senior front-end
        developer with 10+ years of experience in designing, developing, and implementing
        responsive, user-friendly web applications. Strong expertise in HTML, CSS, JavaScript, Vue,
        Vuetify, as well as experience with other technologies such as NodeJs, Express and database
        tools. Proven track record of delivering high-quality web applications on time and within
        budget.
      </p>

      <!--
        SKILL SECTION
      -->
      <section class="mb-6">
        <h2 class="text-body-1 text-primary text-uppercase font-weight-medium mb-2">
          <v-icon color="primary" class="mr-2">mdi-lightbulb-on</v-icon>SKILLS
        </h2>
        <ul class="ml-6">
          <li v-for="(item, i) in skills" :key="`skill${i}`">{{ item }}</li>
        </ul>
      </section>

      <!--
        EXPERIIENCE SECTION
      -->
      <section class="mb-6">
        <h2 class="text-body-1 text-primary text-uppercase font-weight-medium mb-2">
          <v-icon color="primary" class="mr-2">mdi-briefcase</v-icon>EXPERIENCES
        </h2>

        <section v-for="(item, i) in experiences" :key="`experience${i}`" class="mb-3">
          <h6 class="text-h6">{{ item.position }}</h6>
          <p>{{ item.company }} - {{ item.location }}</p>
          <p class="mb-4">{{ item.duration }}</p>
          <ul class="ml-6">
            <li v-for="(desc, idx) in item.achievement" :key="`ar${idx}`">
              {{ desc }}
            </li>
          </ul>
        </section>
      </section>

      <!--
        EDUCATION SECTION
      -->
      <section class="mb-6">
        <h2 class="text-body-1 text-primary text-uppercase font-weight-medium mb-2">
          <v-icon color="primary" class="mr-2">mdi-school</v-icon>EDUCATION
        </h2>
        <div v-for="(item, i) in edu" :key="`edu${i}`" class="mb-4">
          <p class="text-h6">{{ item.degree }}</p>
          <p>{{ item.school }}, {{ item.time }}</p>
        </div>
      </section>

      <!--
        ADDITIONAL INFO SECTION
      -->
      <section class="mb-6">
        <h2 class="text-body-1 text-primary text-uppercase font-weight-medium mb-2">
          <v-icon color="primary" class="mr-2">mdi-information</v-icon>ADDITIONAL INFORMATION
        </h2>
        <ul class="ml-6">
          <li v-for="(item, i) in additionalInfo" :key="`info${i}`">{{ item }}</li>
        </ul>
      </section>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDisplay } from 'vuetify';

export default defineComponent({
  setup() {
    const skills = [
      'Strong expertise in HTML 5, CSS 3, SASS, JavaScript, Vue.js, Vuex, Nuxt.js, NodeJS (Express)',
      'Proficient in responsive design using Vuetify and Bootstrap',
      'Proficient in various web development tools such as Git, JIRA, and Visual Studio Code',
      'Proficient in various Database tools, such as Microsoft SQL Server, MySQL, Oracle, MongoDB',
      'Familiar with CI tools such as GitLab CI and GitHub Action',
      'Strong problem-solving and communication skills',
    ];
    const experiences = [
      {
        company: 'LTK',
        location: 'Dallas, Texas',
        position: 'Senior Front-end Developer II',
        duration: 'Oct 2019 - current',
        achievement: [
          'Spearheaded the creation and maintenance of an e-commerce platform, utilizing Vue.js, TypeScript, Vuex, Nuxt, and Vuetify. Visit https://www.shopltk.com/ to see the results of this game-changing initiative.',
          'Drove a 1000% increase in daily clicks by implementing SEO tactics, including crafting compelling copy, optimizing meta tags, and strategically cross-linking pages to eliminate dead ends.',
          'Transformed the user journey by injecting strategic messaging in key areas to explain the value of key actions, leveraging benefit-focused language. Achieved remarkable results, including a 553% increase in clicks to the app store after signing up, a 70% increase in clicks to the App Store from the log out home page, a 72.8% increase in favorited posts, and a 16.3% increase in follows to creators.',
          'Slashed the logged out homepage bounce rate by an impressive 36%.',
          'Boosted user sign-ups by 70% by introducing exciting new features, such as the ability to favorite posts and products, as well as follow creators.',
          'Upped user sharing by 2.7x by migrating to the native ‘Share’ drawer functionality',
          "Elevated users' clickout rate by 30%.",
          'Mentored and coached junior developers, achieving a remarkable 3x increase in productivity and job satisfaction. By leveraging my leadership and guidance skills, I was able to inspire and motivate my team to deliver exceptional results.',
        ],
        tech: [
          'Google Map API',
          'Vue.js',
          'NodeJS (Express)',
          'REST API',
          'webpack',
          'docker',
          'nginx',
          'MySQL',
          'MS SQL Server',
          'Oracle',
        ],
      },

      {
        company: 'Fujitsu Network Communication',
        location: 'Richardson, Texas',
        position: 'Full-stack Developer II',
        duration: 'Sep 2018 - now',
        achievement: [
          'Engineered a real-time dashboard for the Network Operation Center, utilizing Node.js, Rest API, Vue.js, Chart.js, SASS, MySQL, Gitlab CI, Docker, Azure, Webpack, and NPM. The result is an intuitive, visually stunning platform that empowers teams to stay on top of important operations.',
          'Earned accolades from the senior manager for driving innovation and embracing new technologies.',
          'Boosted usability by completely overhauling and redesigning multiple trackers and monitors on the dashboard. The new design enables faster, more informed decision-making, and has received rave reviews from stakeholders across the organization',
          "Conceptualized and developed a web portal that enables customers to log into the NOC's network and access critical information such as tickets, alarms, device health, inventory, and submit service and maintenance requests. The platform leverages a suite of advanced technologies, including Google API address autocomplete, Node.js, Vue.js, Chart.js, SASS, Grafana, MySQL, and Oracle.",
          'Maximized the potential of the platform by incorporating powerful data visualization tools, such as Chart.js and Grafana, that enable users to derive actionable insights from complex data sets. ',
        ],
        tech: [
          'Google Map API',
          'Vue.js',
          'NodeJS (Express)',
          'REST API',
          'webpack',
          'docker',
          'nginx',
          'MySQL',
          'MS SQL Server',
          'Oracle',
        ],
      },
      {
        company: 'GoQuo',
        location: 'Kuala Lumpur, Malaysia',
        position: 'Front-end Developer',
        duration: 'Jul 2017 - Jul 2018 ',
        achievement: [
          'Spearheaded the redesign and development of holiday package booking engines for a diverse portfolio of clients, leveraging Vue.js, SASS, Docker, and AWS.',
          "Increase clients' online presence by overhauling their websites, resulting in a significant increase in traffic and engagement.",
          "Boosted clients' revenue streams by implementing an Internet Booking Engine utilizing Vue.js, resulting in a marked increase in bookings and driving business growth. ",
          "Drove conversion rates even higher by implementing a partial hotel stay feature on clients' websites, resulting in a 20% increase in conversion rates.",
        ],
        tech: ['Vue.js', 'Rest API', 'SASS', 'CSS3', 'webpack', 'AWS'],
      },
      {
        company: 'JPMorgan Chase',
        location: 'Dallas, Texas',
        position: 'Project Lead',
        duration: 'Jun 2013 - Nov 2016',
        achievement: [
          'Led a team of five professionals, tasked with maintaining, enhancing, and developing new features for a web reporting system. Also played an instrumental role in interviewing and training new team members, ensuring that they were fully equipped to deliver exceptional results.',
          'Optimized server performance and reduced disk space usage by an impressive 80% by creating and implementing automated jobs designed to archive and clean up old files, delivering significant cost savings and efficiency improvements.',
          'Transformed the production process by eliminating 90% of file transfer issues, replacing outdated software with state-of-the-art technology that delivered unparalleled speed, reliability, and accuracy',
          'Significantly streamlined troubleshooting processes by creating and enhancing alert processes, reducing troubleshooting time by 30% and ensuring maximum system uptime and availability',
          'Boosted performance levels by a remarkable 50% by optimizing stored procedures, leveraging different techniques to minimize latency.',
          'Redesigned the user interface using the latest HTML5 and CSS3 technologies, leveraging the power of Bootstrap to create a modern, responsive design that maximized ease of use and functionality',
          'Directed and supervised all aspects of code deployment, project planning, and peer review meetings, ensuring that all team members were aligned on objectives and working collaboratively towards common goals.',
        ],
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
    const additionalInfo = [
      'Recognized as a top-performing employee with the Employee of the Month award in July 2022, in recognition of consistently delivering exceptional results and going above and beyond in all areas of responsibility.',
      "Triumphed over 25 teams to emerge victorious in the JPMorgan Chase Technology Analyst 2015 competition, delivering a fully-tested and production-ready task manager web app designed to facilitate JPMC's go-live events.",
      'Gave back to the community by volunteering with the JPMorgan Chase Technology for Social Good program, helping non-governmental organizations to optimize their websites and enhance their online presence. ',
    ];
    const edu = [
      {
        school: 'UNIVERSITY OF TEXAS AT DALLAS',
        degree: 'Bachelor of Science in Software Engineering',
        time: '2012 - 2014',
        achievement: ['Full-ride scholarship'],
      },
      {
        school: 'Richland College',
        degree: 'Associate of Science in Software Engineering',
        time: '2010 - 2012',
        achievement: [
          'GPA: 3.89/4',
          'Phi Theta Kappa honor society member',
          "Richland College President's Honor Roll",
          'Math Association of America Calculus Bowl finalists',
        ],
      },
    ];

    const { mdAndUp } = useDisplay();

    return { skills, experiences, additionalInfo, edu, mdAndUp };
  },
});
</script>

<style lang="scss" scoped>
.resume-page {
  margin: 0.5in auto;

  @media print {
    margin: 0;
    box-shadow: none;
  }

  .resume-page-content {
    padding: 0.5in;
  }
}
</style>
