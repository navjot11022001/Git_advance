console.log("this is my first comomut");


function A() {
    var a = 20;
    function b() {
        var b = 30;
        console.log("this is a", a);
        function c() {
            console.log("this is b", b);
        }
        c();
    }
    b();

}
A();