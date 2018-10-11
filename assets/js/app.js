
$('.add-new').click(function() {

// get the last DIV which ID starts with ^= "pane"
var $formId= $('div[id^="pane"]:last');
console.log($formId);

// Read the Number from that DIV's ID
// And increment that number by 1
var num = parseInt( $formId.prop('id').match(/\d+/g), 10 ) +1;
console.log(num);

// Clone it and assign the new ID 
var $pane = $formId.clone().prop('id', 'pane'+num);
console.log($pane);

// Finally insert pane in all after divs
$formId.after( $pane.appendTo('.demo-form') );
console.log('form added');

// Change form heading number
// $formId.after($('heading').clone().text('Person'+num+ 'Details'));
// console.log('heading text changed');
});

