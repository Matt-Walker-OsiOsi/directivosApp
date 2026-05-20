import { Component } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.page.html',
  styleUrls: ['./binding.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonRouterOutlet
  ]
})
export class BindingPage {}
