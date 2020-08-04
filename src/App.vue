<template>
  <div id="app">
<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <home/>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
export default {
  components: {
    Home
  }
}
</script>
<style lang="scss">

@import './assets/css/start.css';
@import './assets/css/app.css';


#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #203b55;
   /* unvisited link */
    a:link {
      color: rgb(3, 96, 182);
    }

    /* visited link */
    a:visited {
      color: var(--blue);
    }

    /* mouse over link */
    a:hover {
      color: rgb(165, 38, 7)
    }

    /* selected link */
    a:active {
      color: var(--yellow);
    }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--blue);

    &.router-link-exact-active {
      color: #5a9c7f;
    }
  }
}

.slide-fade-enter-active {
  transition: all 1.7s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
