<template>
  <div class="homez">
    <div @wheel="handleStart">
      <transition name="slide-fade" mode="out-in">
        <Start @start-app="handleStart" />
      </transition>
    </div>
  </div>
</template>

<script>
import Start from "@/components/Start.vue";

export default {
  name: "Home",

  components: {
    Start,
  },

  methods: {
    async handleStart() {
      this.$router.push("/aboutme");
    },
  },
};
</script>
