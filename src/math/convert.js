/* eslint-disable no-param-reassign */
/* eslint-disable radix */

// Segundos para 00:01:00
function ferramentasSegundoParaMinuto(value) {
  const segundos = Math.round(value);
  const dia = 0;
  let hora = 0;
  let minuto = 0;
  let segundo = 0;

  // Ajustar tempo
  let sAux = segundos / (24 * 60 * 60);
  // if(sAux > 1) dia = parseInt(sAux);
  sAux = (segundos - (dia * (24 * 60 * 60))) / (60 * 60);
  if (sAux >= 1) hora = Math.round(parseInt(sAux));
  sAux = (segundos - (hora * (60 * 60)) - (dia * (24 * 60 * 60))) / 60;
  if (sAux >= 1) minuto = Math.round(parseInt(sAux));
  segundo = Math.round(segundos - (minuto * 60) - (hora * (60 * 60)) - (dia * (24 * 60 * 60)));

  // Verificar numeros
  if (parseInt(hora) < 10) hora = `0${hora}`;
  if (parseInt(minuto) < 10) minuto = `0${minuto}`;
  if (parseInt(segundo) < 10) segundo = `0${segundo}`;

  return `${hora}:${minuto}:${segundo}`;
}

export function paceVelocidadeRitmo(tempo) {
  const minKm = tempo;
  const kmH = 1 / (tempo / 60 / 60);
  const minMilha = minKm * 1.61;
  const milhasH = kmH / 1.61;
  const min400 = minKm * 0.4;

  return {
    minKm: ferramentasSegundoParaMinuto(minKm),
    kmH: kmH.toFixed(1),
    minMilha: ferramentasSegundoParaMinuto(minMilha),
    milhasH: milhasH.toFixed(1),
    min400: ferramentasSegundoParaMinuto(min400),
  };
}

// // Tempo 00:01:00 para segundos
// function ferramentasTempoParaSegundo(minuto) {
//   minuto = minuto.split(':');

//   let segundo = parseInt(minuto[minuto.length - 1]);
//   if (minuto[minuto.length - 2] !== undefined) segundo += parseInt(minuto[minuto.length - 2]) * 60;
//   if (minuto[minuto.length - 3] !== undefined) segundo += parseInt(minuto[minuto.length - 3]) * 60 * 60;
//   // segundo +=  minuto[minuto.length - 4] * 60 * 60 * 24;

//   return segundo;
// }


// function ferramentas_pace_velocidade_ritmo() {
//   if (jQuery('#ferramentas_pace_velocidade_value1').val() == '') {
//     alert('Preencha o tempo.');
//     return false;
//   }

//   let tempo = ferramentasTempoParaSegundo(jQuery('#ferramentas_pace_velocidade_value1').val());
//   const tipo = jQuery('input[name=ferramentas_pace_velocidade_value2]:checked').val();

//   if (tipo == 'milha') { tempo *= 1.61; }

//   const val1 = tempo;
//   const val2 = 1 / (tempo / 60 / 60);
//   const val3 = val1 * 1.61;
//   const val4 = val2 / 1.61;
//   const val5 = val1 * 0.4;

//   // Mostrar Resultado
//   jQuery('.ferramentas_resultado').css('display', 'block');
//   jQuery('.ferramentas_resultado_table .val:eq(0)').html(ferramentasSegundoParaMinuto(val1));
//   jQuery('.ferramentas_resultado_table .val:eq(1)').html(val2.toFixed(1));
//   jQuery('.ferramentas_resultado_table .val:eq(2)').html(ferramentasSegundoParaMinuto(val3));
//   jQuery('.ferramentas_resultado_table .val:eq(3)').html(val4.toFixed(1));
//   jQuery('.ferramentas_resultado_table .val:eq(4)').html(ferramentasSegundoParaMinuto(val5));

//   return false;
// }

// // Conversao Pace / Velocidade
// function ferramentas_pace_velocidade_tempo() {
//   if (jQuery('#ferramentas_pace_velocidade_tempo_value1').val() == '') {
//     alert('Preencha a velocidade.');
//     return false;
//   }

// let tempo = 60 / jQuery('#ferramentas_pace_velocidade_tempo_value1').val().split(',').join('.') * 60;
//   const tipo = jQuery('input[name=ferramentas_pace_velocidade_tempo_value2]:checked').val();

//   if (tipo == 'milha') tempo /= 1.6;

//   const val1 = tempo;
//   const val2 = 1 / (tempo / 60 / 60);
//   const val3 = val1 * 1.61;
//   const val4 = val2 / 1.61;
//   const val5 = val1 * 0.4;

//   // Mostrar Resultado
//   jQuery('.ferramentas_resultado').css('display', 'block');
//   jQuery('.ferramentas_resultado_table .val:eq(0)').html(ferramentasSegundoParaMinuto(val1));
//   jQuery('.ferramentas_resultado_table .val:eq(1)').html(val2.toFixed(1));
//   jQuery('.ferramentas_resultado_table .val:eq(2)').html(ferramentasSegundoParaMinuto(val3));
//   jQuery('.ferramentas_resultado_table .val:eq(3)').html(val4.toFixed(1));
//   jQuery('.ferramentas_resultado_table .val:eq(4)').html(ferramentasSegundoParaMinuto(val5));

//   return false;
// }
