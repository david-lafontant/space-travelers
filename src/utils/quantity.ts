export const quantity = (element: any) => {
  let result: any;
  if (element) {
    result = element.filter((item: any) => item.booked === true);
  } else {
    result = [];
  }

  if (result.length > 0) {
    return true;
  }
    return false;
};

export default quantity;
