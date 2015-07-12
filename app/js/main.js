(function() {
  getText();
  getXML();
})();

$(document).on("click", "span", function(){
  var currValue = parseInt($('#' + this.className).text() - 1)
  $('#' + this.className).replaceWith( '<td id=' + this.className + '>' + currValue + '</td>');
  ($('#' + this.className).text());
  $(this).removeClass();
});
