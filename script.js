// ==========================================================================================================
// // OBJECT ITERABLE
// // 1. STRING
// // 2. ARRAY
// // 3. ARGUMENTS / NODELIST
// // 4. TYPED ARRAY
// // 5. MAP
// // 6. SET
// // 7. USER-DEFINED ITERABLES

// // FOR OF & FOR IN

// // ==========================================================================
// // ARRAY
// const buah = ["apel", "mangga", "melon"];

// // FOR
// for (let i = 0; i < buah.length; i++) {
//   console.log(buah[i]);
// }

// // FOREACH
// buah.forEach((b) => console.log(b));
// buah.forEach((b, i) => {
//   console.log(`ini adalah buah ${b}, ini buah ke-${i + 1}`);
// });

// // FOR OF
// for (const b of buah) {
//   console.log(b);
// }

// for (const [i, b] of buah.entries()) {
//   console.log(`ini adalah buah ${b}, ini buah ke-${i + 1}`);
// }
// // ==========================================================================

// // ==========================================================================
// // STRING
// const nama = "DHEA RAMDANI";
// for (const n of nama) {
//   console.log(n);
// }
// // ==========================================================================

// // ==========================================================================
// // NODELIST
// const nama = document.querySelectorAll(".nama");

// // FOREACH
// nama.forEach((n) => console.log(n.innerHTML));

// // FOR OF
// for (const n of nama) {
//   console.log(n.innerHTML);
// }
// // ==========================================================================

// // ==========================================================================
// // ARGUMENTS
// function hitungJumlahAngka() {
//   let jumlah = 0;
//   for (const a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(hitungJumlahAngka(1, 2, 3, 4, 5));
// // ==========================================================================

// // ==========================================================================
// // FOR IN
// const mhs = {
//   nama: "dhea ramdani",
//   umur: 24,
//   email: "dhearr27@gmail.com",
// };
// for (const m in mhs) {
//   console.log(m);
//   console.log(mhs[m]);
// }
// // ==========================================================================

// ==========================================================================================================
