<template>
    <div class="container-fluid">
        <div class="btn-primary text-white my-2 p-2">
            Nazwa: {{ name }}, Kategoria: {{ category }}, cena: {{ price }}
        </div>
        <form v-on:submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Nazwa</label>
                <input v-model="name" class="form-control" />
            </div>
            <div class="form-group">
                <label>Kategoria</label>
                <input v-model="category" class="form-control" />
            </div>
            <div class="form-group">
                <label>Cena</label>
                <input type="number" v-model.number="price" class="form-control" />
            </div>
            <div class="text-center">
                <button class="btn btn-primary" type="submit">Wyślij</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'MyComponent',
        data: function () {
            return {
                name: "",
                category: "",
                price: 0
            }
        },
        methods: {
            handleSubmit() {
                console.log(`Wysłano formularz: ${this.name} ${this.category}` + `${this.price}`);
            }
        }
    }
</script>
