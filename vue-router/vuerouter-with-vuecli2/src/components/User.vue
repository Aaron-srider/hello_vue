<template>
    <div>
        <h1>This is User {{userName}}</h1>
    </div>
</template>

<script>
    export default {
        name: "user",
        computed: {
            userName() {
                return this.$route.params.userName
            }
        }
    }
</script>

<style scoped>

</style>
