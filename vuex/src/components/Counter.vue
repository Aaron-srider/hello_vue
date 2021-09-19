<template>
    <div>
      {{$store.state.counter}}
  <button @click="add()">+</button>
  <button @click="minus()">-</button>
    </div>

</template>

<script>
    export default {
        name: "counter",
        methods: {
          add() {
            this.$store.commit("counterAdd");
          },
          minus() {
            this.$store.commit("counterMinus");
          }
        }
    }
</script>

<style scoped>

</style>
