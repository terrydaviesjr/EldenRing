import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErCommonModule } from "./common/er-common.module";
import { ItemModule } from "./item/item.module";
import { NpcModule } from "./npc/npc.module";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ItemModule,
    ErCommonModule,
    NpcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
