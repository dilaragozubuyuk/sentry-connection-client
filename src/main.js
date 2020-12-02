import Vue from 'vue'
import App from './App.vue'

import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  Vue,
  dsn: "",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  release: "%VUE_APP_RELEASE_VERSION%",
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
