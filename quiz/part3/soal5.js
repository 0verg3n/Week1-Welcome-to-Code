// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

// for (let i = 1; i <= 5; i++){
//   for (let j = 1; j <= i; j++){
//     console.log("*");
//   }
// }

for (let i = 1; i <= input; i++){
  let row = "";
  for (let j = 1; j <= i; j++){
      row += "*";
  }
  console.log(row);
}