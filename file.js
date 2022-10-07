   course = {
     a:"Javascript",
     b:"python",
     c:"Go",
     d:"Languages",
     e:"isChallenging",
     g:"isRewarding",
     h:"difficulty",
     i:"fun",
    otherbooks:["Javascript","Python","Ruby", "Go"],
    showbook()
             {
             let msg=this.otherbooks
             this.otherbooks.forEach(function(value){
             console.log(value)


                })
                console.log(msg)

    let x = 9
   let y =4
   if(x>y){
    console.log("true")

   }else{
    console.log("false")
   }
       


   let z = 8
   let o =6
   if(z>o){
    console.log("Higher No. is 7 ")

   }else{
    console.log("Higher No .is 5")
   }

   let p = 80
   let q =34
   if(p>q){
    console.log("true")

   }else{
    console.log("false")
   }}
    

   }
   let f=course.a + "\n" + course.b + "\n" + course.c+ "\n" + course.d+ "\n" + course.e+ "\n" + course.g+ "\n" + course.h  + "\n" + course.i  
   console.log(f)
   course.showbook()

   
