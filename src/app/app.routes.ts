import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "autenticacion", loadChildren:() => import("./module/auth/auth.module").then(moduleAuth=>moduleAuth.AuthModule)},
    {path: "", redirectTo: "autenticacion/registro", pathMatch: "full"},
];
