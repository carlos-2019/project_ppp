import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// MODULOS PROPIOS
import { BolsaDeTrabajoComponent } from './bolsa-de-trabajo/bolsa-de-trabajo.component';
import { CursosComponent } from './cursos/cursos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PagesComponent } from './pages.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes: Routes = [

    { 
        path: 'home', 
        component: PagesComponent,
        children: [
            { path: 'bolsa-de-trabajo', component: BolsaDeTrabajoComponent },
            { path: 'cursos', component: CursosComponent },
            { path: 'nosotros', component: NosotrosComponent },
            { path: 'noticias', component: NoticiasComponent },
        ]
        },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
