


getXML();
getText();


function getText() {
  $.ajax({
    type: 'GET',
    url: 'app/assets/test.txt',
    dataType: 'text',
    success: function(response) {
      $('body').append(response);
      // $('body').append('XML category text:' + this.textContent.replace(/(\r\n|\n|\r)/gm,"").trim());
    }
  });
};


function getXML() {
  $.ajax({
    type: 'GET',
    url: 'app/assets/test.xml',
    dataType: 'xml',
    success: function(response) {
      $(response).find('span').each(function() {
        xml.doc = response;
        xml.add(this.getAttribute('category'));
        // $('body').append('XML category:' + this.getAttribute('category'));
        // $('body').append('XML category text:' + this.textContent.replace(/(\r\n|\n|\r)/gm,"").trim());
      })
      xml.show()
    }
  });
};

var xml = {
  categories: [],
  doc: '',
  add: function(category) {
    this.categories.push(category);
  },
  filter: function(arr) {
    var sortedArray = [], prev;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        sortedArray.push(arr[i]);
      }
      prev = arr[i];
    }
    return sortedArray
  },
  show: function() {
    that = this;
    filtered_array = this.filter(this.categories);
    $(filtered_array).each(function() {
      $('thead tr').append('<th>' + this + '</th>');
      $('tbody tr').append('<td>' + that.count(that, this) + '</td>');
    });
  },
  count: function(obj, category) {
    arr = [];
    $(obj.categories).each(function() {
      if (this == category.toString()) {
        arr.push(this)
      }
    })
    return arr.length;
  }
}





//$('body').append('XML category text:' + this.textContent.replace(/(\r\n|\n|\r)/gm,"").trim());


