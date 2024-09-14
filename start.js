import AnimalsList from "./Animals.js";

// Class Creater for Animals
class Animal {
    constructor(data) {
        this.name = data.name;
        this.size = data.size;
        this.speed = data.speed;
        this.melee = data.melee;
        this.specialattacks = data.specialattacks;
        this.senses = data.senses;
        this.space = data.space;
        this.reach = data.reach;
        this.sq = data.sq;
        this.type = data.type;
        this.cr = data.cr;
        this.xp = data.xp;
        this.alignment = data.alignment;
        this.init = data.init;
        this.ac = data.ac;
        this.acmods = data.acmods;
        this.hp = data.hp;
        this.hd = data.hd;
        this.saves = data.saves;
        this.fort = data.fort;
        this.ref = data.ref;
        this.will = data.will;
        this.abilityscores = data.abilityscores;
        this.baseatk = data.baseatk;
        this.cmb = data.cmb;
        this.cmd = data.cmd;
        this.feats = data.feats;
        this.skills = data.skills;
        this.racialmods = data.racialmods;
        this.environment = data.environment;
        this.organization = data.organization;
        this.treasure = data.treasure;
        this.descriptionvisual = data.descriptionvisual;
        this.group = data.group;
        this.source = data.source;
        this.istemplate = data.istemplate;
        this.gender = data.gender;
        this.morale = data.morale;
        this.characterflag = data.characterflag;
        this.companionflag = data.companionflag;
        this.fly = data.fly;
        this.climb = data.climb;
        this.burrow = data.burrow;
        this.swim = data.swim;
        this.land = data.land;
    }
}

const createHomeBreweryFormat = (name) => {
    const createAnimal = () => {
        return AnimalsList.find((animal) => animal.name === name);
    }
    const currentAnimal = createAnimal()
    const format = `
    
{{monster,frame
## ${currentAnimal.name}
**CR** ::${currentAnimal.cr}
:
${currentAnimal.descriptionvisual ? currentAnimal.descriptionvisual : ''}
:
*${currentAnimal.size}, ${currentAnimal.type}, ${currentAnimal.alignment}*
**Init** ::${currentAnimal.init} ${currentAnimal.senses ?  `**Senses** ::currentAnimal.senses` : '' }

#### Defense
___
**Armor Class** :: ${currentAnimal.ac}
**Hit Points**  :: ${currentAnimal.hp}${currentAnimal.hd ? currentAnimal.hd : ''}
**Saves**  :: ${currentAnimal.saves}

#### Offense
___
**Speed** :: ${currentAnimal.speed}
${currentAnimal.melee ? `**Melee** ${currentAnimal.melee}` : ''}
${currentAnimal.space ? `**Space** ${currentAnimal.space}` : ''} ${currentAnimal.reach ? `**Reach** ${currentAnimal.reach}` : ''}
${currentAnimal.specialattacks ? `**Special Attacks** ${currentAnimal.specialattacks}` : ''}

#### Statistics
___
**Ability Scores** :: ${currentAnimal.abilitiyscores}
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

`
return format
}

// Initialize the animals from the Array of Objects
const animals = AnimalsList.map(data => new Animal(data));
// Sort the animals array in alphabetical order
animals.sort((a, b) => a.name.localeCompare(b.name));
// Create the Dropdown 
const selectElement = document.getElementById("animal-select");
animals.forEach(animal => {
    const option = document.createElement("option");
    option.value = animal.name;
    option.textContent = animal.name;
    selectElement.appendChild(option);
});
// Add event listener to the dropdown
selectElement.addEventListener("change", (event) => {
    const selectedAnimalName = event.target.value;

    // You can add additional code here to perform actions based on the selected animal's name
    const homeBreweryText = createHomeBreweryFormat(selectedAnimalName)

    // Display the text and button on the webpage
    document.getElementById("home-brewery-text").innerText = homeBreweryText;
});
const copyToClipboard = () => {
    const text = document.getElementById("home-brewery-text").innerText;
    navigator.clipboard.writeText(text);
}
document.getElementById("clipboard").addEventListener("click", copyToClipboard)