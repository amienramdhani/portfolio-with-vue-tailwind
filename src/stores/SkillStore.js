import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSkillStore = defineStore('skill', () => {
  const skills = ref([
    {
      id: 1,
      image: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
      title: 'Laravel Framework',
      link: 'https://laravel.com/',
      alt: 'Laravel',
    },
    {
      id: 2,
      image: 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg',
      title: 'Codeigniter Framework',
      link: 'https://codeigniter.com/',
      alt: 'CI',
    },
    {
      id: 3,
      image: 'https://cdn.worldvectorlogo.com/logos/figma-icon.svg',
      title: 'Figma',
      link: 'https://www.figma.com/',
      alt: 'Figma',
    },
    {
      id: 4,
      image: 'https://cdn.worldvectorlogo.com/logos/flask.svg',
      title: 'Flask Framework',
      link: 'https://flask.palletsprojects.com/',
      alt: 'Flask',
    },
    {
      id: 5,
      image: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
      title: 'Javascript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      alt: 'JS',
    },
    {
      id: 6,
      image: 'https://www.php.net//images/logos/new-php-logo.svg',
      title: 'PHP',
      link: 'https://www.php.net/',
      alt: 'PHP',
    },
    {
      id: 7,
      image: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
      title: 'Python',
      link: 'https://www.python.org/',
      alt: 'python',
    },
    {
      id: 8,
      image: 'https://cdn.worldvectorlogo.com/logos/ruby.svg',
      title: 'Ruby',
      link: 'https://www.ruby-lang.org/id/',
      alt: 'ruby',
    },
    {
      id: 9,
      image: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg',
      title: 'TensorFlow',
      link: 'https://www.tensorflow.org/',
      alt: 'tensor',
    },
    {
      id: 10,
      image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      title: 'ReactJS',
      link: 'https://react.dev/',
      alt: 'react',
    },
    {
      id: 11,
      image: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
      title: 'Vue JS',
      link: 'https://vuejs.org/',
      alt: 'vue',
    },
  ]);

  return { skills };
});
