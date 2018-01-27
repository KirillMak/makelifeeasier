/**
 * Удаление задания из todo при клике на кнопку удаления
 */
$(document).ready(function(){
    
     $(".delete").click(function(event){
        //$(".delete").css("display","block");

        $(this).parent().parent().remove();
     });
  
  });

$(document).ready(function(){
    
     
        //$(".delete").css("display","block");
        //$("tbody").children()
        $("tbody").sortable();
     
  
});

$(document).ready(function(){
  
   $(".show").click(function(event){
      //$(".delete").css("display","block");

      $(this).parent().parent().remove();
   });

});



