import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public appPage = [
    {

      titulo: 'Inicio',
      url: 'home',
      icono: 'home'
    },
    {
      titulo: 'Doctores',
      url: 'perfil-medico',
      icono: 'md-heart'
    },
    {
      titulo: 'Contácto',
      url: '#',
      icono: 'md-information-circle'
    },
    {
      titulo: 'Ayuda',
      url: 'tab-graficas',
      icono: 'md-help-circle'
    },
    {
      titulo: 'Promoción',
      url: '#',
      icono: 'md-pricetag'
    },
    {
      titulo: 'Políticas de Privacidad',
      url: '#',
      icono: 'md-document'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
