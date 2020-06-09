<template>
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
        <h6>{{ message }}</h6>
        <my-feature v-bind:initial-product="product"
            v-on:productSubmit="updateProduct">
            <div slot="header" class="bg-warning m-2 p-2 h3 text-dark">
                Edytor produktów
            </div>
            <div slot="footer" class="bg-warning m-2 p-2 h3 text-dark">
                Sprawdź informacje przed wysłaniem
            </div>
        </my-feature>
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