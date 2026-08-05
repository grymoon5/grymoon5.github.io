export const site = {
  title: 'Articles by Aishwarya',
  name: 'Aishwarya Elango',
  description:
    'Full-stack engineering notes, geospatial case studies, build logs, and career reflections from Aishwarya Elango.',
  author: 'Aishwarya Elango',
  email: 'eaishwarya273@gmail.com',
  profileImage: '/images/aishwarya-geospatial-portrait.webp',
  url: 'https://grymoon5.github.io',
  nav: [
    { label: 'About Me', href: '/#about' },
    { label: 'Case-studies', href: '/case-studies' },
    { label: 'Build-in-public', href: '/build-in-public' },
    { label: 'Career-notes', href: '/career-notes' },
    { label: '#SpotMe', href: '/#spotme' },
    { label: 'Contact', href: '/#contact' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aishwarya-elango/' },
    { label: 'Telegram', href: 'https://t.me/REPLACE_WITH_TELEGRAM_HANDLE' },
    { label: 'Women Devs SG', href: 'https://womendevssg.netlify.app/' },
  ],
  spotMe: [
    {
      label: 'CityJS 2026',
      title: 'Mapping Urban Sustainability with JavaScript and Open Data',
      description: "Singapore's weather changes street by street, but what if we could see it in real time? This lightning talk explores how JavaScript, open weather APIs, and web maps can reveal microclimates, heat spots, and rainfall trends.",
      href: 'https://youtu.be/t5Jt9AWRKt4?si=AQmQqaa1kqHcr90c',
      thumbnail: 'https://i.ytimg.com/vi/t5Jt9AWRKt4/hqdefault.jpg',
      thumbnailAlt: 'Mapping Urban Sustainability talk on YouTube',
      wide: false,
    },
    {
      label: 'RagTech',
      title: 'What in the World Is a Geospatial Data Engineer?',
      description: 'A conversation about working in geospatial data engineering and what the role looks like in practice.',
      href: 'https://www.youtube.com/watch?v=I7kLlrIizGA&t=32s&pp=ygUZcmFndGVjaCB3aGF0IGluIHRoZSB3b3JsZA%3D%3D',
      thumbnail: 'https://i.ytimg.com/vi/I7kLlrIizGA/hqdefault.jpg',
      thumbnailAlt: 'What Is a Geospatial Data Engineer talk on YouTube',
      wide: false,
    },
  ],
};

export const categories = {
  'build-in-public': {
    label: 'Build in Public',
    description:
      "What I'm actually building: the problem, the solution, what broke in production, and what I'd do differently.",
  },
  'case-studies': {
    label: 'Case Studies',
    description:
      "Where I break down geospatial and engineering concepts through real infrastructure, starting with Singapore's transport and mapping networks.",
  },
  career: {
    label: 'Career Notes',
    description:
      "Notes on hiring, job searching, and the career decisions that don't usually show up in a portfolio.",
  },
} as const;

export type Category = keyof typeof categories;
