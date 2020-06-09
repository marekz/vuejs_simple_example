<template>
    <div class="bg-primary text-white text-center m-2 p-3 h6">
        <slot>
            <h4>Skorzystaj z pól formularza, aby zmienić dane</h4>
        </slot>
        <div class="form-group m-1 text-left">
            <label>Nazwa</label>
            <input v-model="product.name" class="form-control" />
        </div>
        <div class="form-group m-1 text-left">
            <label>Kategoria</label>
            <input v-model="product.category" class="form-control" />
        </div>
        <div class="form-group m-1 text-left">
            <label>Cena</label>
            <input v-model.number="product.price" class="form-control" />
        </div>
        <div class="mt-2">
            <button class="btn btn-info" v-on:click="doSubmit">Wyślij</button>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["initialProduct"],
        data: function() {
            return {
                product: this.initialProduct || {}
            }
        },
        methods: {
            doSubmit() {
                this.$emit("productSubmit", this.product);
            }
        }
    }
</script>

<style scoped>
</style>