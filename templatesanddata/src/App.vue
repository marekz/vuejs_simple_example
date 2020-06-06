<template>
    <div class="container-fluid">
        <div class="bg-danger text-white my-2 p-2" v-if="errors">
            <h5>Znaleziono następujące problemy:</h5>
            <ul>
                <template v-for="(errors) in validationErrors">
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </template>
            </ul>
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
    import validation from "./validationRules";
    import Vue from "vue";

    export default {
        name: 'MyComponent',
        data: function () {
            return {
                name: "",
                category: "",
                price: 0,
                validationErrors: {},
            }
        },
        computed: {
            errors() {
                return Object.values(this.validationErrors).length > 0;
            }
        },
        methods: {
            validate(propertyName, value) {
                let errors = [];
                Object(validation)[propertyName].forEach(v => {
                    if (!v.validator(value)) {
                        errors.push(v.message);
                    }
                });
                if (errors.length > 0) {
                    Vue.set(this.validationErrors, propertyName, errors);
                } else {
                    Vue.delete(this.validationErrors, propertyName);
                }
            },
            validateAll() {
                this.validate("name", this.name);
                this.validate("category", this.category);
                this.validate("price", this.price);
                return this.errors;
            },
            handleSubmit() {
                if (this.validateAll()) {
                    console.log(`WYSŁANO FORMULARZ: ${this.name} ${this.category}` + ` ${this.price}`);
                }
            }
        }
    }
</script>
