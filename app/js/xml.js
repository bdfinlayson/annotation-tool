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
    var filteredArray = [], prev;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        filteredArray.push(arr[i]);
      }
      prev = arr[i];
    }
    return filteredArray
  },
  show: function() {
    that = this;
    filteredArray = this.filter(this.categories);
    this.categories = filteredArray;
    $(filteredArray).each(function() {
      $('thead tr').append('<th>' + this + '</th>');
      $('tbody tr').append('<td>' + that.matchCount(this) + '</td>');
    });
  },
  matchCount: function(category) {
    return this.match(category).length;
  },
  match: function(category) {
    arr = [];
    matches = [];
    merged = [];
    str = text.doc;
    elements = this.doc.querySelectorAll("[category=" + category + "]")
    for (var i = 0; i < elements.length; i++) {
      arr.push(elements[i].textContent.replace(/(\r\n|\n|\r)/gm,"").trim());
    }
    filteredArray = this.filter(arr);
    for (var i = 0; i < filteredArray.length; i++) {
      pattern = filteredArray[i];
      regex = new RegExp(pattern, 'gi');
      if (str.match(regex)) {
        matches.push(str.match(regex));
      }
    }
    merged = merged.concat.apply(merged, matches); // For unnesting nested arrays
    return merged;
  }
}
