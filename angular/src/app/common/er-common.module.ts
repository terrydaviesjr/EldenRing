import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderNavigationComponent } from "./component/header-navigation/header-navigation.component";
import { SidenavComponent } from "./component/sidenav/sidenav.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
        HeaderNavigationComponent,
        SidenavComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        HeaderNavigationComponent,
        SidenavComponent
    ],
    providers: []
  })
  export class ErCommonModule { }