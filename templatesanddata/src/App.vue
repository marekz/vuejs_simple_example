<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Imię: {{ name }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check" v-for="n in allNames" v-bind:key="n">
        <input class="form-check-input" type="radio" v-model="name" v-bind:value="n" />
        <label class="form-check-label">{{ n }}</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyComponent',
    data: function() {
      return {
        name: "Janek",
        allNames: ["Janek", "Alicja", "Magda"]
      }
    }
}
</script>
