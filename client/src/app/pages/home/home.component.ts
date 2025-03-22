import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { TicsComponent } from '../../seccion-home/tics/tics.component';
import { ContactoComponent } from '../../seccion-home/contacto/contacto.component';
import { EncontranosComponent } from '../../seccion-home/encontranos/encontranos.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TicsComponent,
    EncontranosComponent,
    ContactoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
