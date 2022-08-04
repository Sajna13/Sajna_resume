function a(s, callback) {
    callback(s);
    }
    function b(s) {
    console.log(s + "! It's me!");
    }
    //call function 'a' with a predefined callback 'b'
    a("Hello world", b); //outputs Hello world! It’s me!
    //call function 'a' with a custom callback.
    a("Hello world", function(s) {
    console.log(s + ", I can use callbacks");
    //outputs I can use callbacks
    });