

class Level {

    constructor(props){
        this.level = props.level;
        this.xp = props.xp;
        this.xpNeeded = props.xpNeeded;
        this.xpSc = props.xpSc;
        this.skillPoints = props.skillPoints;
    }

    addXp(amount){
        this.xp += amount;
        while(this.xp >= this.xpNeeded){
            this.level ++;
            this.skillPoints ++;
            this.xp -= this.xpNeeded;
            this.xpNeeded *= this.xpSc;
        }
        if(this.level <= 2){
            show("skillsBtn");
        }
    }
}