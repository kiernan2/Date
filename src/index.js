import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function dayConverter(day) {
  switch (day) {
    case (0):
      return "Sunday"
    case (1):
      return "Monday"
    case (2):
      return "Tuesday"
    case (3):
      return "Wednesday"
    case (4):
      return "Thursday"
    case (5):
      return "Friday"
    case (6):
      return "Saturday"
  }
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const day = $("input#time").val();
    const output = $('div#output');
    const times = day.split("-");
    const assembledDate = times[1] + ", " + times[2] + ", " + times[0];
    const date = new Date(assembledDate);
    console.log(date);
    const dayIndicator = date.getDay();
    output.append(dayConverter(dayIndicator));
  });
});