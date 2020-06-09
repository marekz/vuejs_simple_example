<template>
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
        <h6>{{ message }}</h6>
        <my-feature v-bind:initial-product="product"
            v-on:productSubmit="updateProduct"></my-feature>
    </div>
</template>

<script>
    import ChildComponent from "./components/Child";
    export default {
        name: 'App',
        components: {
            MyFeature: ChildComponent
        },
        data: function() {
            return {
                message: "Gotowy",
                product: {
                    name: "Kajak",
                    category: "Sporty wodne",
                    price: 275
                }
            }
        },
        methods: {
            updateProduct(newProduct) {
                this.message = JSON.stringify(newProduct);
            }
        }
    }
</script>