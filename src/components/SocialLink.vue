<template>
  <div class="text-center">
    <a
      v-for="(item, index) in accounts"
      :key="item.id"
      :href="item.link"
      :class="['text-decoration-none', { 'mr-2': index < accounts.length - 1 }]"
    >
      <v-icon
        :icon="item.icon"
        size="x-large"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      accounts: [
        {
          id: 'LinkedIn',
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/anna-hoang-67023654',
        },
        {
          id: 'GitHub',
          icon: 'mdi-github',
          link: 'https://github.com/annahanhhoang/',
        },
        {
          id: 'Email',
          icon: 'mdi-email',
          link: 'mailto:anna.hoang.job@gmail.com',
        },
        { id: 'Phone', icon: 'mdi-phone', link: 'tel:+1-469-831-0504' },
      ],
    };
  },
});
</script>
