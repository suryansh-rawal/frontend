export const profile = {
  name: 'Suryansh',
  title: 'Software Engineer',
  tagline: 'I build things and I taught an AI to talk about it.',
  about:
    'Replace this with a couple of sentences about yourself: background, what you work on, and what you care about.',
  skills: ['TypeScript', 'React', 'Node.js', 'Python', 'AI/ML'],
  projects: [
    {
      title: 'Project One',
      description: 'Short description of what this project does and your role in it.',
      link: 'https://example.com',
    },
    {
      title: 'Project Two',
      description: 'Short description of what this project does and your role in it.',
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
