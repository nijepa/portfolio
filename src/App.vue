<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
    <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./assets/css/start.css";
@import "./assets/css/app.css";

#app {
  // color: #203b55;

  a:link {
    color: #0360b6;
  }
  a:visited {
    //color: var(--blue);
  }
  a:hover {
    color: #a52607;
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
  transition: all 0.9s ease;
}
.slide-fade-leave-active {
  transition: ease 0.9s all;
  transform: rotateY(-90deg);
  //transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  //transform: translateX(10px);
  transform: rotateY(90deg);
  //filter: brightness(.7);
  opacity: 0;
}

.fader-enter-active {
  transition: all 5s ease;
}

.fader-enter,
.fader-leave-to {
  opacity: 0;
  width: 0;
  height: 0;
  transform: rotateZ(90deg) rotateY(90deg) rotateX(90deg);
}

.fall-enter-active {
  transition: all 1s ease;
}

.fall-enter,
.fall-leave-to {
  transform: translateY(-150px);
  opacity: 0;
}

.rise-enter-active {
  transition: all 1s ease;
}

.rise-enter,
.rise-leave-to {
  transform: translateY(150px);
  opacity: 0;
}

.left-enter-active {
  transition: all 1s ease;
}

.left-enter,
.left-leave-to {
  transform: translateX(-150px);
  opacity: 0;
}

.right-enter-active {
  transition: all 1s ease;
}

.right-enter,
.right-leave-to {
  transform: translateX(150px);
  opacity: 0;
}

.middle-enter-active {
  transition: all 0.8s ease;
}

.middle-enter,
.middle-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 3.3s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 3s;
}

.bounce-leave-active {
  animation: bounce-in 3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: rotate(-50deg) translateX(-150px) translateY(-150px) scale(-0.5);
  }
  70% {
    transform: rotate(-25deg) translateX(0px) translateY(-50px) scale(1.5);
  }
  100% {
    transform: rotate(0deg) translateX(0) translateY(0) scale(1);
  }
}

.bounced-enter-active {
  animation: bounced-in 3s;
}

.bounced-leave-active {
  animation: bounced-in 3s reverse;
}

@keyframes bounced-in {
  0% {
    transform: rotate(-50deg) translateX(-150px) translateY(-150px) scale(-0.5);
  }
  70% {
    transform: rotate(-25deg) translateX(0px) translateY(-50px) scale(1.5);
  }
  100% {
    transform: rotate(-25deg) translateX(0) translateY(0) scale(1.2);
  }
}

.fly-enter-active {
  animation: fly-in 2s;
}

.fly-leave-active {
  animation: fly-in 2s reverse;
}
@keyframes fly-in {
  0% {
    transform: skew(-45deg) translateX(-150px) translateY(150px);
  }
  70% {
    transform: skew(-25deg) translateX(0px) translateY(50px);
  }
  100% {
    transform: skew(0deg) translateX(0) translateY(0);
  }
}

.flyr-enter-active {
  animation: flyr-in 2s;
}

.flyr-leave-active {
  animation: flyr-in 2s reverse;
}

@keyframes flyr-in {
  0% {
    transform: skew(45deg) translateX(150px) translateY(150px);
  }
  70% {
    transform: skew(25deg) translateX(0px) translateY(50px);
  }
  100% {
    transform: skew(0deg) translateX(0) translateY(0);
  }
}
</style>
