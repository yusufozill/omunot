var lang = localStorage.getItem("lang");
var mduvarmi = localStorage.getItem("mduvarmi");
var gCheck = localStorage.getItem("gCheck");



var mdukatsayisi = 10;
var xoxGecmeNotu = 139 / 2; // 70 Yılsonu geçme notu
var xoxFinalBaraji = 119 / 2;/*60*/ /*Yılsonu final barajı*/
var xoxFinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
var xoxYilSonuMax = 100;
/* xox Değişkenler **/
var xoxxGecmeNotu = 139 / 2; /*70*/ /* Yılsonu geçme notu*/
var xoxxFinalBaraji = 119 / 2; /*60*/ /*Yılsonu final barajı*/
var xoxxFinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
var xoxxYilSonuMax = 100; /*100*/ /* Yıl sonunda alınacak maximum puan*/
/* xoxx Değişkenler **/
var GecmeNotu = 139 / 2; /*70*/ /* Yılsonu geçme notu*/
var FinalBaraji = 119 / 2; /*60*/ /*Yılsonu final barajı*/
var FinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
var YilSonuMax = 100; /*100*/ /* Yıl sonunda alınacak maximum puan*/




if (gCheck == 5) {
    //mdufalse();
};
if (mduvarmi == 5) {
    gCheckk();
};

// function xoxe() {
    

    
//     var birincicheckbox = document.getElementById("check").checked;
//     var ikincicheckbox = document.getElementById("xoxcheck").checked;
//     var ucuncucheckbox = document.getElementById("xoxxcheck").checked;
//     var tru = 0;

//     if (birincicheckbox == true) { tru++ };
//     if (ikincicheckbox == true) { tru++ };
//     if (ucuncucheckbox == true) { tru++ };

//     if (tru == 2) {
//         mdufalse();
//     }
//     if (tru == 1) {
//         alertmessage("MDU eskisi gibi %10 etkisi üzerinden hesaplanacak");
//         document.getElementById("check").checked = true;
//         document.getElementById("xoxcheck").checked = true;
//         document.getElementById("xoxxcheck").checked = true;

//         localStorage.setItem("mduvarmi", 0);
//         document.getElementById("xoxMDUNotu").readOnly = false;
//         document.getElementById("xoxxMDUNotu").readOnly = false;
//         document.getElementById("MDUNotu").readOnly = false;


//         mdukatsayisi = 10;
//         xoxGecmeNotu = 139 / 2; /*70*/ /* Yılsonu geçme notu*/
//         xoxFinalBaraji = 119 / 2;/*60*/ /*Yılsonu final barajı*/
//         xoxFinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
//         xoxYilSonuMax = 100;
//         /* xox Değişkenler **/
//         xoxxGecmeNotu = 139 / 2; /*70*/ /* Yılsonu geçme notu*/
//         xoxxFinalBaraji = 119 / 2; /*60*/ /*Yılsonu final barajı*/
//         xoxxFinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
//         xoxxYilSonuMax = 100; /*100*/ /* Yıl sonunda alınacak maximum puan*/
//         /* xoxx Değişkenler **/
//         GecmeNotu = 139 / 2; /*70*/ /* Yılsonu geçme notu*/
//         FinalBaraji = 119 / 2; /*60*/ /*Yılsonu final barajı*/
//         FinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
//         YilSonuMax = 100; /*100*/ /* Yıl sonunda alınacak maximum puan*/
//     }

//     calculate();
//     xoxcalculate();
//     xoxxcalculate();
// };


function gelisimHesapla() {
    
    var birincicheckbox = document.getElementById("gCheck").checked;
    var ikincicheckbox = document.getElementById("xoxgCheck").checked;
    var ucuncucheckbox = document.getElementById("xoxxgCheck").checked;
    var tru = 0;

    if (birincicheckbox == true) { tru++ };
    if (ikincicheckbox == true) { tru++ };
    if (ucuncucheckbox == true) { tru++ };

    if (tru == 2) {
        
        gCheckk();
    }
    if (tru == 1) {
        alertmessage("Gelişim sınavı etkisi eskisi gibi %5 olarak hesaplanacak");

        document.getElementById("gCheck").checked = true;
        document.getElementById("xoxgCheck").checked = true;
        document.getElementById("xoxxgCheck").checked = true;

        localStorage.setItem("gCheck", 0);
        document.getElementById("xoxGelisimNotu").readOnly = false;
        document.getElementById("xoxxGelisimNotu").readOnly = false;
        document.getElementById("GelisimNotu").readOnly = false;

    }

    calculate();
    xoxcalculate();
    xoxxcalculate();
};

function gCheckk() {
    alertmessage("Gelişim Sınavı Kaldrıldı, Notunuz 100/95 ile çarpılacak");
    document.getElementById("gCheck").checked = false;
    document.getElementById("xoxgCheck").checked = false;
    document.getElementById("xoxxgCheck").checked = false;
    document.getElementById("xoxGelisimNotu").readOnly = true;
    document.getElementById("xoxxGelisimNotu").readOnly = true;
    document.getElementById("GelisimNotu").readOnly = true;
    document.getElementById("xoxGelisimNotu").value = "";
    document.getElementById("xoxxGelisimNotu").value = "";
    document.getElementById("GelisimNotu").value = "";
    localStorage.setItem("gCheck", 5);
    
};

