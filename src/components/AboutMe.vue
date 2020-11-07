<template>
  <div class="abo">

    <div class="top">

      <header class="hero">
        <transition name="bounce" mode="out-in">
<!--          <img id="avatar" alt="" :src="photoType ? photo : avatar"-->
<!--                @mouseover="photoType = true" @mouseout="photoType = false" @click="photoType = !photoType"-->
<!--                v-on:load="onApeared" v-show="apeared">-->
  <!--        <img :key="1" class="avatar" v-if="photoType === false" alt="" :src="require('@/assets/images/meavatar.png')"
               @mouseover="photoType = true" @click="photoType = !photoType"
               v-on:load="onApeared" v-show="apeared">-->
          <img class="avatar" alt="" :src="images[currentID]"
                v-show="apeared"
              >

 <!--         <div class="avatar" v-bind:style="{'background-image': 'url(' + images[currentID] + ')'}"
               v-bind:key="currentID" @click="mouseover">
          </div>-->
        </transition>

        <h1 class="me_myself_and_i line-1 anim-typewriter">Nikola Pavićević</h1>
        <h3 class="me_myself_and_i line-1 anim-typewriter">Full Stack Web Developer</h3>

        <transition name="bounce">
          <a class="pdf__link" href="/CV-English2020-web.pdf" download v-on:load="onApeared" v-show="apeared">
            <button id="textme"> Portfolio <img id="pdf" src="@/assets/images/pdf.svg">
            </button>
          </a>
        </transition>
      </header>

      <div class="cta cta1">

        <h3 class="price">Front<span>-end</span></h3>

        <transition name="left">
          <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" class="link__front"
              v-on:load="onApeared" v-show="apeared">HTML
          </a>
        </transition>
        <transition name="fall">
          <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('html5')" alt="">
          </a>
        </transition>
        <transition name="right">
          <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank" class="link__front"
              v-on:load="onApeared" v-show="apeared">CSS
          </a>
        </transition>
        <transition name="fall">
          <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('css3')" alt="">
          </a>
        </transition>
        <transition name="left">
          <a href="https://sass-lang.com/" target="_blank" class="link__front"
              v-on:load="onApeared" v-show="apeared">Sass
          </a>
        </transition>
        <transition name="right">
          <a href="https://sass-lang.com/" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('sass')" alt="" v-on:load="onApeared" v-show="apeared">
          </a>
        </transition>
        <transition name="right">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="link__front"
              v-on:load="onApeared" v-show="apeared">JavaScript
          </a>
        </transition>
        <transition name="rise">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('js')" alt="" v-on:load="onApeared" v-show="apeared">
          </a>
        </transition>
        <transition name="left">
          <a href="https://vuejs.org/" target="_blank" class="link__front"
              v-on:load="onApeared" v-show="apeared">VueJS
          </a>
        </transition>
        <transition name="rise">
          <a href="https://vuejs.org/" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('vue')" alt="" v-on:load="onApeared" v-show="apeared">
          </a>
        </transition>
      </div>

      <div class="cta cta2">
        <h3 class="price price2">Back<span class="back">-end</span></h3>
        <transition name="fall">
          <a href="https://nodejs.org/en/" target="_blank" class="link__back"
              v-on:load="onApeared" v-show="apeared">NodeJS
          </a>
        </transition>
        <transition name="left">
          <a href="https://nodejs.org/en/" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('nodejs2')" alt="">
          </a>
        </transition>
        <transition name="fall">
          <a href="https://www.php.net/" target="_blank" class="link__back"
              v-on:load="onApeared" v-show="apeared">PHP
          </a>
        </transition>
        <transition name="right">
          <a href="https://www.php.net/" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('php')" alt="">
          </a>
        </transition>
        <transition name="right">
          <a href="https://laravel.com/" target="_blank" class="link__back"
              v-on:load="onApeared" v-show="apeared">Laravel
          </a>
        </transition>
        <transition name="left">
          <a href="https://laravel.com/" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('laravel')" alt="">
          </a>
        </transition>
        <transition name="left">
          <a href="https://www.mysql.com/" target="_blank" class="link__back"
              v-on:load="onApeared" v-show="apeared">MySQL
          </a>
        </transition>
        <transition name="right">
          <a href="https://www.mysql.com/" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('mysql')" alt="">
          </a>
        </transition>
        <transition name="rise">
          <a href="https://www.mongodb.com/" target="_blank" class="link__back"
              v-on:load="onApeared" v-show="apeared">MongoDB
          </a>
        </transition>
        <transition name="left">
          <a href="https://www.mongodb.com/" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('mongodb')" alt="">
          </a>
        </transition>
        <transition name="rise">
          <a href="https://firebase.google.com/" target="_blank" class="link__back"
              v-on:load="onApeared" v-show="apeared">Firebase
          </a>
        </transition>
        <transition name="right">
          <a href="https://firebase.google.com/" target="_blank" class="tool"
              v-on:load="onApeared" v-show="apeared">
            <img :src="getSvgUrl('firebase')" alt="">
          </a>
        </transition>
      </div>

    </div>

    <h2 id="features" >/* ABOUT ME */</h2>
    <section class="features" >
      <transition name="fly">
        <div class="feature" v-on:load="onApeared" v-show="apeared">
          <h3 > I'm <span>from</span></h3>
          <p> Kotor, Montenegro living in Belgrade, Serbia.</p>
        </div>
      </transition>
      <transition name="flyr">
        <div class="feature" v-on:load="onApeared" v-show="apeared">
          <h3> My <span class="back">tools</span></h3>
          <p> of choice are JavaScript, VueJS, NodeJS / Express and Laravel,
              and always ready to get on something different.</p>
        </div>
      </transition>
      <transition name="fly">
        <div class="feature" v-on:load="onApeared" v-show="apeared">
          <h3 > Currently <span >working</span></h3>
          <p> as a freelancer.</p>
        </div>
      </transition>
      <transition name="flyr">
        <div class="feature" v-on:load="onApeared" v-show="apeared">
          <h3 > Free <span class="back">time</span></h3>
          <p> spend traveling with family, listening to music, walking or
              playing with doughter and little schnauzer.</p>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
  export default {

    name: 'AboutMe',

    data() {
      return {
        avatar: require('@/assets/images/meavatar.png'),
        photo: require('@/assets/images/me.jpg'),
        photoType: false,
        apeared: false,
        images: [
            require('@/assets/images/meavatar.png'),
            require('@/assets/images/me.jpg')
        ],
        currentID: 1,
      }
    },

    methods: {

      getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg')
      },

      readFile() {
        window.open('../assets/images/CV-English2020-web.pdf', '_blank') //to open in new tab
      },

      toggleImage() {
          if(this.currentID < this.images.length-1){
              this.currentID +=1
          } else {
              this.currentID = 0
          }
          // this.apeared = true;
      },

      onApeared() {
        this.apeared = true;
      }
    }
  }
