$(function () { //fonksiyonumuza başlayalım

    $('ul.sekmeler li').click(function () {//ul.sekmeler içindeki li ye tıklanınca
        var sekme_id = $(this).attr('sekme');//burada this kelimesi kendisi anlamına geliyor. Yani kendisinin sekme attributesini sekme_id değişkenine atıyoruz.

        $('ul.sekmeler li').removeClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca lilerden 'tiklanan' classı kalkıyor.
        $('.sekme-icerik').removeClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca sekme-icerikteki 'tiklanan' classı kalkıyor.

        $(this).addClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca kendisine 'tiklanan' classı atıyor.
        $("#" + sekme_id).addClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca sekmeler attr si ile eşit olan sekme-icerik classına 'tiklanan' classı atıyor.
        if (sekme_id == "sekme-1") {
            localStorage.setItem("sekmesave", "1")
    location.href = "https://www.omunot.com";

        }
        if (sekme_id == "sekme-2") {
            localStorage.setItem("sekmesave", "2")
    location.href = "https://www.omunot.com";

        }
        if (sekme_id == "sekme-3") {
            localStorage.setItem("sekmesave", "3")
    location.href = "https://www.omunot.com";

        }
    });
});
