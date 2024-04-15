import { notFound } from 'next/navigation';

interface PostProps {
  params: { id: string };
}

const posts = [
  { id: '1', title: 'Post 1', content: 'This is the content of Post 1.' },
  { id: '2', title: 'Post 2', content: 'This is the content of Post 2.' },
  { id: '3', title: 'Post 3', content: 'This is the content of Post 3.' },
];

export default function Post({ params }: PostProps) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}