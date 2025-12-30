/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';
import Page from './components/Page.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';

const app = createApp(App);
app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  apiOptions: {
    region: 'us',
  },
  bridge: import.meta.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
  use: [apiPlugin],
});

registerPlugins(app);

app.component('Page', Page);
app.mount('#app');
