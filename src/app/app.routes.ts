import { Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './lala/partes/header/header.component';
import { BodyComponent } from './lala/partes/body/body.component';
import { ContactosComponent } from './lala/paginas/contactos/contactos.component';
import { MenuComponent } from './lala/paginas/menu/menu.component';
import { RegistroComponent } from './lala/paginas/registro/registro.component';
import { FooterComponent } from './lala/partes/footer/footer.component';
import path from 'path';
import { Component } from '@angular/core';

export const routes: Routes = [{
    path:'header',
    component:HeaderComponent},
    {
    path:'body',
    component:BodyComponent},
    {
    path:'contactos',
    component:ContactosComponent},
    {
    path:'menu',
    component:MenuComponent},
    {
    path:'registro',
    component:RegistroComponent},
    {
    path:'footer',
    component:FooterComponent}

];
