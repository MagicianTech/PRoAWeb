import { Component, Input } from '@angular/core';
import { BarraDeBusquedaComponent } from '../../components/barra-de-busqueda/barra-de-busqueda.component';
import { ByMagicianTechComponent } from '../../components/by-magician-tech/by-magician-tech.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [
    CommonModule,
    BarraDeBusquedaComponent,
    ByMagicianTechComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  
  @Input() texto: string = ''; // Propiedad que recibe el texto



  verHeader() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
