<template>
  <div>

    {{response}}
  </div>
</template>

<script>
  import request from "../network/request.js"

  export default {
    name: "test-axios",
    data() {
      return {
        response: {}
      }
    },
    created() {
      this.postWithJson()
      // this.getMethod()

    }, methods: {
      postWithJson() {
        request({
            url: "http://httpbin.org/post",
            method: "post",
            data: {
              "roleId": "1"
            },
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(
          res => {
            this.response = res
          },
          err => {
            alert("request error")
          });
      },
      getMethod() {
        axios.get("http://localhost:8081/test",
          {
            params: {
              roleId: "123"
            }
          },
        ).then((res) => {
          this.response = res
        });
      }
    }

  }
</script>

<style scoped>

</style>
