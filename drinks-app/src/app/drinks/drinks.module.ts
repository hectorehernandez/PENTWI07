import { NgModule } from "@angular/core";
import { DrinkListComponent } from "./drink-list.component";
import { DrinkService } from "./drink.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/Common/http";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[DrinkListComponent],
    imports:[BrowserModule,
        CommonModule,
        HttpClientModule],
    exports:[DrinkListComponent]
})
export class DrinksModule{}