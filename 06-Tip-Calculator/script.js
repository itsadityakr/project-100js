document.querySelector('#calc-btn').addEventListener('click', () => {
    const tip = Number(document.getElementById('tip-input').value);
    const bill = Number(document.getElementById('bill-input').value);

    if (tip >= 0 && bill > 0) {
        let tipValue = (bill * tip) / 100;
        let totalBill = bill + tipValue;
        document.querySelector('#output').innerText = `Tip: $${tipValue.toFixed(2)}\nTotal Bill: $${totalBill.toFixed(2)}`;
    } else {
        document.querySelector('#output').innerText = `Tip: Wrong Input\nTotal Bill: Wrong Input`;
    }
});