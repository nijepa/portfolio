<template>
  <div class="education">
    <h2 id="about">{{title}}</h2>
    <!-- <div class="edu" v-for="course in courses" :key="course">
      <h1 class="course">{{course.title}}</h1>
      <img style="display: block;" class="course__img" :src="require('../assets/images/' + course.image + '.svg')" alt="Yummy Taco" >
      <p class="course__text">{{course.desc}}</p>
    </div> -->
    <div class="edu">
      <h1 class="course">The Odin Project</h1>
      <div class="course__white">
<img style="display: block;" class="course__img odin" :src="require('../assets/images/odin-logo.svg')" alt="Yummy Taco" >
      </div>
      
      
      <div class="course__text">
        <p class=""><a href="https://www.theodinproject.com" target="_blank"> The Odin Project </a> is where my web development education currently is.</p>
        <p>It's an open source full-stack curriculum that covers from the very basics like setting up your local development environment, to building and deploying a GitHub clone.</p>
        <p>It has a hands-on approach where learning by making is the main idea, reinforcing every bit of the plentiful theory it offers.</p>
        <p>I went through the  3/5 of curriculum in two months, almost every day, learning the in and outs of web development.</p>
        <p>Till now I build all the required projects, which You can look at my <a href="https://github.com/nijepa?tab=projects" target="_blank"> GitHub repositories</a>.</p>
        <p>My wish is to finish it in one more month, to round my knowledge as a full-stack developer.</p>
      </div>
    </div>

    <div class="edu1">
      <h1 class="course">Udemy</h1>
      
      <div class="course__text">
        <p class=""><a href="https://www.udemy.com"> Udemy </a> is global marketplace for learning and instruction.</p>
        <p>From the many courses Udemy offers, i took <a href="https://www.udemy.com/course/laravel-api-development-vue-js-spa-from-scratch/learn/lecture/15413190?start=0#overview">Laravel API Development & Vue JS SPA from Scratch</a> .</p>
        <p>It was learning how to develop the required API to power a simple address book project named <a href="https://github.com/nijepa/jot"> Jot</a>.</p>
        <p><a href="https://github.com/nijepa/jot">Jot</a> is a SPA written in Vue JS using the TailwindCSS front-end framework.</p>
        <p>From the back-end part, it was RESTful API Development with Laravel.</p>
        <p>It was 5 and a half hours and 50 lessons long journey that left me nice small project and make more hunger for more knowledge.</p>
      </div>
      <img style="display: block;" class="course__img" :src="require('../assets/images/udemy-logo.svg')" alt="Yummy Taco" >
    </div>

    <div class="edu">
      <h1 class="course">freeCodeCamp</h1>
      <img style="display: block;" class="course__img" :src="require('../assets/images/freecodecamp-logo.svg')" alt="Yummy Taco" >
      
      <div class="course__text">
        <p class=""><a href="https://www.freecodecamp.org/"> freeCodeCamp </a> helps you learn to code by building projects.</p>
        <p>I learn to code by completing coding challenges and building projects.</p>
        <p>Also I earned couple of verified certifications along the way, <a href="https://www.freecodecamp.org/certification/fcce8b7e137-31ae-4bb5-915f-a76095b3ad2d/responsive-web-design"> Responsive Web Design </a> and JavaScript Algorithms and Data Structures.</p>
        <p>Each certification takes around 300 hours of dedicated learning.</p>
        <p>These certifications are completely self-paced, so take as long as you need.</p>
        <p>This journey deafinetly make turn in my carear and draw my future path as a web developer.</p>
      </div>
    </div>
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
                image: 'odin-logo'},
                {title: 'Udemy', 
                desc: `The Odin Project is where my web development story started.

                It's an open source full-stack curriculum that covers from the very basics like setting up your local development environment, to building and deploying a Twitter clone.
                It has a hands-on approach where learning by making is the main idea, reinforcing every bit of the plentiful theory it offers.

                I went through the curriculum in ten months with an average of five hours per day, Monday to Sunday, meeting a lot of amazing people in the process and learning the in and outs of web development.
                Later on I was lucky enough to be offered joining the project as a moderator.

                Since then I help to mantain the repositories checking on pull requests, solving student's questions and issues on the Discord chat rooms and keeping an eye on the forum.`,
                image: 'udemy-logo'},
                {title: 'freeCodeCamp', 
                desc: `The Odin Project is where my web development story started.

                It's an open source full-stack curriculum that covers from the very basics like setting up your local development environment, to building and deploying a Twitter clone.
                It has a hands-on approach where learning by making is the main idea, reinforcing every bit of the plentiful theory it offers.

                I went through the curriculum in ten months with an average of five hours per day, Monday to Sunday, meeting a lot of amazing people in the process and learning the in and outs of web development.
                Later on I was lucky enough to be offered joining the project as a moderator.

                Since then I help to mantain the repositories checking on pull requests, solving student's questions and issues on the Discord chat rooms and keeping an eye on the forum.`,
                image: 'freecodecamp-logo'}]
    }
  }
}
</script>

<style scoped>
  .edu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    grid-template-areas: "title title"
                          "desc image";
    /* margin: 3rem; */
    /* border-top: 2px solid var(--black); */
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .edu1 {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
    grid-template-areas: "title title"
                          "image desc";
    /* margin: 3rem; */
    /* border-top: 2px solid var(--black); */
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .course {
    text-decoration: underline;
    grid-area: title;
    margin: 20px 0;
  }
  .course__img {
    grid-area: image;
    height: 70px;
    
  }
  .course__text {
    grid-area: desc;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .course__white {
background-color: rgba(255, 255, 255, 0.9);
  }
  .odin {
    height: 150px;
  }
  @media (max-width: 700px) {
  .edu, .edu1 {
    grid-template-areas: 
    "title title"
    "image image"
    "desc desc"
  }
  .course__img {
    height: 40px;
    width: auto;
  }
}

</style>