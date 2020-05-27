<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Imię: {{ name }}</div>
      <div>Czy ma dostęp administracyjny: {{ hasAdminAccess }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <input class="form-check-input" type="radio" v-model="name" value="Janek" />
        <label class="form-check-label">Janek</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" v-model="name" value="Alicja" />
        <label class="form-check-label">Alicja</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="hasAdminAccess" />
        <label class="form-check-label">Czy ma dostęp administracyjny?</label>
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
        hasAdminAccess: true
      }
    }
}
</script>
