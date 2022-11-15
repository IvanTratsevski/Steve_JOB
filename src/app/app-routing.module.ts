import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent},
  { path: '', component: WelcomePageComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'header', component: HeaderComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
