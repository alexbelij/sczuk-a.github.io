
function load() {
    if(typeof(window.localStorage) != null){
        try{
            let l = window.localStorage;
            if(l.save == "true"){

                player.dmg = Number(l.dmg);
                player.money = Number(l.money);
                player.level.addXp(Number(l.xp));

                player.gear[0].setLvl(Number(l.weaponLvl));
                player.gear[1].setLvl(Number(l.helmetLvl));
                player.gear[2].setLvl(Number(l.chestplateLvl));
                player.gear[3].setLvl(Number(l.pantsLvl));
                player.gear[4].setLvl(Number(l.bootsLvl));

                console.log("loaded");
            }
            else{
                console.log("No save found");
            }
        }
        catch (ex) { console.log(ex); }
    }
    else {
        console.log("Sorry no web storage support, try different browser")
    }
}