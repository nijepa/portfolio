<template>
  <div class="homez">
    <div @wheel="handleStart">
      <Start @start-app="handleStart" />
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
    handleStart() {
      this.$router.push("/aboutme");
    },
  },
};
</script>
