<template>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Wybrane miasta: {{ cities }}</div>
        </div>
        <div class="form-check m-2">
            <label class="form-check-label">
              Miasto
            </label>
            <select multiple class="form-control" v-model="cities">
              <option v-for="city in cityNames" v-bind:key="city">
                {{ city }}
              </option>
            </select>
        </div>
        <div class="text-center">
          <button v-on:click="reset" class="btn btn-info">Reset</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyComponent',
        data: function () {
            return {
                cityNames: ["Warszawa", "Zamość", "Szczecin", "Gdańsk", "Kraków", "Poznań", "Lublin"],
                cities: []
            }
        },
        methods: {
            reset() {
                this.cities = [];
            }
        }
    }
</script>
