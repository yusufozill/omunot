
var lang = localStorage.getItem("lang")

if (lang == 2) {
    eksiks = ["Null"]
    fazlas = ["Soo Much"]
    gectins = ["Passed", "You Win"]
    kaldins = ["Not this year", "Omu is hard!", "sorry, but...", "need more study"]
    altmiss = ["From The Final"]
    barajs = ["Finals dam is 60"]
    bilginotus = ["If you didn't enter to the score in the final box, can calculate final score", "info: yusufozill@omunot.com", "Don't worry, we don't watch you", "Enjoy it"]
    Finaldens = ["Can you get", "You must get"]
    sinavlarims = ["To The Basic Of Life Exam Last", "To Life Exam Last", "To Nutriton Exam Last", "To Elective Exam Last", "To Energy Exam Last", "To MAB(Microenviro...) Exam Last", "To Reproduction Exam Last", "To Movement And Control Exam Last"];
    sinavmesajis = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    sinavyazaris = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    xoxsinavlarims = ["To Growth,Devel... Exam Last", "To Brain And Sen... Exam Last", "To Ethical Exam Last", "To Blood Exam Last", , "To Injury Exam Last", "To Elective Exam Last", "To Defence Exam Last", "To Biological Agents Exam Last"];
    xoxxsinavlarims = ["To Medical Prof... Exam Last", "To Pregnancy and... Exam Last", "To Tumors Exam Last", "To Respiratory Exam Last", "To Trauma Exam Last", "To Infection Exam Last", "To Endocrine Exam Last", "To Elective Exam Last", "To Digestive Exam Last", "To Aging Exam Last", "To Neuropsychiatry Exam Last"];

    var gun = " days "
    var saat = " hours "
    var dakika = " minutes "
    var saniye = " seconds"
}
else {
    eksiks = ["Eksik"]
    fazlas = ["ABARTMA", "YOK ARTIK!", "NASIL", "KEŞKE"]
    //gectins = ["If you didn't enter to the score in the final box, can calculate final score"]
    gectins = ["Geçtin", "Alkış", "Tebrikler",]
    kaldins = ["üzgünüm", "Omü Zor!", "olmadı :("]
    altmiss = ["alman lazım", "alman gerekli"]
    barajs = ["Final barajı 50"]
    bilginotus = ["Geçme notu 59,5 - Final barajı 49,5 alınıyor. Finalden almanız gereken 2 puan eksilmiş oluyor", "90 üzerinden 60 olarak güncellendi. Bu Mdu=100 olması demek", "Finalden kaç almanız gerektiğini final kutucuğunu boş bırakarak hesaplayabilirsiniz :)", "Katkılarınızı yusufozill@omunot.com'a iletebilirsiniz", "Merak etmeyin sizi izlemiyoruz :)", "Sayacımızı görüp panik yapmayın, sayaç olmasada zaman geçiyor"]
    Finaldens = ["Finalden"]
    // sinavlarims = ["Hayatın Temeli Sınavına Son", "Yaşam Sınavına Son", "Beslenme Sınavına Son", "Seçmeli Sınavına Son", "Enerji Sınavına Son", "MÇD Sınavına Son", "Üreme Sınavına Son", "Hareket Sınavına Son"];
    sinavlarims = ["Hayatın Temeli Sınavına Son", "Yaşam Sınavına Son", "Beslenme Sınavına Son", "Seçmeli Sınavına Son", "Enerji Sınavına Son", "MÇD Sınavına Son", "Corona sayacı bozdu", "Corona sayacı bozdu"];
    // sinavmesajis = ["","","","\"Evvela doğruyu bilmek gerektir. Doğru bilinirse yanlış da bilinir ama evvela yanlış bilinirse doğru bilinmez\"", "\"Oyunu kaybetmedik; sadece zaman yetmedi\"", "Bir şey derdim de neyse", "", "", "", "", "", ""]
    sinavmesajis = ["", "", "", "", "", "", "", "", "", "", "", ""]
    //   sinavyazaris = ["","",""," -İbni Sina", "-Vince Lombardi", "anonim", "", "", "", "", "", "", ""]
    sinavyazaris = ["", "", "Bu gün sınav olacaktı hey gidi", "Bu gün sınav olacaktı hey gidi ", "Bu gün sınav olacaktı hey gidi", "Bu gün sınav olacaktı hey gidi", "Bu gün sınav olacaktı hey gidi", "Bu gün sınav olacaktı hey gidi", "Bu gün sınav olacaktı hey gidi", "Bu gün sınav olacaktı hey gidi", "Bu gün sınav olacaktı hey gidi", "Bu gün sınav olacaktı hey gidi", "Bu gün sınav olacaktı hey gidi"]
    var gun = " gün "
    var saat = " saat "
    var dakika = " dakika "
    var saniye = "<br/> saniye"
    xoxxsinavlarims = ["Tıpta Prof... Blok Sonuna", "Gebelik Sınavına Son", "Tümörler Sınavına Son", "Solunum Sınavına Son", "Travma Sınavına Son", "Enfeksiyon Sınavına Son", "Endokrin Sınavına Son", "Corona sayacı bozdu", "Corona sayacı bozdu", "Corona sayacı bozdu", "Corona sayacı bozdu", "Corona sayacı bozdu", "Yaşlanma Sınavına Son", "Nöro-Psikiyatri Sınavına Son"];
    xoxsinavlarims = ["Büyüme ve Gelişme Sınavına Son", "Beyin Ve Duyular Sınavına Son", "Etik Sınavına Son", "Kan Sınavına Son", "Zedelenme Sınavına Son", "Corona sayacı bozdu", "Corona sayacı bozdu", "Corona sayacı bozdu", "Biyolojik Etkenler Sınavına Son"];

    //  xoxxsinavlarims = ["Tıpta Prof... Blok Sonuna", "Gebelik Sınavına Son", "Tümörler Sınavına Son", "Solunum Sınavına Son", "Travma Sınavına Son", "Enfeksiyon Sınavına Son", "Endokrin Sınavına Son", "Seçmeli Sınavına Son", "Sindirim Sınavına Son", "Yaşlanma Sınavına Son", "Nöro-Psikiyatri Sınavına Son"];
    // xoxsinavlarims = ["Büyüme ve Gelişme Sınavına Son", "Beyin Ve Duyular Sınavına Son", "Etik Sınavına Son", "Kan Sınavına Son", "Zedelenme Sınavına Son", "Seçmeli Sınavına Son", "Savunma Sınavına Son", "Biyolojik Etkenler Sınavına Son"];


};

$(function () {
    if (lang == 2) {
        document.getElementById("iccam").innerHTML = "en";
        document.getElementById("engtr").style.background = " #457fa5";




        var block = "Block:"
        var note = "Note:"
        localStorage.setItem("lang", "2");
        document.getElementById("sekme1").innerHTML = "class-1";
        document.getElementById("sekme2").innerHTML = "class-2";
        document.getElementById("sekme3").innerHTML = "class-3";
        document.getElementById("baslik").innerHTML = "Note Calculation";
        document.getElementById("xoxbaslik").innerHTML = "Note Calculation";
        document.getElementById("xoxxbaslik").innerHTML = "Note Calculation";
        document.getElementById("baslik").style.left = "0";
        document.getElementById("xoxbaslik").style.left = "0";
        document.getElementById("xoxxbaslik").style.left = "0";
        var blokses = document.getElementsByClassName("bloks");
        blokses[0].innerHTML = block;
        blokses[1].innerHTML = block;
        blokses[2].innerHTML = block;
        var notses = document.getElementsByClassName("notes");
        notses[0].innerHTML = note;
        notses[1].innerHTML = note;
        notses[2].innerHTML = note;
        var bloknot = document.getElementsByClassName("bloknote");

        bloknot[0].innerHTML = "Adaptation";
        bloknot[1].innerHTML = "The Basic of Life";
        bloknot[2].innerHTML = "Life";
        bloknot[3].innerHTML = "Nutrition";
        bloknot[4].innerHTML = "Energy";
        bloknot[5].innerHTML = "Elective";
        bloknot[6].innerHTML = "MAB (Microenviro..)";
        bloknot[7].innerHTML = "Reproduction";
        bloknot[8].innerHTML = "Movement and Control";
        bloknot[9].innerHTML = "MDA";
        bloknot[10].innerHTML = "PBL";
        bloknot[11].innerHTML = "Progress ";
        bloknot[12].innerHTML = "Final";

        var xoxbloknot = document.getElementsByClassName("xoxbloknote");
        xoxbloknot[0].innerHTML = "Growth, Development...";
        xoxbloknot[1].innerHTML = "Brain And Sensations";
        xoxbloknot[2].innerHTML = "Ethical And Medical ,Res...";
        xoxbloknot[3].innerHTML = "Injury";
        xoxbloknot[4].innerHTML = "Biological Agents";
        xoxbloknot[5].innerHTML = "Blood";
        xoxbloknot[6].innerHTML = "Defense";
        xoxbloknot[7].innerHTML = "Elective";
        xoxbloknot[8].innerHTML = "MDA";
        xoxbloknot[9].innerHTML = "PBL";
        xoxbloknot[10].innerHTML = "Progress";
        xoxbloknot[11].innerHTML = "Final";

        var hesapla = document.getElementsByClassName("Hesapla");
        hesapla[0].innerHTML = "Calculate";
        hesapla[1].innerHTML = "Calculate";
        hesapla[2].innerHTML = "Calculate";

        var xoxxbloknot = document.getElementsByClassName("xoxxbloknote");
        xoxxbloknot[0].innerHTML = "Medical Professionalism";
        xoxxbloknot[1].innerHTML = "Pregnancy and Childbirth";
        xoxxbloknot[2].innerHTML = "Trauma";
        xoxxbloknot[3].innerHTML = "Respiratory-Circulatory ";
        xoxxbloknot[4].innerHTML = "Infection";
        xoxxbloknot[5].innerHTML = "Aging";
        xoxxbloknot[6].innerHTML = "Endocrine System";
        xoxxbloknot[7].innerHTML = "Digestive System";
        xoxxbloknot[8].innerHTML = "Tumors";
        xoxxbloknot[9].innerHTML = "Neuropsychiartry";
        xoxxbloknot[10].innerHTML = "Elective";
        xoxxbloknot[11].innerHTML = "MDA";
        xoxxbloknot[12].innerHTML = "PBL";
        xoxxbloknot[13].innerHTML = "Progress";
        xoxxbloknot[14].innerHTML = "Final";
        var aciklamali = "25.08.2019 | is update date. Although the information on this site has been reviewed repeatedly, it can't guarantee the accuracy.";
        //var biompage = [""];
        //var biompage = ["***THIS PAGE NOT READY YET, YOU CAN TRY TURKISH*** <br /><br /><br />"];
        //var biompage2 = [""];
        //var biompage3 = [""];
        //var biompage4 = [""];

        var biompage = ["<br /><br /><br /><br /> If you entered this page, it means is you are curious about somethings <br /><br /> I will tell you before jump in the questions. I designed this web site for students of faculty of medicine at the university Ondokuz Mayıs University. to easily be able to calculate their year-end average masks <br /><br /> thus we have achieved a more comfortable and more fun calculation method. <br /><br /> I prepared the calculation equation of this site according to the university academic calendar and regulation. I checked it many times<br /><br /> In spite of than check any mistake can happen, to see the calculation equation check the bottom of the page. <br /><br /> The countdown works accordingly to the beginning time of the exam (09.30 AM) <br /><br />  For the security of the side. The marks you enter, will be temporally saved. And will be display you check again <br /><br /> You can use it without any worries. <br /><br /> If you want to who know i am, you look end side.  Or send mail:<a href='mailto: yusufozill@omunot.com' style='color: black; '> yusufozill@omunot.com</a><br /><br /> Enjoy it.<br /> <br />•Yusuf Özil• <br /> <br /> <br /> <br />"]
        //   var biompage = ["<br /><br /><br /><br /> If you entered this page, it mean is you are curious about somethings <br /><br /> I will ell you before jump in the questions. I designed this webside for students of faculty of medicine at the university Ondokuz Mayıs University. to easily be able to calculate their year-end avarage masks <br /><br /> thus we have acheived a more confortable and more fun calculation method. <br /><br /> I preparedthe calculation equation of this site according to the university academic calendar and regulation. I checked it many times<br /><br /> In spite of than check any mistake can happen, to see the calulation equation check the bottom of the page. <br /><br /> The countdown works accordingly to the beggining time of the exam (09.30 AM) <br /><br />  For the security of the side. The marks you enter, will be temporaly saced. And will be display you check again <br /><br /> You can use it without any worries. <br /><br /> If you want me, you look end side.  Or send mail:<a href='mailto: yusufozill@omunot.com' style='color: black; '> yusufozill@omunot.com</a><br /><br /> Enjoy it.<br /> <br />•Yusuf Özil• <br /> <br /> <br /> <br />"]

        // var biompage = ["<br /><br /><br /><br /> If you entered here, this mean is you have got any questions.<br /><br /> I say before than ask your question. I made this site for easily calculate to year-end average  to Medicine Students of Ondokuz Mayıs University. <br /><br /> So we got more easy, more comfortable, more better and more funny  method for calculate our notes.<br /><br /> While i made this system i was looked on the exam regulation and academic calendar. And i checked repeatedly.<br /><br /> However, an error may cause incorrect calculations.<br /><br /> I wrote this equation below, if you want checked it. <br /><br />Countdown tool may not be accurate because its set usually to 9.30 AM or 12.00  .<br /><br /> For your security,if you enter your informations on this site, this site make your informations save to this device. This informations not send to any server. But they are not have security keys. <br /><br /> You can use this site in peace. <br /><br /> If you want me, you look up.  Or send mail:<a href='mailto: yusufozill@omunot.com' style='color: black; '> yusufozill@omunot.com</a><br /><br /> Enjoy it.<br /> <br />•Yusuf Özil• <br /> <br /> <br /> <br />"]
        var biompage1 = ["For Class-1: <br /><span class=\"makaron\">    result= ((((((TheBasicoflife * 4) + (Life * 6) + (Nutrition * 6) +  (Energy * 6) + (MAB(Microenvir...) * 6) + (Reproduction * 6) +        (Movement * 10) + (Elective * 3) + 100) / 48) * 50)            + (MDA(MDU) * 10) + (PBL) * 10)            + (Progress * 5) +            (Final * 25)) / 100)                                    </span > <hr />"]
        var biompage2 = ["For Class-2:  <br /><span class=\"makaron\">  result= ((((((Brain * 10) +     (Growrth * 7) + (Ethical * 7) + (İnjury * 5) + (Blood * 7) + (Defence * 7) + (Elective * 4) + (Biological agents * 7) ) / 54) * 50) +  (MDA * 10) (PBL * 10) +(Progress * 5) (Final * 25)) / 100); </span > <hr />                           </div >"]
        var biompage3 = ["For Class-3: <br /><span class=\"makaron\">   sonuc = ((((((Med. Prof * 2) + (Pregnancy * 5) + (Trauma * 5) + (Respiration * 6) + (Infection * 6) + (Aging * 5) + (Endocrine * 6) + (Digestive * 5) + (Elective * 5) + (Neuropsychiartry * 5) + (Tumors * 5))/54)*50) + (MDA * 10) + (PBL * 10) + (Progress * 5) + (Final * 25))/100)   </span > <hr />           </div >"]
        var biompage4 = ["The final grade is calculated as ((139/2) - result) * 4). Pass grade is considered 69.5, Final dam is accepted as 59.5."]



        document.getElementById("acik").innerHTML = aciklamali;
        var ronder = document.getElementsByClassName("rond");

        ronder[0].innerHTML = biompage;
        ronder[1].innerHTML = biompage1;
        ronder[2].innerHTML = biompage2;
        ronder[3].innerHTML = biompage3;
        ronder[4].innerHTML = biompage4;

    }
});

