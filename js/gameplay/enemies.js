
class Enemy {
    constructor(props){
        this.name = props.name
        this.maxHp = props.maxHp
        this.hp = this.maxHp
    }

    get canKill() {
        return player.dmg >= this.hp
    }


    attack(){
        if(this.canKill){
        player.dmg -= this.hp;
        return true;
        }
        else{
            this.hp -= player.dmg
            player.dmg = 0
            return false;
        }
    }     
    
}

class Monster extends Enemy {
    constructor(props){
        super(props);
        this.goldDrp = props.goldDrp
    }

    attack(idx) {
        if(super.attack()){
            player.money += this.goldDrp;
            this.respawn(idx)
        }
    }

    respawn(idx){
        this.hp = this.maxHp
        document.getElementById('monster-'+idx).style.backgroundColor = "red";
        setTimeout(function(){
            document.getElementById('monster-'+idx).style.backgroundColor = "rgb(15,15,15)";
        }, 30);       
    }

}

class Boss extends Enemy {
    constructor(props){
        super(props);
        this.xpDrop = props.xpDrop;
    }

    attack(idx) {
        if(super.attack()){
            player.level.addXp(this.xpDrop);
            this.respawn(idx);
        }
    }

    respawn(){
        this.hp = this.maxHp;
    }
}

