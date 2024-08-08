<template>
  <!-- Hero Section Start -->
  <section id="home" class="pt-36 pb-24 bg-base-300">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2">
          <h1 class="text-base font-semibold text-accent md:text-xl">
            Halo Semua 🖐, saya
            <span class="mt-1 block text-4xl font-bold text- lg:text-5xl"
              >Muhammad Amien Ramdhani</span
            >
          </h1>
          <h2 class="mb-5 text-lg font-medium text-secondary lg:text-2xl">
            Fresh Graduate Teknik Informatika
          </h2>
          <p class="mb-10 font-medium leading-relaxed text-secondary">
            Saya Muhammad Amien Ramdhani dan ini website portofolio yang saya
            buat menggunakan Vue JS 3 dan Tailwind CSS
          </p>

          <a
            href="../../Muhammad Amien Ramdhani Web.pdf"
            download
            class="rounded-full bg-accent px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >CV SAYA</a
          >
        </div>
        <div class="w-full self-end px-4 lg:w-1/2">
          <div class="relative mt-10 lg:right-0 lg:mt-9">
            <img
              src="../assets/img/amien.png"
              alt="Amien Ramdhani"
              class="mx-auto max-w-full"
            />
            <span
              class="absolute -bottom-0 left-1/2 -z-10 -translate-x-1/2 md:scale-125"
            >
              <svg
                width="300"
                height="300"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#08BDBA"
                  d="M49.4,-43.5C59.8,-26.3,61.2,-6,55.3,9.7C49.4,25.5,36.2,36.7,18.6,49.2C1,61.8,-21.1,75.7,-38.2,70.8C-55.4,65.8,-67.5,42,-71.7,18C-75.8,-6,-72,-30.1,-58.7,-48C-45.4,-65.9,-22.7,-77.4,-1.6,-76.2C19.5,-74.9,38.9,-60.7,49.4,-43.5Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero Section -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
