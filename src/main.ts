import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router'

const app = createApp(App).use(Router)

app.config.globalProperties.$filters = {
  currency: (value: number) => {
    return value.toLocaleString(
      undefined,
      { minimumFractionDigits: 2 }
    )
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: Record<string, (value: string | number) => string>
  }
}
app.mount('#app')
