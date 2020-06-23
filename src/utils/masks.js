const maks = {
  time(value) {
    // 00:00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1:$2')
      .replace(/(:\d{2})\d+?$/, '$1');
  },
  fulltime(value){
    // 00:00
    return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1:$2')
    .replace(/(\d{2})(\d)/, '$1:$2')
    .replace(/(:\d{2})\d+?$/, '$1');
  },
  // 1,00 km/h
  distance(value) {
    return value
      .replace(/ km\/h/g, '') // remove o km/h
      .replace(/(\d km\/)/, '')
      .replace(/\./g, '') // remove o ponto se houver
      .replace(/(\,\d{2})\d+?$/g, '$1') // remove se houver mais que uma virgual
      .replace(/(\d+$)/, '$1 km/h'); // adiciona o km/h
  },
};


export default maks;
