<template>
<transition name="slide-fade">
  <div class="pro">
  
    <h2 id="about"> {{title}} </h2>
    
    <section class="about" >
      <div class="about__details">
        <h3>{{currentProjectData.name}}</h3>
        <p>{{currentProjectData.title}}</p>
        <p>{{currentProjectData.desc}}</p>
        <p>Some of its features are:</p>
        <ul class="" v-for="(feature, id) in currentProjectData.features" :key="id">
          <li>{{feature}}</li>
        </ul>
        <div class="tools__used">
          <div class="" v-for="tool in currentProjectData.tools" :key="tool">
            <img :src="require('../assets/images/' + tool + '.svg')" alt="o" class="tool">
          </div>  
        </div>
        <div class="btns">
          <a class="lin links" :href="currentProjectData.online">Demo → <img src="../assets/images/live-event.png"></a>
          <a class="lin links" :href="currentProjectData.source">Source → <img src="../assets/images/github-octocat.svg"></a>
        </div>
      </div>
      <transition name="slide-fade">
      <img :src="require('../assets/images/' + currentProject + '.png')" alt="Yummy Taco" class="about__mockup">
      </transition>
    </section>

    <h3 class="projects__title">[ Some projects ]</h3>
    <section class="gallery" id="gallery" >
      <div class="img__wrap" :class="curProject.image == currentProject ? 'currentProject' : ''" v-for="curProject in projectsData" :key="curProject.id">
        <img class="img__img" :src="require('../assets/images/' + curProject.image + '.png')" alt="">
        <div class="middle">
          <div class="img__description" @click="selectProject(curProject.image)">More ... &#10155;</div>
          <p>{{curProject.name}}</p>
        </div>
      </div>
    </section>

  </div>
  </transition>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      title: '< PROJECTS />',
      projectsData : 
        [{name: 'ToDo list', 
          title: 'ToDo list made with Vue', 
          image: 'todolistvue',
          desc: 'Chose a photo from 3 of them and try to find hidden character between many of characters.',
          features: ['A photo tagging app',
                      'Photos are stored on Firebase storage, database',
                      'Game data mapping positions are stored in Firebase database',
                      'Firebase also hold players scores'],
          online: 'https://nijepa.github.io/todo-list-vue/',
          source: 'https://github.com/nijepa/todo-list-vue',
          tools: ['vue', 'js', 'css3']
        },
        {name: 'Weather app', 
          title: 'Weather app made with Vue', 
          image: 'weatherapp',
          desc: 'Enter a location and it will fetch the weather data from a weather API (openweathermap.org) and a photo of (if availabile) for found location from another API (teleport.org).',
          features: ['Fetch new data for a new location without reloading',
                      'Error handling for different HTTP status codes',
                      'Fetch location photo from another API',
                      'Responsive design'],
          online: 'https://nijepa.github.io/weather-app/',
          source: 'https://github.com/nijepa/weather-app',
          tools: ['vue', 'js', 'css3']
        },
        {name: "Where's Waldo game", 
          title: "Where's Waldo made with Vue", 
          image: 'whereswaldo',
          desc: 'Chose a photo from 3 of them and try to find hidden character between many of characters.',
          features: ['A photo tagging app',
                      'Photos are stored on Firebase storage',
                      'Game data mapping positions are stored in Firebase database',
                      'Firebase also hold players scores'],
          online: 'https://nijepa.github.io/whereswaldo/',
          source: 'https://github.com/nijepa/whereswaldo',
          tools: ['vue', 'js', 'css3', 'firebase']
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
          tools: ['vue', 'js', 'css3', 'sass', 'laravel', 'mysql']
        },
        {name: 'Battleship game', 
          title: 'project-battleship app made with Vue', 
          image: 'battleship',
          desc: 'Enter a location and it will fetch the weather data from a weather API (openweathermap.org) and display an animated representation of the current weather along with values like temperature, humidity and state of the sky.',
          features: ['Fetch new data for a new location without reloading',
                      'Error handling for different HTTP status codes',
                      'Keyframe based sky elements animations',
                      'Responsive design'],
          online: 'https://nijepa.github.io/project-battleship/',
          source: 'https://github.com/nijepa/project-battleship',
          tools: ['vue', 'js', 'css3']
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
          tools: ['js', 'css3', 'php']
        }],
      currentProject: 'weatherapp',
      currentProjectData: 
        {name: 'Weather app', 
          title: 'Weather app made with React', 
          image: 'weatherapp',
          desc: 'Enter a location and it will fetch the weather data from a weather API (openweathermap.org) and display an animated representation of the current weather along with values like temperature, humidity and state of the sky.',
          features: ['Fetch new data for a new location without reloading',
                      'Error handling for different HTTP status codes',
                      'Keyframe based sky elements animations',
                      'Responsive design'],
          online: 'https://nijepa.github.io/weather-app/',
          source: 'https://github.com/nijepa/weather-app',
          tools: ['vue', 'js', 'css3']
        }
    }
  },
  methods: {
    selectProject(project) {
      this.currentProject = project;
      this.currentProjectData = this.projectsData.find(this.checkProject)
    },
    checkProject(image) {
      return image.image == this.currentProject;
    }
  }
}
</script>

<style scoped>
  .about__details h3 {
    text-decoration: underline;
  }
  .about__details {
    max-width: 500px;
  }
  .tool {
    width: 40px;
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
  transform: scale(1.2) rotate(-25deg);
  transition: all .5s ease;
}

</style>