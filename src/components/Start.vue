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
              <h1 id="myname">Nikola Pavićević</h1>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #811ef1;
  font-size: 15px;
}
</style>
