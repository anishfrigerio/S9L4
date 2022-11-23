class Abbigliamento{
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    saldo:number;
    constructor(_prezzoivaesclusa:number,_prezzoivainclusa:number, _saldo:number){
        this.prezzoivaesclusa= _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.saldo = _saldo;
    }
    getSaldoCapo(): number{
        return this.prezzoivaesclusa*this.saldo/100;
    }
    getAcquistoCapo(): number{
        return this.prezzoivainclusa-this.getSaldoCapo();
    }
}

fetch('http://localhost:3000/vestiti').then(res=>(res.json())).then((data:shopData[])=>{
    console.log(data);
    console.log(typeof(data));
    data.forEach((e)=>{
        let x = new Abbigliamento(e.prezzoivaesclusa, e.prezzoivainclusa, e.saldo);
        console.log(x);
        console.log('Saldo:',x.getSaldoCapo());
        console.log('Prezzo scontato', x.getAcquistoCapo());
    });
    

});


interface shopData{
    prezzoivaesclusa:number,
    prezzoivainclusa:number,
    saldo:number
}