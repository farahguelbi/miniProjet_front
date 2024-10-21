import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { RechercheParGenreMedicauxComponent } from './recherche-par-genre-medicaux/recherche-par-genre-medicaux.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path: "patient", component : PatientComponent},
  {path: "add-patient", component : AddPatientComponent},
  {path: "updatePatient/:cin",component:UpdatePatientComponent},
  {path: "rechercheParGenreMedicaux", component : RechercheParGenreMedicauxComponent},
  {path:"rechercheParNom",component:RechercheParNomComponent},
  {path: "", redirectTo: "patient", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
