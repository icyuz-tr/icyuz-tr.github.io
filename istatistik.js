// İçyüz sitesindeki tüm sayılar. Günlük rutin (/site-guncelle) bu dosyayı Instagram'dan okuyup günceller.
// Sayılar Türkçe yazımla: "29,1B" = 29.100, "3 Mn" = 3 milyon.
window.ICYUZ_STAT = {
  guncelleme: "2026-11-05",

  // Kahraman bölümündeki üç sayı. n = sayaçta kullanılan değer, suffix = sonuna eklenen.
  ust: [
    { n: 36.6, dec: 1, suffix: "B",     etiket: "takipçi" },
    { n: 8.2,  dec: 1, suffix: " Mn+",  etiket: "toplam izlenme" },
    { n: 3.2,  dec: 1, suffix: " Mn",   etiket: "tek videoda rekor" }
  ],

  // "Markalar için" kutusu. Yalnızca İstatistikler'de görülen gerçek sayılar.
  kpi: [
    { v: "%98,9", d: "izlenmenin takipçi olmayanlardan geldiği video (KESİT 24, keşfete düşme)" },
    { v: "104B", d: "tek videonun paylaşılma sayısı (KESİT 19)" },
    { v: "%7,3",  d: "aynı videonun paylaşım oranı: her 14 izlenmeden biri gönderiyor" },
    { v: "28 gün", d: "hesabın açılışından 36,6B takipçiye" }
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
    "34": { kod: "DfU3GMcuhvC", v: "33,3 B" },
    "33": { kod: "DfSLUI1O3QG", v: "17,5 B" },
    "32": { kod: "DfPzxvIOdbN", v: "13,5 B" },
    "31": { kod: "DfNKh59uIVD", v: "93,1 B" },
    "30": { kod: "DfKlR9Eu7jC", v: "34,7 B" },
    "28": { kod: "DfFehD4uYGb", v: "14,1 B" },
    "27": { kod: "DfICmBBOK5W", v: "15,6 B" },
    "26": { kod: "DfC6roWOtwG", v: "15,8 B" },
    "25": { kod: "DfAeUYcu_fV", v: "448 B" },
    "24": { kod: "De9zR6Kud7y", v: "1,2 Mn" },
    "23": { kod: "De7Wwumu-bg", v: "33,3 B" },
    "21": { kod: "De45DwEu2Fx", v: "48,3 B" },
    "20": { kod: "De2NBPGOINE", v: "117 B" },
    "19": { kod: "Deze1Jku4BI", v: "1,4 Mn" },
    "17": { kod: "DewzqwZOAO-", v: "23,3 B" },
    "16": { kod: "DeuQ3DjOelQ", v: "153 B" },
    "15": { kod: "DerqvFTNorc", v: "26,8 B" },
    "13": { kod: "Deo-wp4gMM9", v: "152 B" },
    "12": { kod: "DemlSL8g7js", v: "24,8 B" },
    "10": { kod: "DekBsaix0As", v: "535 B" },
    "09": { kod: "Deexn7bgz7C", v: "232 B" },
    "08": { kod: "DecKoVcgnGH", v: "160 B" },
    "07": { kod: "DehWZ5egjyy", v: "3,2 Mn" },
    "06": { kod: "DeZ3igIxbxS", v: "110 B" },
    "05": { kod: "DeSEBsbxwL7", v: "23,1 B" },
    "04": { kod: "DeRd2fkOarg", v: "20,7 B" },
    "03": { kod: "DeP1qS0u1v0", v: "19,7 B" },
    "02": { kod: "DeThSgzADZM", v: "28 B" },
    "01": { kod: "DePUcypgfgD", v: "17,5 B" }
  }
};
