
$.ajax({
  type: 'GET',
  url: 'app/assets/test.xml',
  dataType: 'xml',
  success: function(response) {
    $(response).find('span').each(function() {
      categories.add(this.getAttribute('category'));
      // $('body').append('XML category:' + this.getAttribute('category'));
      // $('body').append('XML category text:' + this.textContent.replace(/(\r\n|\n|\r)/gm,"").trim());
    })
    categories.show()
  }
});

var categories = {
  values: [],
  add: function(category) {
    this.values.push(category);
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
    filtered_array = this.filter(this.values);
    $(filtered_array).each(function() {
      $('thead tr').append('<th>' + this + '</th>');
      $('tbody tr').append('<td>' + that.count(that, this) + '</td>');
    });
  },
  count: function(obj, category) {
    arr = [];
    $(obj.values).each(function() {
      if (this == category.toString()) {
        arr.push(this)
      }
    })
    return arr.length;
  }
}



//$('body').append('XML category text:' + this.textContent.replace(/(\r\n|\n|\r)/gm,"").trim());


