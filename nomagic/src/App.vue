<template src="./App.html" />
<script>
  export default {
    data: function () {
        return {
            counter: 0
        }
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
  }
</script>
<style>

</style>
