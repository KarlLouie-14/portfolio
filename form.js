window.onload = setForm;    //   Run this function as the window loads

function setForm() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
       return false;
    }
  }
  