<template>
    <div class="bg-primary text-white text-center m-2 p-3 h6">
        {{ message }}
        <div class="form-group m-1">
            <input v-model="message" class="form-control" />
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                message: "To jest komponent-dziecko"
            }
        }
    }
</script>