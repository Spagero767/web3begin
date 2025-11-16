'use client';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ForumPostForm() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, this would submit to a server.
    // For now, we'll just show a success message.
    toast({
      title: "Post Submitted!",
      description: "Your post has been added to the forum.",
    });
    // Here you would typically close the dialog, which requires managing open state.
    // For simplicity, we'll let the user close it manually.
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="font-headline">Create a new post</DialogTitle>
            <DialogDescription>
              Share your question or thoughts with the community.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="What's on your mind?" required />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your Message</Label>
              <Textarea placeholder="Type your message here." id="message" required />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Post to Forum</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
