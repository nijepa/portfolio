<template>
  <div class="wrapper">
    <div id="bc" class="big-circles">
      <div class="big-circle"></div>
      <div class="big-circle"></div>
      <div class="big-circle"></div>
    </div>

    <section id="home">
      <div id="front" class="slide-wrapper">

        <div class="smallcircles">
          <div class="small-circle"></div>
          <div class="small-circle"></div>
          <div class="small-circle"></div>
        </div>

        <div class="cover-wrapper text-center" id="home-content">
          <div class="cover-wrapper__inner">
            <div class="cover-wrapper__container">
              <div class="cover__caption">
              <h1 id="myname">Nikola Pavićević</h1>
              <h3>Full Stack Web Developer</h3>
              </div>
              <a id="down" @click="startApp" href="#">More</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
  export default {

    name: 'Start',

    props: { 
      method: { type: Function }
    },

    methods: {
      startApp() {
        this.$emit('start-app', true);
      }
    }
  }
</script>

<style scoped lang="scss">
  a {
    color: #5517e6;
    font-size: 15px;
  }

  .cover__caption {
    margin-bottom: 15px;
    border-radius: 5px;
    border: 2px solid black;
    padding: 10px;
  }
</style>
