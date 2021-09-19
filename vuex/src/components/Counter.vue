<template>
    <div>
      {{$store.state.counter}}
  <button @click="add()">+</button>
  <button @click="minus()">-</button>
    </div>

</template>

<script>
  import * as types from "../store/types.js"
    export default {
        name: "counter",
        methods: {
          add() {
            this.$store.commit({
              type: types.COUNTERADD,
              n: 4
            });
          },
          minus() {
            this.$store.commit({
              type: types.COUNTERMINUS,
              n: 4
            });
          }
        }
    }
</script>

<style scoped>

</style>
