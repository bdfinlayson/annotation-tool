var text = {
  doc: '',
  colors: ['indianred','cadetblue','greenyellow','hotpink','tomato','antiquewhite', 'aquamarine', 'burlywood', 'yellow', 'pink', 'orange', 'green', 'cyan'],
  show: function() {
    $('body').append('<p class="content">' + this.doc + '</p>');
  },
};
