import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

export class DrinkDto {
  public idDrink: string;
  public strCategory: string;
  public strDrink: string;
  public strDrinkThumb: string;
}

export class ServiceResponse{
  public drinks: DrinkDto[];
}

@Injectable()
export class DrinkService {

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<DrinkDto[]> {
    return this.http.get<ServiceResponse>('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').pipe(map(x => x.drinks));
  }

  public getByCategory(category) {
    return this.http.get<ServiceResponse>('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + category);
  }
}
