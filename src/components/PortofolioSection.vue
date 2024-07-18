<template>
  <!-- portfolio section start -->
  <section id="portfolio" class="bg-base-300 pb-10 pt-28">
    <div class="container">
      <SectionTitle
        title="Portofolio"
        content="Project yang pernah saya buat"
        body="Beberapa project yang pernah saya buat seperti membuat website statis
        dan website dinamis. Kemudian ada project terkait kampus merdeka saya
        yaitu membuat project terkait machine learning dan semacamnya. Kemudian
        ada project yang dibuat sewaktu kuliah yang berhubungan dengan mata
        kuliah."
      />
      <div
        class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="mb-12 p-4 md:w-1/3"
        >
          <div class="overflow-hidden rounded-md shadow-md">
            <img :src="project.image" :alt="project.title" class="w-full" />
          </div>
          <a :href="project.link" target="_blank">
            <h3
              class="mb-3 mt-5 text-xl font-semibold text-accent hover:text-primary"
            >
              {{ project.title }}
            </h3>
          </a>
          <p class="text-justify text-base font-medium text-secondary">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- portfolio section end -->
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
