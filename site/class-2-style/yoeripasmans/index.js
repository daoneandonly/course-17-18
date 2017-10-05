var width = 500;
var height = 500;
var radius = Math.min(width, height) / 2;
var colors = ['#161925', '#256EFF', '#482A5E', '#39DD9E', '#F2A40E', '#EA2027', '#FFF8BD'];
var scale = d3.scaleOrdinal().range(colors);
var arc = d3.arc().outerRadius(radius - 16).innerRadius(radius - 128);
var pie = d3.pie().sort(null).value(population);
var svg = d3.select('body').append('svg').attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height].join(' ')).append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

function render(b, c) {
  if (b) throw b;
  var a = svg.selectAll('.arc').data(pie(c)).enter().append('g').attr('class', 'arc');
  a.append('path').attr('d', arc).style('fill', fill), a.append('text').attr('transform', transform).attr('dy', '.35em').text(age);
}

function type(a) {
  return a.population = Number(population(a)), a;
}

function transform(a) {
  return 'translate(' + arc.centroid(a) + ')';
}

function fill(a) {
  return scale(age(a));
}

function age(a) {
  return a.data.age;
}

function population(a) {
  return a.population;
}

d3.csv('index.csv', type, render);