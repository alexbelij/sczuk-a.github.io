
// Gives base DPS
var weapon = {
    name: "Weapon",
    baseCost: 1,
    costSc: 1.15,
    baseDps: 1,  // base dps
    dpsSc: 1  // each upgrade base dps is increased by this
}

// Gives DPS multiplier
var helmet = {
    name: "Helmet",
    baseCost: 100,
    costSc: 1.30,
    baseDpsMult: 1,  // multiplier to dps
    dpsMultSc: 1  // each upgrade multiplier is increased by this 
}

// Gives multiplier to gold gain from monster kills
var chestplate = {
    name: "Chestplate",
    baseCost: 10000,
    costSc: 1.45,
    baseGoldMult: 1,   // multiplier to all gold
    goldMultSc: 0.5  // each upgrade multiplier is increased by this
}

// Reduces costs of other gear
var pants = {
    name: "Pants",
    baseCost: 1000000,
    costSc: 1.60,
    baseCostCoef: 1,   // coeficient of gear upgrade costs
    costCoefSc: 0.9   // each upgrade coeficient is timed by this
}

// Increases the soft cap 
var boots = {
    name: "Boots",
    baseCost: 10,
    costSc: 10,
    baseSoftCapTime: 20, // time in seconds after witch the progress starts to go down 
    softCapTimeSc: 20
}
