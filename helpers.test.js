describe('Tips Test (with setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo(); 
    });

    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });
    
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should sum total tip percent of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
         
        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('should sum tip percent of one tip in calculateTipPercent()', function () {
        expect(calculateTipPercent(120, 12)).toEqual(10);
        expect(calculateTipPercent(120, 30)).toEqual(25);
    });

    it('should generate newTd from value and append to tr on appendTd(tr,value)', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'testing');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('testing');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    })
})