
function save(){
    if(typeof(window.localStorage) != null){
        let l = window.localStorage;

        l.setItem("save","true")
        
        l.setItem("dmg",JSON.stringify(player.dmg));
        l.setItem("money",JSON.stringify(player.money));
        l.setItem("xp",JSON.stringify(player.level.xp));

        l.setItem("weaponLvl",JSON.stringify(player.gear[0].level));
        l.setItem("helmetLvl",JSON.stringify(player.gear[1].level));
        l.setItem("chestplateLvl",JSON.stringify(player.gear[2].level));
        l.setItem("pantsLvl",JSON.stringify(player.gear[3].level));
        l.setItem("bootsLvl",JSON.stringify(player.gear[4].level));

        console.log("saved");
    }
    else {
        console.log("Sorry no web storage support, try different browser")
    }
}