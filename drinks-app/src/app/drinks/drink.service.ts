import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

export class DrinkDto {
    public idDrink: string;
    public strCategory: string;
    public strDrink: string;
    public strDrinkThumb: string;
}

@Injectable()
export class DrinkService {

    constructor(private http: HttpClient) {

    }

    public getAll(): Observable<DrinkDto[]> {
        return this.http.get<DrinkDto[]>("http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
    }

    public getByCategory(category) {
        return this.http.get<DrinkDto>("http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + category);
    }
}