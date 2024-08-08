<template>
  <header class="fixed left-0 top-0 z-10 flex w-full items-center bg-base-100">
    <div class="container mx-auto">
      <div class="relative flex items-center justify-between">
        <div class="px-4">
          <RouterLink to="/" class="block py-6 text-lg font-bold text-secondary"
            >Amien Ramdhani</RouterLink
          >
        </div>
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="absolute right-4 block lg:hidden"
            @click="toggleMenu"
          >
            <span
              class="hamburger-line origin-top-left transition duration-300 ease-in-out"
              :class="{ 'transform rotate-45': isMenuOpen }"
              :style="{ backgroundColor: isDarkMode ? '#000000' : '#ffffff' }"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
              :class="{ 'opacity-0': isMenuOpen }"
              :style="{ backgroundColor: isDarkMode ? '#000000' : '#ffffff' }"
            ></span>
            <span
              class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
              :class="{ 'transform -rotate-45': isMenuOpen }"
              :style="{ backgroundColor: isDarkMode ? '#000000' : '#ffffff' }"
            ></span>
          </button>

          <nav
            id="nav-menu"
            :class="`absolute right-4 top-full w-full rounded-lg bg-base-100 py-5 shadow-lg lg:static lg:block lg:max-w-full lg:bg-transparent lg:shadow-none ${
              isMenuOpen ? '' : 'hidden'
            }`"
          >
            <ul class="block lg:flex">
              <RouterLink
                to="/"
                class="mx-8 flex py-2 text-base font-semibold text-secondary group-hover:text-primary"
              >
                <li class="group">Beranda</li>
              </RouterLink>
              <RouterLink
                to="/tentang"
                class="mx-8 flex py-2 text-base font-semibold text-secondary group-hover:text-primary"
              >
                <li class="group">Tentang Saya</li>
              </RouterLink>
              <RouterLink
                to="/portfolio"
                class="mx-8 flex py-2 text-base font-semibold text-secondary group-hover:text-primary"
              >
                <li class="group">Portfolio</li>
              </RouterLink>
              <RouterLink
                to="/skill"
                class="mx-8 flex py-2 text-base font-semibold text-secondary group-hover:text-primary"
              >
                <li class="group">Skill</li>
              </RouterLink>
              <RouterLink
                to="/work"
                class="mx-8 flex py-2 text-base font-semibold text-secondary group-hover:text-primary"
              >
                <li class="group">Work Experience</li>
              </RouterLink>
              <li class="group">
                <label class="swap swap-rotate mx-8 flex py-2 text-base">
                  <input
                    type="checkbox"
                    @change="toggleTheme"
                    :checked="isDarkMode"
                  />
                  <svg width="30" height="30">
                    <circle cx="15" cy="15" r="6" fill="currentColor" />

                    <line
                      id="ray"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      x1="15"
                      y1="1"
                      x2="15"
                      y2="4"
                    ></line>

                    <use href="#ray" transform="rotate(45 15 15)" />
                    <use href="#ray" transform="rotate(90 15 15)" />
                    <use href="#ray" transform="rotate(135 15 15)" />
                    <use href="#ray" transform="rotate(180 15 15)" />
                    <use href="#ray" transform="rotate(225 15 15)" />
                    <use href="#ray" transform="rotate(270 15 15)" />
                    <use href="#ray" transform="rotate(315 15 15)" />
                  </svg>
                </label>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const isDarkMode = ref(false);

const toggleTheme = (event) => {
  isDarkMode.value = event.target.checked;
  document.documentElement.setAttribute(
    'data-theme',
    isDarkMode.value ? 'lofi' : 'night'
  );
  localStorage.setItem('theme', isDarkMode.value ? 'lofi' : 'night');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'lofi';
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // Default theme
    isDarkMode.value = false;
    document.documentElement.setAttribute('data-theme', 'night');
  }
});
</script>

<style scoped>
.hamburger-line {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
}
.swap {
  cursor: pointer;
}
</style>
