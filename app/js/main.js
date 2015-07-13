(function() {
  get();
})();

$(document).on("click", "button", function(){
  var parentEl = this.parentNode;
  var button = parentEl.childNodes[1];
  var childEl = parentEl.childNodes[0];
  var currValue = parseInt($('#' + childEl.className).text() - 1)
  $('#' + childEl.className).replaceWith( '<td id=' + childEl.className + '>' + currValue + '</td>');
  $(childEl).removeClass();
  $(button).remove();
});

$(document).on("click", "a", function(){
  var chapter = this.id;
  $('.chapter').remove();
  $('th').remove();
  $('td').remove();
  $('.alert').remove();
  $('.content').remove();
  get(chapter);
});
