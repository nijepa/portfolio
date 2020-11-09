<template>
<!-- <transition name="slide-fade"> -->
  <div class="pro">

<!-- PROJECT DESCRIPTION -->
    <h2 id="about"> {{title}} </h2>
    <section class="about" >
      <transition name="left">
        <div :key="currentProjectData.name" class="about__details" v-on:load="onApeared" v-show="apeared">
          <h3>{{currentProjectData.name}}</h3>
          <p>{{currentProjectData.title}}</p>
          <p>{{currentProjectData.desc}}</p>
          <p>Some of its features are:</p>
          <ul v-for="(feature, id) in currentProjectData.features" :key="id">
            <li>{{feature}}</li>
          </ul>
          <div class="tools__used">
            <div v-for="tool in currentProjectData.tools" :key="tool">
              <img :src="getSvgUrl(tool)" alt="o" class="tool">
            </div>
          </div>
          <div class="btns">
            <a class="lin links" :href="currentProjectData.online" target="_blank">Demo →
              <img :src="getImgUrl('live-event')" alt="">
            </a>
            <a class="lin links" :href="currentProjectData.source" target="_blank">Source →
              <img :src="getSvgUrl('github-octocat')" alt="">
            </a>
          </div>
        </div>
      </transition>
<!-- END PROJECT DESCRIPTION -->

