// İçyüz sitesindeki tüm sayılar. Günlük rutin (/site-guncelle) bu dosyayı Instagram'dan okuyup günceller.
// Sayılar Türkçe yazımla: "29,1B" = 29.100, "3 Mn" = 3 milyon.
window.ICYUZ_STAT = {
  guncelleme: "2026-11-26",

  // Kahraman bölümündeki üç sayı. n = sayaçta kullanılan değer, suffix = sonuna eklenen.
  ust: [
    { n: 39.5, dec: 1, suffix: "B",     etiket: "takipçi" },
    { n: 9.4,  dec: 1, suffix: " Mn+",  etiket: "toplam izlenme" },
    { n: 3.3,  dec: 1, suffix: " Mn",   etiket: "tek videoda rekor" }
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
    "46": { kod: "DgLhd5COoZz", v: "926" },
    "45": { kod: "DgGGby1u6aV", v: "13,7 B" },
    "44": { kod: "Df2bhv1OsKc", v: "5.957" },
    "43": { kod: "Df0BayWuuuq", v: "8.604" },
    "41": { kod: "Df40IbBOi27", v: "22,5 B" },
    "40": { kod: "DfpzPGuOHtp", v: "7.238" },
    "39": { kod: "DfnS_NiuL3s", v: "6.808" },
    "38": { kod: "DfklitHuPrF", v: "10,9 B" },
    "37": { kod: "DfiMQrzOjnj", v: "865 B" },
    "36": { kod: "DfaPRmpO41N", v: "20,2 B" },
    "35": { kod: "DfXesEQuR62", v: "28,9 B" },
    "34": { kod: "DfU3GMcuhvC", v: "42,2 B" },
    "33": { kod: "DfSLUI1O3QG", v: "22 B" },
    "32": { kod: "DfPzxvIOdbN", v: "16,6 B" },
    "31": { kod: "DfNKh59uIVD", v: "100 B" },
    "30": { kod: "DfKlR9Eu7jC", v: "38,1 B" },
    "28": { kod: "DfFehD4uYGb", v: "15,4 B" },
    "27": { kod: "DfICmBBOK5W", v: "17,2 B" },
    "26": { kod: "DfC6roWOtwG", v: "17,3 B" },
    "25": { kod: "DfAeUYcu_fV", v: "458 B" },
    "24": { kod: "De9zR6Kud7y", v: "1,3 Mn" },
    "23": { kod: "De7Wwumu-bg", v: "34,5 B" },
    "21": { kod: "De45DwEu2Fx", v: "49,1 B" },
    "20": { kod: "De2NBPGOINE", v: "120 B" },
    "19": { kod: "Deze1Jku4BI", v: "1,4 Mn" },
    "17": { kod: "DewzqwZOAO-", v: "23,8 B" },
    "16": { kod: "DeuQ3DjOelQ", v: "154 B" },
    "15": { kod: "DerqvFTNorc", v: "27,3 B" },
    "13": { kod: "Deo-wp4gMM9", v: "153 B" },
    "12": { kod: "DemlSL8g7js", v: "25,2 B" },
    "10": { kod: "DekBsaix0As", v: "563 B" },
    "09": { kod: "Deexn7bgz7C", v: "233 B" },
    "08": { kod: "DecKoVcgnGH", v: "160 B" },
    "07": { kod: "DehWZ5egjyy", v: "3,3 Mn" },
    "06": { kod: "DeZ3igIxbxS", v: "114 B" },
    "05": { kod: "DeSEBsbxwL7", v: "23,3 B" },
    "04": { kod: "DeRd2fkOarg", v: "21 B" },
    "03": { kod: "DeP1qS0u1v0", v: "19,9 B" },
    "02": { kod: "DeThSgzADZM", v: "28,2 B" },
    "01": { kod: "DePUcypgfgD", v: "17,7 B" }
  }
};
