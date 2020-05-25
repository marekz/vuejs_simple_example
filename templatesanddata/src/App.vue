<template>
  <div class="container-fluid">
    <div class="bg-primary text-white text-center p-3 m-2">
      <h3>{{ name }}</h3>
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
