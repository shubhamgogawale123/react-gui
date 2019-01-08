export const positionFinder = (position) =>
{
  console.log("user selected:",position);
  return{
    type:"POS",
    payload:position
  }


};
