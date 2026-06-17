const locations = {
  concord: {
    name: "Concord",
    type: "Woodland Capital",
    description: "A fortified trade town near Queen's Wood, where crown law, ranger customs, and old forest pacts uneasily overlap.",
    population: "4,800",
    government: "Crown Charter",
    notable: "Queen's Road Gate",
    danger: "Medium",
    faction: "The Greenwardens",
    rumor: "A treaty tree outside town has begun bleeding silver sap.",
    mood: "Prosperous, ceremonial, suspicious",
    scene: "Rangers argue with crown clerks while merchants wait beneath green banners.",
    cards: [
      { name: "Queen's Road Gate", type: "Gatehouse", image: "keep", detail: "Main gate facing Queen's Wood, carved with royal seals and leaf sigils.", hook: "One carved leaf has turned fresh and green." },
      { name: "Green Cup Inn", type: "Tavern", image: "tavern", detail: "Polished tavern for rangers, merchants, and minor nobles.", hook: "A guest is paying with acorns stamped like coins." },
      { name: "Charter Market", type: "District", image: "market", detail: "Legal trade square where forest goods receive crown tax marks.", hook: "A crate of mushrooms is whispering court testimony." },
      { name: "Old Survey Mill", type: "Location", image: "mill", detail: "A waterwheel and map-house built to chart the forest edge.", hook: "Every map now shows a road that does not exist." },
      { name: "The Treaty Tree", type: "Sacred Site", image: "shrine", detail: "Ancient oak where city, crown, and forest swore peace.", hook: "Its silver sap points toward a hidden murderer." }
    ]
  },
  "oak-town": {
    name: "Oak Town",
    type: "Forest Settlement",
    description: "A timber town tucked into the edge of Queen's Wood, known for bowyers, herbalists, and strict guest laws.",
    population: "1,150",
    government: "Elder Circle",
    notable: "The Seven Oaks",
    danger: "Low",
    faction: "Oak Moot",
    rumor: "A child followed a white stag and returned speaking in an ancient dialect.",
    mood: "Quiet, watchful, deeply traditional",
    scene: "Smoke rises from green-roofed halls while scouts mark fresh tracks in the mud.",
    cards: [
      { name: "Seven Oaks Hall", type: "Council Hall", image: "keep", detail: "Open hall built between living oak trunks.", hook: "One elder's chair has grown shut around a bloodstained knife." },
      { name: "Moss & Mug", type: "Tavern", image: "tavern", detail: "Low-beamed inn serving mushroom ale and strict local gossip.", hook: "The cellar door opens into different woods each night." },
      { name: "Bowyer's Green", type: "Workshop Row", image: "market", detail: "Fletchers, bowyers, and hideworkers trade under canvas awnings.", hook: "A bowstring hums whenever pointed at royalty." },
      { name: "Rootspring Mill", type: "Mill", image: "mill", detail: "Small mill powered by a spring that tastes faintly of rain.", hook: "The waterwheel stops whenever a lie is spoken nearby." },
      { name: "Leaf-Saint Shrine", type: "Temple", image: "shrine", detail: "Mossy shrine for travelers entering Queen's Wood.", hook: "Offerings vanish before they touch the bowl." }
    ]
  },
  "thorn-point": {
    name: "Thorn Point",
    type: "Harbor Village",
    description: "A small point-town on Fairwind Sound, caught between fishing boats, ferries, and thorn-choked ruins.",
    population: "740",
    government: "Harbormaster",
    notable: "Thorn Pier",
    danger: "Medium",
    faction: "Sound Pilots",
    rumor: "A ferry arrived with no passengers, but every seat was warm.",
    mood: "Salt-worn, practical, uneasy",
    scene: "Fisherfolk mend nets while fog drifts in from Fairwind Sound.",
    cards: [
      { name: "Thorn Pier", type: "Harbor", image: "market", detail: "Weathered pier wrapped in thorny vines no one dares cut.", hook: "The vines bloom when a guilty sailor walks past." },
      { name: "Pilots' Lantern", type: "Tavern", image: "tavern", detail: "Harbor tavern where ferry routes are bought, sold, and lied about.", hook: "A table is reserved for someone drowned ten years ago." },
      { name: "Salt Crate Row", type: "Market", image: "market", detail: "Fish crates, sailcloth, lamp oil, and cheap ferry charms.", hook: "A crate knocks from the inside only at low tide." },
      { name: "Soundwatch Shrine", type: "Temple", image: "shrine", detail: "Tiny shrine facing Fairwind Sound.", hook: "Its bell rings from underwater." },
      { name: "Briar Ruin", type: "Hidden", image: "mill", detail: "Collapsed watchtower swallowed by thorns.", hook: "Someone has cut a fresh path into the briars." }
    ]
  },
  threshwood: {
    name: "Threshwood",
    type: "Soundside Town",
    description: "A busy town on the inner sound, where ferries, grain barges, and rumor boats all make landfall.",
    population: "2,300",
    government: "Dock Reeves",
    notable: "Threshing Quay",
    danger: "Medium",
    faction: "The Grain Compact",
    rumor: "A barge unloaded sacks of wheat that bled when cut open.",
    mood: "Busy, hungry, politically tangled",
    scene: "Barges crowd the quay while dockhands argue over spoiled grain seals.",
    cards: [
      { name: "Threshing Quay", type: "Harbor", image: "market", detail: "Grain dock where every shipment is weighed twice.", hook: "One scale balances only against bones." },
      { name: "The Winnow House", type: "Tavern", image: "tavern", detail: "Loud tavern serving ferry crews, grain factors, and spies.", hook: "A minstrel knows a verse from a song not yet written." },
      { name: "Barge Market", type: "Market", image: "market", detail: "Floating stalls tied together with chain and old rope.", hook: "A merchant sells jars of wind from Queen's Wood." },
      { name: "Old Silo", type: "Location", image: "mill", detail: "Round stone silo abandoned after a fire that left no ash.", hook: "The inside is larger than the outside." },
      { name: "Saint of Measures", type: "Temple", image: "shrine", detail: "Shrine where contracts are weighed on bronze pans.", hook: "A false promise weighs as much as lead." }
    ]
  },
  "blacktin-hall": {
    name: "Blacktin Hall",
    type: "Cliffhold",
    description: "A dark stone hall on the coast below Spider Wood, known for stern wardens and older tunnels.",
    population: "920",
    government: "House Blacktin",
    notable: "The Iron Hall",
    danger: "High",
    faction: "Blacktin Wardens",
    rumor: "A prisoner escaped through a wall that was solid stone yesterday.",
    mood: "Severe, fortified, secretive",
    scene: "Wardens lower iron lanterns over a cliff path while ravens gather above.",
    cards: [
      { name: "The Iron Hall", type: "Stronghold", image: "keep", detail: "Cold hall with black beams and windows facing the Iron Sea.", hook: "A locked room contains fresh seawater." },
      { name: "Raven's Rest", type: "Tavern", image: "tavern", detail: "Austere tavern used by wardens, hunters, and grim messengers.", hook: "A raven repeats one party member's last words." },
      { name: "Cliff Market", type: "Market", image: "market", detail: "Windy trade row selling salt, rope, black tin, and spider-silk charms.", hook: "One charm crawls away when ignored." },
      { name: "Old Mine Door", type: "Location", image: "mill", detail: "Sealed mine entrance beneath the hall's lower road.", hook: "It knocks back from the inside." },
      { name: "Widow's Shrine", type: "Temple", image: "shrine", detail: "Shrine for sailors lost to the Iron Sea.", hook: "Names appear before the sailors die." }
    ]
  },
  "high-port": {
    name: "High Port",
    type: "Hill Harbor",
    description: "A bright port rising above the southern bay, built in terraces above crowded docks.",
    population: "3,600",
    government: "Port Magistrate",
    notable: "Upper Chain Lift",
    danger: "Medium",
    faction: "High Port Factors",
    rumor: "A merchant prince bought every bell in the city and buried them inland.",
    mood: "Ambitious, crowded, theatrical",
    scene: "Cargo lifts groan above steep streets while heralds announce delayed ships.",
    cards: [
      { name: "Upper Chain Lift", type: "Harbor Works", image: "keep", detail: "Massive chain lift hauling goods from dock to hilltop warehouses.", hook: "One chain link is engraved with a royal confession." },
      { name: "The Gull Crown", type: "Tavern", image: "tavern", detail: "Terrace inn where captains gamble with shipping rights.", hook: "A card game keeps dealing the same dead captain." },
      { name: "Terrace Exchange", type: "Market", image: "market", detail: "Stacked market of spices, rope, maps, silk, and forged permits.", hook: "A permit names tomorrow's crime." },
      { name: "Old Pump House", type: "Location", image: "mill", detail: "Abandoned waterworks below the upper city.", hook: "The pumps draw up seawater mixed with ink." },
      { name: "Sun Bell Shrine", type: "Temple", image: "shrine", detail: "Golden shrine overlooking the bay.", hook: "Its bell is missing, but everyone still hears it." }
    ]
  },
  necromouth: {
    name: "Necromouth",
    type: "Ruined Port",
    description: "A haunted landing on the Midland Sea where old docks rot beside black water.",
    population: "Unknown",
    government: "None",
    notable: "The Bone Quay",
    danger: "High",
    faction: "Grave-Tide Cult",
    rumor: "Dead sailors have been seen paying tolls with wet coins.",
    mood: "Abandoned, cursed, magnetic",
    scene: "Black gulls circle broken piers while the tide moves without wind.",
    cards: [
      { name: "Bone Quay", type: "Ruined Dock", image: "market", detail: "Collapsed dock built over pale timbers that may not be wood.", hook: "A moored boat rocks under invisible weight." },
      { name: "The Empty Cup", type: "Dead Tavern", image: "tavern", detail: "Tavern with clean tables, cold hearth, and no owner.", hook: "Fresh drinks appear for anyone who speaks a dead name." },
      { name: "Drowned Market", type: "Market Ruin", image: "market", detail: "Half-submerged stalls visible through clear black water.", hook: "A vendor's bell rings below the surface." },
      { name: "Mouth Gate", type: "Ruin", image: "mill", detail: "Stone archway carved like an open jaw.", hook: "It exhales when the moon rises." },
      { name: "Salt Crypt", type: "Shrine", image: "shrine", detail: "Crypt-shrine crusted in salt and candle wax.", hook: "The candles burn underwater." }
    ]
  },
  horizon: {
    name: "Horizon",
    type: "Western Trade Town",
    description: "A road town near the western coast, where caravans gather before crossing toward the Midland Sea.",
    population: "1,900",
    government: "Merchant Council",
    notable: "Horizon Gate",
    danger: "Low",
    faction: "Roadward Factors",
    rumor: "A caravan arrived from tomorrow with receipts for goods not yet sold.",
    mood: "Restless, commercial, superstitious",
    scene: "Wagons line the road while merchants paint fresh destination signs.",
    cards: [
      { name: "Horizon Gate", type: "Gatehouse", image: "keep", detail: "Painted gate marking the last western road before the sound.", hook: "A new road appears beyond it only at dusk." },
      { name: "The Long Mile", type: "Tavern", image: "tavern", detail: "Large road tavern with maps burned into every table.", hook: "One table updates as the party travels." },
      { name: "Wayfarer Market", type: "Market", image: "market", detail: "Travel gear, pack animals, letters, lantern oil, and hired guides.", hook: "A sealed letter is addressed to a character's future title." },
      { name: "Dustwheel Mill", type: "Mill", image: "mill", detail: "Roadside mill powering grain stones and caravan winches.", hook: "The wheel spins backward during lies." },
      { name: "Shrine of Roads", type: "Temple", image: "shrine", detail: "Stone shrine where travelers leave bent nails for luck.", hook: "One nail points toward danger." }
    ]
  }
};

const cardBackdrops = {
  keep: "linear-gradient(145deg, rgba(128,91,47,.36), rgba(13,12,10,.2)), radial-gradient(circle at 55% 45%, #9c8159 0 9%, transparent 10%), linear-gradient(135deg, #33434a, #19130f 66%, #6d502b)",
  tavern: "radial-gradient(circle at 62% 42%, rgba(250,169,45,.46) 0 14%, transparent 15%), linear-gradient(135deg, #573213, #17110d 58%, #6b3a16)",
  market: "linear-gradient(135deg, #604425, #172018 58%, #806134)",
  mill: "radial-gradient(circle at 42% 46%, rgba(209,185,112,.24) 0 17%, transparent 18%), linear-gradient(135deg, #303e27, #15110d 55%, #66522d)",
  shrine: "radial-gradient(circle at 56% 44%, rgba(255,184,55,.55) 0 12%, transparent 13%), linear-gradient(135deg, #4c3012, #15100d 54%, #674612)"
};

const npcNames = [
  {
    name: "Mara Vell",
    role: "oath-burned scout",
    voice: "short answers, never uses names",
    stats: "AC 14, HP 22, Insight +4, Survival +6",
    secret: "She buried a royal courier outside town and kept the signet."
  },
  {
    name: "Brother Halden",
    role: "nervous relic keeper",
    voice: "whispers prayers between every sentence",
    stats: "AC 11, HP 13, Religion +5, Medicine +3",
    secret: "He can hear the temple bell before deaths."
  },
  {
    name: "Ser Kael Thorn",
    role: "disgraced captain",
    voice: "formal, bitter, precise",
    stats: "AC 16, HP 38, Athletics +5, Intimidation +4",
    secret: "He lost his command after refusing an impossible order."
  },
  {
    name: "Nyssa Crowglass",
    role: "charming fence",
    voice: "warm compliments hiding sharp questions",
    stats: "AC 13, HP 18, Deception +6, Sleight +5",
    secret: "She sells stolen memories, not stolen goods."
  },
  {
    name: "Orin Deepdelve",
    role: "retired monster hunter",
    voice: "calm stories that end badly",
    stats: "AC 15, HP 31, Nature +4, Perception +5",
    secret: "His trophy wall contains one living eye."
  }
];

const shops = [
  {
    name: "The Gilded Anvil",
    keeper: "Bressa Coalhand",
    inventory: "silvered blades, travel armor, suspiciously cheap lockpicks",
    special: "A cracked shield that hums near undead",
    price: "10% discount for anyone carrying official town work"
  },
  {
    name: "Moth & Mortar",
    keeper: "Ilo Vane",
    inventory: "healing draughts, dream salt, bottled ghostlight",
    special: "One sleep potion that only works on people telling the truth",
    price: "Charges extra for names, not coin"
  },
  {
    name: "Old Road Provisions",
    keeper: "Tamsin Reed",
    inventory: "rope, tents, rations, chalk, rumor maps",
    special: "A compass that points toward the nearest locked door",
    price: "Fair prices, bad coffee, excellent local gossip"
  },
  {
    name: "The Copper Wyvern",
    keeper: "Master Pell",
    inventory: "charms, scroll tubes, fake noble seals",
    special: "A brass ring that warms when a contract is false",
    price: "Will trade for favors owed by noble houses"
  }
];

