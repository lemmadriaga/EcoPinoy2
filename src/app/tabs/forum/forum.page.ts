// forum.page.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  postContent: string = '';
  posts: any[] = []; // Array to hold posts
  userProfilePic: string = '../assets/testpic.png';

  constructor() {}

  ngOnInit() {}

  submitPost() {
    if (this.postContent.trim() !== '') {
      const newPost = {
        content: this.postContent,
        date: new Date().toLocaleString(), // Capture current date/time
      };
      this.posts.unshift(newPost); // Add new post at the beginning of the array
      this.postContent = ''; // Clear postContent after submission
    }
  }

  likePost(post: any) {
    post.liked = !post.liked;
  }
}
