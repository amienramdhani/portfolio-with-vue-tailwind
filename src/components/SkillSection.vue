<template>
  <!-- section clients start -->
  <section id="skills" class="bg-base-300 pb-14 pt-28">
    <div class="container">
      <SectionTitle
        title="Skill"
        content="Skill Yang Dikuasai"
        body="Beberapa skill seperti bahasa pemrograman atau framework atau
              yang lainnya yang pernah digunakan,dipelajari dan sedang
              dipelajari baik itu Front-End,Back-End dan Machine Learning."
        class="text-white"
      />

      <div class="w-full px-4">
        <div class="flex flex-wrap items-center justify-center">
          <a
            v-for="skill in skills"
            :key="skill.id"
            :href="skill.link"
            target="_blank"
            class="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <img :src="skill.image" :alt="skill.alt" />
            <p class="text-accent font-medium mt-8 text-center">
              {{ skill.title }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- section clients End -->
</template>

<script setup>
import { useSkillStore } from '@/stores/SkillStore';
import SectionTitle from './SectionTitle.vue';
// const props = defineProps({
//   skills: {
//     type: Array,
//     required: true,
//   },
// });
import { storeToRefs } from 'pinia';
const skillStore = useSkillStore();
const { skills } = storeToRefs(skillStore);
</script>
