import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'forum',
        loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
      },
      {
        path: 'rewards',
        loadChildren: () => import('./rewards/rewards.module').then( m => m.RewardsPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'quiz',
        loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
      },
      {
        path: 'challenge',
        loadChildren: () => import('./challenge/challenge.module').then( m => m.ChallengePageModule)
      },
      {
        path: 'quiz2',
        loadChildren: () => import('./quiz2/quiz2.module').then( m => m.Quiz2PageModule)
      },
      {
        path: 'quiz3',
        loadChildren: () => import('./quiz3/quiz3.module').then( m => m.Quiz3PageModule)
      },
      {
        path: 'quiz4',
        loadChildren: () => import('./quiz4/quiz4.module').then( m => m.Quiz4PageModule)
      },
      {
        path: 'quiz5',
        loadChildren: () => import('./quiz5/quiz5.module').then( m => m.Quiz5PageModule)
      },
      {
        path: 'module1',
        loadChildren: () => import('./module1/module1.module').then( m => m.Module1PageModule)
      },
      {
        path: 'module2',
        loadChildren: () => import('./module2/module2.module').then( m => m.Module2PageModule)
      },
      {
        path: 'module3',
        loadChildren: () => import('./module3/module3.module').then( m => m.Module3PageModule)
      },
      {
        path: 'module4',
        loadChildren: () => import('./module4/module4.module').then( m => m.Module4PageModule)
      },
      {
        path: 'module5',
        loadChildren: () => import('./module5/module5.module').then( m => m.Module5PageModule)
      },
      {
        path: 'learning-center',
        loadChildren: () => import('./learning-center/learning-center.module').then( m => m.LearningCenterPageModule)
      },
    
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
    ]
  },
  

  


  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
