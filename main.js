"use strict";

$(document).ready(init);

function init() {
  $('#get').click(getClicked);
  
}

function getClicked() {
  let $tr = $("<tr>");

  var $checkboxtd = $('<td>').addClass('checkBox');
  var $checkbox = $('<input>').attr('type', 'checkbox');
  $checkboxtd.append($checkbox);

  var $descriptiontd = $('<td>').addClass('description');
  var $description = $('#text').val();
  $descriptiontd.append($description);

  var $duetd = $('<td>').addClass('due');
  var $due = $('#date').val();
  $duetd.append($due);
  
  $tr.append($checkboxtd, $descriptiontd, $duetd);
  
  $('#taskList').append($tr);

  $('#date').val('');
  $('#text').val('');

  $checkbox.change(taskCompleted);
}

function taskCompleted() {
  console.log('hello')
  let $checkBox = $(this);
  let $tr = $checkBox.parent().parent();
  console.log($checkBox);
  $tr.toggleClass('when-checked');
}