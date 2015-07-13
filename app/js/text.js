var text = {
  doc: '',
  chapters: {
    ch01: 'Chapter 1',
    ch02: 'Chapter 2',
    ch03: 'Chapter 3',
    ch04: 'Chapter 4',
    ch05: 'Chapter 5',
    ch06: 'Chapter 6',
    ch07: 'Chapter 7',
    ch08: 'Chapter 8',
    ch09: 'Chapter 9',
    ch10: 'Chapter 10',
    ch11: 'Chapter 11',
    ch12: 'Chapter 12'
  },
  colors: ['indianred','cadetblue','greenyellow','hotpink','tomato','antiquewhite', 'aquamarine', 'burlywood', 'yellow', 'pink', 'orange', 'green', 'cyan'],
  show: function() {
    $('body').append('<p class="content">' + this.doc + '</p>');
  },
};
