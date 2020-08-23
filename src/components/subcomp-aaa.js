import Vue from 'vue/dist/vue.esm';

const vm = new Vue({
  el: '#app',
  data: {},
  template: `
    <div>
      <subcomp></subcomp>
    </div>
  `,

  components: {
    subcomp: {
      data() {
        return {
          msg: 'subcomp!'
        }
      },
      template: `
        <div>
          <h1>{{ msg }}</h1>
        </div>
      `
    }
  }
});