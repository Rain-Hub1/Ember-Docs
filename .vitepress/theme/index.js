import DefaultTheme from 'vitepress/theme'
import HeroCard from './components/HeroCard.vue'
import FeaturePills from './components/FeaturePills.vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('HeroCard', HeroCard)
    app.component('FeaturePills', FeaturePills)
  }
}
