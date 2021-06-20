var userOne = {
    name: 'Krishna Swaroop', 
    email: 'kks@gmail.com',
    login(){
        console.log(this.email, ' has logged in');
    },
    logout(){
        console.log(this.email, ' has logged out');
    },
};

// Updating props
userOne.name = "Krishna - Updated";

//Dynamic Update
var prop = 'email';
//console.log(userOne[prop]);

//Adding props and methods
userOne.email2 = 'kks2@gmail.com'
userOne.logInfo = function(){
    console.log(this.email, this.name, this.email2);
}
