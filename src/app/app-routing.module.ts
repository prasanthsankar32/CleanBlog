import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
{
  path:'post',
  component: PostComponent
},
{
  path:'contact',
  component: ContactComponent
},
{
  path:'about',
  component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
