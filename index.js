var katzDeli = [];

function takeANumber(katzDeli, ime){
  katzDeli.push(ime);
  return `Welcome, ${ime}. You are number ${katzDeli.length} in line.`;
}
