<template>
  <div id="app">
<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <home />
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
    color: #203b55;
    a:link {
      color: #0360b6;
    }
    a:visited {
      color: var(--blue);
    }
    a:hover {
      color: #a52607
    }
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
    transition: ease .7s all;
  }
  .slide-fade-leave-active {
    // transition: ease .7s all;
    //  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    // transform: translateX(10px);
    transform: scale(.7);
    opacity: 0;
  }
</style>
