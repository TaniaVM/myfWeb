$('#TextColor').click( function(){$('#myFirstDiv').css('color','white');});
$('#TextColor1').click( function(){$('#myFirstDiv').css('color','SteelBlue');});

$('#alert').click( function(){
alert('Buy more than 3 items on the same purchase will give you an automatic discount of 20%!');});
var myNumber =1;
//Listeners
//When the add button is clicked, increment myNumber
//and update page
$('#addOne').click(function(){myNumber = myNumber +1;
$('#myNumber').text(myNumber);
}
)

$('#SubstractOne').click(function(){myNumber = myNumber -1;
$('#myNumber').text(myNumber);
}
)

var Total1 = 1;
$('#addOne').click(function(){Total1 = myNumber *35;
$('#Total1').text(Total1);
}
)
var Total1 = 1;
$('#SubstractOne').click(function(){Total1 = myNumber *35;
$('#Total1').text(Total1);
}
)