function mdufalse() {

    alertmessage("MDU sınavı kaldırıldı notunuz 90 üzerinden hesaplanacak");
    document.getElementById("check").checked = false;
    document.getElementById("xoxcheck").checked = false;
    document.getElementById("xoxxcheck").checked = false;
    document.getElementById("xoxMDUNotu").readOnly = true;
    document.getElementById("xoxxMDUNotu").readOnly = true;
    document.getElementById("MDUNotu").readOnly = true;

    document.getElementById("xoxMDUNotu").value = "";
    document.getElementById("xoxxMDUNotu").value = "";
    document.getElementById("MDUNotu").value = "";




    localStorage.setItem("mduvarmi", 5);


    mdukatsayisi = 0;
    xoxGecmeNotu = 119 / 2; /*70*/ /* Yılsonu geçme notu*/
    xoxFinalBaraji = 99 / 2;/*60*/ /*Yılsonu final barajı*/
    xoxFinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
    xoxYilSonuMax = 90;
    /* xox Değişkenler **/
    xoxxGecmeNotu = 119 / 2; /*70*/ /* Yılsonu geçme notu*/
    xoxxFinalBaraji = 99 / 2; /*60*/ /*Yılsonu final barajı*/
    xoxxFinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
    xoxxYilSonuMax = 90; /*100*/ /* Yıl sonunda alınacak maximum puan*/
    /* xoxx Değişkenler **/
    GecmeNotu = 119 / 2; /*70*/ /* Yılsonu geçme notu*/
    FinalBaraji = 99 / 2; /*60*/ /*Yılsonu final barajı*/
    FinalKatkisi = 100 / 25;/* %25*//* 1/Final katkısı */
    YilSonuMax = 90; /*100*/ /* Yıl sonunda alınacak maximum puan*/





};
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
    barajs = ["Final barajı var"]
    bilginotus = [ "Geçme notu 69,5 - Final barajı 59,5 olarak hesaplanır. Bu ölçüm Finalden almanız gereken puanı 2 puan daha az hesaplar", "Finalden kaç almanız gerektiğini final kutucuğunu boş bırakarak hesaplayabilirsiniz :)", "Katkılarınızı yusufozill@omunot.com'a iletebilirsiniz", "Gelişim sınavı kutucuğu boşken notunuz 100/95 ile çarpılır" ]
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


        var biompage = ["<br /><br /><br /><br /> If you entered this page, it means is you are curious about somethings <br /><br /> I will tell you before jump in the questions. I designed this web site for students of faculty of medicine at the university Ondokuz Mayıs University. to easily be able to calculate their year-end average masks <br /><br /> thus we have achieved a more comfortable and more fun calculation method. <br /><br /> I prepared the calculation equation of this site according to the university academic calendar and regulation. I checked it many times<br /><br /> In spite of than check any mistake can happen, to see the calculation equation check the bottom of the page. <br /><br /> The countdown works accordingly to the beginning time of the exam (09.30 AM) <br /><br />  For the security of the side. The marks you enter, will be temporally saved. And will be display you check again <br /><br /> You can use it without any worries. <br /><br /> If you want to who know i am, you look end side.  Or send mail:<a href='mailto: yusufozill@omunot.com' style='color: black; '> yusufozill@omunot.com</a><br /><br /> Enjoy it.<br /> <br />•Yusuf Özil• <br /> <br /> <br /> <br />"]
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


function girisleriKontrolEt(){
    var iinputs = document.getElementsByClassName("iinput");
    var x = 0;
    while (x < iinputs.length) {
        var kutucuk = iinputs[x].value;
        var kutucuk = Number(kutucuk);
        if (kutucuk > 100) {
            iinputs[x].style.border = "solid #b1a928";
        };
        if (kutucuk <= 0) {
            iinputs[x].style.border = "solid #dc2a2a"
        }
        x++;
}}

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


        location.href = "https://www.omunot.com/omunot/hakkinda.html";




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
        localStorage.removeItem("secmeliNotu");
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
        document.getElementById("secmeliNotu").value = localStorage.getItem("secmeliNotu");
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
        document.getElementById("secmeliNotu").style.border = "solid #b8907e";
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



