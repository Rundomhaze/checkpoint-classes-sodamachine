class SodaMachine {
  constructor(args = {}) {
    this.sodas = args.sodas;
    this.cash = args.cash;
  }

  currentInventoryCount() {
    return this.sodas.length;
  }

  findSoda(sodaBrand) {
    return this.sodas.find((el) => el.brand === sodaBrand)
  }

  sell(sodaBrand) {
    // for (let el of this.sodas) {
    //   if (el.brand === sodaBrand) {
    //     this.cash += el.price;
    //     this.sodas = this.sodas.filter((el) => el.brand !== sodaBrand);
    //     return this.cash
    //   }
    // }
    this.sodas.map((el) => {
      if(el.brand === sodaBrand) {
        this.cash += el.price;
        this.sodas = this.sodas.filter((el) => el.brand !== sodaBrand)
        return this.cash
      }
    })  
  }

}


module.exports = { SodaMachine };
