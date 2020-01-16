import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent} from './list/list.component';
import { ResultComponent} from './result/result.component'


const routes: Routes = [
  { path:'list', component: ListComponent },
  { path:'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
