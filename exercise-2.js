/*
Logic Challenge - Naik Angkot
Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

Code
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var output = [];
  for (var i = 0; i < arrPenumpang.length; i++){
      var objectOutput = {};
      objectOutput.penumpang = arrPenumpang[i][0];
      objectOutput.naikDari = arrPenumpang[i][1];
      objectOutput.tujuan = arrPenumpang[i][2];
    //   var awalAkhir = [];
      for(var j = 0; j < rute.length; j++){
          if(rute[j] === arrPenumpang[i][1]){
              var awal = j;
          } else if(rute[j] === arrPenumpang[i][2]){
              var akhir = j;
          }
      }
      objectOutput.bayar = (akhir - awal) * 2000;
      output.push(objectOutput);
  }
  return output;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]