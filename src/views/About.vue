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
      console.log(event.target.id)
      this.$router("/" + event.target.id);
    },
  },

  created() {
    //this.$router.push('/aboutme');
  }
};
</script>
