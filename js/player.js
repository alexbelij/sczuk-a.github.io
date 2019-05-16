

var player = {
    lastTickTime : Date.now(),
    dmg : 0,
    money : 0,
    finalDps : 0,
    gear : [],
    monsters: []
}


// imports monsters from monsters-list
player.monsters.push(new Monster(slime));
player.monsters.push(new Monster(spider));
player.monsters.push(new Monster(zombie));
player.monsters.push(new Monster(skeleton));
player.monsters.push(new Monster(mutantSlime));

// import gear from gear-list
player.gear.push(new Weapon(weapon));
player.gear.push(new Helmet(helmet));
player.gear.push(new Chestplate(chestplate));
player.gear.push(new Pants(pants));
player.gear.push(new Boots(boots));





