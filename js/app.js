document.getElementById("btn1").addEventListener("click",function(){


    let get1=document.getElementById("field1")
    let get2=get1.value
    
    let get3=document.getElementById("field2")
    let get4=get3.value
    console.log(get4);

   if(get2==="mahedi"  && get4==="mahedi1"){
       window.location.href="https://www.youtube.com/results?search_query=how+to+practice+javascript+for+improvement"
       Swal.fire(
           'success!',
           'You clicked the button!',
           'success'
         )
   }

   else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '2nd value is not valide',
        footer: '<a href="js/index.html">Why do I have this issue?</a>'
      })
   }


})