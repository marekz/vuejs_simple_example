<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Imię: {{ name }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Wybrane imiona: </label>
        <select class="form-controll" v-model="name">
          <option value="all">Wszystkie</option>
          <option v-for="n in allNames" v-bind:key="n" v-bind:value="n">Tylko {{ n}}</option>
        </select>
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
