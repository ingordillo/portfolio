import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
