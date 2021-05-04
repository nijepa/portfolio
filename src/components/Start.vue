<template>
  <div class="wrapper">
    <div id="bc" class="big-circles">
      <div class="big-circle"></div>
      <div class="big-circle"></div>
      <div class="big-circle"></div>
    </div>

    <section id="home">
      <div id="front" class="slide-wrapper">
        <div class="smallcircles">
          <div class="small-circle"></div>
          <div class="small-circle"></div>
          <div class="small-circle"></div>
        </div>

        <div
          class="cover-wrapper text-center"
          id="home-content"
          v-on:click="seek"
        >
          <div class="cover-wrapper__inner">
            <div class="cover-wrapper__container">
              <div class="cover__caption">
                <h1 id="myname">Nikola Pavićević</h1>
                <h3>Full Stack Web Developer</h3>
              </div>
              <a id="down" @click="startApp" href="">More</a>
              <!-- <button class="btn btn-primary btn-sm" @click.prevent="playSound(getAudioUrl('1976_Tommy_McCook_Prophets_Death_Trap'))">
                <span class="fa fa-play-circle-o">tzuttrz</span>
              </button> -->
            </div>

            <div
              class="music__btn"
              @click.prevent="isPlaying ? pause(track) : play(track)"
            >
              <svg
                v-on:click.prevent="playing = !playing"
                v-if="isPlaying"
                id="Capa_1"
                x="0px"
                y="0px"
                :class="isPlaying ? 'play__m Capa_1' : 'Capa_1'"
                viewBox="0 0 52.821 52.821"
                style="enable-background:new 0 0 52.821 52.821;"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M51.82,19.074c-1.488-5.344-4.965-10.164-9.608-13.189C37.292,2.68,30.86,1.717,25.106,1.588
                    C17.071,1.404,6.893,4.49,2.94,12.152c-0.329,0.637,0.64,1.184,0.969,0.547c2.801-5.43,9.491-8.566,15.263-9.594
                    c6.209-1.104,12.998-0.236,18.873,1.955c6.134,2.287,10.393,7.537,12.486,13.611c2.33,6.758,1.04,13.488-2.679,19.424
                    c-7.678,12.252-26.522,16.229-37.982,6.943c-5.25-4.254-8.674-9.945-8.74-16.752c-0.039-4.012,0.743-8.492,2.746-12.012
                    c0.621-1.09,1.455-2.024,2.396-2.867c0.014-0.219,0.03-0.436,0.045-0.652c-0.109-0.139-0.202-0.289-0.25-0.475
                    c-0.005-0.021-0.004-0.037-0.009-0.059c-0.572,0.481-1.126,0.986-1.65,1.529c-2.291,2.371-3.194,5.66-3.832,8.801
                    c-1.268,6.24-0.515,12.074,3.063,17.346c3.063,4.514,7.787,8.715,13.131,10.182c6.42,1.762,13.123,1.613,19.198-1.108
                    c2.749-1.23,5.729-2.438,8.039-4.424c2.833-2.438,4.961-5.881,6.679-9.156C53.305,30.399,53.303,24.397,51.82,19.074z"
                  />
                  <path
                    d="M17.736,31.85c0.103,1.15,0.121,3.08,1.325,3.598c0.051,0.066,0.105,0.127,0.167,0.174
                    c1.198,0.902,2.868-0.504,3.876-1.109c2.797-1.674,12.586-8.037,14.039-10.277c0.151-0.234,0.098-0.455-0.046-0.609
                    c-0.01-0.16-0.081-0.318-0.258-0.428c-1.622-0.992-8.87-4.297-10.89-5.045c-1.044-0.389-5.593-2.34-6.212-2.355
                    c-2.373-1.525-2.021,5.525-2.033,6.152C17.639,25.235,17.444,28.574,17.736,31.85z M20.96,25.033
                    c-0.088,0.039-0.162,0.102-0.217,0.182c-0.004-0.299-0.009-0.596-0.011-0.891c0.096,0.055,0.197,0.104,0.298,0.154
                    C21.009,24.66,20.984,24.846,20.96,25.033z M21.167,29.695c0.063-0.248,0.151-0.498,0.257-0.748
                    c1.583-0.371,3.088-1.146,4.634-1.645c0.754-0.207,1.509-0.414,2.259-0.633C25.981,27.764,23.595,28.74,21.167,29.695z
                    M24.587,25.762c-0.18,0.082-0.362,0.162-0.539,0.25c-0.158-0.098-0.319-0.174-0.483-0.244
                    C23.905,25.758,24.246,25.754,24.587,25.762z M24.108,24.285c0.023-0.014,0.048-0.025,0.074-0.037
                    c0.642,0.137,1.284,0.231,1.944,0.24c0.459,0.055,0.918,0.113,1.378,0.166c-0.044,0.016-0.088,0.029-0.133,0.045
                    C26.401,24.598,25.23,24.488,24.108,24.285z M28.874,23.106c-0.761-0.27-1.523-0.549-2.291-0.854
                    c-1.265-0.502-2.525-0.859-3.846-1.17c-0.413-0.096-0.753-0.26-1.052-0.465C24.175,21.008,26.571,21.971,28.874,23.106z
                    M22.896,22.258c-0.75-0.072-1.509-0.107-2.278-0.105c-0.026-0.297-0.056-0.592-0.085-0.889
                    C21.281,21.785,22.06,22.047,22.896,22.258z"
                  />
                </g>
              </svg>
              <svg
                v-on:click.prevent="playing = !playing"
                v-else
                class="Capa_1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512;"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,482.743
                        C130.974,482.743,29.257,381.026,29.257,256S130.974,29.257,256,29.257S482.743,130.974,482.743,256S381.026,482.743,256,482.743z
                        "
                  />
                  <path
                    d="M266.243,416.5c-8.078,0-14.629,6.557-14.629,14.636c0,8.079,6.551,14.629,14.629,14.629s14.629-6.551,14.629-14.629
                        v-0.013C280.872,423.044,274.321,416.5,266.243,416.5z"
                  />
                  <path
                    d="M432.599,248.117c-8.078,0-14.629,6.551-14.629,14.629c0,67.634-43.33,126.623-107.82,146.786
                        c-7.711,2.409-12.007,10.616-9.596,18.327c1.956,6.257,7.728,10.268,13.957,10.268c1.445,0,2.917-0.216,4.37-0.671
                        c36.419-11.385,69.113-34.578,92.058-65.3c23.741-31.792,36.289-69.625,36.289-109.409
                        C447.228,254.667,440.677,248.117,432.599,248.117z"
                  />
                  <path
                    d="M225.344,153.6h-57.116c-8.078,0-14.629,6.551-14.629,14.629v175.543c0,8.078,6.551,14.629,14.629,14.629h57.116
                        c8.078,0,14.629-6.551,14.629-14.629V168.229C239.973,160.151,233.422,153.6,225.344,153.6z M210.716,329.143h-27.859V182.857
                        h27.859V329.143z"
                  />
                  <path
                    d="M340.878,153.6h-57.116c-8.078,0-14.629,6.551-14.629,14.629v175.543c0,8.078,6.551,14.629,14.629,14.629h57.116
                        c8.079,0,14.629-6.551,14.629-14.629V168.229C355.506,160.151,348.956,153.6,340.878,153.6z M326.249,329.143h-27.859V182.857
                        h27.859V329.143z"
                  />
                </g>
              </svg>

              <div id="seek">
                <div class="player-progress" title="Seek">
                  <div
                    :style="{ width: this.percentComplete + '%' }"
                    class="player-seeker"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Start",

  props: {
    method: { type: Function },
  },

  data() {
    return {
      isPlaying: false,
      track: null,
      currentSeconds: 0,
      durationSeconds: 0,
      loaded: true,
      audio: undefined,
      playing: false,
    };
  },

  mounted() {
    this.track = new Audio(
      this.getAudioUrl("1976_Tommy_McCook_Prophets_Death_Trap")
    );
    this.audio = this.getAudioUrl("1976_Tommy_McCook_Prophets_Death_Trap");
    this.track.addEventListener("timeupdate", this.update);
  },

  computed: {
    percentComplete() {
      return parseInt(
        (parseInt(this.currentSeconds) / parseInt(this.durationSeconds)) * 100
      );
    },
  },

  watch: {
    playing(value) {
      if (value) {
        return this.track.play();
      }
      this.track.pause();
    },
  },

  methods: {
    getAudioUrl(track) {
      return require("../assets/audio/" + track + ".mp3");
    },

    startApp() {
      this.$emit("start-app", true);
      //this.$router.push('/about');
    },

    play(audio) {
      console.log(this.track.duration);
      this.isPlaying = true;
      this.playing = true;
      audio.play();
      this.durationSeconds = parseInt(this.track.duration);
    },

    pause(audio) {
      this.isPlaying = false;
      this.playing = false;
      if (this.percentComplete === 100) {
        this.durationSeconds = 0;
        this.play();
      } else {
        audio.pause();
      }
    },

    seek(e) {
      if (!this.loaded) return;
      const el = e.target.getBoundingClientRect();
      const seekPos = (e.clientX - el.left) / el.width;
      //console.log(seekPos)
      this.track.currentTime = parseInt(this.track.duration * seekPos);
    },

    update(e) {
      console.log(e);
      this.currentSeconds = parseInt(this.track.currentTime);
      if (this.percentComplete === 100) {
        this.currentSeconds = 0;
        this.playing = false;
        this.isPlaying = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
/* START */
a {
  color: #5517e6;
  font-size: 15px;
}

#down {
  position: relative;
  z-index: 11111111;
}

.Capa_1 {
  width: 20px;
  height: auto;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 11111111;
}

.Capa_1:hover {
  fill: var(--yel);
  transform: scale(1.3);
  z-index: 11111111;
}

/*   .play__m {
    fill: var(--yellow);
  } */

.cover__caption {
  margin-bottom: 15px;
  border-radius: 5px;
  border: 2px double black;
  padding: 10px;
  /*    box-shadow:
    0 0 0 5px hsl(217, 89%, 48%), */
  /*   0 0 0 10px hsl(0, 0%, 60%),
    0 0 0 15px hsl(0, 0%, 40%), */
}

.player-progress {
  background-color: var(--blue);
  cursor: pointer;
  height: 50%;
  min-width: 200px;
  /* position: relative;*/
}

.player-seeker {
  background-color: var(--blue);
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  opacity: 0.3;
  z-index: 2;
}
</style>