$(function () { //fonksiyonumuza başlayalım

    $('#svgidtwo').click(function () {




        //xox get function	
        localStorage.removeItem("beyinVeDuyularNotu");
        localStorage.removeItem("buyumeGelismeDavranisNotu");
        localStorage.removeItem("etikNotu");
        localStorage.removeItem("zedelenmeNotu");
        localStorage.removeItem("biyolojikEtmenlerNotu");
        localStorage.removeItem("kanNotu");
        localStorage.removeItem("savunmaNotu");
        localStorage.removeItem("secmeliNotu");
        localStorage.removeItem("xoxPDONotu");
        localStorage.removeItem("xoxMDUNotu");
        localStorage.removeItem("xoxGelisimNotu");
        localStorage.removeItem("xoxFinalNotu");
        localStorage.removeItem("xoxsonuc");

        //xox get function	
        document.getElementById("beyinVeDuyularNotu").value = localStorage.getItem("beyinVeDuyularNotu");
        document.getElementById("buyumeGelismeDavranisNotu").value = localStorage.getItem("buyumeGelismeDavranisNotu");
        document.getElementById("etikNotu").value = localStorage.getItem("etikNotu");
        document.getElementById("zedelenmeNotu").value = localStorage.getItem("zedelenmeNotu");
        document.getElementById("biyolojikEtmenlerNotu").value = localStorage.getItem("biyolojikEtmenlerNotu");
        document.getElementById("kanNotu").value = localStorage.getItem("kanNotu");
        document.getElementById("savunmaNotu").value = localStorage.getItem("savunmaNotu");
        document.getElementById("secmeliNotu").value = localStorage.getItem("xoxsecmeliNotu");
        document.getElementById("xoxPDONotu").value = localStorage.getItem("xoxPDONotu");
        document.getElementById("xoxMDUNotu").value = localStorage.getItem("xoxMDUNotu");
        document.getElementById("xoxGelisimNotu").value = localStorage.getItem("xoxGelisimNotu");
        document.getElementById("xoxFinalNotu").value = localStorage.getItem("xoxFinalNotu");



        document.getElementById("xoxsayiSonucGoster").innerHTML = localStorage.getItem("xoxsonuc");
        document.getElementById("xoxsonucGoster").innerHTML = ""


        document.getElementById("beyinVeDuyularNotu").style.border = "solid #b8907e";
        document.getElementById("etikNotu").style.border = "solid #b8907e";
        document.getElementById("buyumeGelismeDavranisNotu").style.border = "solid #b8907e";
        document.getElementById("biyolojikEtmenlerNotu").style.border = "solid #b8907e";
        document.getElementById("zedelenmeNotu").style.border = "solid #b8907e";
        document.getElementById("kanNotu").style.border = "solid #b8907e";
        document.getElementById("savunmaNotu").style.border = "solid #b8907e";
        document.getElementById("secmeliNotu").style.border = "solid #b8907e";
        document.getElementById("xoxPDONotu").style.border = "solid #b8907e";
        document.getElementById("xoxMDUNotu").style.border = "solid #b8907e";
        document.getElementById("xoxGelisimNotu").style.border = "solid #b8907e";
        document.getElementById("xoxFinalNotu").style.border = "solid #b8907e";



    });
});


$(function () { //fonksiyonumuza başlayalım

    $('#svgidthree').click(function () {

        //xoxx get function
        localStorage.removeItem("xoxxGebelikNotu");
        localStorage.removeItem("xoxxProf");

        localStorage.removeItem("xoxxTravmaNotu");
        localStorage.removeItem("xoxxSolDolNotu");
        localStorage.removeItem("xoxxEnfeksiyonNotu");
        localStorage.removeItem("xoxxYaslanmaNotu");
        localStorage.removeItem("xoxxEndokrinNotu");
        localStorage.removeItem("xoxxSindirimNotu");
        localStorage.removeItem("xoxxSecmeliNotu");
        localStorage.removeItem("xoxxPDONotu");
        localStorage.removeItem("xoxxMDUNotu");
        localStorage.removeItem("xoxxGelisimNotu");
        localStorage.removeItem("xoxxFinalNotu");
        localStorage.removeItem("xoxxnoro");
        localStorage.removeItem("xoxxtumor");
        localStorage.removeItem("xoxxsonuc");

        //xoxx get function
        document.getElementById("xoxxGebelikNotu").value = localStorage.getItem("xoxxGebelikNotu");
        document.getElementById("xoxxProf").value = localStorage.getItem("xoxxProf");

        document.getElementById("xoxxTravmaNotu").value = localStorage.getItem("xoxxTravmaNotu");
        document.getElementById("xoxxSolDolNotu").value = localStorage.getItem("xoxxSolDolNotu");
        document.getElementById("xoxxEnfeksiyonNotu").value = localStorage.getItem("xoxxEnfeksiyonNotu");
        document.getElementById("xoxxYaslanmaNotu").value = localStorage.getItem("xoxxYaslanmaNotu");
        document.getElementById("xoxxEndokrinNotu").value = localStorage.getItem("xoxxEndokrinNotu");
        document.getElementById("xoxxSindirimNotu").value = localStorage.getItem("xoxxSindirimNotu");
        document.getElementById("xoxxSecmeliNotu").value = localStorage.getItem("xoxxSecmeliNotu");
        document.getElementById("xoxxPDONotu").value = localStorage.getItem("xoxxPDONotu");
        document.getElementById("xoxxMDUNotu").value = localStorage.getItem("xoxxMDUNotu");
        document.getElementById("xoxxGelisimNotu").value = localStorage.getItem("xoxxGelisimNotu");
        document.getElementById("xoxxFinalNotu").value = localStorage.getItem("xoxxFinalNotu");
        document.getElementById("xoxxnoro").value = localStorage.getItem("xoxxnoro");
        document.getElementById("xoxxtumor").value = localStorage.getItem("xoxxtumor");
        document.getElementById("xoxxsayiSonucGoster").innerHTML = localStorage.getItem("xoxxsonuc");
        document.getElementById("xoxxsonucGoster").innerHTML = ""





        document.getElementById("xoxxGebelikNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxProf").style.border = "solid #b8907e";

        document.getElementById("xoxxSolDolNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxTravmaNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxYaslanmaNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxEnfeksiyonNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxEndokrinNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxSindirimNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxnoro").style.border = "solid #b8907e";
        document.getElementById("xoxxtumor").style.border = "solid #b8907e";
        document.getElementById("xoxxSecmeliNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxPDONotu").style.border = "solid #b8907e";
        document.getElementById("xoxxMDUNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxGelisimNotu").style.border = "solid #b8907e";
        document.getElementById("xoxxFinalNotu").style.border = "solid #b8907e";




    });
});











