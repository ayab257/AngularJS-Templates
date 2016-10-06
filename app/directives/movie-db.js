(function(){
	angular.module("app").directive("movie-db", movie-db);
	function movie-db(){
		return{
			templateUrl: "app/templats/movie-db-directives.html",
		};
})();
