angular.module('app', [])
    .component('drinkList', {
        templateUrl: "/content/js/drink-list.html",
        controller: 'drinkController'
    })
    .controller('drinkController', ['DrinksService', function (DrinksService) {
        let contr = this;
        contr.drinks = [];
        contr.categoryDrinks = [];
        contr.categoryTitle = "";
        contr.$onInit = function () {
            DrinksService.getAll().then(response => {
                console.log("Drinks Loaded");
                contr.drinks = response.data.drinks;
            });
        }

        contr.toggleDropdown = function () {
            contr.isActive = !contr.isActive;
        }

        contr.showByCategory = function (event, category) {
            event.preventDefault();
            contr.isActive = !contr.isActive;
            contr.categoryDrinks = [];
            contr.categoryTitle = category;
            DrinksService.getByCategory(category).then(response => {
                console.log("Category Drinks Loaded");
                console.log(response.data.drinks);
                contr.categoryDrinks = response.data.drinks.map(data=> ({...data,image: "http://"+data.strDrinkThumb}) );
            });
        }
    }])
    .service('DrinksService', ['$http', function ($http) {

        function getAll() {
            return $http.get("http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
        }

        function getByCategory(category) {
            return $http.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + category);
        }

        return {
            getAll: getAll,
            getByCategory: getByCategory
        };
    }]);