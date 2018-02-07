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

/**
 * Добавление диаграм в раздел peport
 */

var set_of_data = [{
    label: '# of Votes',
    data: [12, 29, 3, 5, 2, 3],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
}]


var ctx = document.getElementById("BarChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: set_of_data
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("LineChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: set_of_data
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


