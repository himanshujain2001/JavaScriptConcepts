const user = {
    username: "abc",
    id: 123,
    message: function(){
        // console.log(`Hello ${username}`); // error (username isn't defined)
        console.log(`Hello ${this.username}`);
        console.log(this); // yha par current context 'user' object h to poora obj print hoga
        
    }
}

function abc(){
    console.log(this); 
}

abc()

user.message()
user.username = "abcd"
user.message()
console.log(this); // {} -> since we r executing this command in node env and global scope m kr rhe h to current context ek empty object hi h
// while if we run this cmd in browser then vha pe window object ans aayega



////// Note: This keyword holds the current context
