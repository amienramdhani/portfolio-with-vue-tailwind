import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useWorkStore = defineStore('work', () => {
  const works = ref([
    {
      id: 1,
      year: '2018',
      name: 'CV Easystem Majalengka',
      role: 'Junior Software Engineer',
      detail: 'Mendesign Website, Mengembangkan website, Maintenance Website',
    },
    {
      id: 2,
      year: '2022 (Maret-September) dan 2023 (September-Maret)',
      name: 'Sekolah Tinggi Teknologi Nurul Fikri',
      role: 'Asisten Dosen Basis Data dan Big Data',
      detail:
        'Data Model,Inter-Entity Relationship, Database Design ,Database Normalization, Simple Selection, Merge Table View,Stored Procedure Function,Triggering Event,Transaction Table Locking,Indexing,Mysql Administration',
    },
    {
      id: 3,
      year: '2022 (Agustus-Desember)',
      name: 'Dicoding Indonesia',
      role: 'Machine Learning dan Front End Developer',
      detail:
        'Programming Logic 101,Basic Programming to Become a Software Developer,Basic Git with GitHub, Basic Data Visualization, Programming with Python,Machine Learning for Beginners, Machine Learning Development, Applied Machine Learning,Machine Learning Mastery Evaluation,Web Programming Basics,Creating Front-End Web for Beginners, Pursuing a Career as a Software Developer,Fundamental Front-End Web Development',
    },
    {
      id: 4,
      year: '2024',
      name: 'Sekawan Media',
      role: 'Back End Developer',
      detail:
        'CRUD Dengan Menggunakan CodeIgniter, Maintenance Web dengan menggunakan Codeigniter',
    },
    {
    id: 5,
    year: '2024-2025 (September - Januari)',
    name: 'Journal1zadv',
    role: 'Back End Developer',
    detail:
      'Membuat sistem Absensi untuk manajemen presensi perusahaan Journal1zadv',
  },
  {
    id: 6,
    year: '2025 (Februari - Sekarang)',
    name: 'Laskar AI',
    role: 'Mentor Program Laskar AI',
    detail:
      'Membantu peserta Laskar AI untuk menyelesaikan tugas, Menjadi wadah untuk peserta ketika ada kesulitan, Program konsultasi Pekanan',
  },
  ]);

  return { works };
});
