export type IModelName = 'cms' | 'mac';

const modelPrefix = `${process.env.PUBLIC_URL}/assets/models/`;
export const modelUrlMaps: {[key in IModelName]: string} = {
  mac: 'mac.glb',
  cms: '01_contents-management-system.glb',
};

export const getModelPath = (modelName: IModelName) => {
  return `${modelPrefix}${modelUrlMaps[modelName]}`;
}

export const COLORS = {
  lemon: '#C1BC6E',
  light_yellow: '#F5F448',
  yellow_sunshine: '#F9BA32',
  blue_steel: '#426E86',
  bone: '#F8F1E5',
  coal: '#2F3131',
  stone_ground: '#4B4345',
  lapis: '#556DAC',
  salmon: '#F79B77',
  pepper_corn: '#755248',
  wood_veneer: '#756867',
  sand_dollar: '#D5D6D2',
  charcoal: '#353C3F',
  orange: '#FF8D3F',
  duck_blue: '#007199',
  shokot_blue: '#0C4154',
  sick_green: '#2e4638',
  cloudy: '#59665B',
  pistachio: '#76973B',
};