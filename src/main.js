//import Vue from 'vue/dist/vue.esm';
import Vue from 'vue'; //设置alias之后
import App from './App.vue';

new Vue({
  el: '#app',
  components: {
    App
  },
  template: `
    <div>
      <app></app>
    </div>
  `
});