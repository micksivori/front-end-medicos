import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TarefaRouters } from "./tarefas";

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRouters
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}