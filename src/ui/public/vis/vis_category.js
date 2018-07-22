/**
 * You should always make sure that every CATEGORY on top have a corresponding
 * display name in the below object, otherwise they won't be shown properly
 * in the vis creation wizard.
 */

const CATEGORY = {
  BASIC: 'basic',
  DATA: 'data',
  GRAPHIC: 'graphic',
  MAP: 'map',
  OTHER: 'other',
  TIME: 'time',
  // Hidden is a specific category and doesn't need a display name below
  HIDDEN: 'hidden'
};

const CATEGORY_DISPLAY_NAMES = {
  [CATEGORY.BASIC]: 'Gráficos básicas',
  [CATEGORY.DATA]: 'Datos',
  [CATEGORY.GRAPHIC]: 'Graphic',
  [CATEGORY.MAP]: 'Gráficos de mapas',
  [CATEGORY.OTHER]: 'Otros',
  [CATEGORY.TIME]: 'Series de Tiempo'
};

export { CATEGORY, CATEGORY_DISPLAY_NAMES };
