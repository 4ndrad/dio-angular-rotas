import { CardComponent } from './pages/portifolio/card/card.component';
import { TitleComponent } from './pages/index/title/title.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch:'full'},  // full = url exata
  //portifolio e o seu filho portifolio/id
  {path:'portfolio', component:CardComponent, children:[
    {path:':id', component:CardComponent},
  ]},
  //rota coringa que volta para home
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
