 // Convert button click event
 
 $('#convert-button').click(function() {
    var value = $('#value').val();
    var fromUnit = $('#unit-from').val();
    var toUnit = $('#unit-to').val();
    // Conversion logic based on the units selected
    switch (fromUnit) {
      case 'meters':
        switch (toUnit) {
          case 'kilometers':
            var result = value / 1000;
            break;
          case 'miles':
            var result = value / 1609.34;
            break;
          default:
            var result = value;
        }
        break;
      case 'kilometers':
        switch (toUnit) {
          case 'meters':
            var result = value * 1000;
            break;
          case 'miles':
            var result = value / 1.60934;
            break;
          default:
            var result = value;
        }
        break;
      case 'miles':
        switch (toUnit) {
          case 'meters':
            var result = value * 1609.34;
            break;
          case 'kilometers':
            var result = value * 1.60934;
            break;
          default:
            var result = value;
        }
        break;
    }
    // Display the result
    $('#result').html(value + ' ' + fromUnit + ' = ' + result + ' ' + toUnit);
  });