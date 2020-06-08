<template>
    <div class="bg-secondary text-white text-center my-2 p-2 h5">
        Komponent-rodzic
        <MyFeature></MyFeature>
        <newComponent></newComponent>
    </div>
</template>

<script>
    import ChildComponent from "./components/Child"
    export default {
        name: 'App',
        components: {
            MyFeature: ChildComponent,
            newComponent: ChildComponent
        }
    }
</script>
