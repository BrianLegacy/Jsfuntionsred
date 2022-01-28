let firstarr = [];
   for (let i = 1; i <= 100; i++)
   {
      firstarr.push(i);
   }

   let chd5 = (num) => {
      return num % 5 == 0;
   }
   let dv5 = firstarr.filter(chd5);

   let add = (bfe, aft) =>{
      return bfe + aft
   };
   let sum = dv5.reduce(add);
   console.log(sum);


