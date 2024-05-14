import { Component, NgZone, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { register } from 'swiper/element/bundle';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { taskComponent } from 'src/app/components/task/task.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AthenticationService } from '@app/athentication.service';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, SliderComponent, CategoriesComponent, taskComponent],
})
export class HomePage implements OnInit {
  username: string;

  slides: any[] = [];

  constructor(
    private router: Router,
    private authService: AthenticationService,
    private firestore: AngularFirestore,
    private ngZone: NgZone
  ) {}

  goToOtherPage() {
    this.router.navigateByUrl('/tabs/challenge');
  }

  ngOnInit() {
    this.fetchUsername();
  }
  async fetchUsername() {
    const user = await this.authService.getProfile();
    if (user) {
      this.username = user.displayName || '';
    }
  }
}
