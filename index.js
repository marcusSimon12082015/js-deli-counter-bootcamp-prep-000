var katzDeli = [];

function takeANumber(katzDeli, ime){
  katzDeli.push(ime);
  return `Welcome, ${ime}. You are number ${katzDeli.length} in line.`;
}

function nowServing(array){
  if (array.length === 0) {
    return "The line is currently empty.";
  }
}
