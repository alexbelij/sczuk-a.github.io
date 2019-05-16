
// Gives base DPS
var weapon = {
    name: "weapon",
    cost: 1,
    costSc: 1.21,
    dps: 1,  // base dps
    dpsSc: 1  // each upgrade base dps is increased by this
}

// Gives DPS multiplier
var helmet = {
    name: "helmet",
    cost: 50,
    costSc: 1.5,
    dpsMult: 1,  // multiplier to dps
    dpsMultSc: 1  // each upgrade multiplier is increased by this 
}

// Gives multiplier to gold gain from monster kills
var chestplate = {
    name: "chestplate",
    cost: 100000,
    costSc: 1.45,
    goldMult: 1,   // multiplier to all gold
    goldMultSc: 1.2  // each upgrade multiplier is timed by this
}

// Reduces prices of other gear
var pants = {
    name: "pants",
    cost: 1000,
    costSc: 1.5,
    priceCoef: 1,   // coeficient of gear upgrade prices
    priceCoefSc: 0.98   // each upgrade coeficient is timed by this
}

// Increases the soft cap 
var boots = {
    name: "boots",
    cost: 69,
    costSc: 69,
    dps: 1,
    dpsCs: 1.3
}
