export function calcWidth(width) {
  if (width < '780'){
    return 'xs';
  } else if (width < '1000'){
    return 'sm';
  } else {
    return 'lg';
  }
}