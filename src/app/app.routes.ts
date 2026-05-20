import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'interpolacion',
    pathMatch: 'full',
  },
  {
    path: 'interpolacion',
    loadComponent: () => import('./interpolacion/interpolacion.page').then( m => m.InterpolacionPage)
  },
  {
    path: 'binding',
    loadComponent: () => import('./binding/binding.page').then( m => m.BindingPage),
    children:[
        {
          path: 'property',
          loadComponent: () => import('./binding/property/property.page').then( m => m.PropertyPage)
        },
        {
          path: 'event',
          loadComponent: () => import('./binding/event/event.page').then( m => m.EventPage)
        },
        {
          path: 'double',
          loadComponent: () => import('./binding/double/double.page').then( m => m.DoublePage)
        },
      ]
  },
  {
    path: 'vista',
    loadComponent: () => import('./vista/vista.page').then( m => m.VistaPage)
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.page').then( m => m.NotFoundPage)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
