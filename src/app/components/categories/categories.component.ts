import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NavController } from '@ionic/angular';


interface GridItem {
  icon: string;
  label: string;
  page: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: true, 
  imports: [CommonModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  
})
export class CategoriesComponent {
  handlerMessage = '';
  roleMessage = '';
 
  gridData: GridItem[][] = [
    [
      { icon:  "../assets/--", label: 'Challenge', page: 'challenge' },
      { icon: '../assets/--', label: 'Learning Center ', page: 'public-forum' },
      { icon: '../assets/--', label: 'Public Forum', page: 'public-forum' },
      { icon: '../assets/--', label: 'Reward', page: 'reward' }
    ],

  ];                                              

  constructor(private router: Router) {}

  handleCardClick(item: GridItem) {
    console.log('Clicked card:', item);
    this.navigateToPage(item.page); 
  }

  navigateToPage(page: string) {
    if (page === '') {
      this.router.navigateByUrl('/tabs/');
    }
    if (page === 'laundry-repair') {
      this.router.navigateByUrl('/tabs/');
    }
    if (page === 'clogged-drains') {
      this.router.navigateByUrl('/tabs/');
    }
    if (page === 'plumbing') {
      this.router.navigateByUrl('/tabs/');
    }
    
  }
  
}