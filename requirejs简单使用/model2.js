define(['model1'],function(m1) {
   var a,b=2,c=4;
   a=b*m1.a;
   function sum() {
   		this.a = a;
   		return a+b;
   }
   return {
   		a:a,
   		b:b,
   		sum:sum
   };
})