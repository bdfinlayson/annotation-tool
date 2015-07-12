function filter(arr) {
  var filteredArray = [], prev;
  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      filteredArray.push(arr[i]);
    }
    prev = arr[i];
  }
  return filteredArray
}

function rarefyXMLTextContent(pattern) {
  arr = [];
  matches = [];
  merged = [];
  str = text.doc;
  elements = xml.doc.querySelectorAll("[category=" + pattern + "]")
  for (var i = 0; i < elements.length; i++) {
    arr.push(elements[i].textContent.replace(/(\r\n|\n|\r)/gm,"").trim());
  }
  filteredArray = filter(arr);
  return filteredArray
}

function countMatches(pattern) {
  filteredArray = rarefyXMLTextContent(pattern);
  for (var i = 0; i < filteredArray.length; i++) {
    pattern = filteredArray[i];
    regex = new RegExp(pattern, 'gi');
    if (str.match(regex)) {
      matches.push(str.match(regex));
    }
  }
  merged = merged.concat.apply(merged, matches); // For unnesting nested arrays
  return merged.length;
}

function highlight() {
  for (category in xml.categories) {
    var strings = rarefyXMLTextContent(xml.categories[category])
    for (string in strings) {
      var pattern = new RegExp(strings[string])
      var newDoc = text.doc.replace(pattern, '<span class=' + xml.categories[category] + '>' + strings[string] + '</span>');
      text.doc = newDoc;
    }
  }
}