const assistantIdeas = [
  "A courier arrives with a sealed letter addressed to a party member by childhood nickname.",
  "The local shrine bell rings once, though nobody is touching it.",
  "A shopkeeper recognizes the party's map and quietly locks the front door.",
  "Two factions both want the same abandoned mill, but for opposite reasons."
];

function rollStat() {
  return Math.floor(Math.random() * 7) + Math.floor(Math.random() * 7) + 6;
}

function rollAbilityScore() {
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1).sort((a, b) => a - b);
  return {
    rolls,
    total: rolls.slice(1).reduce((sum, roll) => sum + roll, 0)
  };
}

function rollAbilitySet() {
  return ["str", "dex", "con", "int", "wis", "cha"].reduce((set, stat) => {
    set[stat] = rollAbilityScore();
    return set;
  }, {});
}

function statMod(score) {
  return Math.floor((score - 10) / 2);
}

function formatMod(score) {
  const mod = statMod(score);
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

function makeStats(role = "") {
  const stats = {
    str: rollStat(),
    dex: rollStat(),
    con: rollStat(),
    int: rollStat(),
    wis: rollStat(),
    cha: rollStat()
  };
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes("guard") || lowerRole.includes("fighter") || lowerRole.includes("captain")) stats.str += 2;
  if (lowerRole.includes("scout") || lowerRole.includes("hunter") || lowerRole.includes("fence")) stats.dex += 2;
  if (lowerRole.includes("priest") || lowerRole.includes("keeper") || lowerRole.includes("relic")) stats.wis += 2;
  if (lowerRole.includes("noble") || lowerRole.includes("informant") || lowerRole.includes("broker")) stats.cha += 2;
  return stats;
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomNpcRace() {
  return randomFrom(["Human", "Elf", "Dwarf", "Halfling", "Half-Elf", "Tiefling", "Dragonborn", "Gnome", "Orc", "Aasimar"]);
}

function randomNpcClass(role = "") {
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes("priest") || lowerRole.includes("relic")) return "Cleric";
  if (lowerRole.includes("scout") || lowerRole.includes("hunter")) return "Ranger";
  if (lowerRole.includes("guard") || lowerRole.includes("captain")) return "Fighter";
  if (lowerRole.includes("fence") || lowerRole.includes("broker")) return "Rogue";
  if (lowerRole.includes("noble") || lowerRole.includes("informant")) return "Bard";
  return randomFrom(["Commoner", "Fighter", "Rogue", "Cleric", "Ranger", "Bard", "Wizard", "Warlock"]);
}

function createNpc({ name, role, location, details, race, npcClass, stats }) {
  const npcStats = stats || makeStats(role);
  const finalRace = race || randomNpcRace();
  const finalClass = npcClass || randomNpcClass(role);
  const dexMod = statMod(npcStats.dex);
  const conMod = statMod(npcStats.con);
  const wisMod = statMod(npcStats.wis);
  const chaMod = statMod(npcStats.cha);
  return {
    id: `npc-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    role,
    race: finalRace,
    npcClass: finalClass,
    location,
    details,
    stats: npcStats,
    ac: 10 + dexMod,
    hp: Math.max(4, 10 + conMod + Math.floor(Math.random() * 13)),
    speed: "30 ft.",
    proficiency: "+2",
    skills: `Insight ${wisMod >= 0 ? "+" : ""}${wisMod + 2}, Persuasion ${chaMod >= 0 ? "+" : ""}${chaMod + 2}`,
    savingThrows: `Dex ${dexMod >= 0 ? "+" : ""}${dexMod}, Wis ${wisMod >= 0 ? "+" : ""}${wisMod}`,
    actions: "Dagger or improvised attack: +3 to hit, 1d4+1 piercing. Social pressure: one nearby creature makes a DC 12 Wisdom check.",
    traits: "Campaign NPC: reacts to faction pressure, rumors, and party reputation."
  };
}

const customNpcs = [
  createNpc({
    name: "Mara Vell",
    role: "Oath-burned scout",
    race: "Human",
    npcClass: "Ranger",
    location: "Concord",
    details: "Knows which roads are real and which roads are hungry. Secretly carries a royal signet.",
    stats: { str: 10, dex: 16, con: 12, int: 11, wis: 15, cha: 9 }
  }),
  createNpc({
    name: "Brother Halden",
    role: "Relic keeper",
    race: "Half-Elf",
    npcClass: "Cleric",
    location: "Oak Town",
    details: "Hears bells before deaths. Wants help before the next bell rings for someone important.",
    stats: { str: 8, dex: 10, con: 11, int: 14, wis: 16, cha: 13 }
  })
];

function createPlayerCharacter({
  name = "New Hero",
  race = "Human",
  characterClass = "Fighter",
  level = 1,
  background = "Adventurer",
  stats = { str: 15, dex: 12, con: 14, int: 10, wis: 11, cha: 13 },
  ac,
  hp,
  speed = "30 ft.",
  proficiency = "+2",
  skills = "Athletics +4, Perception +2",
  equipment = "Travel pack, weapon, keepsake",
  notes = "Player character notes."
} = {}) {
  const dexMod = statMod(stats.dex);
  const conMod = statMod(stats.con);
  return {
    id: `pc-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    race,
    characterClass,
    level,
    background,
    stats,
    ac: ac || 12 + dexMod,
    hp: hp || Math.max(6, 8 + conMod),
    speed,
    proficiency,
    skills,
    equipment,
    notes
  };
}

const playerCharacters = [
  createPlayerCharacter({
    name: "Borin Ashshield",
    race: "Dwarf",
    characterClass: "Fighter",
    level: 2,
    background: "Keep Warden",
    stats: { str: 16, dex: 10, con: 15, int: 9, wis: 12, cha: 11 },
    ac: 16,
    hp: 22,
    skills: "Athletics +5, Survival +3",
    equipment: "Chain mail, shield, battleaxe, old keep key",
    notes: "Wants to reclaim a family oath tied to the Lost Keep."
  }),
  createPlayerCharacter({
    name: "Elira Moonbrook",
    race: "Elf",
    characterClass: "Wizard",
    level: 2,
    background: "Star Scribe",
    stats: { str: 8, dex: 14, con: 12, int: 16, wis: 13, cha: 10 },
    ac: 12,
    hp: 14,
    skills: "Arcana +5, Investigation +5",
    equipment: "Spellbook, quarterstaff, ink kit, silver map pin",
    notes: "Studies old road magic and recognizes impossible landmarks."
  })
];

const campaignNotes = [
  { id: "note-seed-1", title: "Session Prep", text: "Start in Concord. Introduce the silver sap rumor, then push toward Queen's Wood." },
  { id: "note-seed-2", title: "Table Ruling", text: "For unusual homebrew checks, use DC 12 for pressure, DC 15 for danger, DC 18 for major consequences." }
];

const generatedInbox = [
  {
    id: "gen-seed-town-map",
    kind: "town-map",
    source: "AI Map Generator",
    title: "Concord District Map",
    summary: "A generated town layout with five districts, market roads, gates, and a shrine cluster.",
    payload: { locationKey: "concord", detail: "Generated district map ready to replace or expand Concord's town view." }
  },
  {
    id: "gen-seed-npc",
    kind: "npc",
    source: "AI NPC Generator",
    title: "Veyra Mosswake",
    summary: "A suspicious elf herbalist tied to Queen's Wood and the silver sap rumor.",
    payload: { name: "Veyra Mosswake", role: "Suspicious herbalist", race: "Elf", npcClass: "Druid", location: "Concord", details: "Trades in poultices, warnings, and half-truths. Knows why the treaty tree is bleeding." }
  }
];

const campaignLinks = [
  { id: "link-seed-1", fromType: "NPC", fromName: "Mara Vell", toType: "Location", toName: "Concord", note: "Knows hidden roads around the city." },
  { id: "link-seed-2", fromType: "Quest", fromName: "Silver Sap", toType: "Location", toName: "The Treaty Tree", note: "The first clue is found here." }
];

const campaignShops = [];

const campaignSettings = {
  name: "The Lost Keep",
  session: "Session 1",
  defaultDice: "1d20"
};

const mapSettings = {
  title: "Midland Sea Campaign Map",
  notes: "Primary world map for the campaign. Upload a replacement image here when your custom map builder is ready.",
  imageSrc: "assets/world-map.png"
};

let selectedLocationKey = "concord";
let toastTimer;
let currentSection = "world";
let selectedBuildingIndex = null;
let editMode = false;
let selectedBottomTab = "overview";
let mapZoomLevel = 0;
let reloadWorldMapImage = null;
let focusedNpcId = null;
let mapDetailsVisible = false;

const markerButtons = document.querySelectorAll(".map-marker");
const cardsContainer = document.getElementById("locationCards");
const mapOverlay = document.getElementById("mapOverlay");
const locationPopover = document.getElementById("locationPopover");
const mapFrame = document.querySelector(".map-frame");
const townMap = document.getElementById("townMap");
const buildingMap = document.getElementById("buildingMap");
const sectionOverlay = document.getElementById("sectionOverlay");

const sectionContent = {
  lore: {
    eyebrow: "Campaign Archive",
    title: "Lore",
    cards: [
      ["Queen's Wood", "An ancient forest whose borders shift after royal blood is spilled."],
      ["The Midland Sea", "A trade sea full of ferry towns, drowned ruins, and toll spirits."],
      ["The Iron Sea", "Cold eastern waters watched by cliffholds, ravens, and old wardens."],
      ["The Treaty Tree", "A living pact between crown law and forest law near Concord."],
      ["Spider Wood", "A coastal forest where silk charms, missing scouts, and old tunnels connect."],
      ["Necromouth", "A ruined landing where dead sailors still seem to understand commerce."]
    ]
  },
  quests: {
    eyebrow: "Active Threads",
    title: "Quests",
    cards: [
      ["Silver Sap", "Find why Concord's treaty tree is bleeding and who benefits from broken pacts."],
      ["The Warm Ferry", "Investigate the empty ferry that arrived at Thorn Point with warm seats."],
      ["Grain That Bleeds", "Trace Threshwood's cursed wheat shipment before famine panic spreads."],
      ["Stone Door Escape", "Learn how a prisoner vanished through a wall inside Blacktin Hall."],
      ["Tomorrow's Receipts", "Follow Horizon's impossible caravan paperwork to its source."],
      ["Dead Toll Coins", "Discover why Necromouth's dead are paying passage again."]
    ]
  },
  npcs: {
    eyebrow: "People Of Interest",
    title: "NPCs",
    cards: [
      ["Mara Vell", "Scout who knows which roads are real and which roads are hungry."],
      ["Brother Halden", "Relic keeper who hears bells before deaths."],
      ["Nyssa Crowglass", "Fence trading in stolen memories and dangerous favors."],
      ["Bressa Coalhand", "Smith with silvered blades and a shield that hums near undead."],
      ["Ilo Vane", "Apothecary who charges extra for names, not coin."],
      ["Ser Kael Thorn", "Disgraced captain still carrying an impossible order."]
    ]
  },
  items: {
    eyebrow: "Vault And Shops",
    title: "Items",
    cards: [
      ["Cracked Spyglass", "Shows tomorrow's weather and sometimes tomorrow's witnesses."],
      ["Compass Of Locked Doors", "Points toward the nearest sealed threshold."],
      ["Brass Truth Ring", "Warms when a signed contract contains a lie."],
      ["Silver Sap Vial", "Fresh sap from the treaty tree; reacts to broken oaths."],
      ["Bone-Toll Coin", "Wet coin accepted at docks where the living should not pay."],
      ["Mushroom Testimony", "A whispering fungus that repeats whatever happened near its crate."]
    ]
  }
};

const campaignStorageKey = "lost-keep-prototype-campaign";
const sidebarStorageKey = "lost-keep-sidebar-collapsed";

function saveCampaign() {
  localStorage.setItem(campaignStorageKey, JSON.stringify({
    locations,
    sectionContent,
    customNpcs,
    playerCharacters,
    campaignNotes,
    generatedInbox,
    campaignLinks,
    campaignShops,
    campaignSettings,
    mapSettings
  }));
}

function loadCampaign() {
  const raw = localStorage.getItem(campaignStorageKey);
  if (!raw) return;
  try {
    const saved = JSON.parse(raw);
    if (saved.locations) Object.assign(locations, saved.locations);
    if (saved.sectionContent) Object.assign(sectionContent, saved.sectionContent);
    if (Array.isArray(saved.customNpcs)) customNpcs.splice(0, customNpcs.length, ...saved.customNpcs);
    if (Array.isArray(saved.playerCharacters)) playerCharacters.splice(0, playerCharacters.length, ...saved.playerCharacters);
    if (Array.isArray(saved.campaignNotes)) campaignNotes.splice(0, campaignNotes.length, ...saved.campaignNotes);
    if (Array.isArray(saved.generatedInbox)) generatedInbox.splice(0, generatedInbox.length, ...saved.generatedInbox);
    if (Array.isArray(saved.campaignLinks)) campaignLinks.splice(0, campaignLinks.length, ...saved.campaignLinks);
    if (Array.isArray(saved.campaignShops)) campaignShops.splice(0, campaignShops.length, ...saved.campaignShops);
    if (saved.campaignSettings) Object.assign(campaignSettings, saved.campaignSettings);
    if (saved.mapSettings) Object.assign(mapSettings, saved.mapSettings);
  } catch {
    localStorage.removeItem(campaignStorageKey);
  }
}

loadCampaign();
window.addEventListener("beforeunload", saveCampaign);

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
}

