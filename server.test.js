[33mcommit fd3f3dcdb719bcfe4015705aa0b3d554e0f6185e[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: henry <nguyentuanhoang1994@yahoo.com>
Date:   Thu Feb 10 22:54:52 2022 -0800

    test function for not adding new server

[1mdiff --git a/helpers.js b/helpers.js[m
[1mnew file mode 100644[m
[1mindex 0000000..706636c[m
[1m--- /dev/null[m
[1m+++ b/helpers.js[m
[36m@@ -0,0 +1,26 @@[m
[32m+[m
[32m+[m[32m// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects[m
[32m+[m[32mfunction sumPaymentTotal(type) {[m
[32m+[m[32m  let total = 0;[m
[32m+[m
[32m+[m[32m  for (let key in allPayments) {[m
[32m+[m[32m    let payment = allPayments[key];[m
[32m+[m
[32m+[m[32m    total += Number(payment[type]);[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  return total;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// converts the bill and tip amount into a tip percent[m
[32m+[m[32mfunction calculateTipPercent(billAmt, tipAmt) {[m
[32m+[m[32m  return Math.round(100 / (billAmt / tipAmt));[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// expects a table row element, appends a newly created td element from the value[m
[32m+[m[32mfunction appendTd(tr, value) {[m
[32m+[m[32m  let newTd = document.createElement('td');[m
[32m+[m[32m  newTd.innerText = value;[m
[32m+[m
[32m+[m[32m  tr.append(newTd);[m
[32m+[m[32m}[m
[1mdiff --git a/index.html b/index.html[m
[1mnew file mode 100644[m
[1mindex 0000000..4a59479[m
[1m--- /dev/null[m
[1m+++ b/index.html[m
[36m@@ -0,0 +1,98 @@[m
[32m+[m[32m<!doctype html>[m
[32m+[m[32m<html>[m
[32m+[m[32m<head>[m
[32m+[m[32m<title>Tip Pool</title>[m
[32m+[m[32m<link rel="stylesheet" href="style.css" />[m
[32m+[m
[32m+[m[32m<!-- include CSS for Jasmine -->[m
[32m+[m[32m<link rel="stylesheet"[m
[32m+[m[32m  href="https://unpkg.com/jasmine-core/lib/jasmine-core/jasmine.css" />[m
[32m+[m[32m</head>[m
[32m+[m[32m<body>[m
[32m+[m[32m  <h1>Tip Pool</h1>[m
[32m+[m
[32m+[m[32m  <section>[m
[32m+[m[32m    <aside>[m
[32m+[m[32m      <h4>Input payment info</h4>[m
[32m+[m[32m      <form id="paymentForm">[m
[32m+[m[32m        <label for="billAmt">Bill Amount</label>[m
[32m+[m[32m        <input type="number" id="billAmt" autofocus />[m
[32m+[m
[32m+[m[32m        <label for="tipAmt">Tip Amount</label>[m
[32m+[m[32m        <input type="number" id="tipAmt" />[m
[32m+[m
[32m+[m[32m        <button>submit</button>[m
[32m+[m[32m      </form>[m
[32m+[m
[32m+[m[32m      <table id="paymentTable">[m
[32m+[m[32m        <thead>[m
[32m+[m[32m          <tr>[m
[32m+[m[32m            <th>Bill amt</th>[m
[32m+[m[32m            <th>Tip amt</th>[m
[32m+[m[32m            <th>Tip percent</th>[m
[32m+[m[32m          </tr>[m
[32m+[m[32m        </thead>[m
[32m+[m[32m        <tbody>[m
[32m+[m[32m        </tbody>[m
[32m+[m[32m      </table>[m
[32m+[m[32m    </aside>[m
[32m+[m[32m    <aside>[m
[32m+[m[32m      <h4>Input server info</h4>[m
[32m+[m[32m      <form id="serverForm">[m
[32m+[m[32m        <label for="serverName">Server Name</label>[m
[32m+[m[32m        <input id="serverName" />[m
[32m+[m
[32m+[m[32m        <button>submit</button>[m
[32m+[m[32m      </form>[m
[32m+[m
[32m+[m[32m      <table id="serverTable">[m
[32m+[m[32m        <thead>[m
[32m+[m[32m          <tr>[m
[32m+[m[32m            <th>Server Name</th>[m
[32m+[m[32m            <th>Earnings</th>[m
[32m+[m[32m          </tr>[m
[32m+[m[32m        </thead>[m
[32m+[m[32m        <tbody>[m
[32m+[m[32m        </tbody>[m
[32m+[m[32m      </table>[m
[32m+[m[32m    </aside>[m
[32m+[m[32m  </section>[m
[32m+[m
[32m+[m[32m  <section id="summary">[m
[32m+[m[32m    <h3>Shift summary</h3>[m
[32m+[m[32m    <table id="summaryTable">[m
[32m+[m[32m      <thead>[m
[32m+[m[32m        <tr>[m
[32m+[m[32m          <th>Bill total</th>[m
[32m+[m[32m          <th>Tip total</th>[m
[32m+[m[32m          <th>Tip percent avg</th>[m
[32m+[m[32m        </tr>[m
[32m+[m[32m      </thead>[m
[32m+[m[32m      <tbody>[m
[32m+[m[32m        <tr>[m
[32m+[m[32m          <td></td>[m
[32m+[m[32m          <td></td>[m
[32m+[m[32m          <td></td>[m
[32m+[m[32m        </tr>[m
[32m+[m[32m      </tbody>[m
[32m+[m[32m    </table>[m
[32m+[m[32m  </section>[m
[32m+[m[32m<!-- uncoment the following to run Jasmine tests -->[m
[32m+[m
[32m+[m[32m<script[m[41m [m
[32m+[m[32m  src="https://unpkg.com/jasmine-core/lib/jasmine-core/jasmine.js"></script>[m
[32m+[m[32m<script[m[41m [m
[32m+[m[32m  src="https://unpkg.com/jasmine-core/lib/jasmine-core/jasmine-html.js"></script>[m
[32m+[m[32m<script[m[41m [m
[32m+[m[32m  src= "https://unpkg.com/jasmine-core/lib/jasmine-core/boot0.js"></script>[m
[32m+[m[32m  <script[m[41m [m
[32m+[m[32m  src= "https://unpkg.com/jasmine-core/lib/jasmine-core/boot1.js"></script>[m
[32m+[m[32m<script src="servers.test.js"></script>[m[41m [m
[32m+[m
[32m+[m[32m<!-- end of Jasmine tests -->[m
[32m+[m
[32m+[m[32m<script src="payments.js"></script>[m[41m [m
[32m+[m[32m<script src="servers.js"></script>[m[41m [m
[32m+[m[32m<script src="helpers.js"></script>[m[41m [m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
[1mdiff --git a/payments.js b/payments.js[m
[1mnew file mode 100644[m
[1mindex 0000000..8a3a283[m
[1m--- /dev/null[m
[1m+++ b/payments.js[m
[36m@@ -0,0 +1,78 @@[m
[32m+[m[32mlet billAmtInput = document.getElementById('billAmt');[m
[32m+[m[32mlet tipAmtInput = document.getElementById('tipAmt');[m
[32m+[m[32mlet paymentForm = document.getElementById('paymentForm');[m
[32m+[m
[32m+[m[32mlet paymentTbody = document.querySelector('#paymentTable tbody');[m
[32m+[m[32mlet summaryTds = document.querySelectorAll('#summaryTable tbody tr td');[m
[32m+[m
[32m+[m[32mlet allPayments = {};[m
[32m+[m[32mlet paymentId = 0;[m
[32m+[m
[32m+[m[32mpaymentForm.addEventListener('submit', submitPaymentInfo);[m
[32m+[m
[32m+[m[32m// Add a curPayment object to allPayments, update html and reset input values[m
[32m+[m[32mfunction submitPaymentInfo(evt) {[m
[32m+[m[32m  if (evt) evt.preventDefault(); // when running tests there is no event[m
[32m+[m
[32m+[m[32m  let curPayment = createCurPayment();[m
[32m+[m
[32m+[m[32m  if (curPayment) {[m
[32m+[m[32m    paymentId += 1;[m
[32m+[m
[32m+[m[32m    allPayments['payment' + paymentId] = curPayment;[m
[32m+[m
[32m+[m[32m    appendPaymentTable(curPayment);[m
[32m+[m[32m    updateServerTable();[m
[32m+[m[32m    updateSummary();[m
[32m+[m
[32m+[m[32m    billAmtInput.value = '';[m
[32m+[m[32m    tipAmtInput.value = '';[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// createCurPayment() will return undefined with negative or empty inputs[m
[32m+[m[32m// positive billAmt is required but tip can be 0[m
[32m+[m[32mfunction createCurPayment() {[m
[32m+[m[32m  let billAmt = billAmtInput.value;[m
[32m+[m[32m  let tipAmt = tipAmtInput.value;[m
[32m+[m
[32m+[m[32m  if (billAmt === '' || tipAmt === '') return;[m
[32m+[m
[32m+[m[32m  if (Number(billAmt) > 0 && Number(tipAmt) >= 0) {[m
[32m+[m[32m    return {[m
[32m+[m[32m      billAmt: billAmt,[m
[32m+[m[32m      tipAmt: tipAmt,[m
[32m+[m[32m      tipPercent: calculateTipPercent(billAmt, tipAmt),[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// Create table row element and pass to appendTd with input value[m
[32m+[m[32mfunction appendPaymentTable(curPayment) {[m
[32m+[m[32m  let newTr = document.createElement('tr');[m
[32m+[m[32m  newTr.id = 'payment' + paymentId;[m
[32m+[m
[32m+[m[32m  appendTd(newTr, '$' + curPayment.billAmt);[m
[32m+[m[32m  appendTd(newTr, '$' + curPayment.tipAmt);[m
[32m+[m[32m  appendTd(newTr, curPayment.tipPercent + '%');[m
[32m+[m
[32m+[m[32m  paymentTbody.append(newTr);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// Create table row element and pass to appendTd with calculated sum of all payment[m
[32m+[m[32mfunction updateSummary() {[m
[32m+[m[32m  let tipPercentAvg;[m
[32m+[m[32m  let paymentTotal = sumPaymentTotal('tipPercent');[m
[32m+[m[32m  let numberOfPayments = Object.keys(allPayments).length;[m
[32m+[m
[32m+[m[32m  if (paymentTotal === 0 && numberOfPayments === 0) {[m
[32m+[m[32m    tipPercentAvg = 0;[m
[32m+[m[32m  } else {[m
[32m+[m[32m    tipPercentAvg = paymentTotal / Object.keys(allPayments).length;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  summaryTds[0].innerHTML = '$' + sumPaymentTotal('billAmt');[m
[32m+[m[32m  summaryTds[1].innerHTML = '$' + sumPaymentTotal('tipAmt');[m
[32m+[m[32m  summaryTds[2].innerHTML =  Math.round(tipPercentAvg) + '%';[m
[32m+[m[32m}[m
[32m+[m
[1mdiff --git a/servers.js b/servers.js[m
[1mnew file mode 100644[m
[1mindex 0000000..b23c7a6[m
[1m--- /dev/null[m
[1m+++ b/servers.js[m
[36m@@ -0,0 +1,44 @@[m
[32m+[m[32mlet serverNameInput = document.getElementById('serverName');[m
[32m+[m[32mlet serverForm = document.getElementById('serverForm');[m
[32m+[m
[32m+[m[32mlet serverTbody = document.querySelector('#serverTable tbody');[m
[32m+[m
[32m+[m[32mlet allServers = {};[m
[32m+[m[32mlet serverId = 0;[m
[32m+[m
[32m+[m[32mserverForm.addEventListener('submit', submitServerInfo);[m
[32m+[m
[32m+[m[32m// create server object and add to allServers, update html and reset input[m
[32m+[m[32mfunction submitServerInfo(evt) {[m
[32m+[m[32m  if (evt) evt.preventDefault(); // when running tests there is no event[m
[32m+[m
[32m+[m[32m  let serverName = serverNameInput.value;[m
[32m+[m
[32m+[m[32m  if (serverName !== '') {[m
[32m+[m[32m    serverId++;[m
[32m+[m[32m    allServers['server' + serverId] = { serverName };[m
[32m+[m
[32m+[m[32m    updateServerTable();[m
[32m+[m
[32m+[m[32m    serverNameInput.value = '';[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// Create table row element and pass to appendTd function with input value[m
[32m+[m[32mfunction updateServerTable() {[m
[32m+[m[32m  serverTbody.innerHTML = '';[m
[32m+[m
[32m+[m[32m  for (let key in allServers) {[m
[32m+[m[32m    let curServer = allServers[key];[m
[32m+[m
[32m+[m[32m    let newTr = document.createElement('tr');[m
[32m+[m[32m    newTr.setAttribute('id', key);[m
[32m+[m
[32m+[m[32m    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;[m
[32m+[m
[32m+[m[32m    appendTd(newTr, curServer.serverName);[m
[32m+[m[32m    appendTd(newTr, '$' + tipAverage.toFixed(2));[m
[32m+[m
[32m+[m[32m    serverTbody.append(newTr);[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/servers.test.js b/servers.test.js[m
[1mnew file mode 100644[m
[1mindex 0000000..5b5d173[m
[1m--- /dev/null[m
[1m+++ b/servers.test.js[m
[36m@@ -0,0 +1,20 @@[m
[32m+[m[32mdescribe("Servers test (with setup and tear-down)", function() {[m
[32m+[m[32m  beforeEach(function () {[m
[32m+[m[32m    // initialization logic[m
[32m+[m[32m    serverNameInput.value = 'Alice';[m
[32m+[m[32m  });[m
[32m+[m[41m  [m
[32m+[m[32m  it('should add a new server to allServers on submitServerInfo()', function () {[m
[32m+[m[32m    submitServerInfo();[m
[32m+[m
[32m+[m[32m    expect(Object.keys(allServers).length).toEqual(1);[m
[32m+[m[32m    expect(allServers['server' + serverId].serverName).toEqual('Alice');[m
[32m+[m[32m  });[m
[32m+[m[32m  it('should not add new server on submitServerInfor() with empty input', function() {[m
[32m+[m[32m    serverNameInput.value = '';[m
[32m+[m[41m    [m
[32m+[m[32m  })[m
[32m+[m[32m  afterEach(function() {[m
[32m+[m[32m    // teardown logic[m
[32m+[m[32m  });[m
[32m+[m[32m});[m
[1mdiff --git a/style.css b/style.css[m
[1mnew file mode 100644[m
[1mindex 0000000..e7cbf4a[m
[1m--- /dev/null[m
[1m+++ b/style.css[m
[36m@@ -0,0 +1,56 @@[m
[32m+[m[32mbody {[m
[32m+[m[32m  font-family: helvetica;[m
[32m+[m[32m  margin: 30px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32msection {[m
[32m+[m[32m  border: 2px solid grey;[m
[32m+[m[32m  border-radius: 6px;[m
[32m+[m[32m  padding: 10px;[m
[32m+[m[32m  margin: 10px 10px 10px 0;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32maside {[m
[32m+[m[32m  justify-content: space-between;[m
[32m+[m[32m  flex-basis: 50%;[m
[32m+[m[32m  padding: 4px 18px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32minput {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  margin: 10px 0 20px 0;[m
[32m+[m[32m  border-radius: 5px;[m
[32m+[m[32m  border: 1px solid grey;[m
[32m+[m[32m  font-size: 20px;[m
[32m+[m[32m  padding: 6px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbutton {[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m  width: 90px;[m
[32m+[m[32m  height: 30px;[m
[32m+[m[32m  border-radius: 8px;[m
[32m+[m[32m  border: 1px solid grey;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mtd {[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  border: 1px solid grey;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mtable {[m
[32m+[m[32m  margin: 50px 0;[m
[32m+[m[32m  border-collapse: collapse;[m
[32m+[m[32m  padding: 4px;[m
[32m+[m[32m  width: 80%;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m#summary td {[m
[32m+[m[32m  border: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.deleteBtn {[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m}[m
