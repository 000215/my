import Vue from 'vue'
import App from './App.vue'
import ZButton from './components/button.vue'
import ZDialog from './components/dialog.vue'
import ZInput from './components/input.vue'
import ZSwitch from './components/switch'
import './assets/fonts/font.css'
Vue.component(ZButton.name, ZButton)
Vue.component(ZDialog.name, ZDialog)
Vue.component(ZInput.name, ZInput)
Vue.component(ZSwitch.name, ZSwitch)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
