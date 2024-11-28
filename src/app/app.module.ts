import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { RechercheParGenreMedicauxComponent } from './recherche-par-genre-medicaux/recherche-par-genre-medicaux.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeGenreComponent } from './liste-genre/liste-genre.component';
import { UpdateGenresComponent } from './update-genres/update-genres.component';
import { HttpClient, provideHttpClient, withFetch, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    RechercheParGenreMedicauxComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    RegisterComponent,
    LoginComponent,
    ForbiddenComponent,
    ListeGenreComponent,
    UpdateGenresComponent,
    
  ],
  imports: [
    HttpClientModule,
     BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
