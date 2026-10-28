// İçyüz sitesindeki tüm sayılar. Günlük rutin (/site-guncelle) bu dosyayı Instagram'dan okuyup günceller.
// Sayılar Türkçe yazımla: "29,1B" = 29.100, "3 Mn" = 3 milyon.
window.ICYUZ_STAT = {
  guncelleme: "2026-10-28",

  // Kahraman bölümündeki üç sayı. n = sayaçta kullanılan değer, suffix = sonuna eklenen.
  ust: [
    { n: 29.2, dec: 1, suffix: "B",     etiket: "takipçi" },
    { n: 6.9,  dec: 1, suffix: " Mn+",  etiket: "toplam izlenme" },
    { n: 3,    dec: 0, suffix: " Mn",   etiket: "tek videoda rekor" }
  ],

  // "Markalar için" kutusu. Yalnızca İstatistikler'de görülen gerçek sayılar.
  kpi: [
    { v: "%98,8", d: "izlenmenin takipçi olmayanlardan geldiği video (KESİT 24, keşfete düşme)" },
    { v: "28,1B", d: "tek videonun paylaşılma sayısı (KESİT 24)" },
    { v: "%3,2",  d: "aynı videonun paylaşım oranı: her 31 izlenmeden biri gönderiyor" },
    { v: "20 gün", d: "hesabın açılışından 29,2B takipçiye" }
  ],

  // Video şeridi (en çok izlenenler). id = site/v/<id>.mp4 ve .jpg
  seridi: [
    { id: "kuf",         no: "07", t: "Küfü kesip attın. Gerisi temiz mi?", s: "küf" },
    { id: "sicak-yemek", no: "19", t: "Sıcak yemek dolaba konmaz mı?",      s: "buzdolabı" },
    { id: "camasir",     no: "24", t: "Çamaşırı odada kurutmak",            s: "nem" },
    { id: "kombi",       no: "10", t: "Kombiyi gece kapatmak",              s: "ısınma" },
    { id: "rolanti",     no: "25", t: "Arabayı rölantide ısıtmak",          s: "motor" },
    { id: "elektrik",    no: "09", t: "Elektrik sayacı nasıl sayar?",       s: "fatura" }
  ],

  // Her yayındaki video: Instagram reel kodu ve izlenme. Kaynaklar listesi "Videoyu izle" linkini buradan alır.
  reel: {
    "26": { kod: "DfC6roWOtwG", v: "0" },
    "25": { kod: "DfAeUYcu_fV", v: "300 B" },
    "24": { kod: "De9zR6Kud7y", v: "875 B" },
    "23": { kod: "De7Wwumu-bg", v: "23,9 B" },
    "21": { kod: "De45DwEu2Fx", v: "40,8 B" },
    "20": { kod: "De2NBPGOINE", v: "104 B" },
    "19": { kod: "Deze1Jku4BI", v: "1,1 Mn" },
    "17": { kod: "DewzqwZOAO-", v: "18,3 B" },
    "16": { kod: "DeuQ3DjOelQ", v: "144 B" },
    "15": { kod: "DerqvFTNorc", v: "20,4 B" },
    "13": { kod: "Deo-wp4gMM9", v: "148 B" },
    "12": { kod: "DemlSL8g7js", v: "21,5 B" },
    "10": { kod: "DekBsaix0As", v: "489 B" },
    "09": { kod: "Deexn7bgz7C", v: "230 B" },
    "08": { kod: "DecKoVcgnGH", v: "157 B" },
    "07": { kod: "DehWZ5egjyy", v: "3 Mn" },
    "06": { kod: "DeZ3igIxbxS", v: "107 B" },
    "05": { kod: "DeSEBsbxwL7", v: "21,6 B" },
    "04": { kod: "DeRd2fkOarg", v: "19,4 B" },
    "03": { kod: "DeP1qS0u1v0", v: "18,4 B" },
    "02": { kod: "DeThSgzADZM", v: "26,2 B" },
    "01": { kod: "DePUcypgfgD", v: "16,5 B" }
  }
};