$(function () {

    if (lang == 2) {
        var yeniback = "#dc2a2a"
        var yenidil = "tr";
        var eskidil = "en";

        var eskiback = "#457fa5"
    }
    else {
        var yeniback = "#457fa5";
        var eskiback = "#dc2a2a"
        var yenidil = "en";
        var eskidil = "tr";


    };
    $("#engtr").hover(function () {




        $("#engtr").css("border", "solid 1px black");
        $("#engtr").css("width", "40px");
        $("#engtr").css("background-color", yeniback);
        document.getElementById("iccam").innerHTML = yenidil;







    }, function () {

        $("#engtr").css("border", "solid 1px black");
        $("#engtr").css("width", "26px");
        $("#engtr").css("background", eskiback);
        document.getElementById("iccam").innerHTML = eskidil;



    });
});


//var koko = 0;

function metinhesap() {

    //  var fazlasss = [ "Null","Soo Much","Passed", "You win", "Not this year", "Omu is hard!", "sorry, but...","need more study","From The Final","Finals dam is 60","Eksik", "Abartmasak", "Yok artık", "Fazla oldu", "Anlamadım", "Geçtin", "alman lazım", "Final barajı 60", "alman gerekli", "Üzgünüm", "Omü zor!", "Olmadı :(", "alman lazım", "Üzgünüm", "Omü zor!", "Olmadı :(", "Geçtin", "alman gerekli", "Final barajı 60", "Eksik", "Abartmasak", "Yok artık", "Fazla oldu", "Anlamadım"]
    //koko++


    var siniflistesi = ["sonucGoster", "xoxsonucGoster", "xoxxsonucGoster"]
    var c = 0

    while (c <= 2) {
        var v = siniflistesi[c];
        // document.getElementById(v).innerHTML = fazlasss[koko];

        c++;
        var metinboyut = document.getElementById(v).innerHTML;
        var metinboyutr = metinboyut.length;
        console.log(metinboyutr);
        document.getElementById(v).style.fontSize = "60px";
        var fonte = 60;
        console.log(v)

        var dy = 1;
        while (metinboyutr * fonte > 650) {
            console.log(metinboyutr * fonte)

            fonte--

            document.getElementById(v).style.fontSize = fonte + "px";

            dy++;



        };
    };
};




function langui() {


    var lang = localStorage.getItem("lang");
    if (lang == 2) {
        localStorage.setItem("lang", "1");

        calculate();
        xoxxcalculate();
        xoxcalculate();
        location.reload();



    }
    else {
        localStorage.setItem("lang", "2");

        calculate();
        xoxxcalculate();
        xoxcalculate();
        location.reload();


    };



};
$(function () { //fonksiyonumuza başlayalım

    $('ul.sekmeler li').click(function () {//ul.sekmeler içindeki li ye tıklanınca
        var sekme_id = $(this).attr('sekme');//burada this kelimesi kendisi anlamına geliyor. Yani kendisinin sekme attributesini sekme_id değişkenine atıyoruz.

        $('ul.sekmeler li').removeClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca lilerden 'tiklanan' classı kalkıyor.
        $('.sekme-icerik').removeClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca sekme-icerikteki 'tiklanan' classı kalkıyor.

        $(this).addClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca kendisine 'tiklanan' classı atıyor.
        $("#" + sekme_id).addClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca sekmeler attr si ile eşit olan sekme-icerik classına 'tiklanan' classı atıyor.
        if (sekme_id == "sekme-1") {
            localStorage.setItem("sekmesave", "1")
        }
        if (sekme_id == "sekme-2") {
            localStorage.setItem("sekmesave", "2")
        }
        if (sekme_id == "sekme-3") {
            localStorage.setItem("sekmesave", "3")
        }
    });
});


$(function () { //fonksiyonumuza başlayalım

    var sekmesavem = localStorage.getItem("sekmesave");

    if (sekmesavem == 1) {
        var sekme_id = "sekme-1"
        var sekmesavem = "1"
    }
    if (sekmesavem == "") {
        var sekme_id = "sekme-1"
        var sekmesavem = "1"

    }
    if (sekmesavem == null) {
        var sekme_id = "sekme-1"
        var sekmesavem = "1"

    }
    if (sekmesavem == "null") {
        var sekme_id = "sekme-1"
        var sekmesavem = "1"

    }
    if (sekmesavem == 2) {
        var sekme_id = "sekme-2"

    }
    if (sekmesavem == 3) {
        var sekme_id = "sekme-3"


    }

    $('ul.sekmeler li').removeClass('tiklanan');//tıklanınca lilerden 'tiklanan' classı kalkıyor.
    $('.sekme-icerik').removeClass('tiklanan');//'tiklanan' classı kalkıyor.

    $("#sekme" + sekmesavem).addClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca kendisine 'tiklanan' classı atıyor.
    $("#" + sekme_id).addClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca sekmeler attr si ile eşit olan sekme-icerik classına 'tiklanan' classı atıyor.

});
$(function () { //fonksiyonumuza başlayalım

    $('#hakim').click(function () {
        $('ul.sekmeler li').removeClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca lilerden 'tiklanan' classı kalkıyor.
        $('.sekme-icerik').removeClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca sekme-icerikteki 'tiklanan' classı kalkıyor.


        $('#pageone').addClass('tiklanan')




    });
});





$(function () { //fonksiyonumuza başlayalım

    $('#hakkimda').click(function () {//ul.sekmeler içindeki li ye tıklanınca

        $('ul.sekmeler li').removeClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca lilerden 'tiklanan' classı kalkıyor.
        $('.sekme-icerik').removeClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca sekme-icerikteki 'tiklanan' classı kalkıyor.

        $('#sekmem').addClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca kendisine 'tiklanan' classı atıyor.
        $("#sekme-4").addClass('tiklanan');//ul.sekmeler içindeki li ye tıklanınca sekmeler attr si ile eşit olan sekme-icerik classına 'tiklanan' classı atıyor.
    });
});
$(function () {
    $(".svgclass").hover(function () {

        $(".kapak").css("-moz-transform", "rotate(29deg)");
        $(".kapak").css("-ms-transform", "rotate(29deg)");
        $(".kapak").css("-webkit-transform", "rotate(29deg)");
        $(".kapak").css("transform", "rotate(29deg)");
        $(".kapak").css("left", "4px");
        $(".kapak").css("top", "-6px");



    }, function () {

        $(".kapak").css("-moz-transform", "rotate(0deg)");
        $(".kapak").css("-ms-transform", "rotate(0deg)");
        $(".kapak").css("-webkit-transform", "rotate(0deg)");
        $(".kapak").css("transform", "rotate(0deg)");
        $(".kapak").css("left", "0");
        $(".kapak").css("top", "0");


    });
});

$(function () {
    $(".HesaplaButonu").hover(function () {

        $(".svgclass").css("right", "80px");
        $(".bilginotlari").css("transition-duration", "0.2s")
        $(".bilginotlari").css("top", "94px")



    }, function () {

        $(".svgclass").css("right", "100px");
        $(".bilginotlari").css("transition-duration", "0s")
        $(".bilginotlari").css("top", "100px")



    });
});


