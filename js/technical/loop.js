
function gameLoop(that) {
    that.player.teorDps = (that.player.gear[0].dps * that.player.gear[1].dpsMult) // calculates final dps without the soft cap - including: WeaponDps, HelmetMult,
    that.player.finalDps = that.player.teorDps / dmgSoftCap(that); // adds the soft cap 
    let dT = ( Date.now() - that.player.lastTickTime ) / 1000; // calculates delta time - time from last tick (in seconds)
    that.player.lastTickTime = Date.now(); 
    that.player.dmg += ( dT * that.player.finalDps ); // adds dmg 

    uppdateColors(that);
}


function dmgSoftCap(that) {
        let t = Math.ceil((that.player.dmg / that.player.teorDps) / that.player.gear[4].softCapTime) ;
        let i = 1;
        while(i <= t - i){
            i *= 2;
        }
        that.player.exhaustion = i;
        return i;
}


function uppdateColors(that) {
    for(let i = 0; i < that.player.gear.length ; i++){
        if (that.player.gear[i].canBuy){
            document.getElementById('gear-shop-' + i).style.color = "rgb(196,196,4)";
        }
        else {
            document.getElementById('gear-shop-' + i).style.color = "rgb(77,77,32)";
        }
    }

}
