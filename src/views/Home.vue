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
  // @ is an alias to /src
  import Start from '@/components/Start.vue'

  export default {

    name: 'Home',

    components: {
      Start, 
    },

    methods: {

      async handleStart() {
        //this.started = true;
        //await this.setIsStarted(true)
        this.$router.push('/aboutme')
        //this.about = true;
      },
    },
  }
</script>
