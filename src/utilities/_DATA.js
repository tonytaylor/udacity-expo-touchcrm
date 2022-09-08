
export const salesRegions = {
  s: 'Southern',
  se: 'Southeastern',
  e: 'Eastern',
  ne: 'Northeastern',
  n: 'Northern',
  nw: 'Northwestern',
  w: 'Western',
  sw: 'Southwestern'
};

const performRandomRegionLookup = (regions = {}) => {
  const regionIds = Object.keys(regions);
  const min = Math.ceil(0);
  const idx = Math.floor(Math.random() * (Math.floor(regionIds.length) - min) + min);
  return { regionId: regionIds[idx], regionName: regions[regionIds[idx]] };
};

export const getRandomSalesRegion = () => {
  return performRandomRegionLookup(salesRegions);
};


