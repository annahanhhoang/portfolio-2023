<template>
  <v-row
    align="strech"
    class="about-page"
  >
    <!--
      LEFT COLUMN
    -->
    <v-col
      cols="12"
      md="7"
      xl="6"
      class="pt-0"
    >
      <!--
        WHO I AM SECTION
      -->

      <h2 class="text-h4 text-primary mb-4">Who I am</h2>

      <p class="mb-4">
        I am an Asian girl named Anna, hence the name Asianna. I'm a full time full-stack developer
        and part-time traveller (or vise versa, depend on the season or my mood).
      </p>
      <p class="mb-4">
        I have over 10 years of experience working as a web/software developer. I have worked in big
        corporates (J.P.Morgan, Fujitsu Network Communication, etc.) as well as small start-up
        environment. Professionally, I specialize in Vue.js, Nuxt, Vuetify, Node.js (Express). I can
        also do database/server management and basic graphic design.
      </p>
      <p class="mb-4">
        When I'm not sitting in front of a laptop, I specialize in hopping around. I've travelled to
        15 countries and lived in 3. So far, Myanmar has been the most interesting place I've ever
        been to.
      </p>

      <template v-if="lgAndUp">
        <h2 class="text-h4 text-primary mb-4">Interesting facts about me</h2>
        <ul class="ml-4 mb-4">
          <li>I haved moved across the globe for a job paying 1/6 of what I had made</li>
          <li>I had to learn to walk again at 29</li>
          <li>I had to learn to smile again at 32 after getting Bell's Palsy</li>
          <li>I have been on a helicopter ride and a hot air ballon ride</li>
          <li>I have got my prescription glasses back from a monkey. Bad monkey!</li>
          <li>
            I have seen a volcano, a green sand beach, a black sand beach, bioluminescent, the
            original Declaration of Independence, the Constitution and the Bills of Right
          </li>
          <li>I have eaten bugs and insects</li>
          <li>
            I have tried on a wedding dress. Things didn't work out and I didn't have a chance to
            wear it, but it's OK :)
          </li>
        </ul>
      </template>

      <p class="mb-2">Like what you see? I can be reached at:</p>

      <!--
            CONTACT INFO SECTION
          -->

      <v-row
        align="center"
        dense
      >
        <v-col
          cols="4"
          md="5"
          xl="2"
          class="text-primary text-uppercase font-weight-medium"
          ><p>LOCATION:</p>
        </v-col>
        <v-col
          cols="8"
          md="7"
          xl="10"
          ><p>Dallas, Texas</p>
        </v-col>
        <v-col
          cols="4"
          sm="4"
          md="5"
          xl="2"
          class="text-primary text-uppercase font-weight-medium"
          ><p>EMAIL:</p>
        </v-col>
        <v-col
          cols="8"
          sm="8"
          md="7"
          xl="10"
        >
          <a
            href="mailto:anna.hoang.job@gmail.com"
            target="_top"
          >
            <p>anna.hoang.job@gmail.com</p>
          </a>
        </v-col>
        <v-col
          cols="4"
          md="5"
          xl="2"
          class="text-primary text-uppercase font-weight-medium"
        >
          <p>PHONE:</p>
        </v-col>
        <v-col
          cols="8"
          md="7"
          xl="10"
          >469-831-0504</v-col
        >
        <v-col
          cols="4"
          md="5"
          xl="2"
          class="text-primary text-uppercase font-weight-medium"
        >
          <p>RESUME:</p>
        </v-col>
        <v-col
          cols="8"
          md="7"
          xl="10"
        >
          <Resume></Resume>
        </v-col>
      </v-row>
    </v-col>

    <!--
      RIGHT COLUMN
    -->
    <v-col
      v-if="mdAndUp"
      md="5"
      offset-xl="2"
      xl="4"
    >
      <!--
        SIDE IMAGE SECTION
      -->
      <div class="mb-6 w-75 mx-auto bg-primary text-white talk-bubble rounded-xl">
        <p class="pa-5 text-center">Let's build something great together!</p>
      </div>
      <v-img
        cover
        src="@/assets/avatar.jpg"
      >
      </v-img>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDisplay } from 'vuetify';

import Resume from '@/components/ResumeDownload.vue';

export default defineComponent({
  components: {
    // Resume download component
    Resume,
  },

  setup() {
    const { mdAndUp, lgAndUp } = useDisplay();
    return { mdAndUp, lgAndUp };
  },
});
</script>

<style lang="scss" scoped>
/* CSS talk bubble */
.talk-bubble {
  position: relative;

  &.border::before,
  &::after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    right: auto;
    top: auto;
  }

  /*Right triangle, placed bottom left side slightly in*/
  &.border::before {
    left: 50%;
    bottom: -40px;
    border: 20px solid;
    border-color: #666 transparent transparent #666;
  }

  &::after {
    left: 55%;
    bottom: -20px;
    border: 12px solid;
    border-color: rgb(var(--v-theme-primary)) transparent transparent rgb(var(--v-theme-primary));
  }
}
</style>
