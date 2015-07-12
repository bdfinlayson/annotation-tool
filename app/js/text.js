var text = {
  doc: '',
  show: function() {
    getText();
    $('body').append('<p class="content">' + this.doc + '</p>');
  }
};
