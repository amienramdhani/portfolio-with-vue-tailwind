<template>
  <main>
    <NavHeader />
    <PortofolioSection :projects="portfolioProjects" />
    <FooterSection />
  </main>
</template>

<script setup>
import FooterSection from '@/components/FooterSection.vue';
import NavHeader from '@/components/NavHeader.vue';
import PortofolioSection from '@/components/PortofolioSection.vue';
import { portfolioProjects } from '@/utils/constants/portfolio.js';
</script>