$(function () { //fonksiyonumuza başlayalım

    $('#svgidone').click(function () {
        //get function
        localStorage.removeItem("HayatinTemeliNotu");
        localStorage.removeItem("YasamNotu");
        localStorage.removeItem("BeslenmeNotu");
        localStorage.removeItem("EnerjiNotu");
        localStorage.removeItem("SecmeliNotu");
        localStorage.removeItem("MCDNotu");
        localStorage.removeItem("UremeNotu");
        localStorage.removeItem("HareketNotu");
        localStorage.removeItem("PDONotu");
        localStorage.removeItem("MDUNotu")
        localStorage.removeItem("GelisimNotu");
        localStorage.removeItem("FinalNotu");

        localStorage.removeItem("sonuc");
        //get function
        document.getElementById("HayatinTemeliNotu").value = localStorage.getItem("HayatinTemeliNotu");
        document.getElementById("YasamNotu").value = localStorage.getItem("YasamNotu");
        document.getElementById("BeslenmeNotu").value = localStorage.getItem("BeslenmeNotu");
        document.getElementById("EnerjiNotu").value = localStorage.getItem("EnerjiNotu");
        document.getElementById("SecmeliNotu").value = localStorage.getItem("SecmeliNotu");
        document.getElementById("MCDNotu").value = localStorage.getItem("MCDNotu");
        document.getElementById("UremeNotu").value = localStorage.getItem("UremeNotu");
        document.getElementById("HareketNotu").value = localStorage.getItem("HareketNotu");
        document.getElementById("PDONotu").value = localStorage.getItem("PDONotu");
        document.getElementById("MDUNotu").value = localStorage.getItem("MDUNotu")
        document.getElementById("GelisimNotu").value = localStorage.getItem("GelisimNotu");
        document.getElementById("FinalNotu").value = localStorage.getItem("FinalNotu");
        document.getElementById("sayiSonucGoster").innerHTML = localStorage.getItem("sonuc");
        document.getElementById("sonucGoster").innerHTML = ""




        document.getElementById("HayatinTemeliNotu").style.border = "solid #b8907e";
        document.getElementById("BeslenmeNotu").style.border = "solid #b8907e";
        document.getElementById("YasamNotu").style.border = "solid #b8907e";
        document.getElementById("SecmeliNotu").style.border = "solid #b8907e";
        document.getElementById("EnerjiNotu").style.border = "solid #b8907e";
        document.getElementById("MCDNotu").style.border = "solid #b8907e";
        document.getElementById("UremeNotu").style.border = "solid #b8907e";
        document.getElementById("HareketNotu").style.border = "solid #b8907e";
        document.getElementById("PDONotu").style.border = "solid #b8907e";
        document.getElementById("MDUNotu").style.border = "solid #b8907e";
        document.getElementById("GelisimNotu").style.border = "solid #b8907e";
        document.getElementById("FinalNotu").style.border = "solid #b8907e";


    });
});

$(function () {

    //youtubelinkleri
    $('#uremeyoutube').click(function () {

        window.open('https://www.youtube.com/playlist?list=PLU0ee0XMz8ZXU2DQvbbAb2kICQBmDTTu3')
    })
    $('#savunmayoutube').click(function () {

        window.open('https://www.youtube.com/playlist?list=PLU0ee0XMz8ZVyUi8L4n28me3D-H88OI1w')
    })
    $('#biyolojiketmenyoutube').click(function () {

        window.open('https://www.youtube.com/playlist?list=PLU0ee0XMz8ZVlGKnOeyEeVRXnTu2PbUyB')
    })
    $('#hareketyoutube').click(function () {

        window.open('https://www.youtube.com/playlist?list=PLU0ee0XMz8ZXSqTdctSrBK1ZhloV18ih5')
    })
}


)

$(function () { //fonksiyonumuza başlayalım

    $('#svgidtwo').click(function () {




        //xox get function	
        localStorage.removeItem("xoxHayatinTemeliNotu");
        localStorage.removeItem("xoxYasamNotu");
        localStorage.removeItem("xoxBeslenmeNotu");
        localStorage.removeItem("xoxEnerjiNotu");
        localStorage.removeItem("xoxSecmeliNotu");
        localStorage.removeItem("xoxMCDNotu");
        localStorage.removeItem("xoxUremeNotu");
        localStorage.removeItem("xoxHareketNotu");
        localStorage.removeItem("xoxPDONotu");
        localStorage.removeItem("xoxMDUNotu");
        localStorage.removeItem("xoxGelisimNotu");
        localStorage.removeItem("xoxFinalNotu");
        localStorage.removeItem("xoxsonuc");

        //xox get function	
        document.getElementById("xoxHayatinTemeliNotu").value = localStorage.getItem("xoxHayatinTemeliNotu");
        document.getElementById("xoxYasamNotu").value = localStorage.getItem("xoxYasamNotu");
        document.getElementById("xoxBeslenmeNotu").value = localStorage.getItem("xoxBeslenmeNotu");
        document.getElementById("xoxEnerjiNotu").value = localStorage.getItem("xoxEnerjiNotu");
        document.getElementById("xoxSecmeliNotu").value = localStorage.getItem("xoxSecmeliNotu");
        document.getElementById("xoxMCDNotu").value = localStorage.getItem("xoxMCDNotu");
        document.getElementById("xoxUremeNotu").value = localStorage.getItem("xoxUremeNotu");
        document.getElementById("xoxHareketNotu").value = localStorage.getItem("xoxHareketNotu");
        document.getElementById("xoxPDONotu").value = localStorage.getItem("xoxPDONotu");
        document.getElementById("xoxMDUNotu").value = localStorage.getItem("xoxMDUNotu");
        document.getElementById("xoxGelisimNotu").value = localStorage.getItem("xoxGelisimNotu");
        document.getElementById("xoxFinalNotu").value = localStorage.getItem("xoxFinalNotu");



        document.getElementById("xoxsayiSonucGoster").innerHTML = localStorage.getItem("xoxsonuc");
        document.getElementById("xoxsonucGoster").innerHTML = ""


        document.getElementById("xoxHayatinTemeliNotu").style.border = "solid #b8907e";
        document.getElementById("xoxBeslenmeNotu").style.border = "solid #b8907e";
        document.getElementById("xoxYasamNotu").style.border = "solid #b8907e";
        document.getElementById("xoxSecmeliNotu").style.border = "solid #b8907e";
        document.getElementById("xoxEnerjiNotu").style.border = "solid #b8907e";
        document.getElementById("xoxMCDNotu").style.border = "solid #b8907e";
        document.getElementById("xoxUremeNotu").style.border = "solid #b8907e";
        document.getElementById("xoxHareketNotu").style.border = "solid #b8907e";
        document.getElementById("xoxPDONotu").style.border = "solid #b8907e";
        document.getElementById("xoxMDUNotu").style.border = "solid #b8907e";
        document.getElementById("xoxGelisimNotu").style.border = "solid #b8907e";
        document.getElementById("xoxFinalNotu").style.border = "solid #b8907e";



    });
});


$(function () { //fonksiyonumuza başlayalım

    $('#svgidthree').click(function () {

        //xoxx get function
        localStorage.removeItem("xoxxHayatinTemeliNotu");
        localStorage.removeItem("xoxxProf");

        localStorage.removeItem("xoxxYasamNotu");
        localStorage.removeItem("xoxxBeslenmeNotu");
        localStorage.removeItem("xoxxEnerjiNotu");
        localStorage.removeItem("xoxxSecmeliNotu");
        localStorage.removeItem("xoxxMCDNotu");
        localStorage.removeItem("xoxxUremeNotu");
        localStorage.removeItem("xoxxHareketNotu");
        localStorage.removeItem("xoxxPDONotu");
        localStorage.removeItem("xoxxMDUNotu");
        localStorage.removeItem("xoxxGelisimNotu");
        localStorage.removeItem("xoxxFinalNotu");
        localStorage.removeItem("xoxxnoro");
        localStorage.removeItem("xoxxtumor");
        localStorage.removeItem("xoxxsonuc");

        //xoxx get function
        document.getElementById("xoxxHayatinTemeliNotu").value = localStorage.getItem("xoxxHayatinTemeliNotu");
        document.getElementById("xoxxProf").value = localStorage.getItem("xoxxProf");

        document.getElementById("xoxxYasamNotu").value = localStorage.getItem("xoxxYasamNotu");
        document.getElementById("xoxxBeslenmeNotu").value = localStorage.getItem("xoxxBeslenmeNotu");
        document.getElementById("xoxxEnerjiNotu").value = localStorage.getItem("xoxxEnerjiNotu");
        document.getElementById("xoxxSecmeliNotu").value = localStorage.getItem("xoxxSecmeliNotu");
        document.getElementById("xoxxMCDNotu").value = localStorage.getItem("xoxxMCDNotu");
        document.getElementById("xoxxUremeNotu").value = localStorage.getItem("xoxxUremeNotu");
        document.getElementById("xoxxHareketNotu").value = localStorage.getItem("xoxxHareketNotu");
        document.getElementById("xoxxPDONotu").value = localStorage.getItem("xoxxPDONotu");
        document.getElementById("xoxxMDUNotu").value = localStorage.getItem("xoxxMDUNotu");
        document.getElementById("xoxxGelisimNotu").value = localStorage.getItem("xoxxGelisimNotu");
        document.getElementById("xoxxFinalNotu").value = localStorage.getItem("xoxxFinalNotu");
        document.getElementById("xoxxnoro").value = localStorage.getItem("xoxxnoro");
        document.getElementById("xoxxtumor").value = localStorage.getItem("xoxxtumor");
        document.getElementById("xoxxsayiSonucGoster").innerHTML = localStorage.getItem("xoxxsonuc");
        document.getElementById("xoxxsonucGoster").innerHTML = ""





        document.getElementById("xoxxHayatinTemeliNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxProf").style.border = "solid #b8907e";

        document.getElementById("xoxxBeslenmeNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxYasamNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxSecmeliNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxEnerjiNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxMCDNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxUremeNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxnoro").style.border = "solid #b8907e";
        document.getElementById("xoxxtumor").style.border = "solid #b8907e";
        document.getElementById("xoxxHareketNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxPDONotu").style.border = "solid #b8907e";
        document.getElementById("xoxxMDUNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxGelisimNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxFinalNotu").style.border = "solid #b8907e";




    });
});











function xoxYasamFocus() {
    document.getElementById("xoxYasamNotu").focus();
}
function xoxBeslenmeFocus() {
    document.getElementById("xoxBeslenmeNotu").focus();
}
function xoxEnerjiFocus() {
    document.getElementById("xoxEnerjiNotu").focus();
}
function xoxSecmeliFocus() {
    document.getElementById("xoxSecmeliNotu").focus();
}
function xoxMCDFocus() {
    document.getElementById("xoxMCDNotu").focus();
}
function xoxUremeFocus() {
    document.getElementById("xoxUremeNotu").focus();
}
function xoxHareketFocus() {
    document.getElementById("xoxHareketNotu").focus();
}
function xoxMDUFocus() {
    document.getElementById("xoxMDUNotu").focus();
}
function xoxPDOFocus() {
    document.getElementById("xoxPDONotu").focus();
}
function xoxGelisimFocus() {
    document.getElementById("xoxGelisimNotu").focus();
}
function xoxFinalFocus() {
    document.getElementById("xoxFinalNotu").focus();
}
function xoxHayatFocus() {
    document.getElementById("xoxHayatinTemeliNotu").focus();

}








var i = 0;
var sonbilginotu = 0;
var za = 0;

var randomInterval = setInterval(function () {



    $(".bilginotlari").fadeOut(100, garipislem);






    $(".bilginotlari").delay(150).fadeIn(200);


}, 30000);

function garipislem() {
    za++;
    if (za == 3) {
        randomic();
        za = 0;
    }
}

function randomic() {



    var random = Math.floor(Math.random() * bilginotus.length);
    //  console.log('random=random word');

    var yenibilginotu = bilginotus[random];
    //  console.log('yenibilginotu=randombilginotu');
    // console.log(sonbilginotu);
    //console.log(yenibilginotu);

    var bil = document.getElementsByClassName("bilginotlari");


    if (sonbilginotu != yenibilginotu) {

        //  console.log('son bilgi notu yeni bilgi notu ile aynı değil!!!!!! çünkü son bilginotu'+'|||||||||'+sonbilginotu+'||||||||'+'yenibilginotu:'+ yenibilginotu)
        // console.log('random ise==' + random);

        sonbilginotu = yenibilginotu;


        bil[0].innerHTML = yenibilginotu;
        bil[1].innerHTML = yenibilginotu;
        bil[2].innerHTML = yenibilginotu;
    }
    else {
        if (random > 0) {


            random = random - 1;
            var yenibilginotu = bilginotus[random];
            // console.log('Son bilgi notu ile yeni bilgi notu Aynı ::::::: yeni bili notu randomun bir eksiği olarak belirlendi  random ise:');
            //console.log(random);






        }
        else {
            random++;
            var yenibilginotu = bilginotus[random];
            //     console.log('Son bilgi notu ile yeni bilgi notu Aynı OOOOOO yeni bili notu randomun bir fazlası olarak belirlendi  random ise:');

            //   console.log(random);



        }

        sonbilginotu = yenibilginotu;

        bil[0].innerHTML = yenibilginotu;
        bil[1].innerHTML = yenibilginotu;
        bil[2].innerHTML = yenibilginotu;

    }
}