function xoxYasamFocus() {
    document.getElementById("buyumeGelismeDavranisNotu").focus();
}
function xoxBeslenmeFocus() {
    document.getElementById("etikNotu").focus();
}
function xoxEnerjiFocus() {
    document.getElementById("zedelenmeNotu").focus();
}
function xoxSecmeliFocus() {
    document.getElementById("biyolojikEtmenlerNotu").focus();
}
function xoxMCDFocus() {
    document.getElementById("kanNotu").focus();
}
function xoxUremeFocus() {
    document.getElementById("savunmaNotu").focus();
}
function xoxHareketFocus() {
    document.getElementById("secmeliNotu").focus();
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
    document.getElementById("beyinVeDuyularNotu").focus();

}








var i = 0;
var sonbilginotu = 0;
var za = 0;

var randomInterval = setInterval(function () {
    $(".bilginotlari").fadeOut(100, garipislem);
    $(".bilginotlari").delay(150).fadeIn(200);
}, 5000);

function garipislem() {
    za++;
    if (za == 3) {
        randomic();
        za = 0;
    }
}

function randomic() {

    var bil = document.getElementsByClassName("bilginotlari");
    var k = true;
    var yenibilginotu;
    while (k) {
        var random = Math.floor(Math.random() * bilginotus.length);
        yenibilginotu = bilginotus[random];
        k = sonbilginotu==yenibilginotu

    }
        bil[0].innerHTML = yenibilginotu;
        bil[1].innerHTML = yenibilginotu;
        bil[2].innerHTML = yenibilginotu;

   
}







function getf () {
    console.log("girdik");
    var yenibilginotu = bilginotus[0];

    var bil = document.getElementsByClassName("bilginotlari");

    bil[0].innerHTML = yenibilginotu;
    bil[1].innerHTML = yenibilginotu;
    bil[2].innerHTML = yenibilginotu;



    //xoxx get function
    document.getElementById("xoxxGebelikNotu").value = localStorage.getItem("xoxxGebelikNotu");
    document.getElementById("xoxxProf").value = localStorage.getItem("xoxxProf");

    document.getElementById("xoxxTravmaNotu").value = localStorage.getItem("xoxxTravmaNotu");
    document.getElementById("xoxxSolDolNotu").value = localStorage.getItem("xoxxSolDolNotu");
    document.getElementById("xoxxEnfeksiyonNotu").value = localStorage.getItem("xoxxEnfeksiyonNotu");
    document.getElementById("xoxxYaslanmaNotu").value = localStorage.getItem("xoxxYaslanmaNotu");
    document.getElementById("xoxxEndokrinNotu").value = localStorage.getItem("xoxxEndokrinNotu");
    document.getElementById("xoxxSindirimNotu").value = localStorage.getItem("xoxxSindirimNotu");
    document.getElementById("xoxxSecmeliNotu").value = localStorage.getItem("xoxxSecmeliNotu");
    document.getElementById("xoxxPDONotu").value = localStorage.getItem("xoxxPDONotu");
    document.getElementById("xoxxMDUNotu").value = localStorage.getItem("xoxxMDUNotu");
    document.getElementById("xoxxGelisimNotu").value = localStorage.getItem("xoxxGelisimNotu");
    document.getElementById("xoxxFinalNotu").value = localStorage.getItem("xoxxFinalNotu");
    document.getElementById("xoxxnoro").value = localStorage.getItem("xoxxnoro");
    document.getElementById("xoxxtumor").value = localStorage.getItem("xoxxtumor");
    //xox get function	
    document.getElementById("beyinVeDuyularNotu").value = localStorage.getItem("beyinVeDuyularNotu");
    document.getElementById("buyumeGelismeDavranisNotu").value = localStorage.getItem("buyumeGelismeDavranisNotu");
    document.getElementById("etikNotu").value = localStorage.getItem("etikNotu");
    document.getElementById("zedelenmeNotu").value = localStorage.getItem("zedelenmeNotu");
    document.getElementById("biyolojikEtmenlerNotu").value = localStorage.getItem("biyolojikEtmenlerNotu");
    document.getElementById("kanNotu").value = localStorage.getItem("kanNotu");
    document.getElementById("savunmaNotu").value = localStorage.getItem("savunmaNotu");
    document.getElementById("xoxsecmeliNotu").value = localStorage.getItem("xoxsecmeliNotu");
    document.getElementById("xoxPDONotu").value = localStorage.getItem("xoxPDONotu");
    document.getElementById("xoxMDUNotu").value = localStorage.getItem("xoxMDUNotu");
    document.getElementById("xoxGelisimNotu").value = localStorage.getItem("xoxGelisimNotu");
    document.getElementById("xoxFinalNotu").value = localStorage.getItem("xoxFinalNotu");
    //get function
    document.getElementById("HayatinTemeliNotu").value = localStorage.getItem("HayatinTemeliNotu");
    document.getElementById("YasamNotu").value = localStorage.getItem("YasamNotu");
    document.getElementById("BeslenmeNotu").value = localStorage.getItem("BeslenmeNotu");
    document.getElementById("EnerjiNotu").value = localStorage.getItem("EnerjiNotu");
    document.getElementById("secmeliNotu").value = localStorage.getItem("secmeliNotu");
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

};

getf();







