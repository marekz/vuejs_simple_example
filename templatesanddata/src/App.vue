<template>
  <div class="container-fluid">
    <div class="bg-primary p-4 text-white h3">
      {{ message }}
    </div>
    <input class="form-control bg-light" placeholder="Wpisz tekst..."
           v-on:keydown.shift="handleKey" />
  </div>
</template>

<script>
  export default {
    name: 'MyComponent',
    data: function() {
      return {
        message: "Gotowy"
      }
    },
    methods: {
      handleKey($event) {
        this.message = $event.key;
      }
    }
}
</script>
