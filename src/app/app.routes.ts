import { Routes } from "@angular/router";
import { usuarioEstaLogadoResolver } from "./resolvers/usuario-esta-logado.resolver";

export const AppRotas: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(x => x.PlayerModule),
    resolve: {
      usuarioEstaLogado: usuarioEstaLogadoResolver,
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  }
]