function xoxcalculate() {
    var eksik = eksiks[Math.floor(Math.random() * eksiks.length)];
    var fazla = fazlas[Math.floor(Math.random() * fazlas.length)];
    var gectin = gectins[Math.floor(Math.random() * gectins.length)];
    var kaldin = kaldins[Math.floor(Math.random() * kaldins.length)];
    var altmıs = altmiss[Math.floor(Math.random() * altmiss.length)];
    var baraj = barajs[Math.floor(Math.random() * barajs.length)];
    var Finalden = Finaldens[Math.floor(Math.random() * Finaldens.length)];


    var beyinVeDuyularNotu = document.getElementById("beyinVeDuyularNotu").value;
    var buyumeGelismeDavranisNotu = document.getElementById("buyumeGelismeDavranisNotu").value;
    var etikNotu = document.getElementById("etikNotu").value;
    var zedelenmeNotu = document.getElementById("zedelenmeNotu").value;
    var biyolojikEtmenlerNotu = document.getElementById("biyolojikEtmenlerNotu").value;
    var kanNotu = document.getElementById("kanNotu").value;
    var savunmaNotu = document.getElementById("savunmaNotu").value;
    var secmeliNotu = document.getElementById("xoxsecmeliNotu").value;
    var xoxPDONotu = document.getElementById("xoxPDONotu").value;
    var xoxMDUNotu = document.getElementById("xoxMDUNotu").value;
    var xoxGelisimNotu = document.getElementById("xoxGelisimNotu").value;
    var xoxFinalNotu = document.getElementById("xoxFinalNotu").value;


    //set function
    localStorage.setItem("beyinVeDuyularNotu", beyinVeDuyularNotu);
    localStorage.setItem("buyumeGelismeDavranisNotu", buyumeGelismeDavranisNotu);
    localStorage.setItem("etikNotu", etikNotu);
    localStorage.setItem("zedelenmeNotu", zedelenmeNotu);
    localStorage.setItem("biyolojikEtmenlerNotu", biyolojikEtmenlerNotu);
    localStorage.setItem("kanNotu", kanNotu);
    localStorage.setItem("savunmaNotu", savunmaNotu);
    localStorage.setItem("xoxsecmeliNotu", secmeliNotu);
    localStorage.setItem("xoxPDONotu", xoxPDONotu);
    localStorage.setItem("xoxMDUNotu", xoxMDUNotu);
    localStorage.setItem("xoxGelisimNotu", xoxGelisimNotu);
    localStorage.setItem("xoxFinalNotu", xoxFinalNotu);


    beyinVeDuyularNotu = Number(beyinVeDuyularNotu);
    secmeliNotu = Number(secmeliNotu);
    buyumeGelismeDavranisNotu = Number(buyumeGelismeDavranisNotu);
    xoxPDONotu = Number(xoxPDONotu);
    etikNotu = Number(etikNotu);
    xoxMDUNotu = Number(xoxMDUNotu);
    zedelenmeNotu = Number(zedelenmeNotu);
    xoxGelisimNotu = Number(xoxGelisimNotu);
    biyolojikEtmenlerNotu = Number(biyolojikEtmenlerNotu);
    xoxFinalNotu = Number(xoxFinalNotu);
    kanNotu = Number(kanNotu);
    savunmaNotu = Number(savunmaNotu);



    var xoxsonuc;
    {
        xoxsonuc = (
            ((((
                (buyumeGelismeDavranisNotu * 7) +//Buyume Gelisme
                (beyinVeDuyularNotu * 10) +// Beyin Duyular
                (etikNotu * 7) + //Etik
                (zedelenmeNotu * 5) + // Zedelenme
                (kanNotu * 7) + // Kan
                (savunmaNotu * 7) + // Savunma
                (secmeliNotu * 4) +//secmeli
                (biyolojikEtmenlerNotu * 7) //Biyolojik Etmenler
            ) / 54) * 50) +
                (xoxMDUNotu * mdukatsayisi) + //mdu katsayısı = 10
                (xoxPDONotu * 10) +
                (xoxGelisimNotu * 5) +
                (xoxFinalNotu * 25)
            ) / 100
        );
    }
    if(document.getElementById("gCheck").checked == false){xoxsonuc=xoxsonuc*100/95;}

    xoxsonuc = xoxsonuc.toFixed(2);

    console.log(buyumeGelismeDavranisNotu);
    console.log(beyinVeDuyularNotu);
    console.log(etikNotu);
    console.log(zedelenmeNotu);
    console.log(kanNotu);
    console.log(savunmaNotu);
    console.log("secmeli"+secmeliNotu);
    console.log(xoxMDUNotu);
    console.log(xoxPDONotu);
    console.log(xoxGelisimNotu);
    console.log(xoxFinalNotu);







    //eksik-fazla kutuları bulucaz
    girisleriKontrolEt();
    gonder('iki');
    /* xox Değişkenler **/
    /*100*/ /* Yıl sonunda alınacak maximum puan*/


    if (xoxFinalNotu == "") {
        document.getElementById("xoxFinalNotu").style.border = "solid #dc2a2a";
        console.log("1");


        var xoxsonuc2 = (xoxGecmeNotu - xoxsonuc) * xoxFinalKatkisi;
        console.log()
        xoxsonuc2 = xoxsonuc2.toFixed(2);

        /*   var xoxsonuc92 = ((125 / 2) - xoxsonuc90) * 4;
           xoxsonuc92 = xoxsonuc92.toFixed(2);
           
       
           document.getElementById("xoxyazialani").innerHTML = "(90 lı sistem)finalden alman gereken";
       document.getElementById("xoxsaatalani").innerHTML = xoxsonuc92;*/




        if (xoxsonuc2 < -22) {
            console.log("1.0");

            document.getElementById("xoxsonucGoster").innerHTML = fazla;
            document.getElementById("xoxsonucEkrani").style.fontSize = "40px";
            document.getElementById("xoxsonucEkrani").style.color = " #b1a928 ";
            document.getElementById("xoxsonucEkrani").style.border = "3px";
            document.getElementById("xoxsayiSonucGoster").innerHTML = xoxsonuc;
            document.getElementById("xoxfinalekrani").innerHTML = "";




        }
        else
            if (xoxsonuc2 <= xoxFinalBaraji) {
                console.log("1.1");

                document.getElementById("xoxsayiSonucGoster").innerHTML = xoxFinalBaraji;
                document.getElementById("xoxsonucGoster").innerHTML = altmıs;
                document.getElementById("xoxfinalekrani").style.width = "300px";
                document.getElementById("xoxsonucEkrani").style.border = "0px";
                document.getElementById("xoxsonucEkrani").style.fontSize = "40px";

                document.getElementById("xoxfinalekrani").innerHTML = Finalden;

                document.getElementById("xoxsonucEkrani").style.color = "black";
            }


            else if (xoxsonuc2 <= 100) {
                console.log("1.3 e girildi");
                console.log("xoxsonuc2");

                console.log(xoxsonuc2);


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
                console.log("1.4");

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

        console.log("1.5");


        document.getElementById("xoxsayiSonucGoster").innerHTML = xoxsonuc;
        //set function
        localStorage.setItem("xoxsonuc", xoxsonuc);



        if (xoxsonuc < xoxGecmeNotu) {
            console.log("1.6");

            document.getElementById("xoxsonucGoster").innerHTML = kaldin;
            document.getElementById("xoxsonucEkrani").style.color = "#dc2a2a";
            document.getElementById("xoxfinalekrani").innerHTML = "";
            document.getElementById("xoxsonucEkrani").style.border = "3px";

            document.getElementById("xoxsonucEkrani").style.fontSize = "40px";


        }
        else if (xoxsonuc <= xoxYilSonuMax) {
            console.log("1.7");

            if (xoxFinalNotu < xoxFinalBaraji) {
                console.log("1.7.1");

                document.getElementById("xoxsonucGoster").innerHTML = baraj;
                document.getElementById("xoxsonucEkrani").style.color = "#dc2a2a";
                document.getElementById("xoxsonucEkrani").style.border = "3px";

                document.getElementById("xoxfinalekrani").innerHTML = "";
                document.getElementById("xoxsonucEkrani").style.fontSize = "40px";


            } else {
                console.log("1.7.2");

                document.getElementById("xoxsonucGoster").innerHTML = gectin;
                document.getElementById("xoxsonucEkrani").style.color = "#56b856";
                document.getElementById("xoxfinalekrani").innerHTML = "";
            }
        }
        else {
            console.log("1.8");

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
    console.log("Sonuc"+xoxsonuc);
    console.log("Sonuc"+xoxsonucGoster);
    
    metinhesap();

};


function xoxxYasamFocus() {
    document.getElementById("xoxxTravmaNotu").focus();
}
function xoxxBeslenmeFocus() {
    document.getElementById("xoxxSolDolNotu").focus();
}
function xoxxEnerjiFocus() {
    document.getElementById("xoxxEnfeksiyonNotu").focus();
} function xoxxSecmeliFocus() {
    document.getElementById("xoxxYaslanmaNotu").focus();
} function xoxxMCDFocus() {
    document.getElementById("xoxxEndokrinNotu").focus();
} function xoxxUremeFocus() {
    document.getElementById("xoxxSindirimNotu").focus();
} function xoxxHareketFocus() {
    document.getElementById("xoxxSecmeliNotu").focus();
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
    document.getElementById("xoxxGebelikNotu").focus();

}
function xoxxProfFocus() {
    document.getElementById("xoxxProf").focus();

}
function xoxxnoroFocus() {
    document.getElementById("xoxxnoro").focus();

} function xoxxtumorFocus() {
    document.getElementById("xoxxtumor").focus();

}



function xoxxcalculate() {
    var eksik = eksiks[Math.floor(Math.random() * eksiks.length)];
    var fazla = fazlas[Math.floor(Math.random() * fazlas.length)];
    var gectin = gectins[Math.floor(Math.random() * gectins.length)];
    var kaldin = kaldins[Math.floor(Math.random() * kaldins.length)];
    var altmıs = altmiss[Math.floor(Math.random() * altmiss.length)];
    var baraj = barajs[Math.floor(Math.random() * barajs.length)];
    var Finalden = Finaldens[Math.floor(Math.random() * Finaldens.length)];





    var xoxxGebelikNotu = document.getElementById("xoxxGebelikNotu").value;
    var xoxxProf = document.getElementById("xoxxProf").value;

    var xoxxTravmaNotu = document.getElementById("xoxxTravmaNotu").value;
    var xoxxSolDolNotu = document.getElementById("xoxxSolDolNotu").value;
    var xoxxEnfeksiyonNotu = document.getElementById("xoxxEnfeksiyonNotu").value;
    var xoxxYaslanmaNotu = document.getElementById("xoxxYaslanmaNotu").value;
    var xoxxEndokrinNotu = document.getElementById("xoxxEndokrinNotu").value;
    var xoxxSindirimNotu = document.getElementById("xoxxSindirimNotu").value;
    var xoxxSecmeliNotu = document.getElementById("xoxxSecmeliNotu").value;
    var xoxxPDONotu = document.getElementById("xoxxPDONotu").value;
    var xoxxMDUNotu = document.getElementById("xoxxMDUNotu").value;
    var xoxxGelisimNotu = document.getElementById("xoxxGelisimNotu").value;
    var xoxxFinalNotu = document.getElementById("xoxxFinalNotu").value;
    var xoxxnoro = document.getElementById("xoxxnoro").value;
    var xoxxtumor = document.getElementById("xoxxtumor").value;


    //set function
    localStorage.setItem("xoxxGebelikNotu", xoxxGebelikNotu);
    localStorage.setItem("xoxxProf", xoxxProf);

    localStorage.setItem("xoxxTravmaNotu", xoxxTravmaNotu);
    localStorage.setItem("xoxxSolDolNotu", xoxxSolDolNotu);
    localStorage.setItem("xoxxEnfeksiyonNotu", xoxxEnfeksiyonNotu);
    localStorage.setItem("xoxxYaslanmaNotu", xoxxYaslanmaNotu);
    localStorage.setItem("xoxxEndokrinNotu", xoxxEndokrinNotu);
    localStorage.setItem("xoxxSindirimNotu", xoxxSindirimNotu);
    localStorage.setItem("xoxxSecmeliNotu", xoxxSecmeliNotu);
    localStorage.setItem("xoxxPDONotu", xoxxPDONotu);
    localStorage.setItem("xoxxMDUNotu", xoxxMDUNotu);
    localStorage.setItem("xoxxGelisimNotu", xoxxGelisimNotu);
    localStorage.setItem("xoxxFinalNotu", xoxxFinalNotu);
    localStorage.setItem("xoxxnoro", xoxxnoro);
    localStorage.setItem("xoxxtumor", xoxxtumor);


    xoxxGebelikNotu = Number(xoxxGebelikNotu);
    xoxxProf = Number(xoxxProf);

    xoxxSecmeliNotu = Number(xoxxSecmeliNotu);
    xoxxTravmaNotu = Number(xoxxTravmaNotu);
    xoxxPDONotu = Number(xoxxPDONotu);
    xoxxSolDolNotu = Number(xoxxSolDolNotu);
    xoxxMDUNotu = Number(xoxxMDUNotu);
    xoxxEnfeksiyonNotu = Number(xoxxEnfeksiyonNotu);
    xoxxGelisimNotu = Number(xoxxGelisimNotu);
    xoxxYaslanmaNotu = Number(xoxxYaslanmaNotu);
    xoxxFinalNotu = Number(xoxxFinalNotu);
    xoxxEndokrinNotu = Number(xoxxEndokrinNotu);
    xoxxSindirimNotu = Number(xoxxSindirimNotu);
    xoxxtumor = Number(xoxxtumor);
    xoxxnoro = Number(xoxxnoro);



    var xoxxsonuc;


    {
        xoxxsonuc = (
            (
                (
                    ((
                        (xoxxProf * 2) +
                        (xoxxGebelikNotu * 5) +
                        (xoxxtumor * 5) +
                        (xoxxSolDolNotu * 6) +
                        (xoxxTravmaNotu * 5) +
                        (xoxxEnfeksiyonNotu * 6) +
                        (xoxxEndokrinNotu * 6) +
                        (xoxxSindirimNotu * 5) +
                        (xoxxSecmeliNotu * 4) +
                        (xoxxYaslanmaNotu * 5) +
                        (xoxxnoro * 5)
                        
                    ) / 54) * 50) +

                (xoxxMDUNotu * mdukatsayisi) +
                (xoxxPDONotu * 10) +
                (xoxxGelisimNotu * 5) +
                (xoxxFinalNotu * 25)
            ) / 100
        )
            ;
    }
    if(document.getElementById("gCheck").checked == false){xoxxsonuc=xoxxsonuc*100/95;}

    xoxxsonuc = xoxxsonuc.toFixed(2);





    /*    var xoxxsonuc90;
    
    
    {
        xoxxsonuc90 = (
            (
                (
                    ((
                            (xoxxProf*2)+
                            (xoxxGebelikNotu * 5) +
                            (xoxxTravmaNotu * 5) +
                            (xoxxSolDolNotu * 6) +
                            (xoxxEnfeksiyonNotu * 6) +
                            (xoxxEndokrinNotu * 6) +
                            (xoxxSindirimNotu * 5) +
                            (xoxxSecmeliNotu * 4) +
                            (xoxxYaslanmaNotu * 5) +
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
    girisleriKontrolEt();
    gonder('uc');



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
    document.getElementById("secmeliNotu").focus();
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
    var SecmeliNotu = document.getElementById("secmeliNotu").value;
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
    localStorage.setItem("secmeliNotu", SecmeliNotu);
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
    girisleriKontrolEt();
    gonder('bir');




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
                (MDUNotu * mdukatsayisi) +
                (PDONotu * 10) +
                (GelisimNotu * 5) +
                (FinalNotu * 25)
            ) / 100
        )
            ;
    }
    //Gelişim sınavı kaldırıldı   
    if(document.getElementById("gCheck").checked == false){sonuc=sonuc*100/95;}
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


var firebaseConfig = {
    apiKey: "AIzaSyBZCCIeOIbwgmWwx4BjY4zMLuzUAZ20qQE",
    authDomain: "omunot.firebaseapp.com",
    databaseURL: "https://omunot.firebaseio.com",
    projectId: "omunot",
    storageBucket: "omunot.appspot.com",
    messagingSenderId: "917139018965",
    appId: "1:917139018965:web:4ea37b4530a2d07da6be5c",
    measurementId: "G-DK8K11FFFZ"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var docCol = db.collection('sayac');
var tok = 0;
var garip = 0;

var database = firebase.database();





var sayac;



var starCountRef = firebase.database().ref('sayac');
starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    sayac = data["sayac"];
    console.log(data["sayac"]);
    console.log("data[");
    console.log(sayac);
    document.getElementById('sayacekran').innerHTML = sayac;
    document.getElementById('sayacekran1').innerHTML = sayac;
    document.getElementById("sayacekran2").innerHTML = sayac;

});



function insta() {
        window.open("https://www.instagram.com/yusufozill");
};
function goLink({x}) {
       window.open("https://www.tusdata.com/");
};



function mapInputValues(className) {
    const inputElements = document.getElementsByClassName(className);
    const valuesMap = {};
    for (let i = 0; i < inputElements.length; i++) {
      const id = inputElements[i].id;
      const value = inputElements[i].value;
      valuesMap[id] = value;
    }
  
    return valuesMap;
  }
function gonder(sinif) {
   


    notlar = mapInputValues("iinput");

    notlar["id"] =new Date(); //sayac
    notlar["sinif"]=sinif;
    notlar["sayac"]=sayac;
    database.ref("yeninotlar/" + notlar["id"]).set(notlar);

   

};
function mesaj() {

    var xoxxGebelikNotu = document.getElementById("xoxxGebelikNotu").value;
    var xoxxProf = document.getElementById("xoxxProf").value;
    var xoxxTravmaNotu = document.getElementById("xoxxTravmaNotu").value;
    var xoxxSolDolNotu = document.getElementById("xoxxSolDolNotu").value;
    var xoxxEnfeksiyonNotu = document.getElementById("xoxxEnfeksiyonNotu").value;
    var xoxxYaslanmaNotu = document.getElementById("xoxxYaslanmaNotu").value;
    var xoxxEndokrinNotu = document.getElementById("xoxxEndokrinNotu").value;
    var xoxxSindirimNotu = document.getElementById("xoxxSindirimNotu").value;
    var xoxxSecmeliNotu = document.getElementById("xoxxSecmeliNotu").value;
    var xoxxPDONotu = document.getElementById("xoxxPDONotu").value;
    var xoxxMDUNotu = document.getElementById("xoxxMDUNotu").value;
    var xoxxGelisimNotu = document.getElementById("xoxxGelisimNotu").value;
    var xoxxFinalNotu = document.getElementById("xoxxFinalNotu").value;
    var xoxxnoro = document.getElementById("xoxxnoro").value;
    var xoxxtumor = document.getElementById("xoxxtumor").value;
    var id = new Date();


    var beyinVeDuyularNotu = document.getElementById("beyinVeDuyularNotu").value;
    var buyumeGelismeDavranisNotu = document.getElementById("buyumeGelismeDavranisNotu").value;
    var etikNotu = document.getElementById("etikNotu").value;
    var zedelenmeNotu = document.getElementById("zedelenmeNotu").value;
    var biyolojikEtmenlerNotu = document.getElementById("biyolojikEtmenlerNotu").value;
    var kanNotu = document.getElementById("kanNotu").value;
    var savunmaNotu = document.getElementById("savunmaNotu").value;
    var secmeliNotu = document.getElementById("secmeliNotu").value;
    var xoxPDONotu = document.getElementById("xoxPDONotu").value;
    var xoxMDUNotu = document.getElementById("xoxMDUNotu").value;
    var xoxGelisimNotu = document.getElementById("xoxGelisimNotu").value;
    var xoxFinalNotu = document.getElementById("xoxFinalNotu").value;



    var HayatinTemeliNotu = document.getElementById("HayatinTemeliNotu").value;
    var YasamNotu = document.getElementById("YasamNotu").value;
    var BeslenmeNotu = document.getElementById("BeslenmeNotu").value;
    var EnerjiNotu = document.getElementById("EnerjiNotu").value;
    var SecmeliNotu = document.getElementById("secmeliNotu").value;
    var MCDNotu = document.getElementById("MCDNotu").value;
    var UremeNotu = document.getElementById("UremeNotu").value;
    var HareketNotu = document.getElementById("HareketNotu").value;
    var PDONotu = document.getElementById("PDONotu").value;
    var MDUNotu = document.getElementById("MDUNotu").value;
    var GelisimNotu = document.getElementById("GelisimNotu").value;
    var FinalNotu = document.getElementById("FinalNotu").value;
    // var Gariptext = document.getElementById("Gariptext").value;
    // var Gariptextxox = document.getElementById("Gariptextxox").value;
    // var Gariptextxoxx = document.getElementById("Gariptextxoxx").value;





    var not = {
        time: id,
        // birinciSinifMesaji: Gariptext,
        // ikinciSinifMesaji: Gariptextxox,
        // ucuncuSinifMesaji: Gariptextxoxx,
   }

    db.collection('mesaj').add(not);
    database.ref("mesaj/" + id).set(not);


    // document.getElementById("Gariptext").value = "";
    // document.getElementById("Gariptextxox").value = "";
    // document.getElementById("Gariptextxoxx").value = "";
    document.getElementById("somatostatin").innerHTML = "Gönderildi";
    document.getElementById("xoxsomatostatin").innerHTML = "Gönderildi";
    document.getElementById("xoxxsomatostatin").innerHTML = "Gönderildi";

};

function alertmessage(x){
    var alertDiv = document.getElementById("alert");
    alertDiv.innerHTML = x;
    alertDiv.style.display = "block"; // Uyarıyı görünür hale getirin
    
    // Belirli bir süre sonra uyarıyı gizle
    setTimeout(function() {
      alertDiv.style.display = "none";
    }, 3000); // 3000 milisaniye (3 saniye) sonra uyarıyı gizle
}

function set() {

    sayac++;
    starCountRef.set({ "sayac": sayac });


}

function basmak() {

    set();

}












