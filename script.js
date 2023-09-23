/*
	WEB 303 Assignment 1 - jQuery
	Aditya Sambhaji Bhoite
	
*/
$(document).ready(function ()
{
	$( "#yearly-salary, #percent" ).keyup(function ()

{

	var salary = parseFloat($("#yearly-salary").val());
	var percent = parseFloat($("#percent").val());



	        if (!isNaN(salary) && !isNaN(percent))
{
			var amount = (salary * (percent / 100)).toFixed(2);
			$( "#amount" ).text( "$" + amount);
		}
	}
	);
}
);