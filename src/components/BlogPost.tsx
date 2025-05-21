import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Divider } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogData';
import { format } from 'date-fns';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" color="error">
          Blog post not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {format(new Date(post.date), 'MMMM dd, yyyy')}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box className="blog-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </Box>
    </Container>
  );
};

export default BlogPost;
