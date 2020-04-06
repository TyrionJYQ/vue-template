import Vue from 'vue'
import App from './components/App'

if(ENV === 'production') {
  console.log = function() {
   
  }
}
new Vue({
 render(h) {
   return h(App)
 },
 created() {
   console.log(111)
 }

}).$mount('#app')
