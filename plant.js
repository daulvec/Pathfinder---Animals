import PlantsList from "./plantsList.js"

// Class Creater for Animals
class Plant {
    constructor(data) {
      this.name = data.name;
      this.cr = data.cr;
      this.xp = data.xp;
      this.race = data.race;
      this.class1 = data.class1;
      this.class1lvl = data.class1lvl;
      this.alignment = data.alignment;
      this.size = data.size;
      this.type = data.type;
      this.subtype1 = data.subtype1;
      this.ac = data.ac;
      this.actouch = data.actouch;
      this.acflatfooted = data.acflatfooted;
      this.hp = data.hp;
      this.hd = data.hd;
      this.fort = data.fort;
      this.ref = data.ref;
      this.will = data.will;
      this.melee = data.melee;
      this.ranged = data.ranged;
      this.space = data.space;
      this.reach = data.reach;
      this.str = data.str;
      this.dex = data.dex;
      this.con = data.con;
      this.int = data.int;
      this.wis = data.wis;
      this.cha = data.cha;
      this.feats = data.feats;
      this.skills = data.skills;
      this.racialmods = data.racialmods;
      this.languages = data.languages;
      this.environment = data.environment;
      this.organization = data.organization;
      this.treasure = data.treasure;
      this.characterflag = data.characterflag;
      this.companionflag = data.companionflag;
      this.speed = data.speed;
      this.basespeed = data.basespeed;
      this.flyspeed = data.flyspeed;
      this.speedland = data.speedland;
      this.fly = data.fly;
      this.climb = data.climb;
      this.burrow = data.burrow;
      this.swim = data.swim;
      this.companionfamiliarlink = data.companionfamiliarlink;
      this.id = data.id;
      this.uniquemonster = data.uniquemonster;
      this.mr = data.mr;
      this.mythic = data.mythic;
      this.mt = data.mt;
      this.source = data.source;
      this.istemplate = data.istemplate;
      this.gender = data.gender;
      this.morale = data.morale;
    }
  }
const plants = PlantsList.map(data => new Plant(data));

const createHomeBreweryFormatPlants = (name) => {
    const createPlant = () => {
        return PlantsList.find((plant) => plant.name === name);
    }
    const currentAnimal = createPlant();
    const format = `
    {{monster,frame
    ## ${currentAnimal.name}
    **CR** ::${currentAnimal.cr}
    :
    ${currentAnimal.descriptionvisual ? currentAnimal.descriptionvisual : ''}
    :
    *${currentAnimal.size}, ${currentAnimal.type}, ${currentAnimal.alignment}*
    **Init** ::${currentAnimal.int} ${currentAnimal.senses ?  `**Senses** ::${currentAnimal.senses}` : '' }

    #### Defense
    ___
    **Armor Class** :: ${currentAnimal.ac}
    **Hit Points**  :: ${currentAnimal.hp}${currentAnimal.hd ? currentAnimal.hd : ''}
    **Saves**  :: Fort: ${currentAnimal.fort}, Will: ${currentAnimal.will}, Ref: ${currentAnimal.ref}

    #### Offense
    ___
    **Speed** :: ${currentAnimal.speed}
    ${currentAnimal.melee ? `**Melee** ${currentAnimal.melee}` : ''}
    ${currentAnimal.space ? `**Space** ${currentAnimal.space}` : ''} ${currentAnimal.reach ? `**Reach** ${currentAnimal.reach}` : ''}
    ${currentAnimal.specialattacks ? `**Special Attacks** ${currentAnimal.specialattacks}` : ''}

    #### Statistics
    ___
    **Ability Scores** ::  Str:${currentAnimal.str},  Dex:${currentAnimal.dex}, Con:${currentAnimal.con}, Int:${currentAnimal.int}, Wis:${currentAnimal.wis}, Cha:${currentAnimal.cha}
    **Base Atk** ${currentAnimal.baseatk} **CMB** ${currentAnimal.cmb} **CMD** ${currentAnimal.cmd}
    ${currentAnimal.feats ? `**Feats** ${currentAnimal.feats}` : ''}
    ${currentAnimal.skills ? `**Skills** ${currentAnimal.skills}` : ''}
    ${currentAnimal.racialmods ? `**Racial Modifiers** ${currentAnimal.racialmods}` : ''}

    #### Special Abilities
    ___
    ${currentAnimal.specialabilities ? `**Special Abilities** ${currentAnimal.specialabilities}` : ''}

    #### Ecology
    ___
    **Environment** :: ${currentAnimal.environment}
    **Organization** :: ${currentAnimal.organization}
    **Treasure** :: ${currentAnimal.treasure}

    #### Source Experience
    ___
    ${currentAnimal.source}
    **Experiance** :: ${currentAnimal.xp}

    }}
    `;
    return format;
}

plants.sort((a, b) => a.name.localeCompare(b.name));

const selectPlants = document.getElementById("plant-select");
plants.forEach(plants => {
    const option = document.createElement("option");
    option.value = plants.name;
    option.textContent = plants.name;
    selectPlants.appendChild(option);
});

selectPlants.addEventListener("change", (event) => {
    const selectedPlantName = event.target.value;

    // You can add additional code here to perform actions based on the selected animal's name
    const homeBreweryText = createHomeBreweryFormatPlants(selectedPlantName)

    // Display the text and button on the webpage
    document.getElementById("home-brewery-text-plant").innerText = homeBreweryText;
});

const copyToPlantClipboard = () => {
    const text = document.getElementById("home-brewery-text-plant").innerText;
    navigator.clipboard.writeText(text);
}

document.getElementById("clipboard-plant").addEventListener("click", copyToPlantClipboard)