function cleanEditText(value, fallback = "Untitled") {
  const cleaned = value.replace(/\s+/g, " ").trim();
  return cleaned || fallback;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function applyCampaignSettings({ updateDice = false } = {}) {
  const brandTitle = document.querySelector(".brand h1");
  const brandSession = document.querySelector(".brand span");
  const diceFormula = document.getElementById("diceFormula");
  if (brandTitle) brandTitle.textContent = campaignSettings.name;
  if (brandSession) brandSession.textContent = campaignSettings.session;
  if (diceFormula && updateDice) diceFormula.value = campaignSettings.defaultDice;
}

function setupSidebarToggle() {
  const shell = document.querySelector(".app-shell");
  const toggle = document.getElementById("sidebarToggle");
  if (!shell || !toggle) return;

  const applyState = (collapsed) => {
    shell.classList.toggle("sidebar-collapsed", collapsed);
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.setAttribute("aria-label", collapsed ? "Open left panel" : "Collapse left panel");
    toggle.textContent = collapsed ? "›" : "‹";
    localStorage.setItem(sidebarStorageKey, collapsed ? "true" : "false");
    window.setTimeout(() => {
      if (typeof reloadWorldMapImage === "function") reloadWorldMapImage();
    }, 210);
  };

  applyState(localStorage.getItem(sidebarStorageKey) === "true");
  toggle.addEventListener("click", () => {
    applyState(!shell.classList.contains("sidebar-collapsed"));
  });
}

function syncEditMode() {
  document.body.classList.toggle("edit-mode", editMode);
  document.getElementById("editModeToggle").textContent = editMode ? "Done" : "Edit";
  document.getElementById("editModeToggle").setAttribute("aria-pressed", String(editMode));
  document.querySelectorAll(".editable-text").forEach((element) => {
    element.contentEditable = editMode ? "true" : "false";
  });
  document.querySelectorAll(".section-card-title, .section-card-text").forEach((element) => {
    element.disabled = !editMode;
  });
}

function makeEditable(element, onSave, multiline = false) {
  element.contentEditable = editMode ? "true" : "false";
  element.spellcheck = false;
  element.classList.add("editable-text");
  element.addEventListener("keydown", (event) => {
    if (!multiline && event.key === "Enter") {
      event.preventDefault();
      element.blur();
    }
  });
  element.addEventListener("blur", () => onSave(cleanEditText(element.textContent)));
  element.addEventListener("blur", saveCampaign);
}

function refreshLocationLabels() {
  markerButtons.forEach((button) => {
    const location = locations[button.dataset.location];
    if (location) button.querySelector("strong").textContent = location.name;
  });
  updateLocation(selectedLocationKey);
}

function updateLocation(key) {
  selectedLocationKey = key;
  const location = locations[key];
  document.getElementById("popoverTitle").textContent = location.name;
  document.getElementById("popoverType").textContent = location.type;
  document.getElementById("popoverDescription").textContent = location.description;
  document.getElementById("popoverPopulation").textContent = location.population;
  document.getElementById("popoverGovernment").textContent = location.government;
  document.getElementById("popoverNotable").textContent = location.notable;
  document.getElementById("popoverDanger").textContent = location.danger;
  document.getElementById("popoverFaction").textContent = location.faction;
  document.getElementById("popoverRumor").textContent = location.rumor;
  document.getElementById("selectedName").textContent = location.name;
  document.getElementById("selectedSubtitle").textContent = `${location.type} - ${location.mood}`;
  document.getElementById("selectedSceneName").textContent = location.name;
  document.getElementById("selectedSceneMeta").textContent = `${location.type} - ${location.danger} danger`;
  document.getElementById("sceneSummary").textContent = location.scene;
  document.getElementById("sessionDanger").textContent = `${location.danger} Danger`;

  markerButtons.forEach((button) => {
    button.classList.toggle("selected", button.dataset.location === key);
  });

  renderLocationPanel(selectedBottomTab);
  syncEditMode();
}

function makeMiniCard(title, meta, detail, actionLabel = "", onAction = null, image = "tome") {
  const card = document.createElement("article");
  card.className = "location-card";
  card.innerHTML = `
    <div class="card-image"></div>
    ${onAction ? `<span class="click-card-label">${escapeHtml(actionLabel || "Open")}</span>` : ""}
    <h3>${title}</h3>
    <p class="card-type">${meta}</p>
    <p class="card-detail">${detail}</p>
    ${actionLabel ? `<button class="inspect-building">${actionLabel}</button>` : ""}
  `;
  card.querySelector(".card-image").classList.add(`asset-${image}`);
  if (onAction) {
    card.classList.add("actionable-card");
    card.addEventListener("click", () => onAction());
    const actionButton = card.querySelector(".inspect-building");
    if (actionButton) {
      actionButton.addEventListener("click", (event) => {
        event.stopPropagation();
        onAction();
      });
    }
  }
  return card;
}

function openNpcSheet(npc) {
  if (!npc) return;
  focusedNpcId = npc.id;
  activateTopSection("npcs");
  showToast(`${npc.name} sheet opened.`);
}

function openBuildingFromPanel(place) {
  if (!place) return;
  enterTownMap(selectedLocationKey);
  window.requestAnimationFrame(() => openBuildingMap(place));
}

function parseShopInventory(raw = "") {
  const rows = raw.split(/\n+/).map((row) => row.trim()).filter(Boolean);
  return rows.map((row) => {
    const [name, ...costParts] = row.split(/\s[-:]\s/);
    return {
      name: cleanEditText(name, "Trade Good"),
      cost: cleanEditText(costParts.join(" - "), "Ask shopkeeper")
    };
  });
}

function formatShopInventory(items = []) {
  return items.map((item) => `${item.name} - ${item.cost}`).join("\n");
}

function shopInventorySummary(shop) {
  return shop.items.map((item) => `${item.name} (${item.cost})`).join(", ");
}

function addShopToTown(shop) {
  const location = locations[shop.locationKey] || locations[selectedLocationKey];
  let keeperNpc = customNpcs.find((npc) => npc.id === shop.keeperNpcId);
  if (!keeperNpc) {
    keeperNpc = createNpc({
      name: shop.keeper,
      role: "Shopkeeper",
      race: shop.keeperRace,
      npcClass: "Merchant",
      location: location.name,
      details: `Runs ${shop.name}. Knows prices, rumors, and who has been buying unusual supplies.`
    });
    customNpcs.unshift(keeperNpc);
    shop.keeperNpcId = keeperNpc.id;
  }

  const detail = `${shop.name} is a ${shop.type} in ${location.name}. Keeper: ${keeperNpc.name}. Stock: ${shopInventorySummary(shop)}.`;
  const hook = shop.hook || `${keeperNpc.name} can provide a rumor, shortage, custom order, or suspicious receipt.`;
  const existing = location.cards.find((card) => card.shopId === shop.id);
  if (existing) {
    Object.assign(existing, {
      name: shop.name,
      type: shop.type,
      image: "treasure",
      detail,
      hook,
      shopId: shop.id
    });
  } else {
    location.cards.unshift({
      name: shop.name,
      type: shop.type,
      image: "treasure",
      detail,
      hook,
      shopId: shop.id
    });
  }
  sectionContent.items.cards.unshift([`${shop.name} Stock`, shopInventorySummary(shop)]);
  return keeperNpc;
}

function renderLocationPanel(tab = "overview") {
  selectedBottomTab = tab;
  const location = locations[selectedLocationKey];
  cardsContainer.innerHTML = "";
  cardsContainer.className = "location-cards";

  if (tab === "overview") {
    [
      ["Population", location.population, location.description, "View Town", () => enterTownMap(selectedLocationKey), "keep"],
      ["Government", location.government, `Faction: ${location.faction}`, "", null, "market"],
      ["Mood", location.mood, location.scene, "Scene", () => activateTopSection("scene"), "tome"],
      ["Rumor", location.danger, location.rumor, "Quest Hook", () => seedQuestHook(), "shrine"],
      ["Notable", location.notable, "Open the location panel to inspect buildings and rooms.", "Inspect", () => enterTownMap(selectedLocationKey), "mill"]
    ].forEach(([title, meta, detail, action, handler, image]) => {
      cardsContainer.appendChild(makeMiniCard(title, meta, detail, action, handler, image));
    });
    return;
  }

  if (tab === "locations") {
    location.cards.forEach((place, index) => {
      const card = document.createElement("article");
      card.className = "location-card actionable-card";
      card.innerHTML = `
        <div class="card-image"></div>
        <span class="click-card-label">Open Building Map</span>
        <h3 class="editable-text" contenteditable="true" spellcheck="false">${place.name}</h3>
        <p class="card-type editable-text" contenteditable="true" spellcheck="false">${place.type}</p>
        <p class="card-detail editable-text" contenteditable="true" spellcheck="false">${place.detail}</p>
        <button class="inspect-building">Inspect</button>
      `;
      card.querySelector(".card-image").classList.add(`asset-${place.image}`);
      card.querySelector("h3").addEventListener("blur", (event) => {
        place.name = cleanEditText(event.currentTarget.textContent, place.name);
        event.currentTarget.textContent = place.name;
        saveCampaign();
        if (!townMap.classList.contains("hidden")) enterTownMap(selectedLocationKey);
      });
      card.querySelector(".card-type").addEventListener("blur", (event) => {
        place.type = cleanEditText(event.currentTarget.textContent, place.type);
        event.currentTarget.textContent = place.type;
        saveCampaign();
      });
      card.querySelector(".card-detail").addEventListener("blur", (event) => {
        place.detail = cleanEditText(event.currentTarget.textContent, place.detail);
        event.currentTarget.textContent = place.detail;
        saveCampaign();
      });
      card.addEventListener("click", (event) => {
        if (event.target.closest(".editable-text, .inspect-building")) return;
        openBuildingFromPanel(location.cards[index]);
      });
      card.querySelector(".inspect-building").addEventListener("click", (event) => {
        event.stopPropagation();
        openBuildingFromPanel(location.cards[index]);
      });
      cardsContainer.appendChild(card);
    });
    return;
  }

  if (tab === "npcs") {
    const localNpcs = customNpcs.filter((npc) => npc.location.toLowerCase().includes(location.name.toLowerCase()));
    const displayNpcs = localNpcs.length ? localNpcs : customNpcs.slice(0, 5);
    displayNpcs.forEach((npc) => {
      cardsContainer.appendChild(makeMiniCard(npc.name, `${npc.race} ${npc.npcClass}`, `${npc.role}. AC ${npc.ac}, HP ${npc.hp}. ${npc.details}`, "NPC Sheet", () => openNpcSheet(npc), "elder"));
    });
    if (!displayNpcs.length) cardsContainer.appendChild(makeMiniCard("No NPCs Yet", location.name, "Generate or add NPCs from the NPC workspace.", "Open NPCs", () => activateTopSection("npcs"), "elf"));
    return;
  }

  if (tab === "quests") {
    const questCards = sectionContent.quests.cards.slice(0, 5);
    questCards.forEach(([title, detail]) => {
      cardsContainer.appendChild(makeMiniCard(title, location.danger, detail, "Open Quests", () => activateTopSection("quests"), "shrine"));
    });
    return;
  }

  if (tab === "shops") {
    selectedBottomTab = "locations";
    renderLocationPanel("locations");
  }
}

function seedQuestHook() {
  const location = locations[selectedLocationKey];
  const title = `${location.name}: ${location.notable}`;
  const detail = location.rumor;
  sectionContent.quests.cards.unshift([title, detail]);
  saveCampaign();
  activateTopSection("quests");
  showToast(`Quest hook added from ${location.name}.`);
}

function renderSceneContext() {
  const container = document.getElementById("sceneContext");
  if (!container) return;
  const location = locations[selectedLocationKey];
  container.innerHTML = `
    <div><strong>Danger</strong><span>${location.danger}</span></div>
    <div><strong>Faction</strong><span>${location.faction}</span></div>
    <div><strong>Rumor</strong><span>${location.rumor}</span></div>
    <div><strong>Notable</strong><span>${location.notable}</span></div>
  `;
}

const aiDmModes = [
  ["Story Arc", "Plan the next three beats from the selected location, current rumor, and active danger."],
  ["Rules Help", "Answer a table ruling and suggest a fair check, DC, or consequence."],
  ["Encounter Flow", "Turn the current scene into social, exploration, or combat pressure."],
  ["Session Recap", "Summarize what happened and create follow-up hooks."]
];

function renderGeneratedInbox(container = document.getElementById("sectionGrid")) {
  const list = document.getElementById("generatedInboxList");
  if (!list) return;
  list.innerHTML = "";
  if (!generatedInbox.length) {
    list.innerHTML = `<p class="empty-sheet">No generated content waiting. AI DM and future map or NPC tools will send drafts here for review.</p>`;
    return;
  }
  generatedInbox.forEach((item) => {
    const card = document.createElement("article");
    card.className = "inbox-card";
    card.innerHTML = `
      <div>
        <strong>${item.title}</strong>
        <span>${item.source} / ${item.kind}</span>
        <p>${item.summary}</p>
      </div>
      <div class="review-actions">
        <button class="brass-button" data-action="accept">Add</button>
        <button class="brass-button" data-action="regen">Regenerate</button>
        <button class="brass-button danger-button" data-action="discard">Discard</button>
      </div>
    `;
    card.querySelector('[data-action="accept"]').addEventListener("click", () => {
      acceptGeneratedContent(item);
      generatedInbox.splice(generatedInbox.findIndex((entry) => entry.id === item.id), 1);
      saveCampaign();
      renderCampaignLibrary(container);
    });
    card.querySelector('[data-action="regen"]').addEventListener("click", () => {
      item.summary = `${item.summary} Variant: adds a stronger tie to ${locations[selectedLocationKey].faction}.`;
      saveCampaign();
      renderCampaignLibrary(container);
      showToast(`${item.title} regenerated.`);
    });
    card.querySelector('[data-action="discard"]').addEventListener("click", () => {
      generatedInbox.splice(generatedInbox.findIndex((entry) => entry.id === item.id), 1);
      saveCampaign();
      renderCampaignLibrary(container);
      showToast(`${item.title} discarded.`);
    });
    list.appendChild(card);
  });
}

function acceptGeneratedContent(item) {
  const location = locations[item.payload?.locationKey || selectedLocationKey] || locations[selectedLocationKey];
  if (item.kind === "npc") {
    const npc = createNpc({
      name: item.title,
      role: "Generated campaign NPC",
      race: randomNpcRace(),
      npcClass: randomNpcClass("generated"),
      location: location.name,
      details: item.summary
    });
    customNpcs.unshift(npc);
    campaignLinks.unshift({ id: `link-${Date.now()}`, fromType: "NPC", fromName: npc.name, toType: "Location", toName: location.name, note: "Accepted from generated inbox." });
    showToast(`${npc.name} added to NPCs.`);
  }

  if (item.kind === "quest") {
    sectionContent.quests.cards.unshift([item.title, item.summary]);
    campaignLinks.unshift({ id: `link-${Date.now()}`, fromType: "Quest", fromName: item.title, toType: "Location", toName: location.name, note: "Generated hook accepted." });
    showToast(`${item.title} added to Quests.`);
  }

  if (item.kind === "scene") {
    location.scene = `${location.scene} ${item.summary}`;
    campaignLinks.unshift({ id: `link-${Date.now()}`, fromType: "Scene", fromName: item.title, toType: "Location", toName: location.name, note: "Scene beat added to current location." });
    updateLocation(selectedLocationKey);
    showToast(`${item.title} added to Current Scene.`);
  }

  if (item.kind === "building-map" || item.kind === "town-map") {
    location.cards.unshift({
      name: item.title,
      type: item.kind === "town-map" ? "Generated Town Map" : "Generated Building Map",
      image: item.kind === "town-map" ? "keep" : "mill",
      detail: item.summary,
      hook: `Generated from ${item.source}.`
    });
    campaignLinks.unshift({ id: `link-${Date.now()}`, fromType: "Map", fromName: item.title, toType: "Location", toName: location.name, note: "Map package accepted." });
    updateLocation(selectedLocationKey);
    showToast(`${item.title} added to ${location.name}.`);
  }

  if (item.kind === "character") {
    sectionContent.lore.cards.unshift([item.title, item.summary]);
    showToast(`${item.title} added to campaign notes.`);
  }

  if (item.kind === "item") {
    sectionContent.items.cards.unshift([item.title, item.summary]);
    showToast(`${item.title} added to Library shop stock.`);
  }
}

function renderCampaignLibrary(container) {
  container.className = "section-grid library-workspace";
  const locationOptions = Object.values(locations).map((location) => `<option>${location.name}</option>`).join("");
  const npcOptions = customNpcs.map((npc) => `<option>${npc.name}</option>`).join("");
  const questOptions = sectionContent.quests.cards.map(([title]) => `<option>${title}</option>`).join("");
  container.innerHTML = `
    <section class="library-column section-card">
      <h3>Campaign Library</h3>
      <div class="library-counts">
        <div><strong>${Object.keys(locations).length}</strong><span>Maps / Locations</span></div>
        <div><strong>${playerCharacters.length}</strong><span>Party Members</span></div>
        <div><strong>${customNpcs.length}</strong><span>NPCs</span></div>
        <div><strong>${sectionContent.quests.cards.length}</strong><span>Quests</span></div>
        <div><strong>${campaignShops.length}</strong><span>Shops</span></div>
        <div><strong>${sectionContent.items.cards.length}</strong><span>Shop Stock</span></div>
        <div><strong>${campaignNotes.length}</strong><span>Notes</span></div>
      </div>
    </section>
    <section class="library-column section-card">
      <h3>Content Index</h3>
      <div class="library-list" id="libraryList"></div>
    </section>
    <section class="library-column section-card">
      <h3>Generated Inbox</h3>
      <p>Incoming generated maps, NPCs, quests, and scenes wait here until you add or discard them.</p>
      <div class="inbox-list" id="generatedInboxList"></div>
    </section>
    <section class="library-column section-card">
      <h3>Link Things Together</h3>
      <label>NPC<select id="linkNpcSelect">${npcOptions}</select></label>
      <label>Location<select id="linkLocationSelect">${locationOptions}</select></label>
      <label>Quest<select id="linkQuestSelect">${questOptions}</select></label>
      <label>Note<textarea id="linkNoteInput" placeholder="Why these things connect"></textarea></label>
      <button class="brass-button" id="saveCampaignLink">Save Link</button>
    </section>
    <section class="library-column section-card">
      <h3>Connections</h3>
      <div class="link-list" id="campaignLinkList"></div>
    </section>
  `;

  const libraryList = document.getElementById("libraryList");
  [
    ["Locations", Object.values(locations).map((location) => `${location.name} - ${location.type}`)],
    ["Party", playerCharacters.map((character) => `${character.name} - Level ${character.level} ${character.race} ${character.characterClass}`)],
    ["NPCs", customNpcs.map((npc) => `${npc.name} - ${npc.location}`)],
    ["Quests", sectionContent.quests.cards.map(([title]) => title)],
    ["Shops", campaignShops.map((shop) => `${shop.name} - ${locations[shop.locationKey]?.name || "Unknown Town"}`)],
    ["Shop Stock", sectionContent.items.cards.map(([title]) => title)],
    ["Notes", campaignNotes.map((note) => note.title)]
  ].forEach(([title, rows]) => {
    const group = document.createElement("article");
    group.className = "library-group";
    group.innerHTML = `<strong>${title}</strong>${rows.slice(0, 8).map((row) => `<span>${row}</span>`).join("")}`;
    libraryList.appendChild(group);
  });

  document.getElementById("saveCampaignLink").addEventListener("click", () => {
    const npc = document.getElementById("linkNpcSelect").value || "Unknown NPC";
    const location = document.getElementById("linkLocationSelect").value || locations[selectedLocationKey].name;
    const quest = document.getElementById("linkQuestSelect").value || "Open Quest";
    const note = document.getElementById("linkNoteInput").value.trim() || "Linked from campaign library.";
    campaignLinks.unshift({ id: `link-${Date.now()}`, fromType: "NPC", fromName: npc, toType: "Quest / Location", toName: `${quest} at ${location}`, note });
    saveCampaign();
    renderCampaignLibrary(container);
    showToast("Campaign link saved.");
  });

  renderCampaignLinks();
  renderGeneratedInbox(container);
}

function renderMapManager(container) {
  container.className = "section-grid map-manager-workspace";
  const locationOptions = Object.entries(locations)
    .map(([key, location]) => `<option value="${key}" ${key === selectedLocationKey ? "selected" : ""}>${escapeHtml(location.name)}</option>`)
    .join("");
  container.innerHTML = `
    <section class="section-card map-manager-card">
      <h3>World Map Manager</h3>
      <p>Upload a world map image, rename it, and keep notes for how this map should connect to your towns and generated map tools.</p>
      <label>Map Name<textarea class="settings-input" rows="1" wrap="soft" id="mapTitleInput">${escapeHtml(mapSettings.title)}</textarea></label>
      <label>Map Notes<textarea class="settings-input" rows="5" wrap="soft" id="mapNotesInput">${escapeHtml(mapSettings.notes)}</textarea></label>
      <label class="map-upload-control">Upload World Map<input id="worldMapUpload" type="file" accept="image/png,image/jpeg,image/webp,image/gif" /></label>
      <div class="map-manager-actions">
        <button class="brass-button" id="saveMapSettings">Save Map Info</button>
        <button class="brass-button" id="resetWorldMap">Reset Default Map</button>
        <button class="brass-button" id="viewWorldMap">View World Map</button>
      </div>
    </section>
    <section class="section-card map-preview-card">
      <h3>Current World Map</h3>
      <div class="map-preview-frame">
        <img id="worldMapPreview" src="${escapeHtml(mapSettings.imageSrc)}" alt="Current world map preview" />
      </div>
      <p class="map-upload-hint">Uploaded maps are stored in this browser as campaign prototype data. Use PNG, JPG, WebP, or GIF for now.</p>
    </section>
    <section class="section-card">
      <h3>Map Builder Hand-Off</h3>
      <p>When your custom/AI map builder is ready, this tab is the plug-in point: send it a generated image, region name, marker list, or exported map package, then refresh the world map here.</p>
    </section>
    <section class="section-card shop-manager-card">
      <h3>Add Custom Shop</h3>
      <p>Create a shop inside a town. Saving it adds a shop building map, a custom NPC shopkeeper, and priced inventory.</p>
      <label>Town<select id="shopLocationInput">${locationOptions}</select></label>
      <label>Shop Name<input id="shopNameInput" placeholder="Example: Moth & Mortar" /></label>
      <label>Shop Type<input id="shopTypeInput" placeholder="General Store, Smithy, Apothecary..." /></label>
      <label>Shopkeeper<input id="shopKeeperInput" placeholder="Example: Ilo Vane" /></label>
      <label>Keeper Race<input id="shopKeeperRaceInput" placeholder="Optional: Human, Dwarf, Elf..." /></label>
      <label>Inventory And Cost<textarea id="shopInventoryInput" rows="6" wrap="soft" placeholder="Healing Potion - 50 gp&#10;Rope, 50 ft - 1 gp&#10;Silvered Dagger - 102 gp"></textarea></label>
      <label>Shop Hook<textarea id="shopHookInput" rows="3" wrap="soft" placeholder="A suspicious receipt, shortage, rumor, custom order, or debt."></textarea></label>
      <div class="map-manager-actions">
        <button class="brass-button" id="saveCustomShop">Save Shop</button>
        <button class="brass-button" id="generateShopDraft">Generate Draft</button>
      </div>
    </section>
    <section class="section-card shop-list-card">
      <h3>Town Shops</h3>
      <div class="shop-list" id="campaignShopList"></div>
    </section>
  `;

  const preview = document.getElementById("worldMapPreview");
  const applyMapInfo = () => {
    mapSettings.title = cleanEditText(document.getElementById("mapTitleInput").value, "World Map");
    mapSettings.notes = document.getElementById("mapNotesInput").value.trim() || "No map notes yet.";
    saveCampaign();
  };

  document.getElementById("saveMapSettings").addEventListener("click", () => {
    applyMapInfo();
    showToast("World map info saved.");
  });

  document.getElementById("resetWorldMap").addEventListener("click", () => {
    mapSettings.imageSrc = "assets/world-map.png";
    preview.src = mapSettings.imageSrc;
    if (reloadWorldMapImage) reloadWorldMapImage();
    applyMapInfo();
    showToast("Default world map restored.");
  });

  document.getElementById("viewWorldMap").addEventListener("click", () => activateTopSection("world"));

  document.getElementById("worldMapUpload").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Choose an image file for the world map.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      mapSettings.imageSrc = String(reader.result);
      preview.src = mapSettings.imageSrc;
      applyMapInfo();
      if (reloadWorldMapImage) reloadWorldMapImage();
      showToast(`${file.name} uploaded as the world map.`);
    };
    reader.readAsDataURL(file);
  });

  const renderShops = () => {
    const list = document.getElementById("campaignShopList");
    if (!list) return;
    list.innerHTML = "";
    if (!campaignShops.length) {
      list.innerHTML = `<p class="empty-sheet">No custom shops yet.</p>`;
      return;
    }
    campaignShops.forEach((shop) => {
      const location = locations[shop.locationKey] || locations[selectedLocationKey];
      const item = document.createElement("article");
      item.className = "shop-card";
      item.innerHTML = `
        <strong>${escapeHtml(shop.name)}</strong>
        <span>${escapeHtml(shop.type)} in ${escapeHtml(location.name)}</span>
        <p>Keeper: ${escapeHtml(shop.keeper)}</p>
        <ul>${shop.items.map((entry) => `<li>${escapeHtml(entry.name)} <em>${escapeHtml(entry.cost)}</em></li>`).join("")}</ul>
        <div class="map-manager-actions">
          <button class="brass-button" data-action="open" data-shop-id="${shop.id}">Open Mini Map</button>
          <button class="brass-button danger-button" data-action="delete" data-shop-id="${shop.id}">Delete</button>
        </div>
      `;
      list.appendChild(item);
    });
    list.querySelectorAll("[data-action='open']").forEach((button) => {
      button.addEventListener("click", () => {
        const shop = campaignShops.find((entry) => entry.id === button.dataset.shopId);
        if (!shop) return;
        selectedLocationKey = shop.locationKey;
        const place = locations[shop.locationKey]?.cards.find((card) => card.shopId === shop.id);
        openBuildingFromPanel(place);
      });
    });
    list.querySelectorAll("[data-action='delete']").forEach((button) => {
      button.addEventListener("click", () => {
        const index = campaignShops.findIndex((entry) => entry.id === button.dataset.shopId);
        if (index < 0) return;
        const [removed] = campaignShops.splice(index, 1);
        const location = locations[removed.locationKey];
        if (location) location.cards = location.cards.filter((card) => card.shopId !== removed.id);
        saveCampaign();
        renderMapManager(container);
        updateLocation(selectedLocationKey);
        showToast(`${removed.name} deleted.`);
      });
    });
  };

  const fillShopDraft = () => {
    const template = shops[Math.floor(Math.random() * shops.length)];
    document.getElementById("shopNameInput").value = template.name;
    document.getElementById("shopTypeInput").value = template.inventory.includes("blades") ? "Smithy" : template.inventory.includes("draughts") ? "Apothecary" : "General Store";
    document.getElementById("shopKeeperInput").value = template.keeper;
    document.getElementById("shopInventoryInput").value = [
      ...template.inventory.split(",").map((item, index) => `${cleanEditText(item)} - ${index ? "5 gp" : "25 gp"}`),
      `${template.special} - special order`,
    ].join("\n");
    document.getElementById("shopHookInput").value = template.price;
  };

  document.getElementById("generateShopDraft").addEventListener("click", () => {
    fillShopDraft();
    showToast("Shop draft generated.");
  });

  document.getElementById("saveCustomShop").addEventListener("click", () => {
    const locationKey = document.getElementById("shopLocationInput").value || selectedLocationKey;
    const location = locations[locationKey] || locations[selectedLocationKey];
    const shop = {
      id: `shop-${Date.now()}`,
      locationKey,
      name: cleanEditText(document.getElementById("shopNameInput").value, "Unnamed Shop"),
      type: cleanEditText(document.getElementById("shopTypeInput").value, "Shop"),
      keeper: cleanEditText(document.getElementById("shopKeeperInput").value, "Unnamed Shopkeeper"),
      keeperRace: cleanEditText(document.getElementById("shopKeeperRaceInput").value, "Human"),
      items: parseShopInventory(document.getElementById("shopInventoryInput").value),
      hook: document.getElementById("shopHookInput").value.trim() || `A useful lead waits behind the counter in ${location.name}.`
    };
    if (!shop.items.length) shop.items = parseShopInventory("Adventuring Gear - 10 gp\nLocal Rumor - favor");
    const keeper = addShopToTown(shop);
    campaignShops.unshift(shop);
    selectedLocationKey = locationKey;
    saveCampaign();
    updateLocation(selectedLocationKey);
    renderMapManager(container);
    showToast(`${shop.name} added with ${keeper.name} as shopkeeper.`);
  });

  renderShops();
}

