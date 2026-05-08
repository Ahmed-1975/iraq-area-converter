function toDunum() {
  let val = document.getElementById("value").value;
  if(val) {
    let result = val / 2500; // 1 دونم = 2500 متر مربع
    document.getElementById("result").innerText = val + " متر مربع = " + result.toFixed(2) + " دونم";
  }
}

function toMeter() {
  let val = document.getElementById("value").value;
  if(val) {
    let result = val * 2500;
    document.getElementById("result").innerText = val + " دونم = " + result.toFixed(2) + " متر مربع";
  }
}

function exitApp() {
  document.getElementById("result").innerText = "تم إغلاق التطبيق.";
}