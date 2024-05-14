import { Component, OnInit } from '@angular/core';
import { AthenticationService } from '@app/athentication.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastController } from '@ionic/angular';

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
    private toastController: ToastController
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

  loadPosts() {
    this.firestore
      .collection('posts', (ref) => ref.orderBy('date', 'desc'))
      .valueChanges({ idField: 'postId' })
      .subscribe((posts: any[]) => {
        this.posts = posts;
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
      const toast = await this.toastController.create({
        message: 'Posted',
        duration: 3000,
        position: 'top',
        color: 'success',
        icon: 'checkmark',
      });
      toast.present();
    }
  }

  likePost(post: any) {
    post.liked = !post.liked;
  }
}
