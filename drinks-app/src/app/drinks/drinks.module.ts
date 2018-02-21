import { NgModule } from '@angular/core';
import { DrinkListComponent } from './drink-list.component';
import { DrinkService } from './drink.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [DrinkListComponent],
    imports: [CommonModule],
    exports: [DrinkListComponent]
})
export class DrinksModule {}
