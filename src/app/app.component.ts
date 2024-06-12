import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './lala/partes/header/header.component';
import { BodyComponent } from './lala/partes/body/body.component';
import { ContactosComponent } from './lala/paginas/contactos/contactos.component';
import { MenuComponent } from './lala/paginas/menu/menu.component';
import { RegistroComponent } from './lala/paginas/registro/registro.component';
import { FooterComponent } from './lala/partes/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, BodyComponent, ContactosComponent, MenuComponent, RegistroComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyAng20';
}
