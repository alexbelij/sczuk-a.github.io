
function gameLoop(that) {
    that.player.finalDps = (that.player.gear[0].dps * that.player.gear[1].dpsMult) // calculates final dps - including: WeaponDps, HelmetMult, 
    let dT = ( Date.now() - that.player.lastTickTime ) / 1000; // calculates delta time - time from last tick (in seconds)
    that.player.lastTickTime = Date.now(); 
    that.player.dmg += ( dT * that.player.finalDps ); // adds dmg 
}