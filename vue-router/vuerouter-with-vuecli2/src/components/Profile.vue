<template>
  <div>

    <h1>{{$route.query.name}}</h1>
    <h1>{{$route.query.age}}</h1>
    <h1>{{$route.query.job}}</h1>
  </div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped>

</style>
