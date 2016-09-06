

var imdb = angular.module("imdb",[]);

imdb.controller("gallery",gallery);
function gallery($scope){
		$scope.actors=[
		{
			name: "Chris Evans",
			path: "http://www.imdb.com/name/nm0262635/",
			img: "ChrisEvans.jpg",
		},
		{
			name: "Emilia Clarke",
			path: "http://www.imdb.com/name/nm3592338/?ref_=fn_al_nm_1",
			img:"EmiliaClarke.jpg",
		},
		{
			name: "Emma Watson",
			path: "http://www.imdb.com/name/nm0914612/?ref_=fn_al_nm_1",
			img: "EmmaWatson.jpg",
		},
		{
			name:"Kit Harington",
			path:"http://www.imdb.com/name/nm3229685/?ref_=fn_al_nm_1",
			img: "KitHarington.jpg",
		},
		{
			name:"Lizzy Caplan",
			path:"http://www.imdb.com/name/nm0135221/?ref_=fn_al_nm_1",
			img: "LizzyCaplan.jpg",
		},
		{
			name:"Michael Fassbender",
			path:"http://www.imdb.com/name/nm1055413/?ref_=fn_al_nm_1",
			img: "MichaelFassbender.jpg",
		},
		];
		$scope.sort= function (dir){
	if (dir == "up"){
		$scope.upDown="name";
	}
	else{
		$scope.upDown="-name";
	}
};	
	}
	


