<template>
  <div class="homez">
    
    <div @wheel="handleStart">
      <transition name="slide-fade">
        <Start v-if="!started" @start-app="handleStart" />
      </transition>
    </div>

    <transition name="slide-fade">
      <Navigation v-if="started" @nav-click="handleNav" />
    </transition>

    <div class="content">
      <transition name="slide-fade">
        <about-me v-if="about" />
      </transition>

      <transition name="slide-fade">
        <projects v-if="project" />
      </transition>

      <transition name="slide-fade">
        <education v-if="education" />
      </transition>
      
      <transition name="slide-fade">
        <touch v-if="contact" />
      </transition>
    </div>

    <transition name="slide-fade">
      <Footer v-if="started" />
    </transition>
    
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
      Start, 
      Navigation, 
      AboutMe, 
      Projects, 
      Touch, 
      Footer, 
      Education
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
        //console.log(event.target.id)
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
      },

      clearViews() {
        this.about = false;
        this.project = false;
        this.education = false;
        this.contact = false;
      },
      
/*       handleWheel() {
        window.addEventListener('wheel', (event) => {
            if (event.deltaY < 0) {
                console.log("scrolling up")
                this.started = true;
                this.contact = true;
            } else if (event.deltaY > 0) {
                console.log("scrolling down")
                this.started = true;
                this.about = true;
            }
        })
      } */
    }
  }
</script>
