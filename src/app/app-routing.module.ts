import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { TestComponent } from './home/test/test.component';
import { Test2Component } from './home/test2/test2.component';
import { CompleteComponent } from './home/complete/complete.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'page1', component: TestComponent },
    { path: 'page2', component: Test2Component },
    { path: 'complete', component: CompleteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
