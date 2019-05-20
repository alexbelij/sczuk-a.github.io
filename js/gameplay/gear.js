


// Mother class for the basic gear
class Gear {
    constructor(props){
        this.level = 1;
        this.name = props.name;
        this.baseCost = props.baseCost;
        this.cost = props.baseCost;
        this.costSc = props.costSc;
    }
    
    
    get canBuy(){
        return player.money >= this.cost;
    }

    buy(){ // calc needs to be overrided
        if(!this.canBuy) return false; 
        player.money -= this.cost;
        this.level ++ ;
        this.calcCost();
        this.calc();
        return true;
    }

    calcCost(){
        this.cost = this.baseCost * Math.pow(this.costSc,this.level - 1) * player.gear[3].costCoef;
    }

    calc() {};  // needs to be overrided 

    setLvl(lvl){
        this.level = lvl;
        this.calcCost();
        this.calc();
    }

    // text with things every gear has
    uniText(){
        return "<strong>" + this.name + "</strong>" + '<br> Level: ' + +format(this.level) + "<br> Cost: " + format(this.cost);
    }

}

// adds base dps
class Weapon extends Gear {

    constructor(props){
        super(props);
        this.baseDps = props.baseDps;
        this.dps = props.baseDps;
        this.dpsSc = props.dpsSc;
    }

    calc(){      
            this.dps = this.baseDps + ( (this.level - 1) * this.dpsSc );    // calculates current dps
    }

    btnText(){
        return this.uniText() + "<br> DPS: " + format(this.dps);
    }

}

// adds multiplier to dps
class Helmet extends Gear {
    constructor(props){
        super(props);
        this.baseDpsMult = props.baseDpsMult;
        this.dpsMult = props.baseDpsMult;
        this.dpsMultSc = props.dpsMultSc;
    }

    calc(){
        this.dpsMult = this.baseDpsMult +  (this.level - 1) * this.dpsMultSc;  // calculates current dps multiplier
    }

    btnText(){
        return this.uniText() + "<br> DPS multiplier " + format(this.dpsMult) + "x";
    }
}

// adds multiplier to gold
class Chestplate extends Gear {
    constructor(props){
        super(props);
        this.baseGoldMult = props.baseGoldMult;
        this.goldMult = props.baseGoldMult;
        this.goldMultSc = props.goldMultSc;
    }

    calc(){
        this.goldMult = this.baseGoldMult +  (this.level - 1) * this.goldMultSc ;
        for(let i = 0 ; i < player.monsters.length ; i++ ){                      // updates gold drops for monsters 
            player.monsters[i].calcGoldDrp();
        }
    }

    btnText(){
        return this.uniText() + "<br> Increase Gold gains " + format(this.goldMult) + "x";
    }
}

// reduces the costs of gear upgrades 
class Pants extends Gear {
    constructor(props){
        super(props);
        this.baseCostCoef = props.baseCostCoef;
        this.costCoef = props.baseCostCoef;     
        this.costCoefSc = props.costCoefSc;
    }

    calc(){
        this.costCoef = this.baseCostCoef * Math.pow(this.costCoefSc,this.level - 1);
        for(let i = 0 ; i< player.gear.length; i++){
            player.gear[i].calcCost();
        }
    }

    btnText(){
        return this.uniText() + "<br> Lower costs " + this.costCoef + "x";
    }
}

// increases the soft cap
class Boots extends Gear {
    constructor(props){
        super(props);
        this.baseSoftCapTime = props.baseSoftCapTime;
        this.softCapTime = props.baseSoftCapTime;
        this.softCapTimeSc = props.softCapTimeSc;

    }

    calc(){
        this.softCapTime = this.baseSoftCapTime + (this.level - 1) * this.softCapTimeSc;
    }

    btnText(){
        return this.uniText() + "<br> You will get exhausted when you have " + format(this.softCapTime) + " seconds worth your DPS";
    }
}