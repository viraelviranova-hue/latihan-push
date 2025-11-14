// Array berisi daftar nilai siswa
let nilaiSiswa = [85, 72, 90, 65, 50];

// Perulangan untuk menampilkan nilai dan keterangan kelulusan
for (let i = 0; i < nilaiSiswa.length; i++) {
  let nilai = nilaiSiswa[i];
  console.log("Nilai: " + nilai);

  // Percabangan untuk menentukan lulus atau tidak
  if (nilai >= 75) {
    console.log("Status: Lulus ");
  } else {
    console.log("Status: Tidak Lulus ");
  }

  console.log;
}

document.write(nilaiSiswa)


