import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// MODULOS PROPIOS
import { BolsaDeTrabajoComponent } from './bolsa-de-trabajo/bolsa-de-trabajo.component';
import { CursosComponent } from './cursos/cursos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    PagesComponent,
    BolsaDeTrabajoComponent,
    CursosComponent,
    NosotrosComponent,
    NoticiasComponent,
  ],
  exports:[
    BolsaDeTrabajoComponent,
    CursosComponent,
    NosotrosComponent,
    NoticiasComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PagesModule { }
