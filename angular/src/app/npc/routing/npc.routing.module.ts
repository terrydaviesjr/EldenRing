import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from 'src/app/common/component/sidenav/sidenav.component';
import { NpcDisplayComponent } from '../component/npc-display/npc-display.component';
import { NpcEditComponent } from '../component/npc-edit/npc-edit.component';
import { NpcSearchComponent } from '../component/npc-search/npc-search.component';
import { NpcResolverService } from './resolve/npc-resolver.service';
import { NpcsResolverService } from './resolve/npcs-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: '',
        redirectTo: 'npcs',
        pathMatch: 'full'
      },
      {
        path: 'npcs',
        children: [
          {
            path: '',
            component: NpcSearchComponent,
            resolve: {
              npcs: NpcsResolverService
            }
          },
          {
            path: 'add-npc',
            component: NpcEditComponent
          },
          {
            path: ':alias',
            runGuardsAndResolvers: 'always',
            resolve: {
              npc: NpcResolverService
            },
            children: [
              {
                path: '',
                component: NpcDisplayComponent
              },
              {
                path: 'edit',
                component: NpcEditComponent
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NpcRoutingModule { }