<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Imię: {{ name }}</div>
      <div>Hasło: {{ password }}</div>
      <div>Szczegóły: {{ details }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>
          Wartość danych
        </label>
        <input class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>
          Hasło
        </label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>
          Szczegóły
        </label>
        <textarea class="form-control" v-model="details"></textarea>
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
        password: "hasło",
        details: "Ma uprawnienia administracyjne"
      }
    },
    methods: {
      reset() {
        this.dataValue = false;
        this.otherValue = false;
      }
    }
}
</script>
