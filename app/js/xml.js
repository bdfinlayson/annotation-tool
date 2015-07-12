var xml = {
  categories: [],
  doc: '',
  add: function() {
    that = this;
    $(that.doc).find('span').each(function() {
      that.categories.push(this.getAttribute('category'));
    });
  },
  show: function() {
    that = this;
    filteredArray = filter(this.categories);
    this.categories = filteredArray;
    $(filteredArray).each(function() {
      $('thead tr').append('<th>' + this + '</th>');
      $('tbody tr').append('<td>' + countMatches(this) + '</td>');
    });
  },
}
