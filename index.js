const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (names, cbOrderBy) => {
  const namesSortered = cbOrderBy(names);

  const namesFmt = [];
  for (let i = 0; i < namesSortered.length; i++) {
    namesFmt.push(`${i + 1}. ${namesSortered[i]}`);
  }

  return namesFmt;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (names) => {
  const namesAsc = names.sort();

  return namesAsc;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (names) => {
  const namesAsc = names.sort();
  const namesRev = namesAsc.reverse();

  return namesRev;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
