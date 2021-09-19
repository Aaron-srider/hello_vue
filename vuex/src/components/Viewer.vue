<template>
  <div>
    <div>counter:{{$store.state.counter}}</div>
    <div>student age >= 16:{{$store.getters.filterStudents(16)}}</div>
    <div>student age >= 16 count:{{$store.getters.filterStudentsLength(16)}}</div>

  </div>
</template>

<script>
  export default {
    name: "viewer"
  }
</script>

<style scoped>

</style>
