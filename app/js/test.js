
$.ajax({
  type: 'GET',
  url: 'app/assets/test.xml',
  dataType: 'xml',
  success: function(response) {
    $(response).find('span').each(function() {
      $('body').append('XML category:' + this.getAttribute('category'));
      $('body').append('XML category text:' + this.textContent.replace(/(\r\n|\n|\r)/gm,"").trim());
    })
  }
});





