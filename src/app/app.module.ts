import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component'; 
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { StaffComponent } from './staff/staff.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsUseComponent } from './terms-use/terms-use.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ArticleWebComponent } from './article-web/article-web.component';
import { ArticleSqlComponent } from './article-sql/article-sql.component';
import { ArticleJavaComponent } from './article-java/article-java.component';
import { ArticleCComponent } from './article-c/article-c.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { Lesson11Component } from './levels/step-1/lesson11/lesson11.component';
import { Lesson12Component } from './levels/step-1/lesson12/lesson12.component';
import { Lesson13Component } from './levels/step-1/lesson13/lesson13.component';
import { Lesson21Component } from './levels/step-2/lesson21/lesson21.component';
import { Lesson22Component } from './levels/step-2/lesson22/lesson22.component';
import { Lesson23Component } from './levels/step-2/lesson23/lesson23.component';
import { Lesson31Component } from './levels/step-3/lesson31/lesson31.component';
import { Lesson32Component } from './levels/step-3/lesson32/lesson32.component';
import { Lesson33Component } from './levels/step-3/lesson33/lesson33.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserGradesComponent } from './user-grades/user-grades.component';
import { PicturesBarComponent } from './pictures-bar/pictures-bar.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { ArticleMenuComponent } from './article-menu/article-menu.component';
import { AboutMenuComponent } from './about-menu/about-menu.component';
import { FormsModule }   from '@angular/forms';
import { UsersService } from './services/users.service';

const ROUTES:Routes = [{path:"home",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"articles",component:ArticlesComponent},
{path:"",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"newUser",component:NewUserComponent},
{path:"article-java", component:ArticleJavaComponent},
{path:"article-web",component:ArticleWebComponent},
{path:"article-sql",component:ArticleSqlComponent},
{path:"terms-use",component:TermsUseComponent},
{path:"staff",component:StaffComponent},
{path:"contact-us",component:ContactUsComponent},
{path:"privacy",component:PrivacyComponent},
{path:"article-c",component:ArticleCComponent},
{path:"levels/step-1/lesson11",component:Lesson11Component},
{path:"levels/step-1/lesson12",component:Lesson12Component},
{path:"levels/step-1/lesson13",component:Lesson13Component},
{path:"levels/step-2/lesson21",component:Lesson21Component},
{path:"levels/step-2/lesson22",component:Lesson22Component},
{path:"levels/step-2/lesson23",component:Lesson23Component},
{path:"levels/step-3/lesson31",component:Lesson31Component},
{path:"levels/step-3/lesson32",component:Lesson32Component},
{path:"levels/step-3/lesson33",component:Lesson33Component},
{path:"PicturesBar",component:PicturesBarComponent},
{path:"LoginButtonComponent",component:LoginButtonComponent},
{path:"ArticleMenuComponent",component:ArticleMenuComponent},
{path:"AboutMenuComponent",component:AboutMenuComponent},
{path:"user-menu",component:UserMenuComponent},
{path:"**",component:HomeComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    AboutComponent,
    HeaderComponent,
    StaffComponent,
    PrivacyComponent,
    TermsUseComponent,
    ContactUsComponent,
    ArticleWebComponent,
    ArticleSqlComponent,
    ArticleJavaComponent,
    ArticleCComponent,
    LoginComponent,
    NewUserComponent,
    Lesson11Component,
    UserMenuComponent,
    UserGradesComponent,
    Lesson12Component,
    Lesson13Component,
    Lesson21Component,
    Lesson22Component,
    Lesson23Component,
    Lesson31Component,
    Lesson32Component,
    Lesson33Component,
    PicturesBarComponent,
    LoginButtonComponent,
    ArticleMenuComponent,
    AboutMenuComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
