<template>
  <div id="app">
    <div id="nav">
      <button @click="toAbout()">About</button>
      |
      <button @click="toHome()">Home</button>
      |

      <button @click="toUser()">User</button>
      |
      <button @click="toProfile()">Profile</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userName: "wc",
        user: {
          name: "cc",
          age: 18,
          job: "teacher"
        }

      }
    },
    methods: {
      toHelloWorld() {
        this.$router.replace("/helloWorld")
      },
      toAbout() {
        this.$router.replace("/about")
      },
      toUser() {
        this.$router.replace("/user/" + this.userName)
      },
      toHome() {
        this.$router.replace("/home")
      },
      toProfile() {
        this.$router.push({
          path: "/profile",
          query: this.user
        })
      }

    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.active {

    color: red;
  }

  .active {
    color: #42b983;
  }
</style>
