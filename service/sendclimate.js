const { getEmbed } = require("../util/getEmbed");
const { getClima } = require("./climateDay");
const { default: axios } = require("axios");
const fs = require("fs");
let climate;

async function sendClimate(channel, city) {
  let url = `https://pt.wttr.in/${city}+brazil?format=j1`;
  if (city === "ribeirao") {
    url = "https://pt.wttr.in/ribeir%C3%A3o%20preto%20brasil?format=j1";
  }
  if (!city) city = "franca";
  let teste = axios.get(url).then((clim) => {
    try {
      let climatePorHora = [];
      let weather = clim.data.weather[0].hourly;
      for (const iterator of weather) {
        let horario;
        function arrumahora(time) {
          if (time.length > 2) {
            horario = time.slice(0, 1);
            horario = horario + ":00";
          }
          if (time.length > 3) {
            horario = time.slice(0, 2);
            horario = horario + ":00";
          }
          if (time.length === 1) {
            horario = "00:00";
          }
        }
        arrumahora(iterator.time);
        let heatIndex = heatIndexCalculator(
          iterator.tempC,
          iterator.windspeedKmph
        );
        let heatString = `${heatIndex}`;
        let porHora = {
          hora: horario,
          humidade: iterator.humidity,
          text: iterator.lang_pt[0].value,
          temp: iterator.tempC,
          preciptacaoMM: iterator.precipMM,
          raiosUV: iterator.uvIndex,
          heatIndex: heatString.slice(0, 4),
        };
        climatePorHora.push(porHora);
      }

      climate = {
        temperaturaMediaC: clim.data.weather[0].avgtempC,
        porHora: climatePorHora,
      };
      channel.send({
        embeds: [
          getEmbed(
            `Clima de ${city} Hoje`,
            `
        Temperatura média : ${climate.temperaturaMediaC}C°

        Hora:**${climate.porHora[0].hora}**
        Humidade:**${climate.porHora[0].humidade}%**
        Vai estar **${climate.porHora[0].text}**
        Temperatura no momento:**${climate.porHora[0].temp}C°**
        Precipação em milimetros:**${climate.porHora[0].preciptacaoMM}**
        Raios Ultra Violeta:**${climate.porHora[0].raiosUV}**
        Sensação Térmica:**${climate.porHora[0].heatIndex}C**
        ----------------------------------------------------
        Hora:**${climate.porHora[1].hora}**
        Humidade:**${climate.porHora[1].humidade}%**
        Vai estar **${climate.porHora[1].text}**
        Temperatura no momento:**${climate.porHora[1].temp}C°**
        Precipação em milimetros:**${climate.porHora[1].preciptacaoMM}**
        Raios Ultra Violeta:**${climate.porHora[1].raiosUV}**
        Sensação Térmica:**${climate.porHora[1].heatIndex}C**
        ----------------------------------------------------
        Hora:**${climate.porHora[2].hora}**
        Humidade:**${climate.porHora[2].humidade}%**
        Vai estar **${climate.porHora[2].text}**
        Temperatura no momento:**${climate.porHora[2].temp}C°**
        Precipação em milimetros:**${climate.porHora[2].preciptacaoMM}**
        Raios Ultra Violeta:**${climate.porHora[2].raiosUV}**
        Sensação Térmica:**${climate.porHora[2].heatIndex}C**
        ----------------------------------------------------
        Hora:**${climate.porHora[3].hora}**
        Humidade:**${climate.porHora[3].humidade}%**
        Vai estar **${climate.porHora[3].text}**
        Temperatura no momento:**${climate.porHora[3].temp}C°**
        Precipação em milimetros:**${climate.porHora[3].preciptacaoMM}**
        Raios Ultra Violeta:**${climate.porHora[3].raiosUV}**
        Sensação Térmica:**${climate.porHora[3].heatIndex}C**
        ----------------------------------------------------
        Hora:**${climate.porHora[4].hora}**
        Humidade:**${climate.porHora[4].humidade}%**
        Vai estar **${climate.porHora[4].text}**
        Temperatura no momento:**${climate.porHora[4].temp}C°**
        Precipação em milimetros:**${climate.porHora[4].preciptacaoMM}**
        Raios Ultra Violeta:**${climate.porHora[4].raiosUV}**
        Sensação Térmica:**${climate.porHora[4].heatIndex}**
        ----------------------------------------------------
        Hora:**${climate.porHora[5].hora}**
        Humidade:**${climate.porHora[5].humidade}%**
        Vai estar **${climate.porHora[5].text}**
        Temperatura no momento:**${climate.porHora[5].temp}C°**
        Precipação em milimetros:**${climate.porHora[5].preciptacaoMM}**
        Raios Ultra Violeta:**${climate.porHora[5].raiosUV}**
        Sensação Térmica:**${climate.porHora[5].heatIndex}C**
        ----------------------------------------------------
        Hora:**${climate.porHora[6].hora}**
        Humidade:**${climate.porHora[6].humidade}%**
        Vai estar **${climate.porHora[6].text}**
        Temperatura no momento:**${climate.porHora[6].temp}C°**
        Precipação em milimetros:**${climate.porHora[6].preciptacaoMM}**
        Raios Ultra Violeta:**${climate.porHora[6].raiosUV}**
        Sensação Térmica:**${climate.porHora[6].heatIndex}C**
        ----------------------------------------------------
        Hora:**${climate.porHora[7].hora}**
        Humidade:**${climate.porHora[7].humidade}%**
        Vai estar **${climate.porHora[7].text}**
        Temperatura no momento:**${climate.porHora[7].temp}C°**
        Precipação em milimetros:**${climate.porHora[7].preciptacaoMM}**
        Raios Ultra Violeta:**${climate.porHora[7].raiosUV}**
        Sensação Térmica:**${climate.porHora[7].heatIndex}C**
        ----------------------------------------------------
        
        `,
            "",
            "",
            "https://static.escolakids.uol.com.br/conteudo_legenda/4e3d738c244f4c5f3b56f46260402cc4.jpg",
            ""
          ),
        ],
      });
    } catch (err) {
      console.log(err);
    }
  });
}
async function sendClimateCurrentTime(channel, city) {
  let url = `https://pt.wttr.in/${city}+brazil?format=j1`;
  if (city === "ribeirao") {
    url = "https://pt.wttr.in/ribeir%C3%A3o%20preto%20brasil?format=j1";
  }
  if (!city) return channel.send("Erro sendClimateCurrentTime");

  let teste = axios.get(url).then((clim) => {
    try {
      let weather = clim.data.current_condition[0];

      let heatIndex = heatIndexCalculator(
        weather.temp_C,
        weather.windspeedKmph
      );
      let heatString = `${heatIndex}`;

      let climate = {
        temp_C: weather.temp_C,
        humidity: weather.humidity,
        text: weather.lang_pt[0].value,
        heatIndex: heatString.slice(0, 4),
      };
      channel.send({
        embeds: [
          getEmbed(
            `Clima de ${city} agora`,
            ` A temperatura está em :**${climate.temp_C}Cº**
          Humidade em **${climate.humidity}%**
          **${climate.text}**
          Sensação térmica de **${climate.heatIndex}Cº**
        `
          ),
        ],
      });
    } catch (err) {
      console.log(err);
    }
  });
}

exports.sendClimate = sendClimate;
exports.sendClimateCurrentTime = sendClimateCurrentTime;

function heatIndexCalculator(tempC, velWindKm) {
  return (
    33 + ((10 * Math.sqrt(velWindKm) + 10.45 - velWindKm) * (tempC - 33)) / 22
  );
}
