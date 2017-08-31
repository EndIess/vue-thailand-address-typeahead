import { storiesOf } from '@storybook/vue'
import App from '../src/App.vue'
import '../static/style.css'

storiesOf('App', module).add('app', () => ({
  components: { App },
  template: '<app></app>'
}))
