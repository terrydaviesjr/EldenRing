import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ErCommonModule } from "../common/er-common.module";
import { NpcRoutingModule } from "./routing/npc.routing.module";
import { NpcDisplayComponent } from "./component/npc-display/npc-display.component";
import { NpcSearchComponent } from "./component/npc-search/npc-search.component";
import { NpcEditComponent } from "./component/npc-edit/npc-edit.component";

@NgModule({
    declarations: [
        NpcDisplayComponent,
        NpcSearchComponent,
        NpcEditComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      NpcRoutingModule,
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
  export class NpcModule { }