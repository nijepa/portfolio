<template>
  <nav class="menu">
    <button aria-expanded="false" aria-controls="menu-list" @click="toggleNav">
      <span class="open">☰</span>
      <span class="close">×</span>
      Menu
    </button>
    <ul id="menu-list" >
      <li v-for="item in menuItems" :key="item.id">
        <a :id="item.id" :class="item.id == activeLink ? 'active__link' : 'forhover'" @click="navClick">{{ item.title }}</a>
      </li>
<!--       <li>
        <a id="home" class="forhover" href="" @click="navClick">N</a>
      </li>
      <li>
        <a id="abouts" :class="'abouts' == activeLink ? 'active__link' : 'forhover'" @click="navClick">About</a>
      </li>
      <li>
        <a id="tools" :class="'tools' == activeLink ? 'active__link' : 'forhover'" @click="navClick">Projects</a>
      </li>
      <li>
        <a id="education" :class="'education' == activeLink ? 'active__link' : 'forhover'" @click="navClick">Education</a>
      </li>
      <li>
        <a id="contacts" :class="'contacts' == activeLink ? 'active__link' : 'forhover'" @click="navClick">Contact</a>
      </li> -->
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',

    props: { 
      method: { type: Function }
    },

    data() {
      return {
        activeLink: 'abouts',
        menuItems: [{id: 'home', title: 'N'}, 
                    {id: 'abouts', title: 'About'}, 
                    {id: 'tools', title: 'Projects'}, 
                    {id: 'education', title: 'Education'},
                    {id: 'contacts', title: 'Contact'}]
      }
    },

    methods: {
      navClick(event) {
        const navButton1 = document.querySelector('button[aria-expanded]');
        navButton1.setAttribute('aria-expanded', false);
        this.activeLink = event.target.id;
        this.$emit('nav-click', event);
      },
      toggleNav({ target }) {
        const navButton = document.querySelector('button[aria-expanded]');
        console.log(target);
        const expanded = target.getAttribute('aria-expanded') === 'true' || false;
        navButton.setAttribute('aria-expanded', !expanded);
      }
    }
  }
</script>

<style>
  /*Navigation */
  .active__link {
    color: var(--yel) !important;
    box-shadow: none  !important;
    transform: scale(.9);
  }

  .menu {
    position: -webkit-sticky;
    position: sticky; 
    top: 0;
    /* background: linear-gradient(to right, var(--orange), var(--blue)); */
  }

  .menu ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 0;
    list-style: none;
  }

  .menu a {
    display: block;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    color: black;
    text-transform: uppercase;
    font-size: 20px;
    -webkit-box-shadow: -9px -9px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: -9px -9px 9px -7px rgba(0,0,0,0.75);
    box-shadow: -9px -9px 9px -7px rgba(0,0,0,0.75);
    background: var(--yellow);
    border-radius: 5px 0 0 0;
    margin: 5px;
    transition: all ease-in-out 0.4s;
  }

/*  .menu a:hover {
      transform: scale(1.1);
      background: var(--orange);
      -webkit-box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
      -moz-box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
      box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
      border-radius: 0 0 5px 0;
    } */

  .forhover:hover {
    transform: scale(1.1);
    background: var(--orange);
    -webkit-box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
    box-shadow: 9px 9px 9px -7px rgba(0,0,0,0.75);
    border-radius: 0 0 5px 0;
    cursor: pointer;
  }

  [aria-controls="menu-list"] {
    /* margin: 5px; */
    /* display: none; */
    cursor: pointer;
  }
</style>