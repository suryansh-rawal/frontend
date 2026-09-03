export const profile = {
  name: 'Suryansh Rawal',
  title: 'AI/ML Learner and Developer',
  tagline: 'Building strong foundations in AI/ML and DSA.',
  about:
    'I am a second-year student at ABES Engineering College, currently learning AI/ML step by step while strengthening my Data Structures and Algorithms fundamentals. I have built games with JavaScript and want to create products that help billions of people.',
  skills: ['Data Structures & Algorithms', 'JavaScript', 'AI/ML'],
  projects: [
    {
      title: 'Researcher AI Model',
      description: 'An AI project focused on research and exploration.',
      link: 'https://example.com',
    },
    {
      title: 'AI Portfolio',
      description: 'A portfolio powered by an AI avatar that can talk about my background and work.',
      link: 'https://example.com',
    },
    {
      title: 'Hostel Dash',
      description:
        'A popular campus delivery service that brought food and other orders from the college gates to students\' rooms. It also taught me about data analysis, founder planning, and future strategy.',
      link: 'https://example.com',
    },
  ],
  links: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    email: 'you@example.com',
  },
};

export type Profile = typeof profile;
