<template>
    <div class="container-fluid">
        <div class="m-2 p-2 text-white" v-bind:class="dataValue">
          <div>Wartość: {{ dataValue }}</div>
        </div>
        <div class="form-check m-2">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" v-model="dataValue" true-value="bg-primary" false-value="bg-info"/> Ciemny kolor
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyComponent',
        data: function () {
            return {
                dataValue: "bg-info",
            }
        }
    }
</script>
