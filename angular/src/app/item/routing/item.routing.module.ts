import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from 'src/app/common/component/sidenav/sidenav.component';
import { ItemDisplayComponent } from '../component/display/item-display/item-display.component';
import { ItemAddComponent } from '../component/edit/item-add/item-add.component';
import { ItemEditComponent } from '../component/edit/item-edit/item-edit.component';
import { ItemQueryComponent } from '../component/search/item-query/item-query.component';
import { ItemSearchComponent } from '../component/search/item-search/item-search.component';
import { ItemResolverService } from './resolve/item-resolver.service';
import { ItemsResolverService } from './resolve/items-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'
      },
      {
        path: 'items',
        children: [
          {
            path: '',
            component: ItemSearchComponent,
            resolve: {
              items: ItemsResolverService
            }
          },
          {
            path: 'query',
            component: ItemQueryComponent
          },
          {
            path: 'add-item',
            component: ItemAddComponent
          },
          {
            path: ':alias',
            runGuardsAndResolvers: 'always',
            resolve: {
              item: ItemResolverService
            },
            children: [
              {
                path: '',
                component: ItemDisplayComponent
              },
              {
                path: 'edit',
                component: ItemEditComponent
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
export class ItemRoutingModule { }