<template>
    <div class="container-fluid">
        <div class="m-2 p-2 text-white" v-bind:class="dataValue">
          <div>Wartość: {{ dataValue }}</div>
        </div>
        <div class="form-check m-2">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input"
                v-model="dataValue" v-bind:true-value="darkColor" v-bind:false-value="lightColor"/> Ciemny kolor
            </label>
        </div>
        <div class="form-group m-2 p-2 bg-secondary">
            <label class="form-check-label">Kolor</label>
            <select v-model="dataValue" class="form-control">
                <option v-bind:value="darkColor">Ciemny kolor</option>
                <option v-bind:value="lightColor">Jasny kolor</option>
            </select>
        </div>
        <div class="form-check-inline m-2">
            <label class="form-check-label">
                <input type="radio" class="form-check-input"
                    v-model="dataValue" v-bind:value="lightColor" />
                    Jasny kolor
            </label>
        </div>
        <div class="form-check-inline m-2">
            <label class="form-check-label">
                <input type="radio" class="form-check-input"
                    v-model="dataValue" v-bind:value="darkColor" />
                    Ciemny kolor
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyComponent',
        data: function () {
            return {
                darkColor: "bg-primary",
                lightColor: "bg-info",
                dataValue: "bg-info"
            }
        }
    }
</script>
