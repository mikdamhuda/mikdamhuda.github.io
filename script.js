function hitungProfitSharing() {
    // Ambil nilai dari input form
    var estimasiModal = parseFloat(document.getElementById('estimasiModal').value);
    var paketModal = parseFloat(document.getElementById('paketModal').value);
    var paketKeuntungan = parseFloat(document.getElementById('paketKeuntungan').value);
  
    // Hitung profit sharing
    var profitSharing = (estimasiModal / paketModal) * paketKeuntungan;
  
    // Hitung keuntungan kotor
    var keuntunganKotor = (estimasiModal / paketModal) * (profitSharing / 2);
  
    // Hitung total biaya admin
    var totalBiayaAdmin = profitSharing * 0.025;
  
    // Hitung jasa aplikasi
    var jasaAplikasi = totalBiayaAdmin / profitSharing * keuntunganKotor;
  
    // Hitung keuntungan bersih
    var keuntunganBersih = keuntunganKotor - jasaAplikasi;
  
    // Tampilkan hasil pada elemen dengan id 'hasil'
    document.getElementById('hasil').innerHTML =
      "<strong>Profit Sharing:</strong> " + profitSharing.toFixed(2) + "<br>" +
      "<strong>Keuntungan Kotor:</strong> " + keuntunganKotor.toFixed(2) + "<br>" +
      "<strong>Total Biaya Admin:</strong> " + totalBiayaAdmin.toFixed(2) + "<br>" +
      "<strong>Jasa Aplikasi:</strong> " + jasaAplikasi.toFixed(2) + "<br>" +
      "<strong>Keuntungan Bersih:</strong> " + keuntunganBersih.toFixed(2);
  }
  