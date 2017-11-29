/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
window.addEventListener('load', function(event) {
  var AQP = data.AQP;
  var promo = AQP['2016-2'];
  var students = promo.students;
  
  var score = score;
  
  for (var i = 0; i < students.length ; i++) {
    var name = students[i];
    var sprints = name.sprints;
    console.log(name);
    var active = name.active;
    var sum = 0;
    var sum1 = 0;
    for (var j = 0 ; j < sprints.length; j++) {
      var tech = name.sprints[j].score.tech;
      sum += tech / 4;
      var hse = name.sprints[j].score.hse;
      sum1 += hse / 4;
      var sumVerific = 0;
      if ((sum > 1260 && active) && (sum1 > 840 && active)) {
        sumVerific++;
        console.log(sumVerific);
      }
    }
    console.log(sum);
    console.log(sum1);
  }
});
console.log(data);


