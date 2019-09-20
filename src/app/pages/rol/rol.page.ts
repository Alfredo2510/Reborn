import { Component, OnInit } from '@angular/core';
import { UsuarioService, Credenciales } from '../../services/usuario.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {

  user: Credenciales = {};

  constructor(
            ) {
   }


  ngOnInit() {
  }

}
