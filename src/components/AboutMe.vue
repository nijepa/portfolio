<template>
<transition name="slide-fade">
  <div class="">

    <div class="top">

      <header class="hero">
        <h1>Nikola Pavićević</h1>
        <h3>Full Stack Web Developer</h3>
        <a class="pdf__link" href="/CV-English2020-2.pdf" download><button id="textme"> Portfolio <img id="pdf" src="@/assets/images/pdf.svg"></button></a>
      </header>

      <div class="cta cta1">
        <h3 class="price">Front<span>-end</span></h3>
        <p>HTML </p>
        <img src="../assets/images/html5.svg" alt="">
        <p>CSS </p>
        <img src="../assets/images/css3.svg" alt="">
        <p>Sass </p>
        <img src="../assets/images/sass.svg" alt="">
        <p>JavaScript </p> 
        <img src="../assets/images/js.svg" alt="">
        <p>VueJS </p>
        <img src="../assets/images/vue.svg" alt="">
      </div>
      
      <div class="cta cta2">
        <h3 class="price price2">Back<span class="back">-end</span></h3>
        <p>NodeJS</p>
        <img src="../assets/images/nodejs2.svg" alt="">
        <p>PHP</p>
        <img src="../assets/images/php.svg" alt="">
        <p>Laravel</p>
        <img src="../assets/images/laravel.svg" alt="">
        <p>MySQL</p>
        <img src="../assets/images/mysql.svg" alt="">
        <p>MongoDB</p>
        <img src="../assets/images/mongodb.svg" alt="">
        <p>Firebase</p>
        <img src="../assets/images/firebase.svg" alt="">
      </div>

    </div>

    <h2 id="features" >/* ABOUT ME */</h2>
    <section class="features" >
      <div class="feature">
        <!-- <span class="icon"><img src="images/front-end.svg" alt=""></span> -->
        <!-- <h3>Design</h3> -->
        <h3 > I'm <span>from</span></h3>
        <p> the Belgrade, Serbia.</p> 
      </div>
      <div class="feature">
        <!-- <h3>Beer</h3> -->
        <h3 > My <span class="back">tools</span></h3>
        <p> of choice are VueJS, NodeJS / Express and Laravel, and always ready to get on something different. </p>
        <!-- <img src="images/Contour Line.svg" alt=""> -->
      </div>
      <div class="feature">
        <!-- <h3>Wine</h3> -->
        <h3 > Currently <span >working</span></h3>
        <p> as a freelancer.</p>
      </div>
      <div class="feature">
        <!-- <span class="icon">🎵</span> -->
        <h3 > Free <span class="back">time</span></h3>
        <p> spend by listening music, walking or playing with doughter.</p>
      </div>
    </section>
    
  </div>
  </transition>
</template>

<script>
export default {
  name: 'AboutMe',
  methods: {
  readFile() {
     window.open('/CV-English2020-2.pdf', '_blank') //to open in new tab
   }
}
}
</script>

<style>
  .pdf__link {
    grid-area: 1 / 2 / 3 / 3;
    align-self: center;
    justify-self: right;
    background: none;
  }
</style>