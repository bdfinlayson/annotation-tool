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

function allMatches(pattern) {
  filteredArray = rarefyXMLTextContent(pattern);
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

function highlight() {
  for (category in xml.categories) {
    dynamicStyles(xml.categories[category]);
    var strings = rarefyXMLTextContent(xml.categories[category])
    for (string in strings) {
      var pattern = new RegExp(strings[string], 'g')
      var newDoc = text.doc.replace(pattern, '<span class=' + xml.categories[category] + ' id=' + makeId(strings[string])  + '>' + strings[string] + '</span>');
      text.doc = newDoc;
    }
  }
}

function makeId(string) {
  var id = string.replace(/(\s)/gm,"-");
  return id;
}

function idToString(id) {
  var string = id.replace(/(-)/gm," ");
  return string;
}

function dynamicStyles(category) {
  var sheet = document.styleSheets[0];
  var color = randomColor()
  sheet.insertRule("." + category + " { background-color: " + color + "; }", 1);
  removeColor(color)
}


function randomColor() {
  var rand = Math.random();
  rand *= arr.length;
  rand = Math.floor(rand);
  return text.colors[rand];
}

function removeColor(color) {
  var index = text.colors.indexOf(color);
  text.colors.splice(index, 1)
}



