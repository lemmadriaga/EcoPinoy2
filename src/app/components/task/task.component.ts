import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  standalone: true, 
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class taskComponent implements OnInit {
 
  @Input() slides: any[] =[];
  swiperModules = [IonicSlides];

  constructor(private router: Router) { }

  quiz1(){
    this.router.navigateByUrl('/tabs/quiz');
  }

  ngOnInit() {}

}
