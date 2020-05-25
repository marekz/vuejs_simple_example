<template>
  <div class="container-fluid">
    <div class="bg-primary text-white text-center p-3 m-2">
      <h3 v-on:click="handleEvent('Piłka nożna', $event)">{{ name }}</h3>
    </div>
    <div class="bg-primary text-white text-center p-3 m-2">
      <h3 @click="handleEvent('Stadion', $event)">{{ name }}</h3>
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
  },
  methods: {
    handleEvent(name, $event) {
      this.name = `${name} - ${$event.type}`;
    }
  }
}
</script>
