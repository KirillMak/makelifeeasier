/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/todo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/todo.js":
/*!***************************!*\
  !*** ./assets/js/todo.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Удаление задания c помощью ajax-запроса из todo при клике на кнопку удаления
 */

$(document).ready(function () {

    $(".delete").click(function (event) {
        var tr_id = $(this).parent().parent().attr('id');
        $('#ModalCenter').modal('show');

        $("#modal_delete").click(function (event) {
            //alert(tr_id);

            $.ajax({
                type: "POST",
                url: "/index.php/ajax",
                data: "id=" + tr_id
                //success: function(msg){
                //  alert( "Прибыли данные: " + msg );
                //}
            });

            $('#ModalCenter').modal('hide');
            $("#" + tr_id).remove();
        });
    });
});
/**
 * Функция сортировки элементов todo листа
 */
$(document).ready(function () {

    //$(".delete").css("display","block");
    //$("tbody").children()
    $("tbody").sortable();
});

$(document).ready(function () {

    $(".show").click(function (event) {
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
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
    borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
    borderWidth: 1
}];

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
                    beginAtZero: true
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
                    beginAtZero: true
                }
            }]
        }
    }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTI2NGFlODQ2YzhjNGJjNGNlNWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RvZG8uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImV2ZW50IiwidHJfaWQiLCJwYXJlbnQiLCJhdHRyIiwibW9kYWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJyZW1vdmUiLCJzb3J0YWJsZSIsInNldF9vZl9kYXRhIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiY3R4IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibXlDaGFydCIsIkNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJvcHRpb25zIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFJQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVU7O0FBRXhCRixNQUFFLFNBQUYsRUFBYUcsS0FBYixDQUFtQixVQUFTQyxLQUFULEVBQWU7QUFDMUIsWUFBSUMsUUFBUUwsRUFBRSxJQUFGLEVBQVFNLE1BQVIsR0FBaUJBLE1BQWpCLEdBQTBCQyxJQUExQixDQUErQixJQUEvQixDQUFaO0FBQ0FQLFVBQUUsY0FBRixFQUFrQlEsS0FBbEIsQ0FBd0IsTUFBeEI7O0FBRUFSLFVBQUUsZUFBRixFQUFtQkcsS0FBbkIsQ0FBeUIsVUFBU0MsS0FBVCxFQUFlO0FBQ2hDOztBQUVBSixjQUFFUyxJQUFGLENBQU87QUFDSEMsc0JBQU0sTUFESDtBQUVIQyxxQkFBSyxpQkFGRjtBQUdIQyxzQkFBTSxRQUFNUDtBQUNaO0FBQ0E7QUFDQTtBQU5HLGFBQVA7O0FBVUFMLGNBQUUsY0FBRixFQUFrQlEsS0FBbEIsQ0FBd0IsTUFBeEI7QUFDQVIsY0FBRSxNQUFJSyxLQUFOLEVBQWFRLE1BQWI7QUFDUCxTQWZEO0FBa0JQLEtBdEJEO0FBdUJELENBekJIO0FBMEJBOzs7QUFHQWIsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVU7O0FBR3BCO0FBQ0E7QUFDQUYsTUFBRSxPQUFGLEVBQVdjLFFBQVg7QUFHUCxDQVJEOztBQVVBZCxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVTs7QUFFekJGLE1BQUUsT0FBRixFQUFXRyxLQUFYLENBQWlCLFVBQVNDLEtBQVQsRUFBZTtBQUM3Qjs7QUFFRDtBQUNELEtBSkQ7QUFNRixDQVJEOztBQVVBOzs7O0FBSUEsSUFBSVcsY0FBYyxDQUFDO0FBQ2ZDLFdBQU8sWUFEUTtBQUVmSixVQUFNLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FGUztBQUdmSyxxQkFBaUIsQ0FDYix5QkFEYSxFQUViLHlCQUZhLEVBR2IseUJBSGEsRUFJYix5QkFKYSxFQUtiLDBCQUxhLEVBTWIseUJBTmEsQ0FIRjtBQVdmQyxpQkFBYSxDQUNULG9CQURTLEVBRVQsdUJBRlMsRUFHVCx1QkFIUyxFQUlULHVCQUpTLEVBS1Qsd0JBTFMsRUFNVCx1QkFOUyxDQVhFO0FBbUJmQyxpQkFBYTtBQW5CRSxDQUFELENBQWxCOztBQXVCQSxJQUFJQyxNQUFNbkIsU0FBU29CLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFVBQXBDLENBQStDLElBQS9DLENBQVY7QUFDQSxJQUFJQyxVQUFVLElBQUlDLEtBQUosQ0FBVUosR0FBVixFQUFlO0FBQ3pCVixVQUFNLEtBRG1CO0FBRXpCRSxVQUFNO0FBQ0ZhLGdCQUFRLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsUUFBaEIsRUFBMEIsT0FBMUIsRUFBbUMsUUFBbkMsRUFBNkMsUUFBN0MsQ0FETjtBQUVGQyxrQkFBVVg7QUFGUixLQUZtQjtBQU16QlksYUFBUztBQUNMQyxnQkFBUTtBQUNKQyxtQkFBTyxDQUFDO0FBQ0pDLHVCQUFPO0FBQ0hDLGlDQUFZO0FBRFQ7QUFESCxhQUFEO0FBREg7QUFESDtBQU5nQixDQUFmLENBQWQ7O0FBaUJBLElBQUlYLE1BQU1uQixTQUFTb0IsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsVUFBckMsQ0FBZ0QsSUFBaEQsQ0FBVjtBQUNBLElBQUlDLFVBQVUsSUFBSUMsS0FBSixDQUFVSixHQUFWLEVBQWU7QUFDekJWLFVBQU0sTUFEbUI7QUFFekJFLFVBQU07QUFDRmEsZ0JBQVEsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixRQUFoQixFQUEwQixPQUExQixFQUFtQyxRQUFuQyxFQUE2QyxRQUE3QyxDQUROO0FBRUZDLGtCQUFVWDtBQUZSLEtBRm1CO0FBTXpCWSxhQUFTO0FBQ0xDLGdCQUFRO0FBQ0pDLG1CQUFPLENBQUM7QUFDSkMsdUJBQU87QUFDSEMsaUNBQVk7QUFEVDtBQURILGFBQUQ7QUFESDtBQURIO0FBTmdCLENBQWYsQ0FBZCxDIiwiZmlsZSI6InRvZG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy90b2RvLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUyNjRhZTg0NmM4YzRiYzRjZTVmIiwiLyoqXHJcbiAqINCj0LTQsNC70LXQvdC40LUg0LfQsNC00LDQvdC40Y8gYyDQv9C+0LzQvtGJ0YzRjiBhamF4LdC30LDQv9GA0L7RgdCwINC40LcgdG9kbyDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPXHJcbiAqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgXHJcbiAgICAkKFwiLmRlbGV0ZVwiKS5jbGljayhmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHZhciB0cl9pZCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgJCgnI01vZGFsQ2VudGVyJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIiNtb2RhbF9kZWxldGVcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYWxlcnQodHJfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvaW5kZXgucGhwL2FqYXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJpZD1cIit0cl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zdWNjZXNzOiBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgYWxlcnQoIFwi0J/RgNC40LHRi9C70Lgg0LTQsNC90L3Ri9C1OiBcIiArIG1zZyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI01vZGFsQ2VudGVyJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI1wiK3RyX2lkKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgIH0pXHJcbiAgfSk7XHJcbi8qKlxyXG4gKiDQpNGD0L3QutGG0LjRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDRjdC70LXQvNC10L3RgtC+0LIgdG9kbyDQu9C40YHRgtCwXHJcbiAqL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAgXHJcbiAgICAgICAgLy8kKFwiLmRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcclxuICAgICAgICAvLyQoXCJ0Ym9keVwiKS5jaGlsZHJlbigpXHJcbiAgICAgICAgJChcInRib2R5XCIpLnNvcnRhYmxlKCk7XHJcbiAgICAgXHJcbiAgXHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICBcclxuICAgJChcIi5zaG93XCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgLy8kKFwiLmRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcclxuXHJcbiAgICAgLy8gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiDQlNC+0LHQsNCy0LvQtdC90LjQtSDQtNC40LDQs9GA0LDQvCDQsiDRgNCw0LfQtNC10LsgcGVwb3J0XHJcbiAqL1xyXG5cclxudmFyIHNldF9vZl9kYXRhID0gW3tcclxuICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICBkYXRhOiBbMTIsIDI5LCAzLCA1LCAyLCAzXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsXHJcbiAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjIpJyxcclxuICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLFxyXG4gICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXHJcbiAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMC4yKScsXHJcbiAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjIpJ1xyXG4gICAgXSxcclxuICAgIGJvcmRlckNvbG9yOiBbXHJcbiAgICAgICAgJ3JnYmEoMjU1LDk5LDEzMiwxKScsXHJcbiAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXHJcbiAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXHJcbiAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXHJcbiAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxyXG4gICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknXHJcbiAgICBdLFxyXG4gICAgYm9yZGVyV2lkdGg6IDFcclxufV1cclxuXHJcblxyXG52YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJCYXJDaGFydFwiKS5nZXRDb250ZXh0KCcyZCcpO1xyXG52YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgIHR5cGU6ICdiYXInLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogW1wiUmVkXCIsIFwiQmx1ZVwiLCBcIlllbGxvd1wiLCBcIkdyZWVuXCIsIFwiUHVycGxlXCIsIFwiT3JhbmdlXCJdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBzZXRfb2ZfZGF0YVxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTGluZUNoYXJ0XCIpLmdldENvbnRleHQoJzJkJyk7XHJcbnZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogW1wiUmVkXCIsIFwiQmx1ZVwiLCBcIlllbGxvd1wiLCBcIkdyZWVuXCIsIFwiUHVycGxlXCIsIFwiT3JhbmdlXCJdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBzZXRfb2ZfZGF0YVxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy90b2RvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==