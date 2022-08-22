<!--création de l'interface du menu-->
<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
    </div>

    <div class="menu">
      <router-link to="/Dashbord" class="button">
        <span class="material-icons">speed</span>
        <span class="text">Dashbord</span>
      </router-link>
    </div>
    <h3>Theme</h3>
    <div class="menu">
      <router-link to="/Colors" class="button">
        <span class="material-icons">water_drop</span>
        <span class="text">Colors</span>
      </router-link>
      <router-link to="/Tipography" class="button">
        <span class="material-icons">edit</span>
        <span class="text">Typography</span>
      </router-link>
    </div>
    <h3>Components</h3>
    <div class="menu">
      <router-link class="button">
        <span class="material-icons">pentagon</span>
        <span class="text">Base</span>
      </router-link>
      <router-link class="button">
        <span class="material-icons">near_me</span>
        <span class="text">Buttons</span>
      </router-link>
      <router-link to="/Charts" class="button">
        <span class="material-icons">pie_chart</span>
        <span class="text">Charts</span>
      </router-link>
      <router-link class="button">
        <span class="material-icons">assignment</span>
        <span class="text">Forms</span>
      </router-link>
      <router-link class="button">
        <span class="material-icons">star</span>
        <span class="text">Icons</span>
      </router-link>
      <router-link class="button">
        <span class="material-icons">notifications</span>
        <span class="text">Notification</span>
      </router-link>
      <router-link class="button">
        <span class="material-icons">widgets</span>
        <span class="text">Widgets</span>
      </router-link>
    </div>
    <h3>Extra</h3>
    <div class="menu">
      <router-link class="button">
        <span class="material-icons">star</span>
        <span class="text">Pages</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/Docs" class="button">
        <span class="material-icons">description</span>
        <span class="text">Docs</span>
      </router-link>
    </div>
    <div class="menu">
      <router-link to="/Try_core" class="button">
        <span class="material-icons">layers</span>
        <span class="text">Try CoreUIPRO</span>
      </router-link>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">arrow_forward_ios</span>
      </button>
    </div>
  </aside>
</template>

<!-- Parti script et interaction-->
<script setup>
import { ref } from 'vue';
import logoURL from '../assets/vue.svg';
const is_expanded = ref(localStorage.getItem('is_expanded') === 'true');
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem('is_expanded', is_expanded.value);
};
</script>

<!-- css -->
<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;
  .flex {
    flex: 1 1 0%;
  }
  .logo {
    margin-bottom: 0rem;
    text-align: center;
    img {
      width: 2rem;
    }
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-top: 0rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;
    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 1.7rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }
  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;
      .material-icons {
        font-size: 1rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      &:hover {
        background-color: var(--dark-alt);
        .material-icons,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);
        .material-icons,
        .text {
          color: var(--primary);
        }
      }
    }
  }
  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }
  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: 0rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
    }
    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
    .footer {
      opacity: 0;
    }
  }
  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
