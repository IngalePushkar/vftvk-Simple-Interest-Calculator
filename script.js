var principal = 0
var years = 1
var interest = 3.5

function compute() {
  if (principal && principal > 0) {
    document.getElementById('result-box').style.display = 'block'

    var result = ((principal * years * interest) / 100).toFixed(2)
    var year = new Date().getFullYear() + Math.floor(years)

    document.getElementById('year').innerHTML = year
    document.getElementById('interest').innerHTML = interest
    document.getElementById('principal-amount').innerHTML = principal
    document.getElementById('result').innerHTML = result

  } else {
    if(principal === 0) alert('Please Enter Principal Amount');
    else if(principal < 0) alert('Please Enter Positive Principal Amount')
  }
}

function onInterestRateChange(value) {
  document.getElementById('interest-rate').innerHTML = value + ' %'
  interest = value
}

function onChangeYears(value) {
  years = value
}

function onAmountChange(value) {
    principal = value
}
