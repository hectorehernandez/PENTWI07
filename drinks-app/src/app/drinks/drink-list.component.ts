import { Component, OnInit } from "@angular/core";
import { DrinkDto, DrinkService } from "./drink.service";

@Component({
    selector: "drink-list",
    templateUrl: "./drink-list.component.html",
    providers: [DrinkService]
})
export class DrinkListComponent implements OnInit {

    public categories: string[];

    constructor(private drinkService: DrinkService) {

    }

    ngOnInit(): void {
        this.drinkService.getAll().subscribe(response => response.map(drink => drink.strCategory));
    }
}
