import { Component, OnInit, NgZone } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AthenticationService } from '@app/athentication.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  posts: any[] = [];
  userProfilePic: string = '../assets/testpic.png';
  username: string;

  constructor(
    private authService: AthenticationService,
    private firestore: AngularFirestore,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.fetchUsername();
    this.loadPosts();
  }

  async fetchUsername() {
    const user = await this.authService.getProfile();
    if (user) {
      this.username = user.displayName || '';
    }
  }
  async loadPosts() {
    this.firestore
      .collection('posts', (ref) => ref.orderBy('date', 'desc'))
      .valueChanges()
      .subscribe((posts: any[]) => {
        this.ngZone.run(() => {
          this.posts = posts;
        });
      });
  }

  async submitPost() {
    if (this.postContent.trim() !== '') {
      const user = await this.authService.getProfile();
      if (user) {
        const username = user.displayName || '';
        await this.firestore.collection('posts').add({
          content: this.postContent,
          username: username,
          date: new Date().toISOString(),
        });
        this.postContent = '';
      }
    }
  }

  likePost(post: any) {
    post.liked = !post.liked;
  }
}
