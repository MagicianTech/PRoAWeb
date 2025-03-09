import { Component, Input } from '@angular/core';
import { BarraDeBusquedaComponent } from '../../components/barra-de-busqueda/barra-de-busqueda.component';
import { ByMagicianTechComponent } from '../../components/by-magician-tech/by-magician-tech.component';

@Component({
  selector: 'app-header',
  imports: [
    BarraDeBusquedaComponent,
    ByMagicianTechComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() texto: string = ''; // Propiedad que recibe el texto
}
