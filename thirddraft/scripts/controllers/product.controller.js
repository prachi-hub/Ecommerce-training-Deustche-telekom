angular.module("onlineShopping").controller("ProductController", function ($scope, $location) {
    $scope.products = [
        { id: 1, img: "https://m.media-amazon.com/images/I/61GavzFRKVL._AC_UL480_FMwebp_QL65_.jpg", productName: 'Mobile', price: '25000' },
        { id: 2, img: "https://m.media-amazon.com/images/I/61OHplw85eL._AC_UY327_FMwebp_QL65_.jpg", productName: 'Headphones', price: '1000' },
        { id: 3, img: "https://m.media-amazon.com/images/I/61mxv1hiMUL._AC_UY327_FMwebp_QL65_.jpg", productName: 'Mobile stands', price: '300' }
    ];

    $scope.product = {
        id: '',
        productName: '',
        price: ''
    };

    $scope.registerProduct = function () {
        const maxId = $scope.products.reduce((max, item) => Math.max(max, item.id || 0), 0);

        $scope.products.push({
            id: maxId + 1,
            productName: $scope.productName,
            price: $scope.price
        });
    }

    $scope.addProductToShopingCard = function (id) {
        const filteredObj = $scope.products.find(x => x.id === id);
        console.log("called addProductToShopingCard function ==>", filteredObj);
        $location.path('/shopingcard');
    }



    // $scope.goToPage2 = function () {
    //     TodoService.setTodos($scope.todoList);
    //     $location.path('/page2');
    // };
});


// app.controller('Page1Controller', function ($scope, $rootScope, $location) {
//     $scope.todoList = [
//         { text: 'Buy groceries', done: false },
//         { text: 'Clean the house', done: false }
//     ];

//     $scope.goToPage2 = function () {
//         $rootScope.sharedTodoList = $scope.todoList;
//         $location.path('/page2');
//     };
// });