var getf = setInterval(function () {
    var yenibilginotu = bilginotus[0];

    var bil = document.getElementsByClassName("bilginotlari");

    bil[0].innerHTML = yenibilginotu;
    bil[1].innerHTML = yenibilginotu;
    bil[2].innerHTML = yenibilginotu;



    //xoxx get function
    document.getElementById("xoxxHayatinTemeliNotu").value = localStorage.getItem("xoxxHayatinTemeliNotu");
    document.getElementById("xoxxProf").value = localStorage.getItem("xoxxProf");

    document.getElementById("xoxxYasamNotu").value = localStorage.getItem("xoxxYasamNotu");
    document.getElementById("xoxxBeslenmeNotu").value = localStorage.getItem("xoxxBeslenmeNotu");
    document.getElementById("xoxxEnerjiNotu").value = localStorage.getItem("xoxxEnerjiNotu");
    document.getElementById("xoxxSecmeliNotu").value = localStorage.getItem("xoxxSecmeliNotu");
    document.getElementById("xoxxMCDNotu").value = localStorage.getItem("xoxxMCDNotu");
    document.getElementById("xoxxUremeNotu").value = localStorage.getItem("xoxxUremeNotu");
    document.getElementById("xoxxHareketNotu").value = localStorage.getItem("xoxxHareketNotu");
    document.getElementById("xoxxPDONotu").value = localStorage.getItem("xoxxPDONotu");
    document.getElementById("xoxxMDUNotu").value = localStorage.getItem("xoxxMDUNotu");
    document.getElementById("xoxxGelisimNotu").value = localStorage.getItem("xoxxGelisimNotu");
    document.getElementById("xoxxFinalNotu").value = localStorage.getItem("xoxxFinalNotu");
    document.getElementById("xoxxnoro").value = localStorage.getItem("xoxxnoro");
    document.getElementById("xoxxtumor").value = localStorage.getItem("xoxxtumor");
    //xox get function	
    document.getElementById("xoxHayatinTemeliNotu").value = localStorage.getItem("xoxHayatinTemeliNotu");
    document.getElementById("xoxYasamNotu").value = localStorage.getItem("xoxYasamNotu");
    document.getElementById("xoxBeslenmeNotu").value = localStorage.getItem("xoxBeslenmeNotu");
    document.getElementById("xoxEnerjiNotu").value = localStorage.getItem("xoxEnerjiNotu");
    document.getElementById("xoxSecmeliNotu").value = localStorage.getItem("xoxSecmeliNotu");
    document.getElementById("xoxMCDNotu").value = localStorage.getItem("xoxMCDNotu");
    document.getElementById("xoxUremeNotu").value = localStorage.getItem("xoxUremeNotu");
    document.getElementById("xoxHareketNotu").value = localStorage.getItem("xoxHareketNotu");
    document.getElementById("xoxPDONotu").value = localStorage.getItem("xoxPDONotu");
    document.getElementById("xoxMDUNotu").value = localStorage.getItem("xoxMDUNotu");
    document.getElementById("xoxGelisimNotu").value = localStorage.getItem("xoxGelisimNotu");
    document.getElementById("xoxFinalNotu").value = localStorage.getItem("xoxFinalNotu");
    //get function
    document.getElementById("HayatinTemeliNotu").value = localStorage.getItem("HayatinTemeliNotu");
    document.getElementById("YasamNotu").value = localStorage.getItem("YasamNotu");
    document.getElementById("BeslenmeNotu").value = localStorage.getItem("BeslenmeNotu");
    document.getElementById("EnerjiNotu").value = localStorage.getItem("EnerjiNotu");
    document.getElementById("SecmeliNotu").value = localStorage.getItem("SecmeliNotu");
    document.getElementById("MCDNotu").value = localStorage.getItem("MCDNotu");
    document.getElementById("UremeNotu").value = localStorage.getItem("UremeNotu");
    document.getElementById("HareketNotu").value = localStorage.getItem("HareketNotu");
    document.getElementById("PDONotu").value = localStorage.getItem("PDONotu");
    document.getElementById("MDUNotu").value = localStorage.getItem("MDUNotu")
    document.getElementById("GelisimNotu").value = localStorage.getItem("GelisimNotu");
    document.getElementById("FinalNotu").value = localStorage.getItem("FinalNotu");

    document.getElementById("xoxsayiSonucGoster").innerHTML = localStorage.getItem("xoxsonuc");
    document.getElementById("xoxxsayiSonucGoster").innerHTML = localStorage.getItem("xoxxsonuc");
    document.getElementById("sayiSonucGoster").innerHTML = localStorage.getItem("sonuc");

    var lsonuc = localStorage.getItem("sonuc");
    var lxoxsonuc = localStorage.getItem("xoxsonuc");
    var lxoxxsonuc = localStorage.getItem("xoxxsonuc");

    if (lsonuc == null) {
        document.getElementById("sayiSonucGoster").innerHTML = "";


    }
    if (lxoxsonuc == null) {
        document.getElementById("xoxsayiSonucGoster").innerHTML = "";

    }
    if (lxoxxsonuc == null) {
        document.getElementById("xoxxsayiSonucGoster").innerHTML = "";

    } if (lsonuc == 1.04) {
        document.getElementById("sayiSonucGoster").innerHTML = "";


    }
    if (lxoxsonuc == 0.00) {
        document.getElementById("xoxsayiSonucGoster").innerHTML = "";

    }
    if (lxoxxsonuc == 0) {
        document.getElementById("xoxxsayiSonucGoster").innerHTML = "";

    }




    i++
    // Süre dolduğunda yazacak yazı.
    if (i == 20) {
        clearInterval(getf);

        //    document.getElementById("xoxsaatalani").innerHTML = "Süre doldu";
    }

    var yukseklik = screen.height;
    var genislik = screen.width;


    var oran = yukseklik / genislik;
    var kilitoran = 990 / 700;
    var genisadim = genislik / 700;
    var styukseklik = 990 * genisadim;
    var gorecefark = yukseklik - styukseklik;
    var sonadimb = 990 * gorecefark / styukseklik;
    var sonadim = sonadimb - 90;

    if (oran >= kilitoran) {

        document.getElementById("komport").style.top = sonadim + "px";

    }





}, 10);

var monday = setInterval(function () {

    var yukseklik = screen.height;
    var genislik = screen.width;
    var oran = yukseklik / genislik;
    var kilitoran = 990 / 700;
    var genisadim = genislik / 700;
    var styukseklik = 990 * genisadim;
    var gorecefark = yukseklik - styukseklik;
    var sonadimb = 990 * gorecefark / styukseklik;
    var sonadim = sonadimb - 90;

    if (oran >= kilitoran) {

        document.getElementById("komport").style.top = sonadim + "px";
    };



    var doninput = document.getElementsByClassName("iinput");
    var donxoxbenzersiz = document.getElementsByClassName("xoxbenzersiz");
    var donxoxxbenzersiz = document.getElementsByClassName("xoxxbenzersiz");
    var don = 0
    while (don < 13) {
        var donnot = doninput[don].value;
        if (donnot > 0 && donnot <= 100) {
            doninput[don].style.border = "solid #b8907e";
        }
        don++
    };
    var xoxdon = 0
    while (xoxdon < 12) {
        var xoxdonnot = donxoxbenzersiz[xoxdon].value;
        if (xoxdonnot > 0 && xoxdonnot <= 100) {
            donxoxbenzersiz[xoxdon].style.border = "solid #b8907e";
        }
        xoxdon++
    };
    var xoxxdon = 0
    while (xoxxdon < 15) {
        var xoxxdonnot = donxoxxbenzersiz[xoxxdon].value;
        if (xoxxdonnot > 0 && xoxxdonnot <= 100) {
            donxoxxbenzersiz[xoxxdon].style.border = "solid #b8907e";
        }
        xoxxdon++
    };




}, 10);




function yusuf() {
    window.open("https://www.instagram.com/yusufozill");
}








/*var xoxx = setInterval(function () {

    // Sistem saatini alıyoruz
    var xoxxnow = new Date().getTime();



    // Sınav Tarihlerini yazıyoruz
    var tipta = new Date(2019, 08, 20, 09, 30).getTime();
    var gebe = new Date(2019, 09, 11, 09, 30).getTime();
    var tumor = new Date(2019, 10, 01, 09, 30).getTime();
    var solunum = new Date(2019, 10, 29, 09, 30).getTime();
    var travma = new Date(2019, 11, 20, 09, 30).getTime();
    var enfeksiyon = new Date(2020, 0, 17, 09, 30).getTime();
    var endokrin = new Date(2020, 01, 28, 09, 30).getTime();

    var xoxxsecmeli = new Date(2020, 02, 20, 09, 30).getTime();
    var sindirim = new Date(2020, 03, 10, 09, 30).getTime();
    var yaslanma = new Date(2020, 03, 30, 09, 30).getTime();
    var noro = new Date(2020, 04, 22, 09, 30).getTime();

    var xoxxsinav = [tipta, gebe, tumor, solunum, travma, enfeksiyon, endokrin, xoxxsecmeli, sindirim, yaslanma,noro];

    // hangi sınavda olduğumuzu bul
    var xoxxsiirt = 0;
    while (xoxxnow >= xoxxsinav[xoxxsiirt]) {
        xoxxsiirt++;
    };

    var xoxxsinavlarim = xoxxsinavlarims[xoxxsiirt]
    var xoxxcountDownDate = xoxxsinav[xoxxsiirt];
    var xoxxoncekisinav = xoxxsinav[xoxxsiirt - 1];
    var xoxxsinavani = xoxxnow - xoxxoncekisinav;
    var sinavmesaji = sinavmesajis[xoxxsiirt];
    var sinavyazari = sinavyazaris[xoxxsiirt];




    // Geri sayımla şimdi saat arasındaki zamanı ölçüyoruz
    var xoxxdistance = xoxxcountDownDate - xoxxnow;



    // Gün, Saat, Dakika, Saniye işlemleri yapılıyor
    var xoxxdays = Math.floor(xoxxdistance / (1000 * 60 * 60 * 24));
    var xoxxhours = Math.floor((xoxxdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var xoxxminutes = Math.floor((xoxxdistance % (1000 * 60 * 60)) / (1000 * 60));
    var xoxxseconds = Math.floor((xoxxdistance % (1000 * 60)) / 1000);

    // Anlık olarak id="gerisayim" içine aktarılıyor
    document.getElementById("xoxxyazialani").innerHTML = xoxxsinavlarim;
    //document.getElementById("xoxxsaatalani").innerHTML = xoxxdays + gun + xoxxhours + saat + xoxxminutes + dakika + xoxxseconds + saniye;



   if (xoxxsinavani > 0 && xoxxsinavani < 9000000) {
        clearInterval(xoxx);

        // Anlık olarak id="gerisayim" içine aktarılıyor
        document.getElementById("xoxxsaatalani").innerHTML = "Sınavda Başarılar";
        document.getElementById("xoxxyazialani").innerHTML = "";
        document.getElementById("xoxxsaatalani").style.border = "solid #e46938";
        document.getElementById("xoxxsaatalani").style.height = "auto";
        document.getElementById("xoxxCingozalani").style.border = "none";





    }
    else if (xoxxsinavani >= 9000000 && xoxxsinavani <= 52200000) {
        clearInterval(xoxx);



       // Anlık olarak id="gerisayim" içine aktarılıyor
       document.getElementById("xoxxyazialani").innerHTML = sinavmesaji;

       document.getElementById("xoxxyazialani").style.border = "none";
       //document.getElementById("yazialani").style.border = "solid #e46938";
       document.getElementById("xoxxyazialani").style.height = "auto";



       document.getElementById("xoxxCingozalani").style.border = "none";
       document.getElementById("xoxxsaatalani").innerHTML = sinavyazari;
       document.getElementById("xoxxsaatalani").style.height = "30px";

       document.getElementById("xoxxsaatalani").style.float = "right";
       document.getElementById("xoxxsaatalani").style.fontSize = "30px";
        // Anlık olarak id="gerisayim" içine aktarılıyor
//        document.getElementById("xoxxsaatalani").innerHTML = sinavmesaji;
  //      document.getElementById("xoxxsaatalani").style.border = "solid #e46938";
    //    document.getElementById("xoxxsaatalani").style.height = "auto";



      //  document.getElementById("xoxxCingozalani").style.border = "none";
       // document.getElementById("xoxxyazialani").innerHTML = "";



    }





    // Süre dolduğunda yazacak yazı.
    //  if (distance < 0) {
    // clearInterval(x);
    // document.getElementById("saatalani").innerHTML = "";
    // document.getElementById("yazialani").innerHTML = "";
    //};
}, 1000);
*/