function renderCampaignLinks() {
  const list = document.getElementById("campaignLinkList");
  if (!list) return;
  list.innerHTML = "";
  if (!campaignLinks.length) {
    list.innerHTML = `<p class="empty-sheet">No links saved yet.</p>`;
    return;
  }
  campaignLinks.forEach((link) => {
    const item = document.createElement("article");
    item.className = "link-card";
    item.innerHTML = `
      <strong>${link.fromName}</strong>
      <span>${link.fromType} -> ${link.toType}: ${link.toName}</span>
      <p>${link.note}</p>
      <button class="npc-delete">Delete</button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      campaignLinks.splice(campaignLinks.findIndex((entry) => entry.id === link.id), 1);
      saveCampaign();
      renderCampaignLinks();
    });
    list.appendChild(item);
  });
}

function renderAiDmWorkspace(container) {
  const location = locations[selectedLocationKey];
  container.className = "section-grid ai-dm-workspace";
  container.innerHTML = `
    <section class="ai-dm-main section-card">
      <h3>AI DM Console</h3>
      <p>Use this as the running assistant for scenes, rulings, outcomes, and story pressure.</p>
      <label>Prompt<textarea id="aiDmPrompt" placeholder="Ask for a ruling, scene beat, encounter twist, recap, or next step."></textarea></label>
      <div class="ai-dm-actions" id="aiDmActions"></div>
      <button class="brass-button" id="runAiDm">Ask AI DM</button>
    </section>
    <section class="ai-dm-main section-card">
      <h3>Current Context</h3>
      <div class="scene-context ai-dm-context">
        <div><strong>Location</strong><span>${location.name}</span></div>
        <div><strong>Danger</strong><span>${location.danger}</span></div>
        <div><strong>Faction</strong><span>${location.faction}</span></div>
        <div><strong>Rumor</strong><span>${location.rumor}</span></div>
      </div>
    </section>
    <section class="ai-dm-main section-card ai-dm-output-panel">
      <h3>Assistant Output</h3>
      <div class="tool-output ai-dm-output" id="aiDmOutput">No AI DM response yet.</div>
      <div class="review-actions">
        <button class="brass-button" id="saveAiDmScene">Save To Scene</button>
        <button class="brass-button" id="saveAiDmQuest">Save As Quest</button>
        <button class="brass-button" id="sendAiDmInbox">Send To Inbox</button>
      </div>
    </section>
  `;

  const actions = document.getElementById("aiDmActions");
  aiDmModes.forEach(([title, detail]) => {
    const button = document.createElement("button");
    button.className = "brass-button";
    button.textContent = title;
    button.title = detail;
    button.addEventListener("click", () => {
      document.getElementById("aiDmPrompt").value = `${title}: ${detail}`;
    });
    actions.appendChild(button);
  });

  const makeOutput = () => {
    const prompt = document.getElementById("aiDmPrompt").value.trim() || "Create the next useful DM beat.";
    const output = `
      <strong>${location.name} DM response</strong><br>
      <span>${prompt}</span><br>
      <span>Suggested move: put pressure on ${location.faction}, reveal part of this rumor, and ask for a DC 13 check.</span><br>
      <em>Complication: ${location.rumor}</em>
    `;
    document.getElementById("aiDmOutput").innerHTML = output;
    return output;
  };

  document.getElementById("runAiDm").addEventListener("click", () => {
    makeOutput();
    showToast("AI DM response drafted.");
  });

  document.getElementById("saveAiDmScene").addEventListener("click", () => {
    const text = document.getElementById("aiDmOutput").textContent.trim();
    if (!text || text === "No AI DM response yet.") makeOutput();
    location.scene = `${location.scene} ${document.getElementById("aiDmOutput").textContent.trim()}`;
    updateLocation(selectedLocationKey);
    saveCampaign();
    showToast("AI DM response saved to current scene.");
  });

  document.getElementById("saveAiDmQuest").addEventListener("click", () => {
    const text = document.getElementById("aiDmOutput").textContent.trim();
    if (!text || text === "No AI DM response yet.") makeOutput();
    sectionContent.quests.cards.unshift([`${location.name} AI DM Hook`, document.getElementById("aiDmOutput").textContent.trim()]);
    saveCampaign();
    showToast("AI DM response saved as a quest hook.");
  });

  document.getElementById("sendAiDmInbox").addEventListener("click", () => {
    const text = document.getElementById("aiDmOutput").textContent.trim();
    if (!text || text === "No AI DM response yet.") makeOutput();
    window.receiveGeneratedContent({
      kind: "scene",
      source: "AI DM",
      title: `${location.name} AI DM Beat`,
      summary: document.getElementById("aiDmOutput").textContent.trim()
    });
  });
}

window.receiveGeneratedContent = (content) => {
  const item = {
    id: content.id || `gen-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    kind: content.kind || "scene",
    source: content.source || "External Tool",
    title: content.title || "Untitled Generated Content",
    summary: content.summary || content.detail || "No summary provided.",
    payload: {
      locationKey: selectedLocationKey,
      locationName: locations[selectedLocationKey].name,
      ...content.payload
    }
  };
  generatedInbox.unshift(item);
  saveCampaign();
  if (currentSection === "library") renderCampaignLibrary(document.getElementById("sectionGrid"));
  showToast(`${item.title} received in the generated inbox.`);
  return item.id;
};

function setNavigationState(section) {
  const navMap = {
    world: "world",
    maps: "maps",
    lore: "world",
    quests: "dungeons",
    party: "party",
    npcs: "npcs",
    notes: "library",
    scene: "tools",
    aidm: "tools",
    library: "library",
    settings: ""
  };
  const activeView = navMap[section] || "world";
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === activeView);
  });
}

