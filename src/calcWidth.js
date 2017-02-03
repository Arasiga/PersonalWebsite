export function calcWidth(width) {

  if (width < 700){
    return 'xs';
  } else if (width < 1000){
    return 'sm';
  } else {
    return 'lg';
  }

}
