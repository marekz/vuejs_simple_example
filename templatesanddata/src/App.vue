<template>
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
        <div class="form-group">
            <input class="form-control" v-model="labelText" />
        </div>
        <my-feature v-bind:label-text="labelText" initial-value="Kajak"></my-feature>
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
                message: "To jest komponent-rodzic",
                labelText: "Nazwa"
            }
        }
    }
</script>