// $(function() {

//     $.getJSON("http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
//         function(data) {
//             console.log(data.drinks);
//             var menulist = $("div.dropdown > div.dropdown-menu");
//             data.drinks.forEach(element => {

//                 menulist.append("<a class=\"dropdown-item\">" + element.strCategory + "</a>");
//             });

//             menulist.children().click(function(e) {
//                 e.preventDefault();
//                 var value = $(this).html();
//                 $.getJSON("http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + value,
//                     function(data) {
//                         var drinksDiv = $("#category-drinks").empty();
//                         data.drinks.forEach(function(element) {
//                             var drinkElement = "<div class=\"card\" style=\"width: 16rem;\"><img class=\"card-img-top\" src=\"http://" + element.strDrinkThumb + "\" /><div class=\"card-body\"><h6 class=\"card-title\">" + element.strDrink + "</h6></div></div>";
//                             $("#category-drinks").append(drinkElement);
//                         });
//                     }
//                 );
//             });
//         }
//     );
// });