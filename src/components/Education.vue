<template>
  <div class="education">

    <h2 id="about">{{title}}</h2>

    <transition name="left">
      <div class="edu" v-on:load="onApeared" v-show="apeared">
        <a href="https://www.theodinproject.com" target="_blank" class="course">
          <h1>The Odin Project</h1>
        </a>
        <transition name="fall">
          <a class="course__white" v-on:load="onApeared" v-show="apeared"
                href="https://www.theodinproject.com" target="_blank">
            <img class="course__img odin" :src="getSvgUrl('odin-logo')" alt="Yummy Taco" >
          </a>
        </transition>
        <div class="course__text">
          <p class="">
            <a href="https://www.theodinproject.com" target="_blank"> The Odin Project
            </a> is where my web development education currently is.
          </p>
          <p>It's an open source full-stack curriculum that covers from the very basics like setting up your local development environment, to building and deploying a GitHub clone.</p>
          <p>It has a hands-on approach where learning by making is the main idea, reinforcing every bit of the plentiful theory it offers.</p>
          <p>I went through the  3/5 of curriculum in two months, almost every day, learning the in and outs of web development.</p>
          <p>Till now I build all the required projects, which You can look at my
            <a href="https://github.com/nijepa?tab=projects" target="_blank"> GitHub repositories
            </a>.
          </p>
          <p>My wish is to finish it in one more month, to round my knowledge as a full-stack developer.</p>
        </div>
      </div>
    </transition>

    <transition name="right">
      <div class="edu1" v-on:load="onApeared" v-show="apeared">
        <a href="https://www.udemy.com" target="_blank" class="course">
          <h1>Udemy</h1>
        </a>
        <div class="course__text">
          <p class="">
            <a href="https://www.udemy.com" target="_blank"> Udemy
            </a> is global marketplace for learning and instruction.
          </p>
          <p>From the many courses Udemy offers, i took
            <a href="https://www.udemy.com/certificate/UC-b09514c8-db37-4a92-9acc-3322601b79da/"
                target="_blank">Laravel API Development & Vue JS SPA from Scratch
            </a> .
          </p>
          <p>It was learning how to develop the required API to power a simple address book project named
            <a href="https://github.com/nijepa/jot" target="_blank"> Jot</a>.
          </p>
          <p>
            <a href="https://github.com/nijepa/jot" target="_blank">Jot
            </a> is a SPA written in Vue JS using the TailwindCSS front-end framework.
          </p>
          <p>From the back-end part, it was RESTful API Development with Laravel.</p>
          <p>It was 5 and a half hours and 50 lessons long journey that left me nice small project and make more hunger for more knowledge.</p>
        </div>
        <transition name="rise" >
          <a class="" href="https://www.udemy.com" target="_blank">
            <img style="display: block;" class="course__img" :src="getSvgUrl('udemy-logo')" alt="Yummy Taco"
                  v-on:load="onApeared" v-show="apeared">
          </a>
        </transition>
      </div>
    </transition>

    <transition name="rise">
      <div class="edu" v-on:load="onApeared" v-show="apeared">
        <a href="https://www.freecodecamp.org/" target="_blank" class="course">
          <h1>freeCodeCamp</h1>
        </a>
        <a href="https://www.freecodecamp.org/" target="_blank">
          <img style="display: block;" class="course__img" :src="getSvgUrl('freecodecamp-logo')" alt="Yummy Taco" >
        </a>
        <div class="course__text">
          <p class="">
            <a href="https://www.freecodecamp.org/" target="_blank"> freeCodeCamp
            </a> helps you learn to code by building projects.
          </p>
          <p>I learn to code by completing coding challenges and building projects.</p>
          <p>Also I earned couple of verified certifications along the way,
            <a href="https://www.freecodecamp.org/certification/fcce8b7e137-31ae-4bb5-915f-a76095b3ad2d/responsive-web-design"
                target="_blank"> Responsive Web Design
            </a> and JavaScript Algorithms and Data Structures.
          </p>
          <p>Each certification takes around 300 hours of dedicated learning.</p>
          <p>These certifications are completely self-paced, so take as long as you need.</p>
          <p>This journey definitely make turn in my career, and draw my future path as a web developer.</p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  export default {

    name: 'Education',

    data() {
      return {
        title: '<[{ EDUCATION }]/>',
        courses: [{title: 'The Odin Project',
                  desc: `The Odin Project is where my web development story started.

                  It's an open source full-stack curriculum that covers from the very basics like setting up your local development environment, to building and deploying a Twitter clone.
                  It has a hands-on approach where learning by making is the main idea, reinforcing every bit of the plentiful theory it offers.

                  I went through the curriculum in ten months with an average of five hours per day, Monday to Sunday, meeting a lot of amazing people in the process and learning the in and outs of web development.
                  Later on I was lucky enough to be offered joining the project as a moderator.

                  Since then I help to mantain the repositories checking on pull requests, solving student's questions and issues on the Discord chat rooms and keeping an eye on the forum.`,
                  image: 'odin-logo',
                  link: 'https://www.theodinproject.com'},
                  {title: 'Udemy',
                  desc: `The Odin Project is where my web development story started.

                  It's an open source full-stack curriculum that covers from the very basics like setting up your local development environment, to building and deploying a Twitter clone.
                  It has a hands-on approach where learning by making is the main idea, reinforcing every bit of the plentiful theory it offers.

                  I went through the curriculum in ten months with an average of five hours per day, Monday to Sunday, meeting a lot of amazing people in the process and learning the in and outs of web development.
                  Later on I was lucky enough to be offered joining the project as a moderator.

                  Since then I help to mantain the repositories checking on pull requests, solving student's questions and issues on the Discord chat rooms and keeping an eye on the forum.`,
                  image: 'udemy-logo',
                  link: 'https://www.udemy.com'},
                  {title: 'freeCodeCamp',
                  desc: `The Odin Project is where my web development story started.

                  It's an open source full-stack curriculum that covers from the very basics like setting up your local development environment, to building and deploying a Twitter clone.
                  It has a hands-on approach where learning by making is the main idea, reinforcing every bit of the plentiful theory it offers.

                  I went through the curriculum in ten months with an average of five hours per day, Monday to Sunday, meeting a lot of amazing people in the process and learning the in and outs of web development.
                  Later on I was lucky enough to be offered joining the project as a moderator.

                  Since then I help to mantain the repositories checking on pull requests, solving student's questions and issues on the Discord chat rooms and keeping an eye on the forum.`,
                  image: 'freecodecamp-logo',
                  link: 'https://www.freecodecamp.org/'}],
        apeared: false
      }
    },

    methods: {

      getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg')
      },

      onApeared() {
        this.apeared = true;
      }
    },

    mounted() {
      this.onApeared();
    }
  }
