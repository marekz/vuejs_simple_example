<template>
  <div class="container-fluid">
    <div class="text-center p-3 m-2">
      <h3 class="btn btn-primary m-2" v-on:click="name = $event.type">{{ name }}</h3>
      <h3 class="btn btn-secondary m-2" v-on:mousedown="name = $event.type">{{ name }}</h3>
      <h3 class="btn btn-dark m-2" v-on:mousemove="name = $event.type">{{ name }}</h3>
      <h3 class="btn btn-success m-2" v-on:keydown="name = $event.type">{{ name }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'MyComponent',
  data: function () {
    return {
        name: "Kamizelka ratunkowa"
    }
  }
}
</script>
