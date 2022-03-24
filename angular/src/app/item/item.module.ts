import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArmamentDisplayComponent } from "./component/display/armament-display/armament-display.component";
import { ArmorDisplayComponent } from "./component/display/armor-display/armor-display.component";
import { ItemDisplayComponent } from "./component/display/item-display/item-display.component";
import { ArmamentEditComponent } from "./component/edit/armament-edit/armament-edit.component";
import { ArmorEditComponent } from "./component/edit/armor-edit/armor-edit.component";
import { AshEditComponent } from "./component/edit/ash-edit/ash-edit.component";
import { AshOfWarEditComponent } from "./component/edit/ash-of-war-edit/ash-of-war-edit.component";
import { ItemAddComponent } from "./component/edit/item-add/item-add.component";
import { ItemEditComponent } from "./component/edit/item-edit/item-edit.component";
import { MaterialEditComponent } from "./component/edit/material-edit/material-edit.component";
import { SpellEditComponent } from "./component/edit/spell-edit/spell-edit.component";
import { ToolEditComponent } from "./component/edit/tool-edit/tool-edit.component";
import { ItemSearchComponent } from "./component/search/item-search/item-search.component";
import { ItemRoutingModule } from "./routing/item.routing.module";
import { BasicItemEditComponent } from './component/edit/basic-item-edit/basic-item-edit.component';
import { ItemQueryComponent } from './component/search/item-query/item-query.component';
import { ErCommonModule } from "../common/er-common.module";

@NgModule({
    declarations: [
      ItemSearchComponent,
      ItemEditComponent,
      ArmamentDisplayComponent,
      ArmamentEditComponent,
      ItemDisplayComponent,
      ItemAddComponent,
      ArmorEditComponent,
      ArmorDisplayComponent,
      ToolEditComponent,
      AshEditComponent,
      AshOfWarEditComponent,
      MaterialEditComponent,
      SpellEditComponent,
      BasicItemEditComponent,
      ItemQueryComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      ItemRoutingModule,
      ErCommonModule,
      MatInputModule,
      MatTableModule,
      MatButtonModule,
      MatOptionModule,
      MatSelectModule,
      MatCheckboxModule,
      MatIconModule
    ],
    providers: []
  })
  export class ItemModule { }