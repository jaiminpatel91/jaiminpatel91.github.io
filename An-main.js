var app = angular.module("myapp", ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'home.html',
		controller: 'slider'
	})
	.when('/shoes', {
		templateUrl: 'shoes.html',
		controller: 'shoes'
	})
	.when('/cloth', {
		templateUrl: 'cloth.html',
		controller: 'cloth'
	})
	.when('/contactus', {
		templateUrl: 'contactus.html',
		controller: 'empctrl'
	})
	.otherwise({
		redirectTo: '/home'
	});
}]);

app.controller('shoes',function($scope){
    
	$scope.sdata = [
	{img: 'images/one.jpg', name: 'Nike', model: '001', price: 49.99},
	{img: 'images/two.jpg', name: 'Puma', model: '002', price: 78.99},
	{img: 'images/three.jpg', name: 'Adidas', model: '003', price: 22.99},
	{img: 'images/four.jpg', name: 'Reebok', model: '004', price: 99.99},
    {img: 'images/five.jpg', name: 'Nike', model: '005', price: 148.99},
    {img: 'images/six.jpg', name: 'Puma', model: '006', price: 34.99},
    {img: 'images/seven.jpg', name: 'Adidas', model: '007', price: 78.99},
    {img: 'images/eight.jpg', name: 'Reebok', model: '008', price: 88.99},
    {img: 'images/nine.jpg', name: 'Nike', model: '009', price: 99.99},
    {img: 'images/ten.jpg', name: 'Puma', model: '010', price: 101.99},
    ];
});

app.controller('cloth',function($scope){
	$scope.cdata = [
	{img: 'images/tone.jpg', name: 'Nike', model: '001', price: 49.99, category: 'male'},
	{img: 'images/jone.jpg', name: 'Puma', model: '002', price: 78.99, category: 'male'},
	{img: 'images/ttwo.jpg', name: 'Adidas', model: '003', price: 22.99, category: 'male'},
	{img: 'images/jtwo.jpg', name: 'Reebok', model: '004', price: 99.99, category: 'female'},
    {img: 'images/tthree.jpg', name: 'Nike', model: '005', price: 148.99, category: 'male'},
    {img: 'images/jthree.jpg', name: 'Puma', model: '006', price: 34.99, category: 'female'},
    {img: 'images/tfour.jpg', name: 'Adidas', model: '007', price: 78.99, category: 'male'},
    {img: 'images/jfour.jpg', name: 'Reebok', model: '008', price: 88.99, category: 'female'},
    {img: 'images/jfive.jpg', name: 'Reebok', model: '008', price: 88.99, category: 'female'},
    ];
});


app.controller('slider',function($scope){

var myIndex = 0;
slide();

function slide() {
    var i;
    var x = document.getElementsByClassName("slider");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slide, 3000);
}
});

