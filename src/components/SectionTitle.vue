<template>
  <div class="w-full px-4">
    <div class="mx-auto mb-16 max-w-xl text-center">
      <h4 class="mb-2 text-lg font-semibold text-primary mt-16">
        {{ props.title }}
      </h4>
      <h2 class="mb-4 text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">
        {{ props.content }}
      </h2>
      <p class="text-md text-justify font-medium text-secondary md:text-lg">
        {{ props.body }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
</script>
