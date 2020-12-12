import Vue from 'vue'
import App from './App.vue'

import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  Vue,
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracingOptions: {
    trackComponents: true,
  },
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
