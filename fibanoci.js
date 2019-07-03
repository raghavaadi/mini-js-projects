var fibonaci = function (n) 
{ 
  if (n===1) 
  {console.log("reached here");
    return [0, 1];
  } 
  else 
  {
    console.log("function n:",n);
    var s = fibonaci(n - 1);
    console.log(n);
    console.log(s);
     console.log("s.length",s.length);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonaci(8));
 