function openWorldPanel(tab = "overview") {
  activateTopSection("world");
  selectedBottomTab = tab;
  document.querySelectorAll(".subtabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
  renderLocationPanel(tab);
  syncEditMode();
}

function setupFlowChrome() {
  const tabs = document.querySelector(".tabs");
  document.querySelectorAll('[data-section="hub"], [data-section="library"], [data-section="items"]').forEach((tab) => tab.remove());
  if (tabs && !document.querySelector('[data-section="maps"]')) {
    const button = document.createElement("button");
    button.className = "tab";
    button.dataset.section = "maps";
    button.textContent = "Maps";
    button.addEventListener("click", () => activateTopSection("maps"));
    const loreTab = document.querySelector('[data-section="lore"]');
    tabs.insertBefore(button, loreTab || tabs.children[1] || null);
  }
  if (tabs && !document.querySelector('[data-section="aidm"]')) {
    const button = document.createElement("button");
    button.className = "tab";
    button.dataset.section = "aidm";
    button.textContent = "AI DM";
    button.addEventListener("click", () => activateTopSection("aidm"));
    tabs.appendChild(button);
  }
  const sceneTab = document.querySelector('[data-section="scene"]');
  if (sceneTab) sceneTab.textContent = "Scene";

  const sectionHeader = document.querySelector(".section-header");
  if (sectionHeader && !document.getElementById("closeSection")) {
    const closeButton = document.createElement("button");
    closeButton.id = "closeSection";
    closeButton.className = "map-back-button section-close";
    closeButton.textContent = "World Map";
    closeButton.addEventListener("click", () => activateTopSection("world"));
    sectionHeader.appendChild(closeButton);
  }

  const sceneSummary = document.getElementById("sceneSummary");
  if (sceneSummary && !document.getElementById("sceneContext")) {
    const context = document.createElement("div");
    context.id = "sceneContext";
    context.className = "scene-context";
    sceneSummary.insertAdjacentElement("afterend", context);
  }

  const quickActions = Array.from(document.querySelectorAll(".quick-actions button"));
  [
    ["aidm", "AI DM"],
    ["scene", "Current Scene"],
    ["quest", "New Quest Hook"],
    ["notes", "Custom Notes"]
  ].forEach(([action, label], index) => {
    if (!quickActions[index]) return;
    quickActions[index].dataset.action = action;
    quickActions[index].textContent = label;
  });

  const sidebarLabels = {
    world: ["W", "World Map"],
    maps: ["M", "Maps"],
    dungeons: ["Q", "Quests"],
    party: ["P", "Party"],
    npcs: ["N", "NPCs"],
    tools: ["D", "AI DM"],
    library: ["B", "Library"]
  };

  const nav = document.querySelector(".main-nav");
  if (nav) {
    nav.querySelector('.nav-item[data-view="locations"]')?.remove();
    [
      ["maps", "<span>M</span>Maps"],
      ["npcs", "<span>N</span>NPCs"],
      ["library", "<span>B</span>Library"]
    ].forEach(([view, label]) => {
      if (document.querySelector(`.nav-item[data-view="${view}"]`)) return;
      const button = document.createElement("button");
      button.className = "nav-item";
      button.dataset.view = view;
      button.innerHTML = label;
      nav.appendChild(button);
    });
    ["world", "maps", "dungeons", "party", "npcs", "tools", "library"].forEach((view) => {
      const button = nav.querySelector(`.nav-item[data-view="${view}"]`);
      if (button) nav.appendChild(button);
    });
  }

  document.querySelectorAll(".nav-item").forEach((item) => {
    const label = sidebarLabels[item.dataset.view];
    if (!label) return;
    item.querySelector("span").textContent = label[0];
    item.childNodes[item.childNodes.length - 1].textContent = label[1];
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    if (item.dataset.flowReady === "true") return;
    item.dataset.flowReady = "true";
    item.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((navItem) => navItem.classList.remove("active"));
      item.classList.add("active");
      const view = item.dataset.view;
      if (view === "world") activateTopSection("world");
      if (view === "maps") activateTopSection("maps");
      if (view === "dungeons" || view === "quests") activateTopSection("quests");
      if (view === "party") activateTopSection("party");
      if (view === "npcs") activateTopSection("npcs");
      if (view === "tools") activateTopSection("aidm");
      if (view === "library") activateTopSection("library");
    });
  });

  const settings = document.querySelector(".settings-button");
  if (settings) {
    settings.querySelector("span").textContent = "*";
    settings.childNodes[settings.childNodes.length - 1].textContent = "Campaign Settings";
    settings.dataset.flowReady = "true";
    settings.addEventListener("click", () => {
      activateTopSection("settings");
      showToast("Campaign Settings opened.");
    });
  }
}

function applyMapZoom() {
  mapFrame.classList.toggle("map-zoom-1", mapZoomLevel === 1);
  mapFrame.classList.toggle("map-zoom-2", mapZoomLevel === 2);
}

function setupMapControls() {
  const zoomIn = document.querySelector(".map-control.zoom-in");
  const zoomOut = document.querySelector(".map-control.zoom-out");
  const focus = document.querySelector(".map-control.focus");
  const layers = document.querySelector(".map-control.layers");

  zoomIn?.addEventListener("click", (event) => {
    event.stopPropagation();
    mapZoomLevel = Math.min(2, mapZoomLevel + 1);
    applyMapZoom();
    showToast(mapZoomLevel ? `Map zoom ${mapZoomLevel + 1}x.` : "Map zoom reset.");
  });

  zoomOut?.addEventListener("click", (event) => {
    event.stopPropagation();
    mapZoomLevel = Math.max(0, mapZoomLevel - 1);
    applyMapZoom();
    showToast(mapZoomLevel ? `Map zoom ${mapZoomLevel + 1}x.` : "Map zoom reset.");
  });

  focus?.addEventListener("click", (event) => {
    event.stopPropagation();
    updateLocation(selectedLocationKey);
    showToast(`${locations[selectedLocationKey].name} focused.`);
  });

  layers?.addEventListener("click", (event) => {
    event.stopPropagation();
    mapDetailsVisible = !mapDetailsVisible;
    mapOverlay.classList.toggle("show-details", mapDetailsVisible);
    layers.classList.toggle("active", mapDetailsVisible);
    showToast(mapDetailsVisible ? "Map details shown." : "Map details hidden.");
  });
}

[
  ["popoverTitle", "name"],
  ["popoverType", "type"],
  ["popoverDescription", "description"],
  ["popoverPopulation", "population"],
  ["popoverGovernment", "government"],
  ["popoverNotable", "notable"],
  ["popoverDanger", "danger"],
  ["popoverFaction", "faction"],
  ["popoverRumor", "rumor"]
].forEach(([id, field]) => {
  makeEditable(document.getElementById(id), (value) => {
    locations[selectedLocationKey][field] = value;
    refreshLocationLabels();
  }, field === "description" || field === "rumor");
});

makeEditable(document.getElementById("selectedName"), (value) => {
  locations[selectedLocationKey].name = value;
  refreshLocationLabels();
});

makeEditable(document.getElementById("selectedSubtitle"), (value) => {
  locations[selectedLocationKey].mood = value;
  updateLocation(selectedLocationKey);
}, true);

makeEditable(document.getElementById("sceneSummary"), (value) => {
  locations[selectedLocationKey].scene = value;
}, true);

makeEditable(document.getElementById("townMapName"), (value) => {
  locations[selectedLocationKey].name = value;
  refreshLocationLabels();
});

makeEditable(document.getElementById("townMapSubtitle"), (value) => {
  locations[selectedLocationKey].mood = value;
  updateLocation(selectedLocationKey);
}, true);

function enterTownMap(key) {
  activateTopSection("world", false);
  updateLocation(key);
  const location = locations[key];
  locationPopover.classList.add("hidden");
  document.getElementById("townMapName").textContent = location.name;
  document.getElementById("townMapSubtitle").textContent = `${location.type} - ${location.mood}`;

  document.querySelectorAll(".town-node").forEach((node, index) => {
    const place = location.cards[index];
    node.querySelector("strong").textContent = place ? place.name.split(" ").slice(0, 2).join(" ") : "Location";
  });

  mapFrame.classList.add("zooming");
  townMap.classList.remove("hidden");
  townMap.classList.remove("revealed");
  requestAnimationFrame(() => townMap.classList.add("revealed"));
  showToast(`Entering ${location.name}. Click buildings to inspect key places.`);
}

function leaveTownMap() {
  mapFrame.classList.remove("zooming");
  buildingMap.classList.add("hidden");
  townMap.classList.add("hidden");
  townMap.classList.remove("revealed");
  updateLocation(selectedLocationKey);
  locationPopover.classList.add("hidden");
}

function openBuildingMap(place) {
  if (!place) return;
  selectedBuildingIndex = locations[selectedLocationKey].cards.indexOf(place);
  document.getElementById("buildingMapName").textContent = place.name;
  document.getElementById("buildingMapType").textContent = place.type;
  document.getElementById("buildingNoteTitle").textContent = place.name;
  document.getElementById("buildingNoteDetail").textContent = place.detail;
  document.getElementById("buildingNoteHook").textContent = place.hook;
  buildingMap.classList.remove("hidden");
  buildingMap.classList.remove("revealed");
  requestAnimationFrame(() => buildingMap.classList.add("revealed"));
  showToast(`Inspecting ${place.name}. Click rooms for details.`);
}

function closeBuildingMap() {
  buildingMap.classList.add("hidden");
  buildingMap.classList.remove("revealed");
}

[
  ["buildingMapName", "name"],
  ["buildingMapType", "type"],
  ["buildingNoteTitle", "name"],
  ["buildingNoteDetail", "detail"],
  ["buildingNoteHook", "hook"]
].forEach(([id, field]) => {
  makeEditable(document.getElementById(id), (value) => {
    const place = locations[selectedLocationKey].cards[selectedBuildingIndex];
    if (!place) return;
    place[field] = value;
    if (field === "name") {
      document.getElementById("buildingMapName").textContent = value;
      document.getElementById("buildingNoteTitle").textContent = value;
    }
    updateLocation(selectedLocationKey);
  }, ["detail", "hook"].includes(field));
});

