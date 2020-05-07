require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
import Vue from 'vue'

new Vue({
  el: "#app",
  template: `
    <div class="text-center p-3">
        <h1 class="bg-secondary text-white p-3">
            {{ message }}
        </h1>
        <button class="btn btn-secondary" v-on:click="handleClick">
            Wciśnij mnie
        </button>

        <h2 class="bg-success text-white p-1 m-2" v-if="limit">
          Sukces!
        </h2>

    </div>
  `,
  data: {
    counter: 0
  },
  methods: {
    handleClick() {
      this.counter++;
    }
  },
  computed: {
    message() {
      return this.counter == 0 ? "Przycisk nie został jeszcze wciśnięty": `Liczba wciśnięć: ${this.counter}`;
    },
    limit() {
      return this.counter > 2 ? true: false;
    }
  }
});
