function addToInput(val) {
    document.getElementById('result').value += val;
  }

  function clearInput() {
    document.getElementById('result').value = "";
  }

  function calculate() {
    let input = document.getElementById('result').value;
    let output = eval(input);
    document.getElementById('result').value = output;
  }

function calculateTotal1() {
    var notes2000 = parseInt(document.getElementById("2000").value) || 0;
    var notes500 = parseInt(document.getElementById("500").value) || 0;
    var notes200 = parseInt(document.getElementById("200").value) || 0;
    var notes100 = parseInt(document.getElementById("100").value) || 0;
    var notes50 = parseInt(document.getElementById("50").value) || 0;
    
    var totalAmount = (notes2000 * 2000) + (notes500 * 500) + (notes200 * 200) + (notes100 * 100) + (notes50 * 50);
    
    var ind2000 = (notes2000 * 2000);
    var ind500 = (notes500 * 500);
    var ind200 = (notes200 * 200);
    var ind100 = (notes100 * 100);
    var ind50 = (notes50 * 50);
    
    var isChecked = document.getElementById("checkCalculation").checked;
    if (!isChecked) {
        document.getElementById("result1").innerHTML = "Please check the calculation before submitting.";
        return;
    }
    
    document.getElementById("result1").innerHTML = "Total amount: " + totalAmount + "<br>" +
        "2000 notes: " + ind2000 + "<br>" +
        "500 notes: " + ind500 + "<br>" +
        "200 notes: " + ind200 + "<br>" +
        "100 notes: " + ind100 + "<br>" +
        "50 notes: " + ind50;
}