function activateTopSection(section, announce = true) {
  currentSection = section;
  setNavigationState(section);
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.section === section);
  });
  document.getElementById("sceneTabWorkspace").classList.add("hidden");
  document.getElementById("sectionGrid").classList.remove("hidden");

  if (section === "world") {
    sectionOverlay.classList.add("hidden");
    sectionOverlay.classList.remove("revealed");
    if (announce && !townMap.classList.contains("hidden")) {
      leaveTownMap();
    }
    if (announce) showToast("World map selected.");
    return;
  }

  townMap.classList.add("hidden");
  mapFrame.classList.remove("zooming");
  locationPopover.classList.add("hidden");
  markerButtons.forEach((button) => button.classList.remove("selected"));

  if (section === "scene") {
    const location = locations[selectedLocationKey];
    document.getElementById("sectionEyebrow").textContent = "Live DM Workspace";
    document.getElementById("sectionTitle").textContent = "Current Scene";
    document.getElementById("selectedSceneName").textContent = location.name;
    document.getElementById("selectedSceneMeta").textContent = `${location.type} - ${location.danger} danger`;
    document.getElementById("sceneSummary").textContent = location.scene;
    renderSceneContext();
    document.getElementById("sectionGrid").classList.add("hidden");
    document.getElementById("sceneTabWorkspace").classList.remove("hidden");
    sectionOverlay.classList.remove("hidden");
    sectionOverlay.classList.remove("revealed");
    requestAnimationFrame(() => sectionOverlay.classList.add("revealed"));
    if (announce) showToast(`Current scene opened for ${location.name}.`);
    syncEditMode();
    return;
  }

  if (section === "aidm") {
    document.getElementById("sectionEyebrow").textContent = "Live Assistant";
    document.getElementById("sectionTitle").textContent = "AI DM";
    const grid = document.getElementById("sectionGrid");
    grid.classList.remove("hidden");
    renderAiDmWorkspace(grid);
    sectionOverlay.classList.remove("hidden");
    sectionOverlay.classList.remove("revealed");
    requestAnimationFrame(() => sectionOverlay.classList.add("revealed"));
    if (announce) showToast("AI DM opened.");
    syncEditMode();
    return;
  }

  if (section === "library") {
    document.getElementById("sectionEyebrow").textContent = "Campaign Content";
    document.getElementById("sectionTitle").textContent = "Library";
    const grid = document.getElementById("sectionGrid");
    grid.classList.remove("hidden");
    renderCampaignLibrary(grid);
    sectionOverlay.classList.remove("hidden");
    sectionOverlay.classList.remove("revealed");
    requestAnimationFrame(() => sectionOverlay.classList.add("revealed"));
    if (announce) showToast("Campaign Library opened.");
    syncEditMode();
    return;
  }

  if (section === "maps") {
    document.getElementById("sectionEyebrow").textContent = "World Atlas";
    document.getElementById("sectionTitle").textContent = "Maps";
    const grid = document.getElementById("sectionGrid");
    grid.classList.remove("hidden");
    renderMapManager(grid);
    sectionOverlay.classList.remove("hidden");
    sectionOverlay.classList.remove("revealed");
    requestAnimationFrame(() => sectionOverlay.classList.add("revealed"));
    if (announce) showToast("Map editor opened.");
    syncEditMode();
    return;
  }

  if (section === "party") {
    document.getElementById("sectionEyebrow").textContent = "Player Characters";
    document.getElementById("sectionTitle").textContent = "Party";
    const grid = document.getElementById("sectionGrid");
    grid.classList.remove("hidden");
    renderPartyWorkspace(grid);
    sectionOverlay.classList.remove("hidden");
    sectionOverlay.classList.remove("revealed");
    requestAnimationFrame(() => sectionOverlay.classList.add("revealed"));
    if (announce) showToast("Party sheets opened.");
    syncEditMode();
    return;
  }

  if (section === "notes") {
    document.getElementById("sectionEyebrow").textContent = "Campaign Notes";
    document.getElementById("sectionTitle").textContent = "Notes";
    const grid = document.getElementById("sectionGrid");
    grid.classList.remove("hidden");
    renderNotesWorkspace(grid);
    sectionOverlay.classList.remove("hidden");
    sectionOverlay.classList.remove("revealed");
    requestAnimationFrame(() => sectionOverlay.classList.add("revealed"));
    if (announce) showToast("Custom notes opened.");
    syncEditMode();
    return;
  }

  if (section === "settings") {
    document.getElementById("sectionEyebrow").textContent = "Campaign";
    document.getElementById("sectionTitle").textContent = "Settings";
    const grid = document.getElementById("sectionGrid");
    grid.classList.remove("hidden");
    renderCampaignSettings(grid);
    sectionOverlay.classList.remove("hidden");
    sectionOverlay.classList.remove("revealed");
    requestAnimationFrame(() => sectionOverlay.classList.add("revealed"));
    syncEditMode();
    return;
  }

  const content = sectionContent[section];
  if (!content) return;
  document.getElementById("sectionEyebrow").textContent = content.eyebrow;
  document.getElementById("sectionTitle").textContent = content.title;
  const grid = document.getElementById("sectionGrid");
  grid.innerHTML = "";
  if (section === "npcs") {
    renderNpcWorkspace(grid);
  } else {
  grid.className = "section-grid";
  content.cards.forEach(([title, text], index) => {
    const card = document.createElement("article");
    card.className = "section-card";
    card.innerHTML = `
      <textarea class="section-card-title" rows="1" wrap="soft" aria-label="${content.title} title">${escapeHtml(title)}</textarea>
      <textarea class="section-card-text" wrap="soft" aria-label="${content.title} details">${escapeHtml(text)}</textarea>
      ${section === "quests" ? '<button class="brass-button danger-button delete-section-card">Delete Quest</button>' : ""}
    `;
    const titleInput = card.querySelector(".section-card-title");
    const textInput = card.querySelector(".section-card-text");
    titleInput.disabled = !editMode;
    textInput.disabled = !editMode;
    titleInput.addEventListener("blur", (event) => {
      content.cards[index][0] = cleanEditText(event.currentTarget.value, content.cards[index][0]);
      event.currentTarget.value = content.cards[index][0];
      saveCampaign();
    });
    textInput.addEventListener("blur", (event) => {
      content.cards[index][1] = event.currentTarget.value.trim() || content.cards[index][1];
      event.currentTarget.value = content.cards[index][1];
      saveCampaign();
    });
    const deleteButton = card.querySelector(".delete-section-card");
    if (deleteButton) {
      deleteButton.addEventListener("click", () => {
        const [removed] = content.cards.splice(index, 1);
        saveCampaign();
        activateTopSection(section, false);
        showToast(`${removed[0]} deleted from quests.`);
      });
    }
    grid.appendChild(card);
  });
  }

  sectionOverlay.classList.remove("hidden");
  sectionOverlay.classList.remove("revealed");
  requestAnimationFrame(() => sectionOverlay.classList.add("revealed"));
  if (announce) showToast(`${content.title} tab opened.`);
  syncEditMode();
}

function buildBasicNpc() {
  const location = locations[selectedLocationKey];
  const firstNames = ["Alden", "Mira", "Corvin", "Elara", "Tobin", "Vessa", "Rowan", "Keth"];
  const lastNames = ["Brack", "Mossvale", "Crowmere", "Dusk", "Vale", "Thorn", "Reed", "Blackwater"];
  const roles = ["tavern informant", "market guard", "wandering priest", "nervous shophand", "retired scout", "dock broker", "local hunter", "minor noble"];
  const traits = ["asks too many questions", "never removes their gloves", "keeps checking the windows", "speaks like every word costs coin", "laughs at the wrong moments", "knows everyone's debts"];
  const goals = ["needs protection tonight", "wants a secret delivered", "is hiding from a faction", "needs proof before acting", "wants the party blamed", "is testing the party"];
  const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  const role = roles[Math.floor(Math.random() * roles.length)];
  const trait = traits[Math.floor(Math.random() * traits.length)];
  const goal = goals[Math.floor(Math.random() * goals.length)];
  return {
    ...createNpc({
      name,
      role: role.replace(/^\w/, (letter) => letter.toUpperCase()),
      location: location.name,
      details: `${trait}. ${goal}. Tied to local rumor: ${location.rumor}`
    })
  };
}

function renderNpcWorkspace(container) {
  container.className = "section-grid npc-workspace";
  container.innerHTML = `
    <section class="npc-editor section-card">
      <h3>Add Custom NPC</h3>
      <label>Name<input id="npcNameInput" placeholder="Example: Ser Caldus Wren" /></label>
      <label>Role<input id="npcRoleInput" placeholder="Example: suspicious innkeeper" /></label>
      <label>Race<input id="npcRaceInput" placeholder="Optional: Human, Elf, Tiefling..." /></label>
      <label>Class<input id="npcClassInput" placeholder="Optional: Fighter, Rogue, Commoner..." /></label>
      <label>Location<input id="npcLocationInput" placeholder="Example: ${locations[selectedLocationKey].name}" /></label>
      <label>Details<textarea id="npcDetailsInput" placeholder="Personality, secret, stats, dialogue, or quest hook"></textarea></label>
      <div class="npc-form-actions">
        <button class="brass-button" id="saveCustomNpc">Save NPC</button>
        <button class="brass-button" id="generateBasicNpc">Generate Basic</button>
      </div>
    </section>

    <section class="npc-generator-panel section-card">
      <h3>Basic Generator</h3>
      <p>Creates a quick NPC tied to the currently selected map location, faction, and rumor.</p>
      <div class="generated-npc-preview" id="generatedNpcPreview">No generated NPC yet.</div>
      <button class="brass-button" id="addGeneratedNpc">Add Generated NPC</button>
    </section>

    <section class="npc-roster section-card">
      <h3>Saved NPCs</h3>
      <div class="npc-list" id="npcList"></div>
    </section>

    <section class="npc-sheet section-card">
      <h3>Character Sheet</h3>
      <div id="npcSheet"></div>
    </section>
  `;

  let generatedNpc = null;
  let selectedNpcId = customNpcs.some((npc) => npc.id === focusedNpcId) ? focusedNpcId : customNpcs[0]?.id || null;
  focusedNpcId = null;

  const renderSheet = (npc) => {
    const sheet = document.getElementById("npcSheet");
    if (!npc) {
      sheet.innerHTML = `<p class="empty-sheet">Select or create an NPC to view their sheet.</p>`;
      return;
    }
    sheet.innerHTML = `
      <div class="sheet-title">
        <strong class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="name">${npc.name}</strong>
        <span>
          <b class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="race">${npc.race}</b>
          <b class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="npcClass">${npc.npcClass}</b>
          <b class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="role">${npc.role}</b>
          <b class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="location">${npc.location}</b>
        </span>
      </div>
      <div class="sheet-core">
        <div><strong class="editable-text" contenteditable="true" spellcheck="false" data-npc-number="ac">${npc.ac}</strong><span>AC</span></div>
        <div><strong class="editable-text" contenteditable="true" spellcheck="false" data-npc-number="hp">${npc.hp}</strong><span>HP</span></div>
        <div><strong class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="speed">${npc.speed}</strong><span>Speed</span></div>
        <div><strong>${npc.proficiency}</strong><span>Prof</span></div>
      </div>
      <div class="stat-grid">
        ${["str", "dex", "con", "int", "wis", "cha"].map((stat) => `
          <div>
            <span>${stat.toUpperCase()}</span>
            <strong class="editable-text" contenteditable="true" spellcheck="false" data-npc-stat="${stat}">${npc.stats[stat]}</strong>
            <em>${formatMod(npc.stats[stat])}</em>
          </div>
        `).join("")}
      </div>
      <dl class="sheet-lines">
        <div><dt>Race / Class</dt><dd>${npc.race} / ${npc.npcClass}</dd></div>
        <div><dt>Saving Throws</dt><dd class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="savingThrows">${npc.savingThrows}</dd></div>
        <div><dt>Skills</dt><dd class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="skills">${npc.skills}</dd></div>
        <div><dt>Traits</dt><dd class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="traits">${npc.traits}</dd></div>
        <div><dt>Actions</dt><dd class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="actions">${npc.actions}</dd></div>
        <div><dt>Notes</dt><dd class="editable-text" contenteditable="true" spellcheck="false" data-npc-field="details">${npc.details}</dd></div>
      </dl>
    `;
    sheet.querySelectorAll("[data-npc-field]").forEach((field) => {
      field.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !["details", "actions", "traits"].includes(field.dataset.npcField)) {
          event.preventDefault();
          field.blur();
        }
      });
      field.addEventListener("blur", () => {
        const key = field.dataset.npcField;
        npc[key] = cleanEditText(field.textContent, npc[key]);
        saveCampaign();
        renderList();
        renderSheet(npc);
      });
    });
    sheet.querySelectorAll("[data-npc-number]").forEach((field) => {
      field.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          field.blur();
        }
      });
      field.addEventListener("blur", () => {
        const key = field.dataset.npcNumber;
        const value = Number.parseInt(field.textContent, 10);
        npc[key] = Number.isFinite(value) ? Math.max(0, Math.min(999, value)) : npc[key];
        saveCampaign();
        renderList();
        renderSheet(npc);
      });
    });
    sheet.querySelectorAll("[data-npc-stat]").forEach((field) => {
      field.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          field.blur();
        }
      });
      field.addEventListener("blur", () => {
        const stat = field.dataset.npcStat;
        const value = Number.parseInt(field.textContent, 10);
        npc.stats[stat] = Number.isFinite(value) ? Math.max(1, Math.min(30, value)) : npc.stats[stat];
        saveCampaign();
        renderSheet(npc);
      });
    });
    syncEditMode();
  };

  const renderList = () => {
    const list = document.getElementById("npcList");
    list.innerHTML = "";
    if (!customNpcs.length) {
      list.innerHTML = `<p class="empty-sheet">No NPCs saved yet.</p>`;
      renderSheet(null);
      return;
    }
    if (!customNpcs.some((npc) => npc.id === selectedNpcId)) selectedNpcId = customNpcs[0].id;
    customNpcs.forEach((npc) => {
      const item = document.createElement("article");
      item.className = "npc-list-item";
      item.classList.toggle("selected", npc.id === selectedNpcId);
      item.innerHTML = `
        <button class="npc-select" data-npc-id="${npc.id}">
          <strong>${npc.name}</strong>
          <span>${npc.race} ${npc.npcClass} - ${npc.role} - ${npc.location}</span>
          <p>AC ${npc.ac}, HP ${npc.hp}. ${npc.details}</p>
        </button>
        <button class="npc-delete" data-npc-id="${npc.id}" title="Delete NPC">Delete</button>
      `;
      list.appendChild(item);
    });
    list.querySelectorAll(".npc-select").forEach((button) => {
      button.addEventListener("click", () => {
        selectedNpcId = button.dataset.npcId;
        renderList();
      });
    });
    list.querySelectorAll(".npc-delete").forEach((button) => {
      button.addEventListener("click", () => {
        const index = customNpcs.findIndex((npc) => npc.id === button.dataset.npcId);
        if (index >= 0) {
          const [removed] = customNpcs.splice(index, 1);
          saveCampaign();
          showToast(`${removed.name} removed from the campaign.`);
          if (selectedNpcId === removed.id) selectedNpcId = customNpcs[0]?.id || null;
          renderList();
        }
      });
    });
    renderSheet(customNpcs.find((npc) => npc.id === selectedNpcId));
  };

  document.getElementById("saveCustomNpc").addEventListener("click", () => {
    const name = document.getElementById("npcNameInput").value.trim();
    const role = document.getElementById("npcRoleInput").value.trim();
    const race = document.getElementById("npcRaceInput").value.trim();
    const npcClass = document.getElementById("npcClassInput").value.trim();
    const location = document.getElementById("npcLocationInput").value.trim() || locations[selectedLocationKey].name;
    const details = document.getElementById("npcDetailsInput").value.trim();
    if (!name || !role) {
      showToast("Add at least a name and role for the custom NPC.");
      return;
    }
    const npc = createNpc({
      name,
      role,
      race,
      npcClass,
      location,
      details: details || "No details yet."
    });
    customNpcs.unshift(npc);
    saveCampaign();
    selectedNpcId = npc.id;
    document.getElementById("npcNameInput").value = "";
    document.getElementById("npcRoleInput").value = "";
    document.getElementById("npcRaceInput").value = "";
    document.getElementById("npcClassInput").value = "";
    document.getElementById("npcDetailsInput").value = "";
    renderList();
    showToast(`${name} added to saved NPCs.`);
  });

  document.getElementById("generateBasicNpc").addEventListener("click", () => {
    generatedNpc = buildBasicNpc();
    document.getElementById("generatedNpcPreview").innerHTML = `
      <strong>${generatedNpc.name}</strong>
      <span>${generatedNpc.race} ${generatedNpc.npcClass} - ${generatedNpc.role} - ${generatedNpc.location}</span>
      <p>AC ${generatedNpc.ac}, HP ${generatedNpc.hp}. ${generatedNpc.details}</p>
    `;
    showToast(`${generatedNpc.name} generated.`);
  });

  document.getElementById("addGeneratedNpc").addEventListener("click", () => {
    if (!generatedNpc) {
      generatedNpc = buildBasicNpc();
    }
    customNpcs.unshift(generatedNpc);
    saveCampaign();
    selectedNpcId = generatedNpc.id;
    document.getElementById("generatedNpcPreview").textContent = "No generated NPC yet.";
    showToast(`${generatedNpc.name} saved to NPCs.`);
    generatedNpc = null;
    renderList();
  });

  renderList();
}

