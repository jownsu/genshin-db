const ASSET_URL = 'http://localhost:3000/assets/';
const CHARACTER_ICON_URL = ASSET_URL + 'images/characters/icons/';
const CHARACTER_CARD_URL = ASSET_URL + 'images/characters/cards/';

const WEAPONS = {
    'Bow'      : ASSET_URL + 'bow-icon.png',
    'Catalyst' : ASSET_URL + 'catalyst-icon.png',
    'Claymore' : ASSET_URL + 'claymore-icon.png',
    'Polearm'  : ASSET_URL + 'polearm-icon.png',
    'Sword'    : ASSET_URL + 'sword-icon.png',
}

const ELEMENTS  = {
    'Anemo'   : ASSET_URL + 'Element_Anemo.png',
    'Cryo'    : ASSET_URL + 'Element_Cryo.png',
    'Electro' : ASSET_URL + 'Element_Electro.png',
    'Dendro'  : ASSET_URL + 'Element_Dendro.png',
    'Geo'     : ASSET_URL + 'Element_Geo.png',
    'Hydro'   : ASSET_URL + 'Element_Hydro.png',
    'Pyro'    : ASSET_URL + 'Element_Pyro.png',
}

export { 
        WEAPONS, 
        ELEMENTS, 
        CHARACTER_ICON_URL, 
        ASSET_URL, 
        CHARACTER_CARD_URL 
    }