<!-- SLIDES -->
      <transition name="right">
        <div class="slides" v-on:load="onApeared" v-show="apeared">
          <svg @click="changeSlide('left')"
                :class="togglePrevArrow === true ? '' : 'toggle_prev__arrow'"
                id="left" class="arrow" viewBox="0 0 408.759 408.759" y="0px" x="0px">
            <g transform="matrix(-1,0,0,1,408.759,0)" id="g150">
              <path   id="path138"  d="M 204.383,408.759 C 146.262,408.759 90.709,383.891 51.966,340.532 18.46,303.057 0.005,254.703 0.005,204.379 0.005,91.683 91.688,0 204.383,0 c 50.319,0 98.674,18.453 136.164,51.964 43.346,38.761 68.207,94.315 68.207,152.415 10e-4,112.695 -91.68,204.38 -204.371,204.38"
              style="fill:#ffbe00" />
              <path id="path140" d="m 377.755,204.379 c 0,18.08 -2.77,35.52 -7.909,51.899 -3.61,11.551 -8.4,22.569 -14.23,32.931 -23.99,42.679 -65.511,74.179 -114.801,84.71 -6.229,1.33 -12.588,2.329 -19.05,2.969 -5.719,0.58 -11.51,0.87 -17.38,0.87 -51.39,0 -97.559,-22.361 -129.299,-57.881 -0.26,-0.29 -0.521,-0.589 -0.79,-0.879 -26.95,-30.56 -43.29,-70.681 -43.29,-114.62 0,-95.751 77.621,-173.381 173.379,-173.381 43.951,0 84.071,16.35 114.631,43.29 0.29,0.27 0.589,0.53 0.879,0.79 35.511,31.761 57.86,77.912 57.86,129.302" />
              <path id="path142" d="m 74.364,319.072 c 3.671,4.157 7.537,8.136 11.587,11.924 -3.784,-3.542 -7.41,-7.252 -10.864,-11.118 -0.239,-0.266 -0.478,-0.539 -0.723,-0.806 M 52.683,288.39 c 0.004,0.008 0.005,0.01 0.01,0.018 -0.004,-0.007 -0.007,-0.011 -0.01,-0.018 m -0.289,-0.522 c 0.013,0.024 0.028,0.05 0.041,0.074 -0.014,-0.024 -0.028,-0.05 -0.041,-0.074 m -0.445,-0.813 c 0.02,0.037 0.042,0.078 0.062,0.115 -0.02,-0.038 -0.042,-0.078 -0.062,-0.115 m -0.258,-0.477 c 0.022,0.04 0.044,0.082 0.066,0.122 -0.021,-0.039 -0.045,-0.082 -0.066,-0.122 M 51.434,286.1 c 0.049,0.091 0.097,0.181 0.146,0.272 -0.05,-0.092 -0.096,-0.179 -0.146,-0.272 m -0.198,-0.371 c 0.033,0.062 0.068,0.128 0.101,0.19 -0.035,-0.065 -0.067,-0.126 -0.101,-0.19 m -0.244,-0.46 c 0.04,0.075 0.082,0.156 0.122,0.231 -0.041,-0.078 -0.081,-0.153 -0.122,-0.231 m -0.243,-0.461 c 0.053,0.102 0.107,0.205 0.161,0.306 -0.053,-0.101 -0.107,-0.203 -0.161,-0.306 m -0.21,-0.402 c 0.045,0.086 0.09,0.173 0.135,0.259 -0.045,-0.087 -0.09,-0.173 -0.135,-0.259 m -0.228,-0.439 c 0.056,0.108 0.112,0.215 0.168,0.323 -0.056,-0.107 -0.113,-0.216 -0.168,-0.323 m -0.24,-0.465 c 0.06,0.116 0.116,0.226 0.176,0.342 -0.058,-0.113 -0.118,-0.228 -0.176,-0.342 m -0.203,-0.396 c 0.051,0.1 0.105,0.204 0.156,0.304 -0.053,-0.103 -0.103,-0.201 -0.156,-0.304 m -0.224,-0.44 c 0.06,0.119 0.119,0.234 0.18,0.353 -0.06,-0.118 -0.119,-0.234 -0.18,-0.353 m -0.233,-0.461 c 0.06,0.119 0.123,0.244 0.183,0.363 -0.06,-0.121 -0.122,-0.242 -0.183,-0.363 M 49.2,281.784 c 0.058,0.117 0.118,0.236 0.177,0.352 -0.059,-0.116 -0.118,-0.235 -0.177,-0.352 m -0.212,-0.427 c 0.063,0.128 0.126,0.254 0.19,0.382 -0.064,-0.128 -0.127,-0.254 -0.19,-0.382 m -0.231,-0.466 c 0.064,0.131 0.13,0.263 0.194,0.393 -0.065,-0.133 -0.128,-0.26 -0.194,-0.393 m -0.21,-0.429 c 0.068,0.139 0.137,0.28 0.205,0.419 -0.069,-0.14 -0.137,-0.279 -0.205,-0.419 m -0.207,-0.425 c 0.068,0.139 0.134,0.275 0.202,0.414 -0.069,-0.139 -0.134,-0.273 -0.202,-0.414 m -0.633,-1.316 c 0.203,0.428 0.41,0.857 0.616,1.283 -0.207,-0.427 -0.412,-0.853 -0.616,-1.283 M 152.31,38.954 C 81.994,61.062 31.004,126.759 31.004,204.37 c 0,26.605 5.991,51.812 16.698,74.34 C 36.995,256.182 31.006,230.98 31.006,204.379 31.006,126.768 81.994,61.065 152.31,38.954" />
              <path id="path144" d="m 204.383,30.999 c -18.142,0 -35.638,2.787 -52.073,7.955 -70.316,22.111 -121.304,87.814 -121.304,165.425 0,26.601 5.989,51.803 16.696,74.331 0.003,0.005 0.003,0.006 0.005,0.012 0.204,0.429 0.409,0.856 0.616,1.283 0.005,0.011 0.011,0.022 0.016,0.033 0.068,0.14 0.133,0.274 0.202,0.414 0.001,0.003 0.004,0.008 0.005,0.01 0.068,0.14 0.137,0.279 0.205,0.419 0.001,0.003 0.004,0.007 0.005,0.01 0.065,0.133 0.129,0.26 0.194,0.393 0.012,0.024 0.024,0.049 0.036,0.073 0.064,0.128 0.126,0.254 0.19,0.382 0.008,0.016 0.015,0.029 0.023,0.045 0.058,0.117 0.118,0.236 0.177,0.352 0.012,0.024 0.022,0.044 0.034,0.068 0.061,0.121 0.122,0.242 0.183,0.363 0.016,0.032 0.033,0.066 0.05,0.098 0.06,0.119 0.119,0.235 0.18,0.353 0.015,0.03 0.029,0.057 0.044,0.086 0.052,0.103 0.103,0.202 0.156,0.304 0.015,0.03 0.032,0.062 0.047,0.092 0.058,0.114 0.118,0.229 0.176,0.342 0.021,0.04 0.042,0.082 0.063,0.123 0.055,0.107 0.112,0.216 0.168,0.323 0.02,0.038 0.041,0.078 0.06,0.116 0.045,0.087 0.09,0.172 0.135,0.259 0.025,0.048 0.05,0.095 0.075,0.144 0.054,0.102 0.107,0.204 0.161,0.306 0.028,0.054 0.053,0.101 0.082,0.155 0.041,0.078 0.081,0.153 0.122,0.231 0.041,0.078 0.08,0.151 0.122,0.229 0.034,0.064 0.067,0.125 0.101,0.19 0.033,0.061 0.064,0.12 0.097,0.182 0.05,0.093 0.096,0.179 0.146,0.272 0.037,0.069 0.074,0.137 0.111,0.206 0.021,0.04 0.045,0.083 0.066,0.122 0.065,0.12 0.127,0.234 0.192,0.354 0.02,0.037 0.042,0.077 0.062,0.115 0.127,0.234 0.254,0.465 0.382,0.698 0.013,0.024 0.027,0.05 0.041,0.074 0.082,0.148 0.166,0.3 0.248,0.449 0.004,0.007 0.006,0.011 0.01,0.018 6.114,11.011 13.394,21.29 21.671,30.664 0.246,0.267 0.484,0.54 0.723,0.806 3.454,3.865 7.08,7.576 10.864,11.118 2.121,1.984 4.294,3.917 6.513,5.794 -25.53,-30.2 -40.919,-69.239 -40.919,-111.88 0,-95.751 77.619,-173.37 173.379,-173.37 42.631,0 81.68,15.39 111.87,40.919 -31.787,-37.59 -79.308,-61.46 -132.408,-61.46" />
              <path id="path146" d="m 264.724,198.306 -99.76,99.76 75.851,75.853 c 49.29,-10.531 90.811,-42.031 114.801,-84.71 l -84.549,-84.561" />
              <polyline id="polyline148"   points="171.307,304.405 155.751,288.847 239.949,204.648 155.751,120.45 171.307,104.892    271.061,204.648 171.307,304.405  "
              style="fill:#ffffff" />
            </g>
          </svg>
          <img :class="newSlide === true ? 'new__slide' : ''"
                :src="getImgUrl(currentProjectData.image + currentSlide) "
                :alt="currentProjectData.image"
                class="about__mockup"
                >
          <svg @click="changeSlide('right')"
                :class="toggleNextArrow === true ? '' : 'toggle_next__arrow'"
                id="right" class="arrow" viewBox="0 0 408.759 408.759" x="0px" y="0px">
            <g>
              <path style="fill:#FFBE00;" d="M204.383,408.759c-58.121,0-113.674-24.868-152.417-68.227
                C18.46,303.057,0.005,254.703,0.005,204.379C0.005,91.683,91.688,0,204.383,0c50.319,0,98.674,18.453,136.164,51.964
                c43.346,38.761,68.207,94.315,68.207,152.415C408.755,317.074,317.074,408.759,204.383,408.759"/>
              <path d="M377.755,204.379c0,18.08-2.77,35.52-7.909,51.899c-3.61,11.551-8.4,22.569-14.23,32.931
                c-23.99,42.679-65.511,74.179-114.801,84.71c-6.229,1.33-12.588,2.329-19.05,2.969c-5.719,0.58-11.51,0.87-17.38,0.87
                c-51.39,0-97.559-22.361-129.299-57.881c-0.26-0.29-0.521-0.589-0.79-0.879c-26.95-30.56-43.29-70.681-43.29-114.62
                c0-95.751,77.621-173.381,173.379-173.381c43.951,0,84.071,16.35,114.631,43.29c0.29,0.27,0.589,0.53,0.879,0.79
                C355.406,106.838,377.755,152.989,377.755,204.379"/>
              <path d="M74.364,319.072c3.671,4.157,7.537,8.136,11.587,11.924c-3.784-3.542-7.41-7.252-10.864-11.118
                C74.848,319.612,74.609,319.339,74.364,319.072 M52.683,288.39c0.004,0.008,0.005,0.01,0.01,0.018
                C52.689,288.401,52.686,288.397,52.683,288.39 M52.394,287.868c0.013,0.024,0.028,0.05,0.041,0.074
                C52.421,287.918,52.407,287.892,52.394,287.868 M51.949,287.055c0.02,0.037,0.042,0.078,0.062,0.115
                C51.991,287.132,51.969,287.092,51.949,287.055 M51.691,286.578c0.022,0.04,0.044,0.082,0.066,0.122
                C51.736,286.661,51.712,286.618,51.691,286.578 M51.434,286.1c0.049,0.091,0.097,0.181,0.146,0.272
                C51.53,286.28,51.484,286.193,51.434,286.1 M51.236,285.729c0.033,0.062,0.068,0.128,0.101,0.19
                C51.302,285.854,51.27,285.793,51.236,285.729 M50.992,285.269c0.04,0.075,0.082,0.156,0.122,0.231
                C51.073,285.422,51.033,285.347,50.992,285.269 M50.749,284.808c0.053,0.102,0.107,0.205,0.161,0.306
                C50.857,285.013,50.803,284.911,50.749,284.808 M50.539,284.406c0.045,0.086,0.09,0.173,0.135,0.259
                C50.629,284.578,50.584,284.492,50.539,284.406 M50.311,283.967c0.056,0.108,0.112,0.215,0.168,0.323
                C50.423,284.183,50.366,284.074,50.311,283.967 M50.071,283.502c0.06,0.116,0.116,0.226,0.176,0.342
                C50.189,283.731,50.129,283.616,50.071,283.502 M49.868,283.106c0.051,0.1,0.105,0.204,0.156,0.304
                C49.971,283.307,49.921,283.209,49.868,283.106 M49.644,282.666c0.06,0.119,0.119,0.234,0.18,0.353
                C49.764,282.901,49.705,282.785,49.644,282.666 M49.411,282.205c0.06,0.119,0.123,0.244,0.183,0.363
                C49.534,282.447,49.472,282.326,49.411,282.205 M49.2,281.784c0.058,0.117,0.118,0.236,0.177,0.352
                C49.318,282.02,49.259,281.901,49.2,281.784 M48.988,281.357c0.063,0.128,0.126,0.254,0.19,0.382
                C49.114,281.611,49.051,281.485,48.988,281.357 M48.757,280.891c0.064,0.131,0.13,0.263,0.194,0.393
                C48.886,281.151,48.823,281.024,48.757,280.891 M48.547,280.462c0.068,0.139,0.137,0.28,0.205,0.419
                C48.683,280.741,48.615,280.602,48.547,280.462 M48.34,280.037c0.068,0.139,0.134,0.275,0.202,0.414
                C48.473,280.312,48.408,280.178,48.34,280.037 M47.707,278.721c0.203,0.428,0.41,0.857,0.616,1.283
                C48.116,279.577,47.911,279.151,47.707,278.721 M152.31,38.954C81.994,61.062,31.004,126.759,31.004,204.37
                c0,26.605,5.991,51.812,16.698,74.34c-10.707-22.528-16.696-47.73-16.696-74.331C31.006,126.768,81.994,61.065,152.31,38.954"/>
              <path d="M204.383,30.999c-18.142,0-35.638,2.787-52.073,7.955C81.994,61.065,31.006,126.768,31.006,204.379
                c0,26.601,5.989,51.803,16.696,74.331c0.003,0.005,0.003,0.006,0.005,0.012c0.204,0.429,0.409,0.856,0.616,1.283
                c0.005,0.011,0.011,0.022,0.016,0.033c0.068,0.14,0.133,0.274,0.202,0.414c0.001,0.003,0.004,0.008,0.005,0.01
                c0.068,0.14,0.137,0.279,0.205,0.419c0.001,0.003,0.004,0.007,0.005,0.01c0.065,0.133,0.129,0.26,0.194,0.393
                c0.012,0.024,0.024,0.049,0.036,0.073c0.064,0.128,0.126,0.254,0.19,0.382c0.008,0.016,0.015,0.029,0.023,0.045
                c0.058,0.117,0.118,0.236,0.177,0.352c0.012,0.024,0.022,0.044,0.034,0.068c0.061,0.121,0.122,0.242,0.183,0.363
                c0.016,0.032,0.033,0.066,0.05,0.098c0.06,0.119,0.119,0.235,0.18,0.353c0.015,0.03,0.029,0.057,0.044,0.086
                c0.052,0.103,0.103,0.202,0.156,0.304c0.015,0.03,0.032,0.062,0.047,0.092c0.058,0.114,0.118,0.229,0.176,0.342
                c0.021,0.04,0.042,0.082,0.063,0.123c0.055,0.107,0.112,0.216,0.168,0.323c0.02,0.038,0.041,0.078,0.06,0.116
                c0.045,0.087,0.09,0.172,0.135,0.259c0.025,0.048,0.05,0.095,0.075,0.144c0.054,0.102,0.107,0.204,0.161,0.306
                c0.028,0.054,0.053,0.101,0.082,0.155c0.041,0.078,0.081,0.153,0.122,0.231c0.041,0.078,0.08,0.151,0.122,0.229
                c0.034,0.064,0.067,0.125,0.101,0.19c0.033,0.061,0.064,0.12,0.097,0.182c0.05,0.093,0.096,0.179,0.146,0.272
                c0.037,0.069,0.074,0.137,0.111,0.206c0.021,0.04,0.045,0.083,0.066,0.122c0.065,0.12,0.127,0.234,0.192,0.354
                c0.02,0.037,0.042,0.077,0.062,0.115c0.127,0.234,0.254,0.465,0.382,0.698c0.013,0.024,0.027,0.05,0.041,0.074
                c0.082,0.148,0.166,0.3,0.248,0.449c0.004,0.007,0.006,0.011,0.01,0.018c6.114,11.011,13.394,21.29,21.671,30.664
                c0.246,0.267,0.484,0.54,0.723,0.806c3.454,3.865,7.08,7.576,10.864,11.118c2.121,1.984,4.294,3.917,6.513,5.794
                c-25.53-30.2-40.919-69.239-40.919-111.88c0-95.751,77.619-173.37,173.379-173.37c42.631,0,81.68,15.39,111.87,40.919
                C305.004,54.869,257.483,30.999,204.383,30.999"/>
              <path d="M264.724,198.306l-99.76,99.76l75.851,75.853c49.29-10.531,90.811-42.031,114.801-84.71
                l-84.549-84.561"/>
              <polyline style="fill:#FFFFFF;" points="171.307,304.405 155.751,288.847 239.949,204.648 155.751,120.45 171.307,104.892
                271.061,204.648 171.307,304.405 "/>
            </g>
          </svg>
        </div>
      </transition>
    </section>