function renderPartyWorkspace(container) {
  container.className = "section-grid party-workspace";
  container.innerHTML = `
    <section class="npc-editor section-card">
      <h3>Create Player Character</h3>
      <p class="creation-step">1. Choose a concept, race, class, and background. 2. Roll ability scores. 3. Save the sheet and edit the details.</p>
      <label>Character Name<input id="pcNameInput" placeholder="Example: Seraphine Vale" /></label>
      <label>Race / Ancestry<input id="pcRaceInput" placeholder="Human, Elf, homebrew..." /></label>
      <label>Class<input id="pcClassInput" placeholder="Fighter, Wizard, homebrew..." /></label>
      <label>Background<input id="pcBackgroundInput" placeholder="Soldier, Acolyte, Outlander..." /></label>
      <label>Level<input id="pcLevelInput" type="number" min="1" max="20" value="1" /></label>
      <div class="stat-builder">
        <div>
          <strong>Ability Scores</strong>
          <span>Roll uses 4d6, drop the lowest die.</span>
        </div>
        <button class="brass-button" id="rollCharacterStats">Roll Stats</button>
        <div class="stat-builder-grid" id="rolledStatsGrid"></div>
      </div>
      <label>Notes<textarea id="pcNotesInput" placeholder="Backstory, bonds, homebrew rules, inventory notes"></textarea></label>
      <div class="npc-form-actions">
        <button class="brass-button" id="savePlayerCharacter">Save Character</button>
        <button class="brass-button" id="generatePlayerCharacter">Generate Basic</button>
      </div>
    </section>

    <section class="npc-roster section-card">
      <h3>Party</h3>
      <div class="npc-list" id="partyList"></div>
    </section>

    <section class="npc-sheet section-card party-sheet-card">
      <h3>Character Sheet</h3>
      <div id="partySheet"></div>
    </section>
  `;

  let selectedCharacterId = playerCharacters[0]?.id || null;
  let rolledStats = rollAbilitySet();

  const renderRolledStats = () => {
    const grid = document.getElementById("rolledStatsGrid");
    grid.innerHTML = ["str", "dex", "con", "int", "wis", "cha"].map((stat) => {
      const roll = rolledStats[stat];
      return `
        <label>
          <span>${stat.toUpperCase()} <em>${roll.rolls.join(", ")} -> ${roll.total}</em></span>
          <input class="rolled-stat-input" data-stat="${stat}" type="number" min="1" max="30" value="${roll.total}" />
        </label>
      `;
    }).join("");
  };

  const getRolledStats = () => {
    const stats = {};
    document.querySelectorAll(".rolled-stat-input").forEach((input) => {
      const value = Number.parseInt(input.value, 10);
      stats[input.dataset.stat] = Number.isFinite(value) ? Math.max(1, Math.min(30, value)) : 10;
    });
    return stats;
  };

  const renderSheet = (character) => {
    const sheet = document.getElementById("partySheet");
    if (!character) {
      sheet.innerHTML = `<p class="empty-sheet">Add a player character to view their sheet.</p>`;
      return;
    }
    sheet.innerHTML = `
      <div class="sheet-title">
        <strong class="editable-text" contenteditable="true" spellcheck="false" data-pc-field="name">${escapeHtml(character.name)}</strong>
        <span>
          <b class="editable-text" contenteditable="true" spellcheck="false" data-pc-field="race">${escapeHtml(character.race)}</b>
          <b class="editable-text" contenteditable="true" spellcheck="false" data-pc-field="characterClass">${escapeHtml(character.characterClass)}</b>
          <b>Level <em class="editable-text" contenteditable="true" spellcheck="false" data-pc-number="level">${character.level}</em></b>
        </span>
      </div>
      <div class="sheet-core">
        <div><strong class="editable-text" contenteditable="true" spellcheck="false" data-pc-number="ac">${character.ac}</strong><span>AC</span></div>
        <div><strong class="editable-text" contenteditable="true" spellcheck="false" data-pc-number="hp">${character.hp}</strong><span>HP</span></div>
        <div><strong class="editable-text" contenteditable="true" spellcheck="false" data-pc-field="speed">${escapeHtml(character.speed)}</strong><span>Speed</span></div>
        <div><strong class="editable-text" contenteditable="true" spellcheck="false" data-pc-field="proficiency">${escapeHtml(character.proficiency)}</strong><span>Prof</span></div>
      </div>
      <div class="stat-grid">
        ${["str", "dex", "con", "int", "wis", "cha"].map((stat) => `
          <div>
            <span>${stat.toUpperCase()}</span>
            <strong class="editable-text" contenteditable="true" spellcheck="false" data-pc-stat="${stat}">${character.stats[stat]}</strong>
            <em>${formatMod(character.stats[stat])}</em>
          </div>
        `).join("")}
      </div>
      <dl class="sheet-details">
        <div><dt>Background</dt><dd class="editable-text" contenteditable="true" spellcheck="false" data-pc-field="background">${escapeHtml(character.background)}</dd></div>
        <div><dt>Skills</dt><dd class="editable-text" contenteditable="true" spellcheck="false" data-pc-field="skills">${escapeHtml(character.skills)}</dd></div>
        <div><dt>Equipment</dt><dd class="editable-text" contenteditable="true" spellcheck="false" data-pc-field="equipment">${escapeHtml(character.equipment)}</dd></div>
        <div><dt>Notes</dt><dd class="editable-text" contenteditable="true" spellcheck="false" data-pc-field="notes">${escapeHtml(character.notes)}</dd></div>
      </dl>
    `;
    sheet.querySelectorAll("[data-pc-field]").forEach((field) => {
      field.addEventListener("blur", () => {
        const key = field.dataset.pcField;
        character[key] = cleanEditText(field.textContent, character[key]);
        saveCampaign();
        renderList();
      });
    });
    sheet.querySelectorAll("[data-pc-number]").forEach((field) => {
      field.addEventListener("blur", () => {
        const key = field.dataset.pcNumber;
        const value = Number.parseInt(field.textContent, 10);
        character[key] = Number.isFinite(value) ? Math.max(1, value) : character[key];
        saveCampaign();
        renderSheet(character);
        renderList();
      });
    });
    sheet.querySelectorAll("[data-pc-stat]").forEach((field) => {
      field.addEventListener("blur", () => {
        const stat = field.dataset.pcStat;
        const value = Number.parseInt(field.textContent, 10);
        character.stats[stat] = Number.isFinite(value) ? Math.max(1, Math.min(30, value)) : character.stats[stat];
        saveCampaign();
        renderSheet(character);
      });
    });
    syncEditMode();
  };

  const renderList = () => {
    const list = document.getElementById("partyList");
    list.innerHTML = "";
    if (!playerCharacters.length) {
      list.innerHTML = `<p class="empty-sheet">No player characters saved yet.</p>`;
      renderSheet(null);
      return;
    }
    if (!playerCharacters.some((character) => character.id === selectedCharacterId)) selectedCharacterId = playerCharacters[0].id;
    playerCharacters.forEach((character) => {
      const item = document.createElement("article");
      item.className = "npc-list-item";
      item.classList.toggle("selected", character.id === selectedCharacterId);
      item.innerHTML = `
        <strong>${escapeHtml(character.name)}</strong>
        <span>${escapeHtml(character.race)} ${escapeHtml(character.characterClass)} - Level ${character.level}</span>
        <button class="brass-button" data-pc-id="${character.id}" data-action="view">View Sheet</button>
        <button class="brass-button danger-button" data-pc-id="${character.id}" data-action="delete">Delete</button>
      `;
      item.querySelector('[data-action="view"]').addEventListener("click", () => {
        selectedCharacterId = character.id;
        renderList();
      });
      item.querySelector('[data-action="delete"]').addEventListener("click", () => {
        const index = playerCharacters.findIndex((entry) => entry.id === character.id);
        if (index >= 0) {
          const [removed] = playerCharacters.splice(index, 1);
          saveCampaign();
          showToast(`${removed.name} removed from the party.`);
          selectedCharacterId = playerCharacters[0]?.id || null;
          renderList();
        }
      });
      list.appendChild(item);
    });
    renderSheet(playerCharacters.find((character) => character.id === selectedCharacterId));
  };

  document.getElementById("savePlayerCharacter").addEventListener("click", () => {
    const name = document.getElementById("pcNameInput").value.trim();
    if (!name) {
      showToast("Give the character a name first.");
      return;
    }
    const level = Number.parseInt(document.getElementById("pcLevelInput").value, 10);
    const character = createPlayerCharacter({
      name,
      race: document.getElementById("pcRaceInput").value.trim() || "Human",
      characterClass: document.getElementById("pcClassInput").value.trim() || "Adventurer",
      level: Number.isFinite(level) ? Math.max(1, Math.min(20, level)) : 1,
      background: document.getElementById("pcBackgroundInput").value.trim() || "Adventurer",
      stats: getRolledStats(),
      notes: document.getElementById("pcNotesInput").value.trim() || "Freshly added player character."
    });
    playerCharacters.unshift(character);
    selectedCharacterId = character.id;
    saveCampaign();
    ["pcNameInput", "pcRaceInput", "pcClassInput", "pcBackgroundInput", "pcNotesInput"].forEach((id) => {
      document.getElementById(id).value = "";
    });
    document.getElementById("pcLevelInput").value = "1";
    showToast(`${character.name} added to the party.`);
    renderList();
  });

  document.getElementById("rollCharacterStats").addEventListener("click", () => {
    rolledStats = rollAbilitySet();
    renderRolledStats();
    showToast("Ability scores rolled with 4d6 drop lowest.");
  });

  document.getElementById("generatePlayerCharacter").addEventListener("click", () => {
    const races = ["Human", "Elf", "Dwarf", "Halfling", "Tiefling", "Dragonborn"];
    const classes = ["Fighter", "Wizard", "Cleric", "Rogue", "Ranger", "Bard"];
    const backgrounds = ["Soldier", "Acolyte", "Outlander", "Sage", "Criminal", "Guild Artisan"];
    const names = ["Tamsin Vale", "Korrin Dusk", "Mira Flint", "Sable Reed", "Orin Crow", "Vella Thorn"];
    rolledStats = rollAbilitySet();
    renderRolledStats();
    const character = createPlayerCharacter({
      name: randomFrom(names),
      race: randomFrom(races),
      characterClass: randomFrom(classes),
      background: randomFrom(backgrounds),
      stats: getRolledStats(),
      notes: "Generated through the character creator. Edit race, class, stats, equipment, and homebrew notes directly."
    });
    playerCharacters.unshift(character);
    selectedCharacterId = character.id;
    saveCampaign();
    showToast(`${character.name} generated for the party.`);
    renderList();
  });

  renderRolledStats();
  renderList();
}

