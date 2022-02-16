describe('Payment test "with setup and tear-down"', function() {
// input value for the test function
    beforeEach( function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
});
// create test function to see is it will submit new payment
it('should add a new payment to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
  });
// create test function to make sure the payment won't add with empty input
it('should not add new payment on submitPaymentInfo() with empty input', function () {
    billAmtInput.value = '';
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
});
// create test function to see the payment update
it('should payment update #paymentTable on appendPaymentTable()', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);
    let curList = document.querySelectorAll('#paymentTable tbody tr td');
    expect(curList[0].innerText).toEqual('$100');
    expect(curList[1].innerText).toEqual('$20');
    expect(curList[2].innerText).toEqual('20%');
});
// create test function to see how the new payment create
it('should create a new payment on createCurPayment()', function () {
    let expectPayment = {
        billAmt: "100",
        tipAmt: "20",
        tipPercent: 20,
    }
    expect(createCurPayment()).toEqual(expectPayment);
});
// create test function to see is the payment not create with empty input
it('should not create payment with empty input on createCurPayment()', function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    let curPayment =createCurPayment();

    expect(curPayment).toEqual(undefined);
});
// to reset the test function after done test
afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    paymentId = 0;
    allPayments = {};
})
})