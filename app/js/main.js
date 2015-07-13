(function() {
  get('ch10');
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
