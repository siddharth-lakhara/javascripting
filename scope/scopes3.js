function foo() {
  var bar = 5;
  quux = 3;
  function zip() {
    var quux = 10;
    bar = true;
  }
  return zip;
  // return {method: zip, vars: {bar: true}}
  //console.log(bar);
  //console.log(quux);
}
