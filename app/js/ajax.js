function getText() {
  $.ajax({
    type: 'GET',
    url: 'app/assets/test.txt',
    dataType: 'text',
    success: function(response) {
      text.doc = response;
    }
  });
};


function getXML() {
  $.ajax({
    type: 'GET',
    url: 'app/assets/test.xml',
    dataType: 'xml',
    success: function(response) {
      xml.doc = response;
      xml.add()
      xml.show()
      highlight();
      text.show();
    }
  });
};

