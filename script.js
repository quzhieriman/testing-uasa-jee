// Data keputusan murid
const dataMurid = [
  {
    nama: "QUZHIER IMAN AL IMRAN",
    BM: 94,
    BI: 98,
    SN: 92,
    MT: 96
  },
  {
    nama: "AQIL ZIKRY BIN HAMDAN",
    BM: 85,
    BI: 92,
    SN: 88,
    MT: 82
  },
  {
     nama: "HAYYAN HANANIA BIN ABDUL HALIM",
    BM: 82,
    BI: 72,
    SN: 48,
    MT: 56
  },
  {
    nama: "AL KHAWARIZMI BIN MOHAMED ZULKEFLI",
    BM: 90,
    BI: 95,
    SN: 89,
    MT: 91
  }
];

// Fungsi untuk semak keputusan murid
function semakKeputusan() {
  const inputNama = document.getElementById("namaInput").value.trim().toUpperCase();
  const paparan = document.getElementById("keputusan");

  // Cari murid berdasarkan nama
  const murid = dataMurid.find(m => m.nama.toUpperCase() === inputNama);

  if (!murid) {
    paparan.innerHTML = `<p style="color:red;">Nama tidak dijumpai. Sila semak ejaan nama penuh anda.</p>`;
    return;
  }

  // Kira jumlah keseluruhan
  const jumlah = murid.BM + murid.BI + murid.SN + murid.MT;
  const peratusKeseluruhan = (jumlah / 4).toFixed(2);

  // Paparkan keputusan
  paparan.innerHTML = `
    <h3>Keputusan Ujian Akhir 2025</h3>
    <p><strong>Nama:</strong> ${murid.nama}</p>
    <p>BM: ${gred(murid.BM)} ${murid.BM}%</p>
    <p>BI: ${gred(murid.BI)} ${murid.BI}%</p>
    <p>SN: ${gred(murid.SN)} ${murid.SN}%</p>
    <p>MT: ${gred(murid.MT)} ${murid.MT}%</p>
    <hr>
    <p><strong>KESELURUHAN:</strong> ${gred(peratusKeseluruhan)} ${peratusKeseluruhan}%</p>
    <p style="margin-top:15px; font-size:16px;">
      Sekiranya anda mendapat markah yang agak tidak memuaskan, sila mengisi maklumat di 
      <a href="#" id="googleFormLink" target="_blank" style="color:#0078D7; text-decoration:none; font-weight:bold;">link Google Forms</a> 
      saya akan isi nanti untuk kertas disemak semula.
    </p>
  `;
}

// Fungsi tentukan gred
function gred(markah) {
  if (markah >= 82) return "A";
  if (markah >= 65) return "B";
  if (markah >= 40) return "C";
  if (markah >= 19) return "D";
  return "E";
}
