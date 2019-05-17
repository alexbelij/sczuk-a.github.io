


// Mother class for the basic gear
class Gear {
    constructor(props){
        this.level = 1;
        this.name = props.name;
        this.cost = props.cost;
        this.costSc = props.costSc;
    }
    
    
    get canBuy(){
        return player.money >= this.cost;
    }

    buy(){ // useless without overriding
        if(!this.canBuy) return false; 
        player.money -= this.cost;
        this.level ++;
        this.cost *= this.costSc;
        return true;
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
        this.dps = props.dps;
        this.dpsSc = props.dpsSc;
    }

    buy(){
        if(super.buy()){        
            this.dps += this.dpsSc;    // increases base dps 
        }
    }

    btnText(){
        return this.uniText() + "<br> DPS: " + format(this.dps);
    }

}

// adds multiplier to dps
class Helmet extends Gear {
    constructor(props){
        super(props);
        this.dpsMult = props.dpsMult;
        this.dpsMultSc = props.dpsMultSc;
    }

    buy(){
        if(super.buy()){
            this.dpsMult += this.dpsMultSc;
        }
    }

    btnText(){
        return this.uniText() + "<br> DPS multiplier " + format(this.dpsMult) + "x";
    }
}

// adds multiplier to gold
class Chestplate extends Gear {
    constructor(props){
        super(props);
        this.goldMult = props.goldMult;
        this.goldMultSc = props.goldMultSc;
    }

    buy(){
        if(super.buy()){
            this.goldMult *= this.goldMultSc;
            for(let i = 0 ; i < player.monsters.length ; i++ ){
                player.monsters[i].goldDrp *= this.goldMultSc;
            }
        }
    }

    btnText(){
        return this.uniText() + "<br> Increase Gold gains " + format(this.goldMult) + "x";
    }
}

// reduces the prices of gear upgrades 
class Pants extends Gear {
    constructor(props){
        super(props);
        this.priceCoef = props.priceCoef;     
        this.priceCoefSc = props.priceCoefSc;
    }

    buy(){
        if(super.buy()){
            this.priceCoef *= this.priceCoefSc;
            for(let i = 0 ; i< player.gear.length; i++){
                player.gear[i].cost *= this.priceCoefSc;
            }
        }
        
    }

    btnText(){
        return this.uniText() + "<br> Lower prices " + format(this.priceCoef) + "x";
    }
}

//WIP
// increases the soft cap
class Boots extends Gear {
    constructor(props){
        super(props);
        this.softCapTime = props.softCapTime;
        this.softCapTimeSc = props.softCapTimeSc;

    }

    buy(){
        if(super.buy()){
            this.coftCapTime += this.softCapTimeSc;
        }
    }

    btnText(){
        return this.uniText() + "<br> You will get exhausted when you have " + this.softCapTime + " seconds worth your DPS";
    }
}
