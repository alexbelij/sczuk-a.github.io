
var player = {
    lastTickTime : Date.now(),
    
    dmg : 0,
    money : 0,
    teorDps : 0,
    finalDps : 0,
    exhaustion : 1,

    level : new Level({
        level : 1,
        xp : 0,
        xpNeeded : 1,
        xpSc : 5,
        skillPoints : 0
    }),

    gear : [],
    monsters: [],
    bosses: []
}


// imports monsters from monsters-list
player.monsters.push(new Monster(slime));
player.monsters.push(new Monster(spider));
player.monsters.push(new Monster(zombie));
player.monsters.push(new Monster(skeleton));
player.monsters.push(new Monster(mutantSlime));

// import gear from gear-list
player.gear.push(new Weapon(weapon)); // gear[0]
player.gear.push(new Helmet(helmet)); // gear[1]
player.gear.push(new Chestplate(chestplate)); // gear[2]
player.gear.push(new Pants(pants)); // gear[3]
player.gear.push(new Boots(boots)); // gear[4]

// import bosses from bosses-list
player.bosses.push(new Boss(boss1));


