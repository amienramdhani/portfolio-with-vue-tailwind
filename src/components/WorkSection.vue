<template>
  <section id="work" class="bg-base-300 pb-10 pt-14">
    <div class="container">
      <SectionTitle
        title="Pengalaman"
        content="Pengalaman Kerja dan Magang"
        body="Merupakan pengalaman yang pernah saya ikuti baik itu pengalaman
      magang dan bekerja di perusahaan "
      />
      <div
        class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12"
      >
        <ul
          class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        >
          <li v-for="work in works" :key="work.id">
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="text-secondary h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div
              :class="`${
                work.id % 2 === 0
                  ? 'timeline-end mb-10 md:text-end'
                  : 'timeline-start mb-10 md:text-end'
              }`"
            >
              <time class="font-mono italic text-primary"
                >{{ work.year }}
              </time>
              <div class="text-2xl font-black text-accent">
                {{ work.name }}
              </div>
              <p class="font-bold text-xl text-primary">{{ work.role }}</p>
              <p class="font-semibold text-sm text-secondary">
                {{ work.detail }}
              </p>
            </div>
            <hr class="bg-primary" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
// const props = defineProps({
//   works: {
//     type: Array,
//     required: true,
//   },
// });
import { useWorkStore } from '@/stores/WorkStore';
import { storeToRefs } from 'pinia';
const workStore = useWorkStore();
const { works } = storeToRefs(workStore);
</script>
