window.altspecials = {
    1587: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    1588: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    1934: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    1935: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    2073: {
        luffyGear: [ 0, 0, 0, 0, 0, 0 ],
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(window.altspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot]) + 1) % levels.length;
            window.altspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot] = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
            p.scope.notify({
                text: '' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][n] + ' boost. To ' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    2074: {
        luffyGear: [ 0, 0, 0, 0, 0, 0 ],
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            var levels = [0, 1, 2, 3];
            var n = (levels.indexOf(window.altspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot]) + 1) % levels.length;
            window.altspecials[p.team[p.sourceSlot].unit.number+1].luffyGear[p.sourceSlot] = levels[n];
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
            p.scope.notify({
                text: '' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][n] + ' boost. To ' + ["Gear 2", "Gear 3", "Boundman", "Tankman"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    2245: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            console.log(p);
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    2300: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn[p.sourceSlot] = false;
        },
    },
    2958: {
        atk: function(p) { return 2; },
        type: "type",
    },
    2960: {
        chainMultiplication: function(p) { return 1.25; },
        staticMult: function(p) { return 100; }
    },
    2962: {
        delay: function(p) { return 1; },
        ignoresImmunities: function(p) { return ['delay']; },
    },
    2964: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3009: {
        orb: function(p) { return p.unit.cost <= 40  ? 2.25 : 1; },
    },
    3037: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        type: "type",
    },
    3038: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        type: "type",
    },
    3071: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3100:{
        staticMult: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3118: {
        def: function(p) { return 0; },
    },
    3122: {
        orb: function(p) { return 1.75; },
    },
    3175: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3225:{
        affinity: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
    },
    3334: {
        chainAddition: function(p) { return 1; },
    },
    3364: {
        atkPlus: function(p) { return 0.3; },
        orbPlus: function(p) { return 0.3; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3369: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3391: {
        affinity: function(p) { return p.unit.type == "STR" ? 2 : 1; },
    },
    3403: {
        orb: function(p) { return p.unit.type == "INT" || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    3405: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? 2 : 1; },
        type: "type",
    },
    3422: {
        orbPlus: function(p) { return 0.3; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3429: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3430: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3454: {
        negative: function(p) { return 10; },
    },
    3519: {
        atkbase: function(p) { return p.slot < 2 ? 1000 : 0; },
    },
    3523: {
        chain: function(p) { return 3.25; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.25 : 1;
        }
    },
    3553: {
        chainMultiplication: function(p) { return 1.25; }
    },
    3563: {
        chainPlus: function(p) { 
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1];
            return p.chainPosition === 0 ? 0 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 0.3 : 0;
        },
    },
    3576: {
        chainAdditionPlus: function(p) { return 0.5; }, 
    },
    3597: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 2.25 : 1; },
        type: "type",
    },
    3607: {
        orbPlus: function(p) { return 0.25; },
        atkbase: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1000 : 0; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3620: {
        orb: function(p) { return 1.75; },
    },
    3626: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3627: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3629: {
        status: function(p) { return p.defenseDown ? 2.25 : 1; },
        def: function(p) { return 0; },//Temp until we deal with on-hit effects
    },
    3631: {
        atkPlus: function(p) { return 0.25; },
        warning: "Selected alt-special (%name%) does not account for the Class of character that applies the buff and WILL BE INCORRECT some, if not all, of the time. Use at your own risk."
    },
    3641: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2.25 : 1; },
        type: "type",
    },
    3650: {
        orbCeil: function(p) { return 3; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3652: {
        chainMultiplication: function(p) { return 1.25; }
    },
    3669: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3670: {
        chainAddition: function(p) { return 1.5; }, 
    },
    3672: {
        orbCeil: function(p) { return 2.5; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    3674: {
        mark: function(p) { return 1; },
        status: function(p) { return p.marked ? 1.75 : 1; },
    },
    3680: {
        atkPlus: function(p) { return 0.25; },
        orbPlus: function(p) { return 0.25; },
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
        warning: "Selected alt-special (%name%) does not account for the Class of character that applies the buff and WILL BE INCORRECT some, if not all, of the time. Use at your own risk."
    },
    3695: {
        affinityPlus: function(p) { return 0.25; },
    },
    3697: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        type: "type",
    },
    3718: {
        burn: function(p) { return 1; },
        chainMultiplication: function(p) { return 1.25; },
        staticMult: function(p) { return 150; }
    },
    3721: {
        affinityPlus: function(p) { return 0.25; },
        orbPlus: function(p) { return 0.25; },
        warning: "Selected alt-special (%name%) does not account for the Class of character that applies the buff and WILL BE INCORRECT some, if not all, of the time. Use at your own risk."
    },
    3723: {
        atkbase: function(p) { return 1250; },
    },
    3724: {
        affinity: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
    },
    3725: {
        affinity: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
    },
    3726: {
        affinity: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
    },
    3727: {
        affinity: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
    },
    3735: {
        status: function(p) { return p.delayed > 0 ? 2 : 1; },
    },
    3739: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1250 : 0; },
    },
    3755: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 2.5 : 1; },
        type: "type",
    },
    3766: {
        affinity: function(p) { return p.unit.type == "INT" || p.unit.class.has("Driven") || p.unit.class.has("Powerhouse") ? 2.25 : 1; },
    },
    3780: {
        affinity: function(p) { return p.unit.type == "STR" || p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 2.25 : 1; },
    },
    3785: {
        affinity: function(p) { return 1.75; },
    },
    3790: {
        status: function(p) { return 2.25; },
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Paralysis."
    },
    3792: {
        orbPlus: function(p) { return [0, 0.25, 0.25][p.cached.multiplier]; },
        orb: function(p) { return p.unit.type == "QCK" || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? [2.5, 1, 2.5][p.cached.multiplier] : 1; },
        onActivation: function(p) {
            var levels = [0, 1, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["Orb boost", "Orb Buff", "Orb boost and Orb buff"][n] + '. To switch to ' + ["Orb boost", "Orb Buff", "Orb boost and Orb buff"][(n + 1) % levels.length] + ', disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
};

var calcGhostStartIDAltSpecials = { "start": 5000 };

var ghostsAltSpecials = {
    12: {
        chainAddition: function(p) { return 0.5; },
    },
    13: {
        chainAddition: function(p) { return 0.5; },
    },
    14: {
        chainAddition: function(p) { return 0.5; },
    },
    15: {
        chainAddition: function(p) { return 0.5; },
    },
    28: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    29: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    30: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    31: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    32: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    33: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    34: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    35: {
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    36: {
        chainMultiplication: function(p) { return 1.25; },
    },
    37: {
        chainMultiplication: function(p) { return 1.25; },
    },
    38: {
        chainMultiplication: function(p) { return 1.25; },
    },
    39: {
        chainMultiplication: function(p) { return 1.25; },
    },
    40: {
        chainMultiplication: function(p) { return 1.25; },
    },
    41: {
        chainMultiplication: function(p) { return 1.25; },
    },
    66: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    67: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    68: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    69: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    70: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    71: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    72: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    73: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    74: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    75: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    76: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    77: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    78: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    79: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
    },
    80: {
        chainAddition: function(p) { return 0.3; },
    },
    81: {
        chainAddition: function(p) { return 0.3; },
    },
    82: {
        chainAddition: function(p) { return 0.3; },
    },
    83: {
        chainAddition: function(p) { return 0.3; },
    },
    84: {
        chainAddition: function(p) { return 0.3; },
    },
    85: {
        chainAddition: function(p) { return 0.3; },
    },
    86: {
        chainAddition: function(p) { return 0.3; },
    },
    87: {
        chainAddition: function(p) { return 0.3; },
    },
    120: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    121: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    122: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    123: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    124: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    125: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    126: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    127: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    136:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    137:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    138:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    139:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    140:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    141:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    142:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    143:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    152: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    153: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    154: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    155: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    156: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    157: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    158: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    159: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    168: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? 1.5 : 1; },
    },
    169: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? 1.5 : 1; },
    },
    170: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? 1.5 : 1; },
    },
    171: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? 1.5 : 1; },
    },
    207: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    208: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    209: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    210: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    211: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    212: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - p.cached.multiplier/100)); },
        onActivation: function(p) { p.cached.multiplier = p.percHP; },
    },
    213: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    214: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    215: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    216: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    217: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    218: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    219: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    220: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    237:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    238:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    239:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    240: {
        negative: function(p) { return 1; },
    },
    241: {
        negative: function(p) { return 1; },
    },
    242: {
        negative: function(p) { return 1; },
    },
    243: {
        negative: function(p) { return 1; },
    },
    244: {
        negative: function(p) { return 1; },
    },
    245: {
        negative: function(p) { return 1; },
    },
    246: {
        negative: function(p) { return 1; },
    },
    247: {
        negative: function(p) { return 1; },
    },
    276: {
        chainMultiplication: function(p) { return 1.25; },
    },
    277: {
        chainMultiplication: function(p) { return 1.25; },
    },
    278: {
        chainMultiplication: function(p) { return 1.25; },
    },
    279: {
        chainMultiplication: function(p) { return 1.25; },
    },
    280: {
        chainMultiplication: function(p) { return 1.25; },
    },
    281: {
        chainMultiplication: function(p) { return 1.25; },
    },
    282: {
        chainMultiplication: function(p) { return 1.25; },
    },
    283: {
        chainMultiplication: function(p) { return 1.25; },
    },
    300: {
        atk: function(p) { return 2; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    301: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    302: {
        atk: function(p) { return 2; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    303: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    322: {
        chainAddition: function(p) { return 0.3; },
    },
    323: {
        chainAddition: function(p) { return 0.3; },
    },
    324: {
        chainAddition: function(p) { return 0.3; },
    },
    325: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    326: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    327: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    328: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    329: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    330: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5330warning'
            });
        },
    },
    331: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5331warning'
            });
        },
    },
    332: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5332warning'
            });
        },
    },
    333: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5333warning'
            });
        },
    },
    334: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5334warning'
            });
        },
    },
    335: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5335warning'
            });
        },
    },
    336: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5336warning'
            });
        },
    },
    338: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return 0; }
    },
    340: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return 0; }
    },
    341: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    342: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    343: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    344: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    345: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    346: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    347: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    348: {
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    349: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    350: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    351: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    352: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    353: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    354: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    355: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    356: {
        status: function(p) { return p.delayed > 0 ? p.cached.multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    373: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    374: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    375: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    376: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    377: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    378: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    379: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    380: {
        atk: function(p) { return p.cached.multiplier; },
        type: "type",
        orb: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    389: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    390: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    391: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    392: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    393: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    394: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    395: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    396: {
        atk: function(p) { return [p.slot == p.sourceSlot, p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")][p.cached.multiplier] ? 2 : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + ['Own ATK', 'Class ATK'][n] + ' boost. To ' + ['Own ATK', 'Class ATK'][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    405: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    406: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    407: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    408: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    409: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    410: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    411: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    412: {
        affinity: function(p) { return p.cached.multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + 'x boost. To ' + levels[(n + 1) % levels.length] + 'x boost, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    413: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    414: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    415: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    416: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    417: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    418: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    419: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    420: {
        burn: function(p) { return 1; },
        chain: function(p) { return p.cached.multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (p.cached.multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var levels = [ 1.6, 2.5 ];
            var n = (levels.indexOf(p.cached.multiplier) + 1) % levels.length;
            p.cached.multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x Chain boundary. To switch to the ' + levels[(n + 1) % levels.length] + ' Chain boundary, disable and re-enable this special',
                name: (p.team[p.sourceSlot].unit.number+1).toString() + 'warning'
            });
        },
    },
    429: {
        increaseDamageTaken: function(p) { return 1.5; },
        ignoresImmunities: function(p) { return ['increaseDamageTaken']; },
    },
    430: {
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
    431: {
        increaseDamageTaken: function(p) { return 1.5; },
        ignoresImmunities: function(p) { return ['increaseDamageTaken']; },
    },
    432: {
        turnedOn: false,
        onActivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.altspecials[p.team[p.sourceSlot].unit.number+1].turnedOn = false;
        },
    },
}

Object.keys(ghostsAltSpecials).forEach(function (key) {
    window.altspecials[calcGhostStartIDAltSpecials["start"] + parseInt(key)] = ghostsAltSpecials[key];
});
