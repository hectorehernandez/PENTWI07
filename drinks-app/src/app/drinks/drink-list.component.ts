import { Component, OnInit } from '@angular/core';
import { DrinkDto, DrinkService } from './drink.service';

@Component({
  selector: 'drink-list',
  templateUrl: './drink-list.component.html',
  providers: [DrinkService]
})
export class DrinkListComponent implements OnInit {

  public categories: DrinkDto[];
  public drinks: DrinkDto[];
  public isActive: boolean;
  public categoryTitle: string;

  constructor(private drinkService: DrinkService) {
    this.categoryTitle = '';
  }

  ngOnInit(): void {
    this.drinkService.getAll().subscribe(response => this.categories = response);
  }

  public showByCategory(event: Event, category: string) {
    event.preventDefault();
    this.isActive = !this.isActive;
    this.drinks = [];
    this.categoryTitle = category;
    this.drinkService.getByCategory(category).subscribe(response => {
      console.log('drinks loaded');
      this.drinks = response.drinks.map(data => ({ ...data, image: 'http://' + data.strDrinkThumb }));
    });
  }

  public toggleDropdown() {
    this.isActive = !this.isActive;
  }
}
