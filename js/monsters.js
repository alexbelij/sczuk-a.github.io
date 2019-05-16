
class Monster {
    constructor(props){
        this.name = props.name
        this.maxHp = props.maxHp
        this.hp = this.maxHp
        this.goldDrp = props.goldDrp
    }

    get canKill() {
        return player.dmg >= this.hp
    }

    respawn(){
        this.hp = this.maxHp
    }

    attack(){
        if(this.canKill){
        player.dmg -= this.hp
        player.money += this.goldDrp
        this.respawn()
        }
        else{
            this.hp -= player.dmg
            player.dmg = 0
        }
    }     
    
}





