import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import {NevaehComponent} from './kids/nevaeh/nevaeh.component';
import {AlexComponent} from './kids/alex/alex.component';
import {MaddexComponent} from './kids/maddex/maddex.component';
import {LillianaComponent} from './kids/lilliana/lilliana.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "Home"},
  {path: "Home", component: HomeComponent},
  {path: "Nevaeh", component: NevaehComponent},
  {path: "Alex", component: AlexComponent},
  {path: "Maddex", component: MaddexComponent},
  {path: "Lilliana", component: LillianaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
