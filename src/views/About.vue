<template>
  <div class="homez">

      <Navigation @nav-click="handleNav" />
    
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
    
      <Footer />

  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",

  components: {
    Navigation,
    Footer,
  },

  methods: {
    handleNav(event) {
      //console.log(event.target.id)
      this.$router('/'+event.target.id)
/*       switch (event.target.id) {
        case "home":
          this.clearViews();
          this.started = false;
          break;
        case "abouts":
          this.clearViews();
          this.about = true;
          break;
        case "tools":
          this.clearViews();
          this.project = true;
          break;
        case "education":
          this.clearViews();
          this.education = true;
          break;
        case "contacts":
          this.clearViews();
          this.contact = true;
          break;
      } */
    },
  },
};
</script>
