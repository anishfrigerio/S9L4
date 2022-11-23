"use strict";
class Abbigliamento {
    constructor(_prezzoivaesclusa, _prezzoivainclusa, _saldo) {
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.saldo = _saldo;
    }
    getSaldoCapo() {
        return this.prezzoivaesclusa * this.saldo / 100;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
fetch('http://localhost:3000/vestiti').then(res => (res.json())).then((data) => {
    console.log(data);
    console.log(typeof (data));
    data.forEach((e) => {
        let x = new Abbigliamento(e.prezzoivaesclusa, e.prezzoivainclusa, e.saldo);
        console.log(x);
        console.log('Saldo:', x.getSaldoCapo());
        console.log('Prezzo scontato', x.getAcquistoCapo());
    });
});
