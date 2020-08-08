<template>
  <!-- <transition name="slide-fade"> -->
    <div class="abo">

      <div class="top">

        <header class="hero">
          <h1>Nikola Pavićević</h1>
          <h3>Full Stack Web Developer</h3>
          <a class="pdf__link" href="/CV-English2020-2.pdf" download>
            <button id="textme"> Portfolio <img id="pdf" src="@/assets/images/pdf.svg">
            </button>
          </a>
        </header>

        <div class="cta cta1">
          <h3 class="price">Front<span>-end</span></h3>
          <p>HTML </p>
          <img :src="getSvgUrl('html5')" alt="">
          <p>CSS </p>
          <img :src="getSvgUrl('css3')" alt="">
          <p>Sass </p>
          <img :src="getSvgUrl('sass')" alt="">
          <p>JavaScript </p> 
          <img :src="getSvgUrl('js')" alt="">
          <p>VueJS </p>
          <img :src="getSvgUrl('vue')" alt="">
        </div>
        
        <div class="cta cta2">
          <h3 class="price price2">Back<span class="back">-end</span></h3>
          <p>NodeJS</p>
          <img :src="getSvgUrl('nodejs2')" alt="">
          <p>PHP</p>
          <img :src="getSvgUrl('php')" alt="">
          <p>Laravel</p>
          <img :src="getSvgUrl('laravel')" alt="">
          <p>MySQL</p>
          <img :src="getSvgUrl('mysql')" alt="">
<!--           <p>MongoDB</p>
          <img src="../assets/images/mongodb.svg" alt=""> -->
          <p>Firebase</p>
          <img :src="getSvgUrl('firebase')" alt="">
        </div>

      </div>

      <h2 id="features" >/* ABOUT ME */</h2>
      <section class="features" >
        <div class="feature">
          <h3 > I'm <span>from</span></h3>
          <p> Kotor, Montenegro living in Belgrade, Serbia.</p> 
        </div>
        <div class="feature">
          <h3> My <span class="back">tools</span></h3>
          <p> of choice are VueJS, NodeJS / Express and Laravel, and always ready to get on something different.</p>
        </div>
        <div class="feature">
          <h3 > Currently <span >working</span></h3>
          <p> as a freelancer.</p>
        </div>
        <div class="feature">
          <h3 > Free <span class="back">time</span></h3>
          <p> spend listening to music, walking or playing with doughter.</p>
        </div>
      </section>
      
    </div>
  <!-- </transition> -->
</template>

<script>
  export default {
    name: 'AboutMe',

    methods: {
      getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg')
      },
      readFile() {
        window.open('../assets/images/CV-English2020-2.pdf', '_blank') //to open in new tab
      }
    }
  }
</script>

<style>
/* ABOUT */

  .top {
    /* height: 100vh; */
    display: grid;
    grid-gap: 20px;
    grid-template-areas: 
      "hero hero cta1"
      "hero hero cta2";
    /* justify-content: space-around; */
  }

  .hero {
    grid-area: hero;
    min-height: 380px;
    background: white url(../assets/images/hero.png);
    background-size: cover;
    background-position: top left;
    justify-content: space-around;
    
    align-items: start;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 1fr;
    padding: 5px;
  }

  .hero >* {
    background: var(--yellow);
  }

  .hero h3 {
    align-self: flex-start;
    font-size: 16px;
  }

  .hero h3 span { 
    background-color: var(--yellow); 
  }

  .hero h1 {
    align-self: flex-end;
  }

  .cta {
    background: var(--yellow);
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 5ch  minmax(10px, 60px);
    align-items: initial;
    justify-items: center;
    /* justify-content: baseline; */
    align-content: center;

    -webkit-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    border-radius: 0 5px 0 0;
  }

  .cta p {
    margin: 0;
    justify-self: right;
    align-self: center;
    margin-right: 10px;
  }

  .cta img {
    max-width: 100%;
    width: 50px;
    height: 50px;
    justify-self: left;
  }

  .cta1 {
    grid-area: cta1;
    background: var(--orange);
    align-content: inherit;
    display: grid;
    padding: 5px;
  }

  .cta2 {
    grid-area: cta2;
    align-content: inherit;
    padding: 5px;
  }

  .price {
    font-size: 30px;
    font-weight: 300;
    border-bottom: 3px solid;
    border-image-source: linear-gradient(to right, #1247f7, var(--orange) );
    border-image-slice: 1;
    grid-column: 1 / -1;
    color: #1247f7;
  }

  .price2 {
    border-image-source: linear-gradient(to right, #ffb515, var(--yellow));
    color: var(--yel);
  }

  .pdf__link {
    grid-area: 1 / 2 / 3 / 3;
    align-self: center;
    justify-self: right;
    background: none;
  }
  
  #pdf {
    height: 30px;
  }

  #textme {
    grid-area: 1 / 2 / 3 / 3;
    align-self: center;
    justify-self: right;
  }

  svg {
    vertical-align: middle;
    justify-self: left;
  }

  span {
    color: var(--blue);
  }

  .back {
    color: var(--blue);
  }

/* Features */

  .features {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    font-family: 'Nanum Pen Script', cursive;
    justify-content: space-around;
  }

  #features {
    margin: 30px;
  }

  .feature {
    background: white;
    padding: 20px;
    border: 1px solid white;
    text-align: center;
    box-shadow: 0 0  4px rgba(0,0,0,0.1);
  }

  .feature .icon {
    font-size: 50px;
  }

  .feature img, svg {
    margin-bottom: 10px;
    max-width: 100px;
  }

  .feature h3 {
    text-decoration: underline;
    font-size: 26px;
  }

  .feature p {
    color: rgba(0,0,0,0.5);
    justify-self: end;
    margin-right: 20px;
    font-size: 24px;
  }

</style>