</script>

<style>
/* EDUCATION */

  .edu {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-items: center;
    align-items: center;
    grid-template-areas: "title title"
                          "desc image";
    margin-top: 20px;
    /* background-color: rgba(255, 255, 255, 0.7); */
    background: linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent);
    border-top-left-radius: .3em;
  }

  .edu1 {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
    grid-template-areas: "title title"
                          "image desc";
    margin-top: 20px;
    /* background-color: rgba(255, 255, 255, 0.7); */
    background: linear-gradient(to left, rgba(255, 255, 255, 0.7), transparent);
    border-top-right-radius: .3em;
  }

  .course {
    text-decoration: underline;
    grid-area: title;
    margin: 20px 0;
  }

  .course__img {
    grid-area: image;
    height: 70px;
    align-self: center;
    margin-right: 5px;
    cursor: pointer;
    transition: 1s ease all;
  }

  .course__img:hover {
    transform: scale(1.1);
  }

  .course__text {
    grid-area: desc;
    padding: 10px;
    /* background-color: rgba(255, 255, 255, 0.5); */
  }

  .course__white {
    grid-area: image;
    /* background-color: rgba(255, 255, 255, 0.9); */
  }

  .odin {
    height: 150px;
  }

  #about {
    margin: 30px;
  }

  @media (max-width: 700px) {
    .edu, .edu1 {
      grid-template-areas:
      "title title"
      "image image"
      "desc desc"
    }
    .course__img {
      height: 30px;
      width: auto;
    }
  }

</style>