//var xoxcountDownDate = 0;

//var xoxx = setInterval(function () {



// Sistem saatini alıyoruz
//  var xoxnow = new Date().getTime();

// Geri sayımla şimdi saat arasındaki zamanı ölçüyoruz
//  var xoxdistance = xoxcountDownDate - xoxnow;

// Gün, Saat, Dakika, Saniye işlemleri yapılıyor
//var xoxdays = Math.floor(xoxdistance / (1000 * 60 * 60 * 24));
//var xoxhours = Math.floor((xoxdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//  var xoxminutes = Math.floor((xoxdistance % (1000 * 60 * 60)) / (1000 * 60));
//var xoxseconds = Math.floor((xoxdistance % (1000 * 60)) / 1000);

// Anlık olarak id="xoxgerisayim" içine aktarılıyor
//document.getElementById("xoxyazialani").innerHTML = "";

// Süre dolduğunda yazacak yazı.
// if (xoxdistance < 0) {
// clearInterval(x);
//    document.getElementById("xoxsaatalani").innerHTML = "Süre doldu";
//  }
//}, 1000);*








function xoxcalculate() {
    var eksik = eksiks[Math.floor(Math.random() * eksiks.length)];
    var fazla = fazlas[Math.floor(Math.random() * fazlas.length)];
    var gectin = gectins[Math.floor(Math.random() * gectins.length)];
    var kaldin = kaldins[Math.floor(Math.random() * kaldins.length)];
    var altmıs = altmiss[Math.floor(Math.random() * altmiss.length)];
    var baraj = barajs[Math.floor(Math.random() * barajs.length)];
    var Finalden = Finaldens[Math.floor(Math.random() * Finaldens.length)];









    var xoxHayatinTemeliNotu = document.getElementById("xoxHayatinTemeliNotu").value;
    var xoxYasamNotu = document.getElementById("xoxYasamNotu").value;
    var xoxBeslenmeNotu = document.getElementById("xoxBeslenmeNotu").value;
    var xoxEnerjiNotu = document.getElementById("xoxEnerjiNotu").value;
    var xoxSecmeliNotu = document.getElementById("xoxSecmeliNotu").value;
    var xoxMCDNotu = document.getElementById("xoxMCDNotu").value;
    var xoxUremeNotu = document.getElementById("xoxUremeNotu").value;
    var xoxHareketNotu = document.getElementById("xoxHareketNotu").value;
    var xoxPDONotu = document.getElementById("xoxPDONotu").value;
    var xoxMDUNotu = document.getElementById("xoxMDUNotu").value;
    var xoxGelisimNotu = document.getElementById("xoxGelisimNotu").value;
    var xoxFinalNotu = document.getElementById("xoxFinalNotu").value;


    //set function
    localStorage.setItem("xoxHayatinTemeliNotu", xoxHayatinTemeliNotu);
    localStorage.setItem("xoxYasamNotu", xoxYasamNotu);
    localStorage.setItem("xoxBeslenmeNotu", xoxBeslenmeNotu);
    localStorage.setItem("xoxEnerjiNotu", xoxEnerjiNotu);
    localStorage.setItem("xoxSecmeliNotu", xoxSecmeliNotu);
    localStorage.setItem("xoxMCDNotu", xoxMCDNotu);
    localStorage.setItem("xoxUremeNotu", xoxUremeNotu);
    localStorage.setItem("xoxHareketNotu", xoxHareketNotu);
    localStorage.setItem("xoxPDONotu", xoxPDONotu);
    localStorage.setItem("xoxMDUNotu", xoxMDUNotu);
    localStorage.setItem("xoxGelisimNotu", xoxGelisimNotu);
    localStorage.setItem("xoxFinalNotu", xoxFinalNotu);


    xoxHayatinTemeliNotu = Number(xoxHayatinTemeliNotu);
    xoxHareketNotu = Number(xoxHareketNotu);
    xoxYasamNotu = Number(xoxYasamNotu);
    xoxPDONotu = Number(xoxPDONotu);
    xoxBeslenmeNotu = Number(xoxBeslenmeNotu);
    xoxMDUNotu = Number(xoxMDUNotu);
    xoxEnerjiNotu = Number(xoxEnerjiNotu);
    xoxGelisimNotu = Number(xoxGelisimNotu);
    xoxSecmeliNotu = Number(xoxSecmeliNotu);
    xoxFinalNotu = Number(xoxFinalNotu);
    xoxMCDNotu = Number(xoxMCDNotu);
    xoxUremeNotu = Number(xoxUremeNotu);



    var xoxsonuc;


    {
        xoxsonuc = (
            ((((
                (xoxHayatinTemeliNotu * 10) +
                (xoxYasamNotu * 7) +
                (xoxBeslenmeNotu * 7) +
                (xoxEnerjiNotu * 5) +
                (xoxMCDNotu * 7) +
                (xoxUremeNotu * 7) +
                (xoxHareketNotu * 4) +
                (xoxSecmeliNotu * 7)
            ) / 54) * 50) +
                /*(xoxMDUNotu * 0 ) +*/
                (xoxPDONotu * 10) +
                (xoxGelisimNotu * 5) +
                (xoxFinalNotu * 25)
            ) / 100
        );
    }
    xoxsonuc = xoxsonuc.toFixed(2);





    /* var xoxsonuc90;
 
 
 {
     xoxsonuc90 = (
             ((((
                 (xoxHayatinTemeliNotu * 10) +
                 (xoxYasamNotu * 7) +
                 (xoxBeslenmeNotu * 7) +
                 (xoxEnerjiNotu * 5) +
                 (xoxMCDNotu * 7) +
                 (xoxUremeNotu * 7) +
                 (xoxHareketNotu * 4) +
                 (xoxSecmeliNotu * 7)
             ) / 54) * 50) +
                 /*(xoxMDUNotu * 0 ) +
                 (xoxPDONotu * 10) +
                 (xoxGelisimNotu * 5) +
                 (xoxFinalNotu * 25)
             ) /100
         );
 }
 xoxsonuc90 = xoxsonuc90.toFixed(2);
 var xoxyuzdelik = xoxsonuc90*100/90;
 xoxyuzdelik = xoxyuzdelik.toFixed(2);
 
 if(xoxsonuc90 >= 125/2){
     document.getElementById("xoxyazialani").innerHTML = "(90lı sistem)geçtin ortalaman=";
     document.getElementById("xoxsaatalani").innerHTML = xoxsonuc90+"(%"+xoxyuzdelik+")";
 
 }else{
     document.getElementById("xoxyazialani").innerHTML = ":( ortalaman ";
     document.getElementById("xoxsaatalani").innerHTML = xoxsonuc90+"(%"+xoxyuzdelik+")";
 
 }; **/





    //eksik-fazla kutuları bulucaz
    var xoxinpute = document.getElementsByClassName("xoxbenzersiz");
    var xoxmon = 0;
    while (xoxmon < 12) {
        var xoxbakilacaknot = xoxinpute[xoxmon].value;
        var xoxbakilacaknot = Number(xoxbakilacaknot);
        if (xoxbakilacaknot > 100) {
            xoxinpute[xoxmon].style.border = "solid #b1a928";
        };
        if (xoxbakilacaknot <= 0) {
            xoxinpute[xoxmon].style.border = "solid #dc2a2a"
        }
        xoxmon++;


    };
    /* xox Değişkenler **/
    var xoxGecmeNotu = 119 / 2; /*70*/ /* Yılsonu geçme notu*/
    var xoxFinalBaraji = 99 / 2;/*60*/ /*Yılsonu final barajı*/
    var xoxFinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
    var xoxYilSonuMax = 90; /*100*/ /* Yıl sonunda alınacak maximum puan*/


    if (xoxFinalNotu == "") {
        document.getElementById("xoxFinalNotu").style.border = "solid #dc2a2a";

        var xoxsonuc2 = (xoxGecmeNotu - xoxsonuc) * xoxFinalKatkisi;
        xoxsonuc2 = xoxsonuc2.toFixed(2);

        /*   var xoxsonuc92 = ((125 / 2) - xoxsonuc90) * 4;
           xoxsonuc92 = xoxsonuc92.toFixed(2);
           
       
           document.getElementById("xoxyazialani").innerHTML = "(90 lı sistem)finalden alman gereken";
       document.getElementById("xoxsaatalani").innerHTML = xoxsonuc92;*/




        if (xoxsonuc2 < -22) {
            document.getElementById("xoxsonucGoster").innerHTML = fazla;
            document.getElementById("xoxsonucEkrani").style.fontSize = "40px";
            document.getElementById("xoxsonucEkrani").style.color = " #b1a928 ";
            document.getElementById("xoxsonucEkrani").style.border = "3px";
            document.getElementById("xoxsayiSonucGoster").innerHTML = xoxsonuc;
            document.getElementById("xoxfinalekrani").innerHTML = "";




        }
        else
            if (xoxsonuc2 <= xoxFinalBaraji) {
                document.getElementById("xoxsayiSonucGoster").innerHTML = xoxFinalBaraji;
                document.getElementById("xoxsonucGoster").innerHTML = altmıs;
                document.getElementById("xoxfinalekrani").style.width = "300px";
                document.getElementById("xoxsonucEkrani").style.border = "0px";
                document.getElementById("xoxsonucEkrani").style.fontSize = "40px";

                document.getElementById("xoxfinalekrani").innerHTML = Finalden;

                document.getElementById("xoxsonucEkrani").style.color = "black";
            }


            else if (xoxsonuc2 <= 100) {
                document.getElementById("xoxsayiSonucGoster").innerHTML = xoxsonuc2;
                document.getElementById("xoxsonucGoster").innerHTML = altmıs
                document.getElementById("xoxsonucEkrani").style.border = "0px";
                document.getElementById("xoxfinalekrani").style.width = "300px";
                document.getElementById("xoxsonucEkrani").style.fontSize = "40px";
                // document.getElementById("xoxsonucEkrani").style.left="70px";
                // document.getElementById("xoxsonucEkrani").style.top="150px";
                document.getElementById("xoxfinalekrani").innerHTML = Finalden;
                // document.getElementById("xoxfinalekrani").style.left="20px";
                //document.getElementById("xoxfinalekrani").style.top="-80px";
                document.getElementById("xoxsonucEkrani").style.color = "black";
            }

            else {
                document.getElementById("xoxsonucGoster").innerHTML = kaldin;
                document.getElementById("xoxsonucEkrani").style.fontSize = "40px";
                document.getElementById("xoxsonucEkrani").style.color = "#dc2a2a";
                document.getElementById("xoxsonucEkrani").style.border = "3px";
                document.getElementById("xoxsayiSonucGoster").innerHTML = xoxsonuc;
                document.getElementById("xoxfinalekrani").innerHTML = "";
                //set function
                localStorage.setItem("xoxsonuc", xoxsonuc);

            }
    }
    else {



        document.getElementById("xoxsayiSonucGoster").innerHTML = xoxsonuc;
        //set function
        localStorage.setItem("xoxsonuc", xoxsonuc);



        if (xoxsonuc < xoxGecmeNotu) {

            document.getElementById("xoxsonucGoster").innerHTML = kaldin;
            document.getElementById("xoxsonucEkrani").style.color = "#dc2a2a";
            document.getElementById("xoxfinalekrani").innerHTML = "";
            document.getElementById("xoxsonucEkrani").style.border = "3px";

            document.getElementById("xoxsonucEkrani").style.fontSize = "40px";


        }
        else if (xoxsonuc <= xoxYilSonuMax) {
            if (xoxFinalNotu < xoxFinalBaraji) {
                document.getElementById("xoxsonucGoster").innerHTML = baraj;
                document.getElementById("xoxsonucEkrani").style.color = "#dc2a2a";
                document.getElementById("xoxsonucEkrani").style.border = "3px";

                document.getElementById("xoxfinalekrani").innerHTML = "";
                document.getElementById("xoxsonucEkrani").style.fontSize = "40px";


            } else {
                document.getElementById("xoxsonucGoster").innerHTML = gectin;
                document.getElementById("xoxsonucEkrani").style.color = "#56b856";
                document.getElementById("xoxfinalekrani").innerHTML = "";
            }
        }
        else {

            document.getElementById("xoxsonucGoster").innerHTML = fazla;
            document.getElementById("xoxsonucEkrani").style.color = " #b1a928 ";
            //document.getElementById("xoxsonucEkrani").style.fontSize="30px";}
            document.getElementById("xoxsonucEkrani").style.fontSize = "50px";
            //document.getElementById("xoxsonucEkrani").style.left="-90px";
            //document.getElementById("xoxsonucEkrani").style.top="45px";
            document.getElementById("xoxfinalekrani").innerHTML = "";
        }


        //document.getElementById("xoxsonucGoster").style.font="";
    }
    localStorage.setItem("xoxsonuc", xoxsonuc);
    metinhesap();

};


