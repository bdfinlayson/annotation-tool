function getText() {
  $.ajax({
    type: 'GET',
    url: 'app/assets/text/ch12.txt',
    dataType: 'text',
    success: function(response) {
      text.doc = response;
    }
  });
};


function getXML() {
  $.ajax({
    type: 'GET',
    url: 'app/assets/xml/ch12.txt.xml',
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

