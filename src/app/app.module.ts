import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AsideComponent } from './views/aside/aside.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { RanListComponent } from './views/ran-list/ran-list.component';
import { DetailsDossierComponent } from './views/details-dossier/details-dossier.component';
import { FilesComponent } from './views/details-dossier/files/files.component';
import { EnregistrementComponent } from './views/enregistrement/enregistrement.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    RanListComponent,
    DetailsDossierComponent,
    FilesComponent,
    EnregistrementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
