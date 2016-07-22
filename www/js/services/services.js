angular
    .module('party')

    .factory("Auth", ["$firebaseAuth", "$firebaseRef",
        function ($firebaseAuth, $firebaseRef) {
            return $firebaseAuth($firebaseRef.default);
        }
    ])

    .service('authService', function ($firebaseAuthService, $state) {

        this.checkAuth = function () {
            console.log("check auth function running")
            $firebaseAuthService.$waitForAuth()
                .then(function (auth) {
                    if (!auth) {
                        $state.go('login');
                        console.log("please log in first");
                    } else {
                        console.log(auth)
                        console.log("signed in");
                    }
                })


        }
    })