function xoxxYasamFocus() {
    document.getElementById("xoxxYasamNotu").focus();
}
function xoxxBeslenmeFocus() {
    document.getElementById("xoxxBeslenmeNotu").focus();
}
function xoxxEnerjiFocus() {
    document.getElementById("xoxxEnerjiNotu").focus();
} function xoxxSecmeliFocus() {
    document.getElementById("xoxxSecmeliNotu").focus();
} function xoxxMCDFocus() {
    document.getElementById("xoxxMCDNotu").focus();
} function xoxxUremeFocus() {
    document.getElementById("xoxxUremeNotu").focus();
} function xoxxHareketFocus() {
    document.getElementById("xoxxHareketNotu").focus();
}
function xoxxMDUFocus() {
    document.getElementById("xoxxMDUNotu").focus();
}
function xoxxPDOFocus() {
    document.getElementById("xoxxPDONotu").focus();
}
function xoxxGelisimFocus() {
    document.getElementById("xoxxGelisimNotu").focus();
}
function xoxxFinalFocus() {
    document.getElementById("xoxxFinalNotu").focus();
}
function xoxxHayatFocus() {
    document.getElementById("xoxxHayatinTemeliNotu").focus();

}
function xoxxProfFocus() {
    document.getElementById("xoxxProf").focus();

}
function xoxxnoroFocus() {
    document.getElementById("xoxxnoro").focus();

} function xoxxtumorFocus() {
    document.getElementById("xoxxtumor").focus();

}



/*var xox = setInterval(function () {

    // Sistem saatini alıyoruz
    var xoxnow = new Date().getTime();



    // Sınav Tarihlerini yazıyoruz
    var uyum = new Date(2019, 07, 30, 09, 30).getTime();
    var buyume = new Date(2019, 09, 11, 09, 30).getTime();
    var beyin= new Date(2019, 10, 29, 09, 30).getTime();
    var etik = new Date(2019, 11, 27, 09, 30).getTime();
    var kan = new Date(2020, 0, 24, 09, 30).getTime();
    var zedelenme = new Date(2020, 01, 28, 09, 30).getTime();
    var xoxsecmeli= new Date(2020, 02, 20, 09, 30).getTime();
    var savunma = new Date(2020, 03, 17, 09, 30).getTime();
    var biyolojik = new Date(2020, 04, 15, 09, 30).getTime();
    var xoxsinav = [buyume, beyin, etik, kan, zedelenme, xoxsecmeli, savunma, biyolojik];

    // hangi sınavda olduğumuzu bul
    var xoxsiirt = 0;
    while (xoxnow >= xoxsinav[xoxsiirt]) {
        xoxsiirt++;
    };

    var xoxsinavlarim = xoxsinavlarims[xoxsiirt]
    var xoxcountDownDate = xoxsinav[xoxsiirt];
    var xoxoncekisinav = xoxsinav[xoxsiirt - 1];
    var xoxsinavani = xoxnow - xoxoncekisinav;
    var sinavmesaji = sinavmesajis[xoxsiirt];
    var sinavyazari = sinavyazaris[xoxsiirt];




    // Geri sayımla şimdi saat arasındaki zamanı ölçüyoruz
    var xoxdistance = xoxcountDownDate - xoxnow;



    // Gün, Saat, Dakika, Saniye işlemleri yapılıyor
    var xoxdays = Math.floor(xoxdistance / (1000 * 60 * 60 * 24));
    var xoxhours = Math.floor((xoxdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var xoxminutes = Math.floor((xoxdistance % (1000 * 60 * 60)) / (1000 * 60));
    var xoxseconds = Math.floor((xoxdistance % (1000 * 60)) / 1000);

    // Anlık olarak id="gerisayim" içine aktarılıyor
    document.getElementById("xoxyazialani").innerHTML = xoxsinavlarim;
  //  document.getElementById("xoxsaatalani").innerHTML = xoxdays + gun + xoxhours + saat + xoxminutes + dakika + xoxseconds + saniye;



    if (xoxsinavani > 0 && xoxsinavani < 9000000) {
        clearInterval(xox);

        // Anlık olarak id="gerisayim" içine aktarılıyor
        document.getElementById("xoxsaatalani").innerHTML = "Sınavda Başarılar";
        document.getElementById("xoxyazialani").innerHTML = "";
        document.getElementById("xoxsaatalani").style.border = "solid #e46938";
        document.getElementById("xoxsaatalani").style.height = "auto";
        document.getElementById("xoxCingozalani").style.border = "none";





    }
    else if (xoxsinavani >= 9000000 && xoxsinavani <= 52200000) {
        clearInterval(xox);


        // Anlık olarak id="gerisayim" içine aktarılıyor
        document.getElementById("xoxyazialani").innerHTML = sinavmesaji;

        document.getElementById("xoxyazialani").style.border = "none";
        //document.getElementById("yazialani").style.border = "solid #e46938";
        document.getElementById("yazialani").style.height = "auto";


        document.getElementById("xoxsaatalani").style.height = "30px";

        document.getElementById("xoxCingozalani").style.border = "none";
        document.getElementById("xoxsaatalani").innerHTML = sinavyazari;
        document.getElementById("xoxsaatalani").style.float = "right";
        document.getElementById("xoxsaatalani").style.fontSize = "30px";
        // Anlık olarak id="gerisayim" içine aktarılıyor
     //   document.getElementById("xoxsaatalani").innerHTML = sinavmesaji;
       // document.getElementById("xoxsaatalani").style.border = "solid #e46938";
       // document.getElementById("xoxsaatalani").style.height = "auto";



//        document.getElementById("xoxCingozalani").style.border = "none";
  //      document.getElementById("xoxyazialani").innerHTML = "";



    }





    // Süre dolduğunda yazacak yazı.
    //  if (distance < 0) {
    // clearInterval(x);
    // document.getElementById("saatalani").innerHTML = "";
    // document.getElementById("yazialani").innerHTML = "";
    //};
}, 1000);
*/

//var xoxxcountDownDate = 0;

//var xoxxx = setInterval(function() {

// Sistem saatini alıyoruz
///	var xoxxnow = new Date().getTime();

// Geri sayımla şimdi saat arasındaki zamanı ölçüyoruz
//var xoxxdistance = xoxxcountDownDate - xoxxnow;

// Gün, Saat, Dakika, Saniye işlemleri yapılıyor
//	var xoxxdays = Math.floor(xoxxdistance / (1000 * 60 * 60 * 24));
//	var xoxxhours = Math.floor((xoxxdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//	var xoxxminutes = Math.floor((xoxxdistance % (1000 * 60 * 60)) / (1000 * 60));
//	var xoxxseconds = Math.floor((xoxxdistance % (1000 * 60)) / 1000);

// Anlık olarak id="xoxxgerisayim" içine aktarılıyor
//	document.getElementById("xoxxsaatalani").innerHTML = xoxxdays + " gün " + xoxxhours + " saat " + xoxxminutes +" dakika " + xoxxseconds + " saniye "  ;


//}, 1000);



