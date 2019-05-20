
// Gives base DPS
var weapon = {
    name: "Weapon",
    cost: 1,
    costSc: 1.15,
    dps: 1,  // base dps
    dpsSc: 1  // each upgrade base dps is increased by this
}

// Gives DPS multiplier
var helmet = {
    name: "Helmet",
    cost: 100,
    costSc: 1.30,
    dpsMult: 1,  // multiplier to dps
    dpsMultSc: 1  // each upgrade multiplier is increased by this 
}

// Gives multiplier to gold gain from monster kills
var chestplate = {
    name: "Chestplate",
    cost: 10000,
    costSc: 1.45,
    goldMult: 1,   // multiplier to all gold
    goldMultSc: 0.5  // each upgrade multiplier is increased by this
}

// Reduces prices of other gear
var pants = {
    name: "Pants",
    cost: 1000000,
    costSc: 1.60,
    priceCoef: 1,   // coeficient of gear upgrade prices
    priceCoefSc: 0.9   // each upgrade coeficient is timed by this
}

// Increases the soft cap 
var boots = {
    name: "Boots",
    cost: 10,
    costSc: 10,
    softCapTime: 20, // time in seconds after witch the progress starts to go down 
    softCapTimeSc: 20
}
