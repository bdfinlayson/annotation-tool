function get(chapter) {
  pathId = chapter || 'ch01';
  var doctypes = ['txt','txt.xml'];
  var objects = ['text','xml'];
  for (var i = 0; i < objects.length; i++) {
    var url = makeUrl(objects[i], pathId, doctypes[i])
    getDoc(objects[i], url);
  }
}

function makeUrl(object, pathId, doctype) {
  var url = 'app/assets/' + object + '/' + pathId + '.' + doctype
  return url
}

function getDoc(object, path) {
  $.ajax({
    type: 'GET',
    url: path,
    dataType: object,
    error: function () {
      $('table').remove();
      $('body').append('<h3 class=alert>No annotations found</h3>');
      text.show();
    },
    success: function(response) {
      if (object == 'text') {
        text.doc = response;
      } else {
        xml.doc = response;
        xml.add()
        xml.show()
        highlight();
        // text.doc = response;
        text.show();
      }
    }
  });
}