</script>

<style>
/* ABOUT */

  .top {
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
      "hero hero cta1"
      "hero hero cta2";
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
 /*    grid-gap: 17px; */
    grid-row-gap: 50px;
    grid-template-columns: auto auto;
    grid-template-rows: .1fr 1fr 1fr;
    padding: 1em;
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

  .avatar {
    width: auto;
    height: 100px;
    border-radius: 40%;
    background: transparent;
    justify-self: center;
    cursor: pointer;
    /* border: 2px solid var(--yellow); */
  }

  .cta {
    background: var(--yellow);
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 5ch  minmax(10px, 60px);
    align-items: initial;
    justify-items: center;
    align-content: center;
    -webkit-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    border-radius: 0 5px 0 0;
  }

  .cta a {
    margin: 0;
    justify-self: right;
    align-self: center;
    margin-right: 10px;
    text-decoration:none;
  }

  .cta a .link__back {
    color: var(--yel);
  }

  .link__back:visited {
    color: var(--yel);
  }

  .link__front:visited {
    color: var(--blue);
  }

  a:link {
      color: var(--yel);
    }

  .cta .tool {
    justify-self: left;
  }

  .cta img {
    max-width: 100%;
    width: 50px;
    height: 50px;
    /* justify-self: left; */
  }

  .cta img:hover {
    transform: scale(1.1);
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
    color: var(--yel);
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

  .line-1 {
/*     position: relative;
    top: 50%;
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;  */
    white-space: nowrap;
    overflow: hidden;
    max-width: 175px;
    /* transform: translateY(-50%);     */
  }

  /* Animation */
  .anim-typewriter {
    animation: typewriter 4s steps(44) 1s 1 normal both,
              blinkTextCursor 500ms steps(44) infinite normal;
  }

  @keyframes typewriter{
    from{width: 0;}
    to{width: 175px;}
  }

  @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
  }

  /* @media (max-width: 874px) {
    .line-1{
      white-space:normal;
      overflow:visible;
    }
  } */
</style>
