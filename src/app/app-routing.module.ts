import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { RechercheParGenreMedicauxComponent } from './recherche-par-genre-medicaux/recherche-par-genre-medicaux.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PatientGuard } from './patient.guard';
import { ListeGenreComponent } from './liste-genre/liste-genre.component';

const routes: Routes = [
  {path: "patient", component : PatientComponent},
  {path: "add-patient", component : AddPatientComponent,canActivate:[PatientGuard]},
  {path: "updatePatient/:id",component:UpdatePatientComponent},
  {path: "rechercheParGenreMedicaux", component : RechercheParGenreMedicauxComponent},
  {path:"rechercheParNom",component:RechercheParNomComponent},
  {path:"register",component:RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path:'listeGenresMedicaux',component:ListeGenreComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "", redirectTo: "patient", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
