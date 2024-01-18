<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// disable scrolling for landing page
const toggleScroll = () => {
  const scroll = route.name !== 'landing';

  if (!scroll) {
    document.body.className = 'no-scroll';
    document.documentElement.className = 'no-scroll';
  } else {
    document.documentElement.classList.remove('no-scroll');
  }
};

watch(
  route,
  () => {
    toggleScroll();
  },
  { deep: true, immediate: true }
);
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
</style>
