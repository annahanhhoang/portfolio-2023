<script setup lang="ts">
import { computed } from 'vue';
import { richTextResolver } from '@storyblok/richtext';
import { useDisplay } from 'vuetify';
import Resume from '@/components/ResumeDownload.vue';

const props = defineProps({ blok: Object });
console.log('props', props);
const { render } = richTextResolver();
const whoIAm = computed(() => render(props.blok.who_I_am));
const interestingFacts = computed(() => render(props.blok.interesting_facts));
const { mdAndUp, lgAndUp } = useDisplay();
</script>

<template>
  <v-row
    align="stretch"
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
      <!-- <div
        class="mb-4"
        v-html="whoIAm"
      />

      <div
        class="mb-4"
        v-if="lgAndUp"
        v-html="interestingFacts"
      /> -->

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
          <Resume />
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
