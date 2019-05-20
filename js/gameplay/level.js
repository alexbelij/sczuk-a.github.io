

class Level {

    constructor(props){
        this.level = props.level;
        this.xp = props.xp;
        this.levelXp = props.xp;
        this.xpNeeded = props.xpNeeded;
        this.xpSc = props.xpSc;
        this.skillPoints = props.skillPoints;
    }

    addXp(amount){
        this.xp += amount;
        this.levelXp += amount;
        while(this.levelXp >= this.xpNeeded){
            this.level ++;
            this.skillPoints ++;
            this.levelXp -= this.xpNeeded;
            this.xpNeeded *= this.xpSc;
        }
        if(this.level >= 2){
            show("skillsBtn");
        }
        else{
            hide("skillsBtn");
        }
    }
}