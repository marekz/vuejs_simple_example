<template>
  <div class="bg-primary text-white text-center m-2 p-2">
    <h3>To jest komponent</h3>
    <h4>Name: {{ name }}, {{ age }} years</h4>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "Kajtek",
      age: 10,
      message: "Witaj świecie!"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