function xoxxcalculate() {
    var eksik = eksiks[Math.floor(Math.random() * eksiks.length)];
    var fazla = fazlas[Math.floor(Math.random() * fazlas.length)];
    var gectin = gectins[Math.floor(Math.random() * gectins.length)];
    var kaldin = kaldins[Math.floor(Math.random() * kaldins.length)];
    var altmıs = altmiss[Math.floor(Math.random() * altmiss.length)];
    var baraj = barajs[Math.floor(Math.random() * barajs.length)];
    var Finalden = Finaldens[Math.floor(Math.random() * Finaldens.length)];





    var xoxxHayatinTemeliNotu = document.getElementById("xoxxHayatinTemeliNotu").value;
    var xoxxProf = document.getElementById("xoxxProf").value;

    var xoxxYasamNotu = document.getElementById("xoxxYasamNotu").value;
    var xoxxBeslenmeNotu = document.getElementById("xoxxBeslenmeNotu").value;
    var xoxxEnerjiNotu = document.getElementById("xoxxEnerjiNotu").value;
    var xoxxSecmeliNotu = document.getElementById("xoxxSecmeliNotu").value;
    var xoxxMCDNotu = document.getElementById("xoxxMCDNotu").value;
    var xoxxUremeNotu = document.getElementById("xoxxUremeNotu").value;
    var xoxxHareketNotu = document.getElementById("xoxxHareketNotu").value;
    var xoxxPDONotu = document.getElementById("xoxxPDONotu").value;
    var xoxxMDUNotu = document.getElementById("xoxxMDUNotu").value;
    var xoxxGelisimNotu = document.getElementById("xoxxGelisimNotu").value;
    var xoxxFinalNotu = document.getElementById("xoxxFinalNotu").value;
    var xoxxnoro = document.getElementById("xoxxnoro").value;
    var xoxxtumor = document.getElementById("xoxxtumor").value;


    //set function
    localStorage.setItem("xoxxHayatinTemeliNotu", xoxxHayatinTemeliNotu);
    localStorage.setItem("xoxxProf", xoxxProf);

    localStorage.setItem("xoxxYasamNotu", xoxxYasamNotu);
    localStorage.setItem("xoxxBeslenmeNotu", xoxxBeslenmeNotu);
    localStorage.setItem("xoxxEnerjiNotu", xoxxEnerjiNotu);
    localStorage.setItem("xoxxSecmeliNotu", xoxxSecmeliNotu);
    localStorage.setItem("xoxxMCDNotu", xoxxMCDNotu);
    localStorage.setItem("xoxxUremeNotu", xoxxUremeNotu);
    localStorage.setItem("xoxxHareketNotu", xoxxHareketNotu);
    localStorage.setItem("xoxxPDONotu", xoxxPDONotu);
    localStorage.setItem("xoxxMDUNotu", xoxxMDUNotu);
    localStorage.setItem("xoxxGelisimNotu", xoxxGelisimNotu);
    localStorage.setItem("xoxxFinalNotu", xoxxFinalNotu);
    localStorage.setItem("xoxxnoro", xoxxnoro);
    localStorage.setItem("xoxxtumor", xoxxtumor);


    xoxxHayatinTemeliNotu = Number(xoxxHayatinTemeliNotu);
    xoxxProf = Number(xoxxProf);

    xoxxHareketNotu = Number(xoxxHareketNotu);
    xoxxYasamNotu = Number(xoxxYasamNotu);
    xoxxPDONotu = Number(xoxxPDONotu);
    xoxxBeslenmeNotu = Number(xoxxBeslenmeNotu);
    xoxxMDUNotu = Number(xoxxMDUNotu);
    xoxxEnerjiNotu = Number(xoxxEnerjiNotu);
    xoxxGelisimNotu = Number(xoxxGelisimNotu);
    xoxxSecmeliNotu = Number(xoxxSecmeliNotu);
    xoxxFinalNotu = Number(xoxxFinalNotu);
    xoxxMCDNotu = Number(xoxxMCDNotu);
    xoxxUremeNotu = Number(xoxxUremeNotu);
    xoxxtumor = Number(xoxxtumor);
    xoxxnoro = Number(xoxxnoro);



    var xoxxsonuc;


    {
        xoxxsonuc = (
            (
                (
                    ((
                        (xoxxProf * 2) +
                        (xoxxHayatinTemeliNotu * 5) +
                        (xoxxYasamNotu * 5) +
                        (xoxxBeslenmeNotu * 6) +
                        (xoxxEnerjiNotu * 6) +
                        (xoxxMCDNotu * 6) +
                        (xoxxUremeNotu * 5) +
                        (xoxxHareketNotu * 4) +
                        (xoxxSecmeliNotu * 5) +
                        (xoxxnoro * 5) +
                        (xoxxtumor * 5)

                    ) / 54) * 50) +
                /*(xoxxMDUNotu * 0)*/ +
                (xoxxPDONotu * 10) +
                (xoxxGelisimNotu * 5) +
                (xoxxFinalNotu * 25)
            ) / 100
        )
            ;
    }
    xoxxsonuc = xoxxsonuc.toFixed(2);





    /*    var xoxxsonuc90;
    
    
    {
        xoxxsonuc90 = (
            (
                (
                    ((
                            (xoxxProf*2)+
                            (xoxxHayatinTemeliNotu * 5) +
                            (xoxxYasamNotu * 5) +
                            (xoxxBeslenmeNotu * 6) +
                            (xoxxEnerjiNotu * 6) +
                            (xoxxMCDNotu * 6) +
                            (xoxxUremeNotu * 5) +
                            (xoxxHareketNotu * 4) +
                            (xoxxSecmeliNotu * 5) +
                            (xoxxnoro * 5) +
                            (xoxxtumor * 5)
    
                        ) / 54) * 50) +
                    /*(xoxxMDUNotu * 0) +
                    (xoxxPDONotu * 10) +
                    (xoxxGelisimNotu * 5) +
                    (xoxxFinalNotu * 25)
                ) / 100
            )
                ;
    }
    xoxxsonuc90 = xoxxsonuc90.toFixed(2);
    var xoxxyuzdelik = xoxxsonuc90*100/90;
    xoxxyuzdelik = xoxxyuzdelik.toFixed(2);
    
    
    if(xoxxsonuc90 >= 125/2){
        document.getElementById("xoxxyazialani").innerHTML = "(90lı sistem)geçtin ortalaman=";
        document.getElementById("xoxxsaatalani").innerHTML = xoxxsonuc90+"(%"+xoxxyuzdelik+")";
    
    }else{
        document.getElementById("xoxxyazialani").innerHTML = ":( ortalaman";
        document.getElementById("xoxxsaatalani").innerHTML = xoxxsonuc90+"(%"+xoxxyuzdelik+")";
    
    }; */






    //eksik-fazla kutuları bulucaz
    var xoxxinpute = document.getElementsByClassName("xoxxbenzersiz");
    var xoxxmon = 0;
    while (xoxxmon < 15) {
        var xoxxbakilacaknot = xoxxinpute[xoxxmon].value;
        var xoxxbakilacaknot = Number(xoxxbakilacaknot);
        if (xoxxbakilacaknot > 100) {
            xoxxinpute[xoxxmon].style.border = "solid #b1a928";
        };
        if (xoxxbakilacaknot <= 0) {
            xoxxinpute[xoxxmon].style.border = "solid #dc2a2a"
        };
        xoxxmon++;


    };


    /* xox Değişkenler **/
    var xoxxGecmeNotu = 119 / 2; /*70*/ /* Yılsonu geçme notu*/
    var xoxxFinalBaraji = 99 / 2; /*60*/ /*Yılsonu final barajı*/
    var xoxxFinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
    var xoxxYilSonuMax = 90; /*100*/ /* Yıl sonunda alınacak maximum puan*/


    if (xoxxFinalNotu == "") {
        document.getElementById("xoxxFinalNotu").style.border = "solid #dc2a2a";


        var xoxxsonuc2 = (xoxxGecmeNotu - xoxxsonuc) * xoxxFinalKatkisi;
        xoxxsonuc2 = xoxxsonuc2.toFixed(2);

        /* var xoxxsonuc92 = ((125 / 2) - xoxxsonuc90) * 4;
         xoxxsonuc92 = xoxxsonuc92.toFixed(2);
       
 
         document.getElementById("xoxxyazialani").innerHTML = "(90lı sistem)finalden alman gereken";
     document.getElementById("xoxxsaatalani").innerHTML = xoxxsonuc92*/


        if (xoxxsonuc2 < -22) {
            document.getElementById("xoxxsonucGoster").innerHTML = fazla;
            document.getElementById("xoxxsonucEkrani").style.fontSize = "40px";
            document.getElementById("xoxxsonucEkrani").style.color = " #b1a928 ";
            document.getElementById("xoxxsonucEkrani").style.border = "3px";
            document.getElementById("xoxxsayiSonucGoster").innerHTML = xoxxsonuc;

            document.getElementById("xoxxfinalekrani").innerHTML = "";

        }
        else
            if (xoxxsonuc2 <= xoxxFinalBaraji) {
                document.getElementById("xoxxsayiSonucGoster").innerHTML = xoxxFinalBaraji;
                document.getElementById("xoxxsonucGoster").innerHTML = altmıs
                document.getElementById("xoxxfinalekrani").style.width = "300px";
                document.getElementById("xoxxsonucEkrani").style.border = "0px";
                document.getElementById("xoxxsonucEkrani").style.fontSize = "40px";

                document.getElementById("xoxxfinalekrani").innerHTML = Finalden;

                document.getElementById("xoxxsonucEkrani").style.color = "black";
            }


            else if (xoxxsonuc2 <= 100) {
                document.getElementById("xoxxsayiSonucGoster").innerHTML = xoxxsonuc2;
                document.getElementById("xoxxsonucGoster").innerHTML = altmıs
                document.getElementById("xoxxsonucEkrani").style.border = "0px";
                document.getElementById("xoxxfinalekrani").style.width = "300px";
                document.getElementById("xoxxsonucEkrani").style.fontSize = "40px";
                // document.getElementById("xoxxsonucEkrani").style.left="70px";
                // document.getElementById("xoxxsonucEkrani").style.top="150px";
                document.getElementById("xoxxfinalekrani").innerHTML = Finalden;
                // document.getElementById("xoxxfinalekrani").style.left="20px";
                //document.getElementById("xoxxfinalekrani").style.top="-80px";
                document.getElementById("xoxxsonucEkrani").style.color = "black";
            }

            else {
                document.getElementById("xoxxsonucGoster").innerHTML = kaldin;
                document.getElementById("xoxxsonucEkrani").style.fontSize = "40px";
                document.getElementById("xoxxsonucEkrani").style.color = "#dc2a2a";
                document.getElementById("xoxxsayiSonucGoster").innerHTML = xoxxsonuc;
                document.getElementById("xoxxfinalekrani").innerHTML = "";
                //set function
                localStorage.setItem("xoxxsonuc", xoxxsonuc);
            }
    } else {



        document.getElementById("xoxxsayiSonucGoster").innerHTML = xoxxsonuc;
        //set function
        localStorage.setItem("xoxxsonuc", xoxxsonuc);



        if (xoxxsonuc < xoxxGecmeNotu) {

            document.getElementById("xoxxsonucGoster").innerHTML = kaldin;
            document.getElementById("xoxxsonucEkrani").style.color = "#dc2a2a";
            document.getElementById("xoxxfinalekrani").innerHTML = "";
            document.getElementById("xoxxsonucEkrani").style.border = "3px";

            document.getElementById("xoxxsonucEkrani").style.fontSize = "40px";

        }
        else if (xoxxsonuc <= xoxxYilSonuMax) {
            if (xoxxFinalNotu < xoxxFinalBaraji) {
                document.getElementById("xoxxsonucGoster").innerHTML = baraj;
                document.getElementById("xoxxsonucEkrani").style.color = "#dc2a2a";
                document.getElementById("xoxxsonucEkrani").style.border = "3px";

                document.getElementById("xoxxfinalekrani").innerHTML = "";
                document.getElementById("xoxxsonucEkrani").style.fontSize = "40px";


            } else {
                document.getElementById("xoxxsonucGoster").innerHTML = gectin;
                document.getElementById("xoxxsonucEkrani").style.color = "#56b856";
                document.getElementById("xoxxfinalekrani").innerHTML = "";
            }
        }
        else {

            document.getElementById("xoxxsonucGoster").innerHTML = fazla;
            document.getElementById("xoxxsonucEkrani").style.color = " #b1a928 ";
            //document.getElementById("xoxxsonucEkrani").style.fontSize="30px";}
            //document.getElementById("xoxxsonucEkrani").style.left="-90px";
            //document.getElementById("xoxxsonucEkrani").style.top="45px";
            document.getElementById("xoxxfinalekrani").innerHTML = "";
        }


        //document.getElementById("xoxxsonucGoster").style.font="";
    }
    localStorage.setItem("xoxxsonuc", xoxxsonuc);

    metinhesap();

}


function YasamFocus() {
    document.getElementById("YasamNotu").focus();
}
function BeslenmeFocus() {
    document.getElementById("BeslenmeNotu").focus();
}
function EnerjiFocus() {
    document.getElementById("EnerjiNotu").focus();
} function SecmeliFocus() {
    document.getElementById("SecmeliNotu").focus();
} function MCDFocus() {
    document.getElementById("MCDNotu").focus();
} function UremeFocus() {
    document.getElementById("UremeNotu").focus();
} function HareketFocus() {
    document.getElementById("HareketNotu").focus();
}
function MDUFocus() {
    document.getElementById("MDUNotu").focus();
}
function PDOFocus() {
    document.getElementById("PDONotu").focus();
}
function GelisimFocus() {
    document.getElementById("GelisimNotu").focus();
}
function FinalFocus() {
    document.getElementById("FinalNotu").focus();
}
function HayatFocus() {
    document.getElementById("HayatinTemeliNotu").focus();

}








