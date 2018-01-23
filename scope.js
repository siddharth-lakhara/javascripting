var a = 1, b=2, c=3;
console.log("Outside - a: "+a+", b: "+b+", c: "+c);

(function firstFunction(){
  var b=5, c=6;
  console.log("firstFunction - a: "+a+", b: "+b+", c: "+c);

  (function secondFunction(){
    var b=8;
    console.log("secondFunction - a: "+a+", b: "+b+", c: "+c);


    (function thirdFunction(){
      var a = 7, c = 9;
      console.log("thirdFunction - a: "+a+", b: "+b+", c: "+c);

      (function fourthFunction(){
        var a = 1, c = 8;
        console.log("fourthFunction - a: "+a+", b: "+b+", c: "+c);
      })();

    })();
  })();
})();