<!-- END SLIDES -->

<!-- GALLERY -->
    <h3 class="projects__title">[ Some projects ]</h3>

    <section class="gallery" id="gallery">
      <div class="img__wrap"
          :class="curProject.image === currentProject ? 'currentProject selected' : ''"
          v-for="curProject in projectsData" :key="curProject.id">
        <!-- <img class="img__img" :src="require('../assets/images/' + curProject.image + '.png')" alt=""> -->
        <transition name="rise">
          <img class="img__img" :src="getImgUrl(curProject.image)" v-bind:alt="curProject.image"
                v-on:load="onApeared" v-show="apeared">
        </transition>

        <div class="middle">
          <transition name="fall">
            <div class="img__description" @click="selectProject(curProject.image)"
                  v-on:load="onApeared" v-show="apeared">More ... &#10155;</div>
          </transition>
          <transition name="bounced">
            <p v-on:load="onApeared" v-show="apeared">{{ curProject.name }}</p>
          </transition>
        </div>
      </div>
    </section>

<!-- END GALLERY -->

  </div>
  <!-- </transition> -->
</template>

<script>
  export default {

    name: 'Projects',

    data() {
      return {
        title: '< PROJECTS />',
        imagesFolder: './assets/images/',
        projectsData :
          [{name: 'Studio 88',
            title: 'App for managing sport club for pilates',
            image: 'studio88',
            desc: 'Tracking clients, trainings, attendances, payments, expenses...',
            features: ["Tracking clients and their status",
                        'Creating training groups',
                        'Entering payments and expenses',
                        'Data saved in MongoDB',
                        'Responsive design'],
            online: 'https://nijepa.github.io/studio88_frontend/',
            source: 'https://github.com/nijepa/studio88_frontend',
            tools: ['vue', 'js', 'css3', 'nodejs', 'mongodb'],
            images: ['1', '2', '3', '4', '5', '6']
          },
          {name: 'Odin-book',
            title: 'Simple Facebook clone',
            image: 'odinbook',
            desc: 'App for creating posts, meeting and connecting with other people. Frontend made with Vue.js with Node.js and MongoDB as backend.',
            features: ['Authentication control',
                        'JWT token for persistent login',
                        'Like functionality for posts and comments',
                        'Responsive design'],
            online: 'https://nijepa.github.io/odinbook-frontend/',
            source: 'https://github.com/nijepa/odinbook-frontend',
            tools: ['vue', 'js', 'css3', 'nodejs', 'mongodb'],
            images: ['1', '2', '3', '4', '5']
          },
          {name: "Where's Waldo game",
            title: "Where's Waldo made with Vue",
            image: 'whereswaldo',
            desc: 'Chose a photo from 3 of them and try to find hidden character between many of characters.',
            features: ['A photo tagging app',
                        'Photos are stored on Firebase storage',
                        'Game data mapping positions are stored in Firebase database',
                        'Firebase also hold players scores'],
            online: 'https://nijepa.github.io/wheres-waldo/',
            source: 'https://github.com/nijepa/wheres-waldo',
            tools: ['vue', 'js', 'css3', 'firebase'],
            images: ['1', '2', '3']
          },
          {name: 'Laravel-VUE',
            title: 'Bussiness app made with VUE and Laravel',
            image: 'laravel-vue',
            desc: 'App for managing meetings and projects, and presentation site with CMS.',
            features: ['SPA app on top of API',
                        'Built in messenger, todo list',
                        'Authentication control and user menagment',
                        'Responsive design'],
            online: '',
            source: 'https://github.com/nijepa/laravel-vue',
            tools: ['vue', 'js', 'css3', 'sass', 'laravel', 'mysql'],
            images: ['1', '2', '3', '4', '5', '6']
          },
          {name: 'Battleship game',
            title: 'Battleship game made with Vue',
            image: 'battleship',
            desc: 'Battleship game, player Vs AI.',
            features: ['Simple AI for oponent',
                        'Tracking sinking ships',
                        'Shoting animations',
                        'Old fun game'],
            online: 'https://nijepa.github.io/project-battleship/',
            source: 'https://github.com/nijepa/project-battleship',
            tools: ['vue', 'js', 'css3'],
            images: ['1', '2']
          },
          {name: 'ZDE site',
            title: 'Web site made with JS and PHP',
            image: 'zde',
            desc: 'Promotion and offering servicies CMS',
            features: ['Front with ordering servicies',
                        'Back with posibility to change all site content',
                        'Made for the great guy',
                        'Responsive design'],
            online: '',
            source: 'https://github.com/nijepa/zde',
            tools: ['js', 'css3', 'php', 'mysql'],
            images: ['1', '2', '3']
          },
          {name: 'Jot',
            title: 'From Udemy course Vue & Laravel',
            image: 'jot',
            desc: 'Tracking of birthdays',
            features: ['Front styles with tallwindcss',
                        'Backend API built with Laravel',
                        'Search options',
                        'Managing users data'],
            online: '',
            source: 'https://github.com/nijepa/jot',
            tools: ['vue', 'js', 'css3', 'laravel', 'mysql'],
            images: ['1', '2', '3']
          }],
        currentProject: 'laravel-vue',
        togglePrevArrow: false,
        toggleNextArrow: true,
        newSlide: false,
        currentSlide: 1,
        slide: false,
        apeared: false,
        currentProjectData:
          {name: 'Laravel-VUE',
            title: 'Bussiness app made with VUE and Laravel',
            image: 'laravel-vue',
            desc: 'App for managing meetings and projects, and presentation site with CMS.',
            features: ['SPA app on top of API',
                        'Built in messenger, todo list',
                        'Authentication control and user menagment',
                        'Responsive design'],
            online: '',
            source: 'https://github.com/nijepa/laravel-vue',
            tools: ['vue', 'js', 'css3', 'sass', 'laravel', 'mysql'],
            images: ['1', '2', '3', '4', '5', '6']
          }
      }
    },

    methods: {
      getImgUrl(pic) {
        return require('../assets/images/' + pic + '.png')
      },
      getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg')
      },

      selectProject(project) {
        this.currentProject = project;
        this.currentProjectData = this.projectsData.find(this.checkProject);
        this.initArrows();
        this.currentSlide = 1;
        this.newSlide = true;
        this.checkArrows('left');
        setTimeout(() => this.newSlide = false, 1000);
      },

      checkProject(image) {
        return image.image === this.currentProject;
      },

      initArrows() {
        if (this.currentProjectData.images.length > 1) {
          return this.toggleNextArrow = true;
        }
        this.toggleNextArrow = false;
        this.togglePrevArrow = false;
      },

      checkArrows(direction) {
        if (direction === 'right') {
          this.currentSlide === this.currentProjectData.images.length ?
                                this.toggleNextArrow = false :
                                this.togglePrevArrow = true;
          if (this.currentProjectData.images.length > 1 ) {
            this.togglePrevArrow = true;
          }
        } else {
          if (this.currentSlide === 1) {
            this.togglePrevArrow = false;
            this.toggleNextArrow = true;
          } else if (this.currentSlide < this.currentProjectData.images.length) {
            this.toggleNextArrow = true;
          }
        }
        this.newSlide = true;
      },

      changeSlide(direction) {
        if (direction === 'left') {
            if (this.currentSlide > 1) {
            this.currentSlide--;
            this.checkArrows(direction);
            setTimeout(() => this.newSlide = false, 600);
          }
        } else {
          if (this.currentSlide < this.currentProjectData.images.length) {
            this.currentSlide++;
            this.checkArrows(direction);
            setTimeout(() => this.newSlide = false, 600);
          }
        }
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
/* PROJECT */

/* About section */

  .about {
    /* background: white; */
    background: linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent);
    border-top-left-radius: .3em;
    padding: 30px;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    margin: 0;
  }

  .about img {
    width: 100%;
    height: auto;
    max-width: 700px;
  }

  .about__details h3 {
    text-decoration: underline;
  }

  .about__details {
    max-width: 500px;
  }

  .tool {
    width: 40px !important;
    margin: 5px;
  }

  .tools__used {
    display: flex;
    align-items: center;
  }

  .btns img, svg {
    width: auto;
    height: 50px;
    margin-right: 10px;
    vertical-align: middle
  }

  .btns a {
    text-decoration: none;
  }

  .lin {
    display:inline-block;
    vertical-align:middle;
  }

  .links {
    font-family: 'Ubuntu', sans-serif;
    text-transform: uppercase;
    background: transparent;
    border: 0;
    border-bottom: 2px solid transparent;
    padding-top: 10px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    font-size: 16px;
  }

  .links:hover {
    -webkit-box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
    box-shadow: 0 4px 2px -2px rgba(0,0,0,0.75);
    border-bottom: 2px solid var(--black);
    color: #000000;
    border-radius: 0 0 5px 0;
  }

  .links:focus {
    outline: transparent;
    outline-color: transparent;
    outline-style: none;
    outline-width: 0em;
  }

/* Slides section */

  .slides {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  .toggle_next__arrow {
    visibility: hidden;
    transform: scale(.6);
    transition: all .6s ease-in-out;
  }

  .toggle_prev__arrow {
    visibility: hidden;
    transform: scale(.6);
    transition: all .6s ease-in-out;
  }

  .arrow {
    width: 50px !important;
    height: auto;
    fill: var(--yellow);
    cursor: pointer;
    justify-self: center;
  }

  .arrow:hover {
    fill: var(--orange);
    border-radius: 50%;
    -webkit-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.75);
  }

  .new__slide {
    animation-name: example;
    animation-duration: .6s;
  }

/*  @keyframes example {
    0%   {transform: scale(.3);}
    100% {transform: scale(1);}
  }*/

  @keyframes example {
    0%   {transform: rotateX(180deg) rotateY(30deg);}
    100% {transform: rotateX(0) rotateY(0deg);}
  }

/* Gallery section */

  .gallery {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .gallery h2 {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 20px;
    align-items: center;
    margin-top: 30px;
  }

  .gallery h2:before, .gallery h2:after {
    display: block;
    content: '';
    height: 10px;
    /* background: linear-gradient(to var(--direction, left), var(--yellow), transparent); */
    -webkit-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
  }

  .gallery img {
    width: 100%;
    /* cursor: pointer; */
    border-radius: 5%;
  }

  .gallery h2:after {
    --direction: right;
    -webkit-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
    box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
  }

  .projects__title {
    text-align: center;
    margin: 30px;
  }

  .selected:hover {
    display: none;
    cursor: none;
  }

  .img__wrap {
    position: relative;
  }

  .img__wrap:hover .middle {
    opacity: 1;
  }

  .img__img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .middle p {
    background: #ffb515;
    color: var(--black);
  }

  .currentProject .img__description {
    visibility: visible;
    opacity: 0;
  }

  .currentProject .img__img {
    opacity: 0.3;
  }

  .currentProject .middle {
    opacity: 1;
  }

  .currentProject .middle p {
    transform-origin:0% 0%;
    transform: scale(1.2) rotate(-25deg);
    transition: all .5s ease-in-out;
  }

  .img__description {
    font-family: 'Ubuntu', sans-serif;
    text-transform: uppercase;
/*    background-color: #4CAF50;
    padding: 16px 32px;*/
    background: #00aeff;
    border: 0;
    padding: 10px 20px;
    -webkit-box-shadow: -9px -9px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: -9px -9px 9px -7px rgba(0,0,0,0.75);
    box-shadow: -9px -9px 9px -7px rgba(0,0,0,0.75);
    border-radius: 0 0 5px 0;
    cursor: pointer;
    transform: rotate(13deg) ;
    transform-origin:0% 0%;
    transition: all ease-in-out 0.2s;
    font-size: 16px;
    /* transition: opacity .2s, visibility .2s; */
  }

  .img__description:hover {
    background: var(--orange);
    -webkit-box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
    box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
    transform: rotate(0deg);
    /* transform: skewY(-3deg) skewX(3deg); */
    color: #000000;
    border-radius: 5px 0 0 0;
  }

  .img__wrap:hover .img__description {
    visibility: visible;
    opacity: 1;
  }

  .img__wrap:hover .img__img {
    opacity: 0.3;
  }

</style>