/*var x = setInterval(function () {

    // Sistem saatini alıyoruz
    var now = new Date().getTime();
    
    

    // Sınav Tarihlerini yazıyoruz
    var uyum = new Date(2019, 89, 18, 09, 30).getTime();
    var hayatintemeli = new Date(2019, 09, 18, 09, 30).getTime();
    var yasam = new Date(2019, 10, 15, 09, 30).getTime();
    var beslenme = new Date(2019, 11, 13, 09, 30).getTime();
    var secmeli = new Date(2019, 11, 27, 09, 30).getTime();
    var enerji = new Date(2020, 0, 24, 09, 30).getTime();
    var mcd = new Date(2020, 02, 06, 09, 30).getTime();
    var ureme = new Date(2020, 03, 03, 09, 30).getTime();
    var hareket = new Date(2020, 04, 22, 09, 30).getTime();
    var sinav = [hayatintemeli, yasam, beslenme, secmeli, enerji, mcd, ureme, hareket];
    
    // hangi sınavda olduğumuzu bul
    var siirt = 0;
    while (now >= sinav[siirt]) {
        siirt++;
    };

    var sinavlarim = sinavlarims[siirt]
    var countDownDate = sinav[siirt];
    var oncekisinav = sinav[siirt - 1];
    var sinavani = now - oncekisinav;
    var sinavmesaji = sinavmesajis[siirt];
    var sinavyazari = sinavyazaris[siirt]




    // Geri sayımla şimdi saat arasındaki zamanı ölçüyoruz
    var distance = countDownDate - now;

  

    // Gün, Saat, Dakika, Saniye işlemleri yapılıyor
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Anlık olarak id="gerisayim" içine aktarılıyor
    document.getElementById("yazialani").innerHTML = sinavlarim;
   // document.getElementById("saatalani").innerHTML = days + gun + hours + saat + minutes + dakika + seconds + saniye ;


    
    if (sinavani > 0 && sinavani < 9000000) {
        clearInterval(x);

        // Anlık olarak id="gerisayim" içine aktarılıyor
        document.getElementById("saatalani").innerHTML = "Sınavda Başarılar";
        document.getElementById("yazialani").innerHTML = "";
        document.getElementById("saatalani").style.border = "solid #e46938";
        document.getElementById("saatalani").style.height = "auto";
        document.getElementById("Cingozalani").style.border = "none";

        



    }
    else if (sinavani >= 9000000 && sinavani <= 52200000) {
        clearInterval(x);

        // Anlık olarak id="gerisayim" içine aktarılıyor
        document.getElementById("yazialani").innerHTML = sinavmesaji;

        document.getElementById("yazialani").style.border = "none";
        //document.getElementById("yazialani").style.border = "solid #e46938";
        document.getElementById("yazialani").style.height = "auto";
        
       document.getElementById("saatalani").style.height = "30px";


        document.getElementById("Cingozalani").style.border = "none";
        document.getElementById("saatalani").innerHTML = sinavyazari;
        document.getElementById("saatalani").style.float = "right";
        document.getElementById("saatalani").style.fontSize = "30px";





}





    // Süre dolduğunda yazacak yazı.
  //  if (distance < 0) {
       // clearInterval(x);
        // document.getElementById("saatalani").innerHTML = "";
        // document.getElementById("yazialani").innerHTML = "";
//};
}, 1000);
*/


function calculate() {
    var eksik = eksiks[Math.floor(Math.random() * eksiks.length)];
    var fazla = fazlas[Math.floor(Math.random() * fazlas.length)];
    var gectin = gectins[Math.floor(Math.random() * gectins.length)];
    var kaldin = kaldins[Math.floor(Math.random() * kaldins.length)];
    var altmıs = altmiss[Math.floor(Math.random() * altmiss.length)];
    var baraj = barajs[Math.floor(Math.random() * barajs.length)];
    var Finalden = Finaldens[Math.floor(Math.random() * Finaldens.length)];


    var HayatinTemeliNotu = document.getElementById("HayatinTemeliNotu").value;
    var YasamNotu = document.getElementById("YasamNotu").value;
    var BeslenmeNotu = document.getElementById("BeslenmeNotu").value;
    var EnerjiNotu = document.getElementById("EnerjiNotu").value;
    var SecmeliNotu = document.getElementById("SecmeliNotu").value;
    var MCDNotu = document.getElementById("MCDNotu").value;
    var UremeNotu = document.getElementById("UremeNotu").value;
    var HareketNotu = document.getElementById("HareketNotu").value;
    var PDONotu = document.getElementById("PDONotu").value;
    var MDUNotu = document.getElementById("MDUNotu").value;
    var GelisimNotu = document.getElementById("GelisimNotu").value;
    var FinalNotu = document.getElementById("FinalNotu").value;


    //set function
    localStorage.setItem("HayatinTemeliNotu", HayatinTemeliNotu);
    localStorage.setItem("YasamNotu", YasamNotu);
    localStorage.setItem("BeslenmeNotu", BeslenmeNotu);
    localStorage.setItem("EnerjiNotu", EnerjiNotu);
    localStorage.setItem("SecmeliNotu", SecmeliNotu);
    localStorage.setItem("MCDNotu", MCDNotu);
    localStorage.setItem("UremeNotu", UremeNotu);
    localStorage.setItem("HareketNotu", HareketNotu);
    localStorage.setItem("PDONotu", PDONotu);
    localStorage.setItem("MDUNotu", MDUNotu)
    localStorage.setItem("GelisimNotu", GelisimNotu);
    localStorage.setItem("FinalNotu", FinalNotu);




    HayatinTemeliNotu = Number(HayatinTemeliNotu);
    HareketNotu = Number(HareketNotu);
    YasamNotu = Number(YasamNotu);
    PDONotu = Number(PDONotu);
    BeslenmeNotu = Number(BeslenmeNotu);
    MDUNotu = Number(MDUNotu);
    EnerjiNotu = Number(EnerjiNotu);
    GelisimNotu = Number(GelisimNotu);
    SecmeliNotu = Number(SecmeliNotu);
    FinalNotu = Number(FinalNotu);
    MCDNotu = Number(MCDNotu);
    UremeNotu = Number(UremeNotu);

    //eksik-fazla kutuları bulucaz
    var inpute = document.getElementsByClassName("iinput");
    var mon = 1;
    while (mon < 13) {
        var bakilacaknot = inpute[mon].value;
        var bakilacaknot = Number(bakilacaknot);
        if (bakilacaknot > 100) {
            inpute[mon].style.border = "solid #b1a928";
        };
        if (bakilacaknot <= 0) {
            inpute[mon].style.border = "solid #dc2a2a"
        }
        mon++;


    };





    var sonuc;


    {
        sonuc = (
            (
                (
                    ((
                        (HayatinTemeliNotu * 4) +
                        (YasamNotu * 6) +
                        (BeslenmeNotu * 6) +
                        (EnerjiNotu * 6) +
                        (MCDNotu * 6) +
                        (UremeNotu * 6) +
                        (HareketNotu * 10) +
                        (SecmeliNotu * 3) +
                        100
                    ) / 48) * 50) +
               /* (MDUNotu * 0) */ +
                (PDONotu * 10) +
                (GelisimNotu * 5) +
                (FinalNotu * 25)
            ) / 100
        )
            ;
    }
    sonuc = sonuc.toFixed(2);


    /*var sonuc90;


{
    sonuc90 = (
        (
            (
                ((
                    (HayatinTemeliNotu * 4) +
                    (YasamNotu * 6) +
                    (BeslenmeNotu * 6) +
                    (EnerjiNotu * 6) +
                    (MCDNotu * 6) +
                    (UremeNotu * 6) +
                    (HareketNotu * 10) +
                    (SecmeliNotu * 3) +
                    100
                ) / 48) * 50) +
           /* (MDUNotu * 0) +
            (PDONotu * 10) +
            (GelisimNotu * 5) +
            (FinalNotu * 25)
        ) / 100
    )
        ;
}
sonuc90 = sonuc90.toFixed(2);
var yuzdelik = sonuc90*100/90;
yuzdelik = yuzdelik.toFixed(2);

if(sonuc90 >= 125/2){
    document.getElementById("yazialani").innerHTML = "(90lı sistem)geçtin ortalaman=";
    document.getElementById("saatalani").innerHTML = sonuc90+"(%"+yuzdelik+")";

}else{
    document.getElementById("yazialani").innerHTML = ":( ortalaman=";
    document.getElementById("saatalani").innerHTML = sonuc90+"(%"+yuzdelik+")";

}; */


    /* xox Değişkenler **/
    var GecmeNotu = 119 / 2; /*70*/ /* Yılsonu geçme notu*/
    var FinalBaraji = 99 / 2; /*60*/ /*Yılsonu final barajı*/
    var FinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
    var YilSonuMax = 90; /*100*/ /* Yıl sonunda alınacak maximum puan*/

    if (FinalNotu == "") {

        document.getElementById("FinalNotu").style.border = "solid #dc2a2a";

        var sonuc2 = (GecmeNotu - sonuc) * FinalKatkisi;
        sonuc2 = sonuc2.toFixed(2);


        /* var sonuc92 = ((125 / 2) - sonuc90) * 4;
         sonuc92 = sonuc92.toFixed(2);
         document.getElementById("yazialani").innerHTML = "finalden alman gereken";
     document.getElementById("saatalani").innerHTML = sonuc92;*/


        if (sonuc2 < -22) {
            document.getElementById("sonucGoster").innerHTML = fazla;
            //document.getElementById("sonucEkrani").style.fontSize = "50px"; "40px";
            document.getElementById("sonucEkrani").style.color = " #b1a928 ";
            document.getElementById("sonucEkrani").style.border = "3px";
            document.getElementById("sayiSonucGoster").innerHTML = sonuc;

            document.getElementById("finalekrani").innerHTML = "";

        }
        else
            if (sonuc2 <= FinalBaraji) {
                document.getElementById("sayiSonucGoster").innerHTML = FinalBaraji;
                document.getElementById("sonucGoster").innerHTML = altmıs
                document.getElementById("finalekrani").style.width = "300px";
                document.getElementById("sonucEkrani").style.border = "3px";
                //document.getElementById("sonucEkrani").style.width = "300px";
                //document.getElementById("sonucEkrani").style.fontSize = "50px"; "40px";

                document.getElementById("finalekrani").innerHTML = Finalden;

                document.getElementById("sonucEkrani").style.color = "black";
            }


            else if (sonuc2 <= 100) {
                document.getElementById("sayiSonucGoster").innerHTML = sonuc2;
                document.getElementById("sonucGoster").innerHTML = altmıs
                document.getElementById("sonucEkrani").style.border = "3px";
                //document.getElementById("sonucEkrani").style.width = "300px";
                document.getElementById("finalekrani").style.width = "300px";
                //document.getElementById("sonucEkrani").style.fontSize = "50px"; "40px";
                // document.getElementById("sonucEkrani").style.left="70px";
                // document.getElementById("sonucEkrani").style.top="150px";
                document.getElementById("finalekrani").innerHTML = Finalden;
                // document.getElementById("finalekrani").style.left="20px";
                //document.getElementById("finalekrani").style.top="-80px";
                document.getElementById("sonucEkrani").style.color = "black";

            }

            else {
                document.getElementById("sonucGoster").innerHTML = kaldin;
                //document.getElementById("sonucEkrani").style.fontSize = "50px"; "40px";
                document.getElementById("sonucEkrani").style.color = "#dc2a2a";
                //document.getElementById("sonucEkrani").style.width = "300px";
                document.getElementById("sonucEkrani").style.border = "3px";
                document.getElementById("sayiSonucGoster").innerHTML = sonuc;
                document.getElementById("finalekrani").innerHTML = "";
                //set function
                localStorage.setItem("sonuc", sonuc);

            }
    } else {




        document.getElementById("sayiSonucGoster").innerHTML = sonuc;
        //set function



        if (sonuc < GecmeNotu) {

            document.getElementById("sonucGoster").innerHTML = kaldin;
            document.getElementById("sonucEkrani").style.color = "#dc2a2a";
            document.getElementById("finalekrani").innerHTML = "";
            //document.getElementById("sonucEkrani").style.width = "300px";
            document.getElementById("sonucEkrani").style.border = "3px";

            //document.getElementById("sonucEkrani").style.fontSize = "50px"; "40px";

        }
        else if (sonuc <= YilSonuMax) {
            if (FinalNotu < FinalBaraji) {
                document.getElementById("sonucGoster").innerHTML = baraj;
                document.getElementById("sonucEkrani").style.color = "#dc2a2a";
                document.getElementById("sonucEkrani").style.border = "3px";

                document.getElementById("finalekrani").innerHTML = "";
                //document.getElementById("sonucEkrani").style.fontSize = "50px"; "40px";


            } else {
                document.getElementById("sonucGoster").innerHTML = gectin;
                document.getElementById("sonucEkrani").style.color = "#56b856";
                document.getElementById("finalekrani").innerHTML = "";
            }
        }
        else {

            document.getElementById("sonucGoster").innerHTML = fazla;
            document.getElementById("sonucEkrani").style.color = " #b1a928 ";
            //document.getElementById("sonucEkrani").style.fontSize="30px";}
            //document.getElementById("sonucEkrani").style.width = "300px";
            //document.getElementById("sonucEkrani").style.fontSize = "50px"; "50px";
            //document.getElementById("sonucEkrani").style.left="-90px";
            //document.getElementById("sonucEkrani").style.top="45px";
            document.getElementById("finalekrani").innerHTML = "";
        }


        //document.getElementById("sonucGoster").style.font="";
    }
    localStorage.setItem("sonuc", sonuc);

    metinhesap();

}
















