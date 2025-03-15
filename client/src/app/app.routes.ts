import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { PromosComponent } from './pages/promos/promos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'materias', component:MateriasComponent},
    {path:'especialidad', component:EspecialidadComponent},
    {path:'historiaProa', component:HistoriaComponent},
    {path:'promos', component:PromosComponent},
    {path:'noticias', component:NoticiasComponent},
];
