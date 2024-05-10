import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  quiz1(){
    this.router.navigateByUrl('/tabs/quiz')
  }
  quiz2(){
    this.router.navigateByUrl('/tabs/quiz2')
  }
  quiz3(){
    this.router.navigateByUrl('/tabs/quiz3')
  }
  quiz4(){
    this.router.navigateByUrl('/tabs/quiz4')
  }
  quiz5(){
    this.router.navigateByUrl('/tabs/quiz5')
  }
  ngOnInit() {
  }

}
