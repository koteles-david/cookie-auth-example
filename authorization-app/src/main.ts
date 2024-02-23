import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n' // Import the 'createI18n' function from 'vue-i18n'

import "./css/base.scss"

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
}

const i18n = createI18n({ locale: 'en', fallbackLocale: 'en', messages })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(i18n) // Use the 'i18n' instance

app.mount('#app')
