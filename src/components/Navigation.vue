<template>
  <transition name="fall">
    <nav class="menu" v-on:load="onApeared" v-show="apeared">
      <button
        aria-expanded="false"
        aria-controls="menu-list"
        @click="toggleNav"
      >
        <div class="textme__content">
          <span class="open">☰</span>
          <span class="close">×</span>
          Menu
        </div>
      </button>

      <ul id="menu-list">
        <li v-for="item in menuItems" :key="item.id">
          <a
            :id="item.id"
            :class="item.id === activeLink ? 'active__link' : 'for__hover'"
            @click="navClick"
            >{{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
  name: "Navigation",

  props: {
    method: { type: Function },
  },

  data() {
    return {
      activeLink: "aboutme",
      menuItems: [
        { id: "", title: "N" },
        { id: "aboutme", title: "About" },
        { id: "projects", title: "Projects" },
        { id: "education", title: "Education" },
        { id: "contact", title: "Contact" },
      ],
      apeared: false,
    };
  },

  methods: {
    navClick(event) {
      const navButton1 = document.querySelector("button[aria-expanded]");
      navButton1.setAttribute("aria-expanded", false);
      this.activeLink = event.target.id;
      //this.$emit('nav-click', event);
      this.$router.push("/" + event.target.id);
      this.scrollTop();
    },

    toggleNav({ target }) {
      const navButton = document.querySelector("button[aria-expanded]");
      const expanded = target.getAttribute("aria-expanded") === "true" || false;
      navButton.setAttribute("aria-expanded", !expanded);
    },

    scrollTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    onApeared() {
      this.apeared = true;
    },
  },
  mounted() {
    this.onApeared();
  },
};
</script>

<style>
/* NAVIGATION */

.active__link {
  color: var(--yel) !important;
  box-shadow: none !important;
  transform: scale(0.9);
}

.menu {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
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
  -webkit-box-shadow: -9px -9px 9px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -9px -9px 9px -7px rgba(0, 0, 0, 0.75);
  box-shadow: -9px -9px 9px -7px rgba(0, 0, 0, 0.75);
  background: var(--yellow);
  border-radius: 5px 0 0 0;
  margin: 5px;
  transition: all ease-in-out 0.4s;
}

.for__hover:hover {
  transform: scale(1.03);
  background: var(--orange);
  -webkit-box-shadow: 9px 9px 9px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 9px 9px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 9px 9px -7px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 5px 0;
  cursor: pointer;
}

[aria-controls="menu-list"] {
  cursor: pointer;
}
</style>
