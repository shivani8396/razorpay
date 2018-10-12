
// navbar form
$('.form-navbar').on("mouseenter", function() {
  $('.hiring').hide();
  $(this).addClass('active');
}).on("mouseleave", function(){
  $('.hiring').show();
  $(this).removeClass('active');
});

// Form js
$('.add-new').click(function() {
  event.preventDefault();
  
  // get the last DIV whose ID starts with ^= "pane"
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
  $('.heading', $pane).text('Person '+ num+ ' Details');
  // $formId.after($('.heading').text('Person'+num+ 'Details'));
  console.log('heading text changed');
  
  // Changing all input IDs dynamically
  $('.first-name', $pane).prop('id', 'firstName'+num);
  $('.last-name', $pane).prop('id', 'lasttName'+num);
  $('.mail', $pane).prop('id', 'mail'+num);
  $('.password', $pane).prop('id', 'password'+num);
  $('.select-state', $pane).prop('id', 'inputState'+num);
  $('.custom-file-input', $pane).prop('id', 'customFile'+num);
  $('.form-check-input', $pane).prop('id', 'check'+num);
  
});
