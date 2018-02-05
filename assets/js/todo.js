/**
 * Удаление задания из todo при клике на кнопку удаления
 */

$(document).ready(function(){
   
    $(".delete").click(function(event){
            var tr_id = $(this).parent().parent().attr('id');
            $('#ModalCenter').modal('show');
           
            $("#modal_delete").click(function(event){
                    //alert(tr_id);
                   
                    $.ajax({
                        type: "POST",
                        url: "/index.php/ajax",
                        data: "id="+tr_id,
                        //success: function(msg){
                        //  alert( "Прибыли данные: " + msg );
                        //}
                    });

                    
                    $('#ModalCenter').modal('hide');
                    $("#"+tr_id).remove();
            });

            
    })
  });

$(document).ready(function(){
    
     
        //$(".delete").css("display","block");
        //$("tbody").children()
        $("tbody").sortable();
     
  
});

$(document).ready(function(){
  
   $(".show").click(function(event){
      //$(".delete").css("display","block");

     // $(this).parent().parent().remove();
   });

});



