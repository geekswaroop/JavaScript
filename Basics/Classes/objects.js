class User {
    constructor(email, name)
    {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, ' has logged in');
        return this;
    }
    logout(){
        console.log(this.email, ' has logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, ' score is now: ', this.score);
        return this;
    }
}

class Admin{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}
var userOne = new User('kks@gmail.com', 'kks');
var userTwo = new User('kks2@gmail.com', 'kks2');

var admin = new Admin('kks-admin@gmail.com', 'kks-admin');
users = [userOne, userTwo];

admin.deleteUser(userOne);
console.log(users);