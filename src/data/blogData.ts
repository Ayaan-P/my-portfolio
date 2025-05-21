import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'first-post',
    title: 'My First Blog Post',
    date: '2023-10-27',
    excerpt: 'This is the excerpt for the first blog post.',
    content: `
# My First Blog Post

This is the content of my very first blog post.

It can include **bold** text, *italic* text, and even [links](https://example.com).

\`\`\`javascript
console.log('Hello, world!');
\`\`\`
`,
  },
  {
    id: 'second-post',
    title: 'Another Post',
    date: '2023-11-15',
    excerpt: 'This is the excerpt for the second blog post.',
    content: `
# Another Post

Here is the content for the second post.

- List item 1
- List item 2
`,
  },
];
