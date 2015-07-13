function getText() {
  $.ajax({
    type: 'GET',
    url: 'app/assets/text/ch08.txt',
    dataType: 'text',
    success: function(response) {
      text.doc = response;
    }
  });
};


function getXML() {
  $.ajax({
    type: 'GET',
    url: 'app/assets/xml/ch08.txt.xml',
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

