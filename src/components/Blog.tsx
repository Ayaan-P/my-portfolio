import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { format } from 'date-fns';

const Blog: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: 'primary.main', mb: 4 }}>
        Blog
      </Typography>
      <Box>
        {blogPosts.map((post) => (
          <Card key={post.id} sx={{ mb: 4, backgroundColor: 'rgba(18, 18, 18, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(197, 165, 114, 0.2)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'text.primary' }}>
                {post.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                {post.excerpt}
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={`/blog/${post.id}`} size="small" sx={{ color: 'primary.main' }}>
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Blog;
