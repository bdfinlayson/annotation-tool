      // $(response).find('span').each(function() {
      //   xml.doc = response;
      //   xml.add(this.getAttribute('category'));

      // xml.show()


var xml = {
  categories: [],
  doc: '',
  add: function() {
    that = this;
    $(that.doc).find('span').each(function() {
      that.categories.push(this.getAttribute('category'));
    });
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
