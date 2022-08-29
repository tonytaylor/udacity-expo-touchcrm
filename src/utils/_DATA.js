const generateUID = () => {
  return Math.random()
    .toString(36)
    .substring(2, 15) + Math.random()
    .toString(36)
    .substring(2, 15);
};

const customer = {
  contactInfo: {
    socialMedia: [],
    extraInfo: []
  },
  personalInfo: {},
  sourceInfo: {},
  activities: {},
}