window.onload = updateTable;    //   Run this function as the window loads

  function updateTable() {
    // Define the hourly rate for each services
    var hour1 = 45;   
    var hour2 = 50;
    var hour3 = 50;
    var hour4 = 45;
    var hour5 = 30;
    var hour6 = 35;

    // Defines the HTML IDs of the slider and output value
    var slider1 = document.getElementById("slider1");
    var slider2 = document.getElementById("slider2");
    var output1 = document.getElementById("value1");
    var output2 = document.getElementById("value2");
    output1.innerHTML = slider1.value;
    output2.innerHTML = slider2.value;
  
    // This multiplies the value of slider 1 to the value of slider 2 and the hourly rate + one-time fee.
    slider1.oninput = function() {
    output1.innerHTML = this.value;
    document.getElementById("result1").innerHTML = "$" + ((hour1 * slider2.value) * this.value + 200);
    document.getElementById("result2").innerHTML = "$" + ((hour2 * slider2.value) * this.value + 200);
    document.getElementById("result3").innerHTML = "$" + ((hour3 * slider2.value) * this.value + 200);
    document.getElementById("result4").innerHTML = "$" + ((hour4 * slider2.value) * this.value + 100);
    document.getElementById("result5").innerHTML = "$" + ((hour5 * slider2.value) * this.value + 100);
    document.getElementById("result6").innerHTML = "$" + ((hour6 * slider2.value) * this.value + 100);
    }

    // This also multiplies the value of slider 1 to the value of slider 2 and the hourly rate + one-time fee.
    slider2.oninput = function() {
    output2.innerHTML = this.value;
    document.getElementById("result1").innerHTML = "$" + ((hour1 * slider1.value) * this.value + 200);
    document.getElementById("result2").innerHTML = "$" + ((hour2 * slider1.value) * this.value + 200);
    document.getElementById("result3").innerHTML = "$" + ((hour3 * slider1.value) * this.value + 200);
    document.getElementById("result4").innerHTML = "$" + ((hour4 * slider1.value) * this.value + 100);
    document.getElementById("result5").innerHTML = "$" + ((hour5 * slider1.value) * this.value + 100);
    document.getElementById("result6").innerHTML = "$" + ((hour6 * slider1.value) * this.value + 100);
  }
  // Calls the setForm function when the submit button in the Contact Us section is clicked
  document.getElementById("send-button").addEventListener("click", setForm);
}

// This function validates if all the required input in the form is filled out correctly.
function setForm() {
  document.forms[0].onsubmit = function() {
     if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
     return false;
  }
}


