import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DetailsDossierComponent } from './views/details-dossier/details-dossier.component';
import { FilesComponent } from './views/details-dossier/files/files.component';
import { EnregistrementComponent } from './views/enregistrement/enregistrement.component';
import { RanListComponent } from './views/ran-list/ran-list.component';

const routes: Routes = [

{
  path : "dashboard",
  component : DashboardComponent
},

{
  path : "verification-ran",
  component : RanListComponent
},

{
  path : "details-dossier",
  component : DetailsDossierComponent
},

{
  path : "details-dossier/details-dossier-fichiers",
  component : FilesComponent
},
{
  path : "enregistrement",
  component : EnregistrementComponent
},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
