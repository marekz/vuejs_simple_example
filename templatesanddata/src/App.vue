<template>
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
        {{ message }}
        <MyFeature></MyFeature>
        <child-component></child-component>
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
                message: "To jest komponent-rodzic"
            }
        }
    }
</script>
