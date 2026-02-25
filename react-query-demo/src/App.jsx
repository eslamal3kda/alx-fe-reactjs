import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import PostsComponent from './components/PostsComponent';

export default function App() {
  const queryClient = new QueryClient();
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  )
}
