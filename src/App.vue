<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();

    watch(
      route,
      () => {
        toggleScroll();
      },
      { deep: true, immediate: true },
    );

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
      route,
      toggleScroll,
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
</style>
