import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SummarysPageComponent } from './summarys-page/summarys-page.component';
const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent},
  { path: '', component: WelcomePageComponent},
  { path: 'summarys', component: SummarysPageComponent},
  { path: '**', component:ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
