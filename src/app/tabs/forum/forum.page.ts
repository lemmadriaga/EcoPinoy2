import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
  animations: [
    trigger('postAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
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
