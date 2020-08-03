<template>
  <div class="homez">
    
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <v-stage  @wheel="handleStart">
      <transition name="slide-fade">
      <Start v-if="!started" @start-app="handleStart" />
      </transition>
    </v-stage>
    <Navigation v-if="started" @nav-click="handleNav" />
    <div class="content">
      <about-me v-if="about" />  
      <projects v-if="project" />
      <education v-if="education" />
      <touch v-if="contact" />
    </div>
    <Footer v-if="started" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Start from '@/components/Start.vue'
import Navigation from '@/components/Navigation.vue'
import AboutMe from '@/components/AboutMe.vue'
import Projects from '@/components/Projects.vue'
import Education from '@/components/Education.vue'
import Touch from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Start, Navigation, AboutMe, Projects, Touch, Footer, Education
  },
  data() {
    return {
      started: false,
      about: false,
      project: false,
      education: false,
      contact: false
    }
  },
  methods: {
    handleStart() {
      this.started = true;
      this.about = true;
    },
    handleNav(event) {
      console.log(event.target.id)
      switch (event.target.id) {
        case 'home':
          this.clearViews();
          this.started = false;
          break;
        case 'abouts':
          this.clearViews();
          this.about = true;
          break;
        case 'tools':
          this.clearViews();
          this.project = true;
          break;
        case 'education':
          this.clearViews();
          this.education = true;
          break;
        case 'contacts':
          this.clearViews();
          this.contact = true;
          break;
      }
      // this.started = true;
    },
    clearViews() {
      this.about = false;
      this.project = false;
      this.education = false;
      this.contact = false;
    },
    handleWheel() {
      window.addEventListener('wheel', function(event) {
          if (event.deltaY < 0) {
              console.log("scrolling up")
          } else if (event.deltaY > 0) {
              console.log("scrolling down")
              this.handleStart
          }
      })
    }
  }
}
</script>
