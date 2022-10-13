const ASSET_URL           = window.location.origin + '/assets/';
const IMAGES_URL          = ASSET_URL + 'images/';
const ICONS_URL           = ASSET_URL + 'icons/';
const CHARACTER_ICON_URL  = ASSET_URL + 'images/characters/icons/';
const CHARACTER_CARD_URL  = ASSET_URL + 'images/characters/cards/';
const CHARACTER_INFOS_URL = ASSET_URL + 'images/characters/infos/';
const MATERIAL_ICON_URL   = ASSET_URL + 'images/materials/';
const NEW_CHARACTER_URL   = ASSET_URL + 'new/';

const WEAPONS_ICON_URL    = ASSET_URL + 'images/weapons/';
const ARTIFACTS_ICON_URL  = ASSET_URL + 'images/artifacts/';

const WEAPONS = {
    'Bow'      : ICONS_URL + 'bow-icon.png',
    'Catalyst' : ICONS_URL + 'catalyst-icon.png',
    'Claymore' : ICONS_URL + 'claymore-icon.png',
    'Polearm'  : ICONS_URL + 'polearm-icon.png',
    'Sword'    : ICONS_URL + 'sword-icon.png',
}

const ELEMENTS  = {
    'Anemo'   : ICONS_URL + 'Element_Anemo.png',
    'Cryo'    : ICONS_URL + 'Element_Cryo.png',
    'Electro' : ICONS_URL + 'Element_Electro.png',
    'Dendro'  : ICONS_URL + 'Element_Dendro.png',
    'Geo'     : ICONS_URL + 'Element_Geo.png',
    'Hydro'   : ICONS_URL + 'Element_Hydro.png',
    'Pyro'    : ICONS_URL + 'Element_Pyro.png',
}

const COLORS = {
    'Anemo'   : 'text-anemo',
    'Cryo'    : 'text-cryo',
    'Electro' : 'text-electro',
    'Dendro'  : 'text-dendro',
    'Geo'     : 'text-geo',
    'Hydro'   : 'text-hydro',
    'Pyro'    : 'text-pyro',
};

export { 
        ASSET_URL,
        IMAGES_URL,
        ICONS_URL, 
        WEAPONS, 
        ELEMENTS, 
        CHARACTER_ICON_URL, 
        CHARACTER_CARD_URL,
        CHARACTER_INFOS_URL,
        WEAPONS_ICON_URL,
        ARTIFACTS_ICON_URL,
        MATERIAL_ICON_URL,
        COLORS,
        NEW_CHARACTER_URL 
    }