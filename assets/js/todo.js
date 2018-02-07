/**
 * Удаление задания c помощью ajax-запроса из todo при клике на кнопку удаления
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
/**
 * Функция сортировки элементов todo листа
 */
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

var ctx = document.getElementById("myChart");

var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
    
        ]
    
    }
   
    //options: options
});



