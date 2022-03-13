import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';
import { ItemSearchComponent } from './component/item-search/item-search.component';
import { ItemResolverService } from './routing/resolve/item-resolver.service';
import { ItemsResolverService } from './routing/resolve/items-resolver.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ItemSearchComponent,
        resolve: {
          items: ItemsResolverService
        }
      },
      {
        path: ':alias',
        component: ItemDetailComponent,
        resolve: {
          item: ItemResolverService
        }
      },
      {
        path: 'add-item',
        component: ItemDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
