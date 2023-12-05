import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngenieursComponent } from './ingenieurs/ingenieurs.component';
import { AddIngenieurComponent } from './add-ingenieur/add-ingenieur.component';
import { UpdateIngenieurComponent } from './update-ingenieur/update-ingenieur.component';
import { RechercheParProjetComponent } from './recherche-par-projet/recherche-par-projet.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { ListeProjetComponent } from './liste-projet/liste-projet.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    IngenieursComponent,
    AddIngenieurComponent,
    UpdateIngenieurComponent,
    RechercheParProjetComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
   UpdateProjetComponent,
   ListeProjetComponent,
   LoginComponent,
   ForbiddenComponent,
   RegisterComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot(), 
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