function renderNotesWorkspace(container) {
  container.className = "section-grid notes-workspace";
  container.innerHTML = `
    <section class="npc-editor section-card">
      <h3>Add Custom Note</h3>
      <label>Title<input id="noteTitleInput" placeholder="Note title" /></label>
      <label>Note<textarea id="noteTextInput" placeholder="Session notes, rulings, reminders, clues, homebrew rules..."></textarea></label>
      <button class="brass-button" id="saveCustomNote">Save Note</button>
    </section>
    <section class="notes-list-panel section-card">
      <h3>Custom Notes</h3>
      <div class="library-list" id="customNotesList"></div>
    </section>
  `;

  const renderNotes = () => {
    const list = document.getElementById("customNotesList");
    list.innerHTML = "";
    if (!campaignNotes.length) {
      list.innerHTML = `<p class="empty-sheet">No custom notes yet.</p>`;
      return;
    }
    campaignNotes.forEach((note) => {
      const card = document.createElement("article");
      card.className = "library-group note-card";
      card.innerHTML = `
        <textarea class="section-card-title" rows="1" wrap="soft" aria-label="Note title">${escapeHtml(note.title)}</textarea>
        <textarea class="section-card-text" wrap="soft" aria-label="Note text">${escapeHtml(note.text)}</textarea>
        <button class="brass-button danger-button">Delete Note</button>
      `;
      const titleInput = card.querySelector(".section-card-title");
      const textInput = card.querySelector(".section-card-text");
      titleInput.addEventListener("blur", () => {
        note.title = cleanEditText(titleInput.value, note.title);
        titleInput.value = note.title;
        saveCampaign();
      });
      textInput.addEventListener("blur", () => {
        note.text = textInput.value.trim() || note.text;
        textInput.value = note.text;
        saveCampaign();
      });
      card.querySelector("button").addEventListener("click", () => {
        const index = campaignNotes.findIndex((entry) => entry.id === note.id);
        if (index >= 0) {
          const [removed] = campaignNotes.splice(index, 1);
          saveCampaign();
          showToast(`${removed.title} deleted.`);
          renderNotes();
        }
      });
      list.appendChild(card);
    });
    syncEditMode();
  };

  document.getElementById("saveCustomNote").addEventListener("click", () => {
    const title = document.getElementById("noteTitleInput").value.trim() || "Untitled Note";
    const text = document.getElementById("noteTextInput").value.trim();
    if (!text) {
      showToast("Write a note before saving.");
      return;
    }
    campaignNotes.unshift({ id: `note-${Date.now()}`, title, text });
    saveCampaign();
    document.getElementById("noteTitleInput").value = "";
    document.getElementById("noteTextInput").value = "";
    showToast(`${title} saved to notes.`);
    renderNotes();
  });

  renderNotes();
}

function renderCampaignSettings(container) {
  container.className = "section-grid settings-workspace";
  container.innerHTML = `
    <section class="section-card">
      <h3>Campaign Settings</h3>
      <p>Campaign-wide controls for the screen title, current session, and the default die shown in the roller.</p>
      <label>Campaign Name<textarea class="settings-input" rows="1" wrap="soft" id="campaignNameInput">${escapeHtml(campaignSettings.name)}</textarea></label>
      <label>Session Label<textarea class="settings-input" rows="1" wrap="soft" id="campaignSessionInput">${escapeHtml(campaignSettings.session)}</textarea></label>
      <label>Default Dice<textarea class="settings-input" rows="1" wrap="soft" id="defaultDiceInput">${escapeHtml(campaignSettings.defaultDice)}</textarea></label>
      <button class="brass-button" id="saveCampaignSettings">Save Settings</button>
    </section>
    <section class="section-card">
      <h3>Prototype Flow</h3>
      <p>World handles maps and towns. Quests handles hooks and active adventure threads. Party stores player character sheets. NPCs stores campaign NPC sheets. Notes keeps custom notes. Scene and AI DM help run the current table moment. Library indexes saved campaign content and generated drafts.</p>
    </section>
  `;
  document.getElementById("saveCampaignSettings").addEventListener("click", () => {
    campaignSettings.name = cleanEditText(document.getElementById("campaignNameInput").value, "The Lost Keep");
    campaignSettings.session = cleanEditText(document.getElementById("campaignSessionInput").value, "Session 1");
    campaignSettings.defaultDice = cleanEditText(document.getElementById("defaultDiceInput").value, "1d20");
    applyCampaignSettings({ updateDice: true });
    saveCampaign();
    showToast("Campaign settings saved.");
  });
}

function rollDice() {
  const formula = document.getElementById("diceFormula").value.trim().toLowerCase();
  const match = formula.match(/^(\d*)d(\d+)\s*([+-]\s*\d+)?$/);
  if (!match) {
    showToast("Use a simple format like 1d20 or 2d6 + 3.");
    return;
  }

  const count = Number(match[1] || 1);
  const sides = Number(match[2]);
  const modifier = match[3] ? Number(match[3].replace(/\s/g, "")) : 0;
  if (count < 1 || count > 20 || sides < 2 || sides > 1000) {
    showToast("Try between 1 and 20 dice, with at least 2 sides.");
    return;
  }

  const rolls = Array.from({ length: count }, () => Math.floor(Math.random() * sides) + 1);
  const total = rolls.reduce((sum, roll) => sum + roll, 0) + modifier;
  document.getElementById("diceResult").textContent = total;
  document.getElementById("diceBreakdown").textContent = modifier
    ? `${rolls.join(" + ")} ${modifier >= 0 ? "+" : "-"} ${Math.abs(modifier)}`
    : rolls.join(" + ");
  showToast(`Rolled ${formula}: ${total}`);
}

function drawWebglMap() {
  const canvas = document.getElementById("mapCanvas");
  const gl = canvas.getContext("webgl", { antialias: true });
  if (!gl) {
    const applyFallbackMap = () => {
      canvas.style.background = `url("${mapSettings.imageSrc}") center / cover`;
    };
    reloadWorldMapImage = applyFallbackMap;
    applyFallbackMap();
    return;
  }

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * devicePixelRatio);
    canvas.height = Math.floor(rect.height * devicePixelRatio);
    gl.viewport(0, 0, canvas.width, canvas.height);
  };

  const vertexSource = `
    attribute vec2 position;
    varying vec2 uv;
    void main() {
      uv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision mediump float;
    varying vec2 uv;
    uniform sampler2D mapTexture;
    uniform vec2 canvasSize;
    uniform vec2 imageSize;

    void main() {
      float coverScale = max(canvasSize.x / imageSize.x, canvasSize.y / imageSize.y);
      vec2 fittedSize = imageSize * coverScale;
      vec2 offset = (fittedSize - canvasSize) / fittedSize * 0.5;
      vec2 sampleUv = uv * (canvasSize / fittedSize) + offset;
      sampleUv.y = 1.0 - sampleUv.y;

      vec3 color = texture2D(mapTexture, sampleUv).rgb;
      color = mix(color, color * vec3(0.82, 0.76, 0.66), 0.22);
      color += 0.025 * sin((uv.x + uv.y) * 120.0);
      float vignette = smoothstep(0.9, 0.2, distance(uv, vec2(0.5)));
      color *= 0.72 + 0.34 * vignette;
      color = mix(color, vec3(0.09, 0.07, 0.045), smoothstep(0.70, 1.0, distance(uv, vec2(0.5))) * 0.22);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  };

  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([38, 63, 67, 255])
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  const mapTextureLocation = gl.getUniformLocation(program, "mapTexture");
  const canvasSizeLocation = gl.getUniformLocation(program, "canvasSize");
  const imageSizeLocation = gl.getUniformLocation(program, "imageSize");
  let imageWidth = 1;
  let imageHeight = 1;

  const render = () => {
    resize();
    gl.uniform1i(mapTextureLocation, 0);
    gl.uniform2f(canvasSizeLocation, canvas.width, canvas.height);
    gl.uniform2f(imageSizeLocation, imageWidth, imageHeight);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  const image = new Image();
  image.onload = () => {
    imageWidth = image.naturalWidth;
    imageHeight = image.naturalHeight;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    render();
  };
  reloadWorldMapImage = () => {
    image.src = mapSettings.imageSrc || "assets/world-map.png";
  };
  reloadWorldMapImage();

  addEventListener("resize", render);
  render();
}

markerButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    enterTownMap(button.dataset.location);
  });
});

locationPopover.addEventListener("click", (event) => {
  event.stopPropagation();
});

mapOverlay.addEventListener("click", () => {
  if (currentSection !== "world" || !townMap.classList.contains("hidden")) return;
  locationPopover.classList.add("hidden");
  markerButtons.forEach((button) => button.classList.remove("selected"));
});

document.getElementById("backToWorld").addEventListener("click", (event) => {
  event.stopPropagation();
  leaveTownMap();
});

document.getElementById("backToTown").addEventListener("click", (event) => {
  event.stopPropagation();
  closeBuildingMap();
});

document.querySelectorAll(".town-node").forEach((node) => {
  node.addEventListener("click", (event) => {
    event.stopPropagation();
    const index = Number(node.dataset.townNode);
    const place = locations[selectedLocationKey].cards[index];
    openBuildingMap(place);
  });
});

document.querySelectorAll(".room-node").forEach((node) => {
  node.addEventListener("click", (event) => {
    event.stopPropagation();
    const room = node.dataset.room;
    const building = document.getElementById("buildingMapName").textContent;
    showToast(`${building} - ${room}: add encounters, loot, NPCs, and notes here.`);
  });
});

document.getElementById("viewLocationButton").addEventListener("click", () => {
  enterTownMap(selectedLocationKey);
});

document.getElementById("generateNpc").addEventListener("click", () => {
  const location = locations[selectedLocationKey];
  const npc = npcNames[Math.floor(Math.random() * npcNames.length)];
  const savedNpc = createNpc({
    name: npc.name,
    role: npc.role.replace(/^\w/, (letter) => letter.toUpperCase()),
    location: location.name,
    details: `${npc.secret} Voice: ${npc.voice}`
  });
  customNpcs.unshift(savedNpc);
  saveCampaign();
  renderLocationPanel(selectedBottomTab);
  document.getElementById("npcOutput").innerHTML = `
    <strong>${savedNpc.name}</strong>, ${savedNpc.race} ${savedNpc.npcClass}<br>
    <span>Fits: ${location.name} / ${location.faction}</span><br>
    <span>Voice: ${npc.voice}</span><br>
    <span>AC ${savedNpc.ac}, HP ${savedNpc.hp}, Speed ${savedNpc.speed}</span><br>
    <em>${npc.secret}</em>
  `;
  showToast(`${savedNpc.name} generated and saved to NPCs.`);
});

document.getElementById("createCharacter").addEventListener("click", () => {
  const concepts = [
    "Dwarf Warden, Level 1 Fighter, STR 16, CON 15, bond: protect the lost keep",
    "Elf Star-Scribe, Level 1 Wizard, INT 16, DEX 14, flaw: trusts old maps too much",
    "Human Road-Saint, Level 1 Cleric, WIS 16, CHA 13, oath: shelter every traveler",
    "Tiefling Ash-Bard, Level 1 Bard, CHA 16, DEX 15, secret: knows a forbidden song"
  ];
  const concept = concepts[Math.floor(Math.random() * concepts.length)];
  document.getElementById("characterOutput").innerHTML = `
    <strong>Draft Character</strong><br>
    <span>${concept}</span><br>
    <em>Next: ancestry traits, class features, homebrew toggles, inventory.</em>
  `;
  showToast("Character draft created.");
});

document.getElementById("generateShop").addEventListener("click", () => {
  const location = locations[selectedLocationKey];
  const template = shops[Math.floor(Math.random() * shops.length)];
  const shop = {
    id: `shop-${Date.now()}`,
    locationKey: selectedLocationKey,
    name: template.name,
    type: template.inventory.includes("blades") ? "Smithy" : template.inventory.includes("draughts") ? "Apothecary" : "General Store",
    keeper: template.keeper,
    keeperRace: randomNpcRace(),
    items: [
      ...template.inventory.split(",").map((item, index) => ({ name: cleanEditText(item), cost: index ? "5 gp" : "25 gp" })),
      { name: template.special, cost: "special order" }
    ],
    hook: template.price
  };
  const keeper = addShopToTown(shop);
  campaignShops.unshift(shop);
  saveCampaign();
  renderLocationPanel(selectedBottomTab);
  document.getElementById("shopOutput").innerHTML = `
    <strong>${shop.name}</strong><br>
    <span>Keeper: ${keeper.name}</span><br>
    <span>Town: ${location.name}</span><br>
    <span>Stock: ${shopInventorySummary(shop)}</span><br>
    <em>${shop.hook}</em>
  `;
  showToast(`${shop.name} added to ${location.name}.`);
});

document.getElementById("askAssistant").addEventListener("click", () => {
  const location = locations[selectedLocationKey];
  const idea = assistantIdeas[Math.floor(Math.random() * assistantIdeas.length)];
  location.scene = `${location.scene} ${idea}`;
  document.getElementById("sceneSummary").textContent = location.scene;
  saveCampaign();
  document.getElementById("assistantOutput").innerHTML = `
    <strong>${location.name} scene beat</strong><br>
    <span>${idea}</span><br>
    <span>Use with: ${location.rumor}</span><br>
    <em>Suggested check: DC 13 Insight or Investigation.</em>
  `;
  showToast("DM assistant added a scene beat.");
});

document.getElementById("rollDice").addEventListener("click", rollDice);

document.querySelectorAll(".quick-actions button").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "dice") rollDice();
    if (action === "scene") activateTopSection("scene");
    if (action === "npc") activateTopSection("npcs");
    if (action === "aidm") activateTopSection("aidm");
    if (action === "library") activateTopSection("library");
    if (action === "notes") activateTopSection("notes");
    if (action === "encounter") {
      activateTopSection("scene");
      document.getElementById("assistantOutput").innerHTML = `
        <strong>${locations[selectedLocationKey].name} encounter</strong><br>
        <span>Hostile scout, frightened witness, and environmental hazard.</span><br>
        <em>Escalate because danger is ${locations[selectedLocationKey].danger}.</em>
      `;
      showToast(`Encounter staged for ${locations[selectedLocationKey].name}.`);
    }
    if (action === "quest") seedQuestHook();
    if (action === "note") {
      activateTopSection("scene");
      document.getElementById("assistantOutput").innerHTML = `<strong>Pinned note</strong><br><span>${locations[selectedLocationKey].scene}</span>`;
      showToast("Scene note pinned.");
    }
  });
});

document.querySelectorAll(".subtabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".subtabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderLocationPanel(button.dataset.tab);
    syncEditMode();
    showToast(`${button.textContent} panel selected for ${locations[selectedLocationKey].name}.`);
  });
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.flowReady === "true") return;
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const view = button.dataset.view;
    if (view === "world") activateTopSection("world");
    if (view === "maps") activateTopSection("maps");
    if (view === "dungeons" || view === "quests") activateTopSection("quests");
    if (view === "party") activateTopSection("party");
    if (view === "npcs") activateTopSection("npcs");
    if (view === "tools") activateTopSection("aidm");
    if (view === "library") activateTopSection("library");
  });
});

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => activateTopSection(button.dataset.section));
});

document.getElementById("editModeToggle").addEventListener("click", () => {
  editMode = !editMode;
  syncEditMode();
  showToast(editMode ? "Edit mode on. Click highlighted text to change it." : "Edit mode off. Campaign saved.");
  if (!editMode) saveCampaign();
});

setupFlowChrome();
setupSidebarToggle();
setupMapControls();
applyCampaignSettings({ updateDice: true });
drawWebglMap();
updateLocation(selectedLocationKey);
syncEditMode();
