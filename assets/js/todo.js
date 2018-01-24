$(document).ready(function(){
    
     $(".delete").click(function(event){
        //$(".delete").css("display","block");

        $(this).parent().parent().remove();
     });
  
  });