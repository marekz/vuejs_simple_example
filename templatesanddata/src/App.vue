<template>
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
        <product-display v-bind:product="product">
            <div slot-scope="data" class="bg-info text-left">
                {{ data.propname }} ma wartość {{ data.value }}
            </div>
        </product-display>
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
    import ProductDisplay from "./components/ProductDisplay";
    export default {
        name: 'App',
        components: {
            ProductDisplay,
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