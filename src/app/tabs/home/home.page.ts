import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { register } from 'swiper/element/bundle';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { taskComponent } from 'src/app/components/task/task.component';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,  
  imports: [IonicModule, SliderComponent, CategoriesComponent, taskComponent], 
})
export class HomePage implements OnInit {
  slides: any[] = [];

  constructor(private router: Router) { }
  goToOtherPage() {
    this.router.navigateByUrl('/tabs/voucher');
  }


  ngOnInit() {
  }

}
