import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'boxicons'


var firebaseConfig = {
  apiKey: "AIzaSyBA0wXLJixpQlobLAoyaHL-tK_F-1qVFvU",
  authDomain: "prueba-6932c.firebaseapp.com",
  databaseURL: "https://prueba-6932c.firebaseio.com",
  projectId: "prueba-6932c",
  storageBucket: "prueba-6932c.appspot.com",
  messagingSenderId: "766760592317",
  appId: "1:766760592317:web:d1005cb61c25d4b02d68d4",
  measurementId: "G-DPWLLZTEL0"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
