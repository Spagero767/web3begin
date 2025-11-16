import Image from 'next/image';
import { forumPosts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare } from 'lucide-react';
import { ForumPostForm } from '@/components/forum-post-form';

export default function ForumPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="flex justify-between items-center mb-12">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Community Forum</h1>
          <p className="text-lg text-muted-foreground mt-2">Ask questions, share learnings, and connect.</p>
        </div>
        <ForumPostForm />
      </div>

      <div className="space-y-6">
        {forumPosts.map((post) => (
          <Card key={post.id} className="hover:bg-card/80 transition-colors">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={post.avatarUrl} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2">{post.content}</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-muted-foreground">
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>{post.replies} replies</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
