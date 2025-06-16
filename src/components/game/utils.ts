import { UPGRADE_COST_MULTIPLIER } from "./constants";

export function calcPrice(basePrice: number, nBought: number) {
  return basePrice * Math.pow(UPGRADE_COST_MULTIPLIER, nBought);
}

export function getPlayTime(playTimeHours: number) {
  const years = Math.floor(playTimeHours / 24 / 30 / 12);
  const months = Math.floor(playTimeHours / 24 / 30) % 12;
  const days = Math.floor(playTimeHours / 24) % 30;
  const hours = playTimeHours % 24;

  let val = "";
  if (years > 0) val += `${years} y, `;
  if (months > 0) val += `${months} m, `;
  if (days > 0) val += `${days} d, `;
  val += `${hours} h`;

  return { years, months, days, hours, val };
}
