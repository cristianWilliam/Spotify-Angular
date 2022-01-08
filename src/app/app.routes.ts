import { Routes } from "@angular/router";
import { AutenticadoGuard } from "./guards/autenticado.guard";

export const AppRotas: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(x => x.PlayerModule),
    canLoad: [AutenticadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  }
]