import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { TravelComponent } from './pages/travel/travel.component';


const routes: Routes = [
  { path: 'home',   redirectTo: '/', pathMatch: 'full' },
  { path: '',   component: HomeComponent },
  { path: 'travel',   component: TravelComponent },
  { path: 'blog',   component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
