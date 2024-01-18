<template>
  <v-row
    class="landing-page fill-height"
    align="center"
    justify="center"
    no-gutters
  >
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
      <v-row no-gutters>
        <v-col
          cols="12"
          md="6"
          offset-md="3"
        >
          <v-img
            class="mb-6"
            height="92"
            src="@/assets/logos/google-logo.svg"
          />
        </v-col>
        <v-col
          cols="12"
          class="mb-7"
        >
          <v-text-field
            id="txtSearch"
            ref="txtSearch"
            density="compact"
            hide-details
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
          >
            <template v-slot:label>
              <p class="search-text anim-typewriter">Anna Hoang full stack developer</p>
            </template>
            <template v-slot:append-inner>
              <v-img
                class="mr-4"
                src="@/assets/google-voice.svg"
                width="24px"
                height="24px"
              />
              <v-img
                src="@/assets/google-image.svg"
                width="24px"
                height="24px"
              />
            </template>
          </v-text-field>
        </v-col>
        <v-col
          v-if="mdAndUp"
          md="12"
          class="text-md-center"
        >
          <v-btn
            variant="flat"
            class="text-capitalize mr-4"
            >Google Search</v-btn
          >

          <v-btn
            variant="flat"
            class="text-capitalize ml-4"
            >I'm feeling lucky</v-btn
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';

onMounted(() => {
  const router = useRouter();

  setTimeout(() => {
    router.push({ name: 'home' });
  }, 6500);
});

const { mdAndUp } = useDisplay();
</script>

<style lang="scss" scoped>
.landing-page {
  background: #fff;
  pointer-events: none;

  //type writter animation

  .search-text {
    color: #000000ff;
    border-right: 2px solid #000000ff;
  }
  /* Animation */
  .anim-typewriter {
    animation: typewriter 4s steps(31) 1s 1 normal both,
      blinkTextCursor 500ms steps(31) infinite normal;
  }

  @keyframes typewriter {
    from {
      width: 0;
    }

    to {
      width: 15em;
    }
  }

  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(34, 34, 34, 0.75);
    }

    to {
      border-right-color: transparent;
    }
  }
}
</style>
