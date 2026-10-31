package com.omunot.omunotsays.ui

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.SegmentedButton
import androidx.compose.material3.SegmentedButtonDefaults
import androidx.compose.material3.SingleChoiceSegmentedButtonRow
import androidx.compose.material3.Surface
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusDirection
import androidx.compose.ui.focus.focusProperties
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.semantics.LiveRegionMode
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.liveRegion
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.omunot.omunotsays.R
import com.omunot.omunotsays.hesap.Alan
import com.omunot.omunotsays.hesap.Durum
import com.omunot.omunotsays.hesap.FINALDEN
import com.omunot.omunotsays.hesap.SINIFLAR
import com.omunot.omunotsays.hesap.bilgiNotlari
import com.omunot.omunotsays.hesap.ikiHane
import com.omunot.omunotsays.hesap.sayiYaz
import com.omunot.omunotsays.veri.Gosterim
import kotlinx.coroutines.delay

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HesaplaEkrani(vm: HesapViewModel, ic: PaddingValues) {
    val sinif = SINIFLAR[vm.sinifNo]
    val sayac by vm.sayacDegeri.collectAsStateWithLifecycle()
    val odak = LocalFocusManager.current

    Column(
        Modifier
            .fillMaxSize()
            .padding(ic)
            .consumeWindowInsets(ic)
            .imePadding()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
    ) {
        SingleChoiceSegmentedButtonRow(Modifier.fillMaxWidth()) {
            SINIFLAR.forEachIndexed { i, s ->
                SegmentedButton(
                    selected = vm.sinifNo == i,
                    onClick = { odak.clearFocus(); vm.sinifSec(i) },
                    shape = SegmentedButtonDefaults.itemShape(i, SINIFLAR.size),
                ) { Text(s.sekme, maxLines = 1) }
            }
        }

        Spacer(Modifier.height(16.dp))

        // Sınıf değişince kutular (ve odak sırası) baştan kurulsun.
        key(sinif.id) {
            sinif.alanlar.chunked(2).forEach { satir ->
                Row(
                    Modifier.fillMaxWidth().padding(bottom = 10.dp),
                    horizontalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    satir.forEach { alan ->
                        val gelisimAlani = alan.id == sinif.gelisim
                        NotHucresi(
                            alan = alan,
                            deger = alan.sabit?.let(::sayiYaz) ?: vm.notlar[alan.id].orEmpty(),
                            durum = vm.alanDurumlari[alan.id],
                            etkin = alan.sabit == null && !(gelisimAlani && !vm.gelisimVar),
                            sonAlan = alan.id == sinif.final,
                            onDegis = { vm.notGir(alan.id, it) },
                            onBitti = { odak.clearFocus(); vm.hesaplaVeSay(sinif) },
                            ek = if (gelisimAlani) {
                                {
                                    Switch(
                                        checked = vm.gelisimVar,
                                        onCheckedChange = vm::gelisimDegistir,
                                        // Klavyedeki "İleri" anahtara düşüp klavyeyi kapatmasın.
                                        modifier = Modifier
                                            .focusProperties { canFocus = false }
                                            .semantics { contentDescription = "Gelişim sınavı hesaba katılsın" },
                                    )
                                }
                            } else null,
                            modifier = Modifier.weight(1f),
                        )
                    }
                    if (satir.size == 1) Spacer(Modifier.weight(1f))
                }
            }
        }

        SonucAlani(
            gosterim = vm.sonuclar[sinif.id],
            sayac = sayac,
            onHesapla = { odak.clearFocus(); vm.hesaplaVeSay(sinif) },
            onTemizle = { odak.clearFocus(); vm.temizle(sinif) },
        )

        Spacer(Modifier.height(16.dp))
        BilgiNotu(bilgiNotlari(vm.ayarlar))
    }
}

@Composable
private fun NotHucresi(
    alan: Alan,
    deger: String,
    durum: AlanDurumu?,
    etkin: Boolean,
    sonAlan: Boolean,
    onDegis: (String) -> Unit,
    onBitti: () -> Unit,
    ek: (@Composable () -> Unit)?,
    modifier: Modifier = Modifier,
) {
    val odak = LocalFocusManager.current
    val kenar = when (durum) {
        AlanDurumu.FAZLA -> Sari
        AlanDurumu.BOS -> MaterialTheme.colorScheme.error
        null -> MaterialTheme.colorScheme.primary
    }
    Column(modifier) {
        Row(Modifier.heightIn(min = 40.dp), verticalAlignment = Alignment.CenterVertically) {
            Text(
                alan.ad,
                style = MaterialTheme.typography.labelLarge,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
                modifier = Modifier.weight(1f),
            )
            ek?.invoke()
        }
        OutlinedTextField(
            value = deger,
            onValueChange = onDegis,
            enabled = etkin,
            singleLine = true,
            placeholder = { Text("—", Modifier.fillMaxWidth(), textAlign = TextAlign.Center) },
            textStyle = MaterialTheme.typography.titleMedium.copy(textAlign = TextAlign.Center),
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Decimal,
                imeAction = if (sonAlan) ImeAction.Done else ImeAction.Next,
            ),
            keyboardActions = KeyboardActions(
                onNext = { odak.moveFocus(FocusDirection.Next) },
                onDone = { onBitti() },
            ),
            colors = OutlinedTextFieldDefaults.colors(
                unfocusedBorderColor = kenar,
                focusedBorderColor = kenar,
            ),
            shape = RoundedCornerShape(8.dp),
            modifier = Modifier
                .fillMaxWidth()
                .semantics { contentDescription = "${alan.ad} notu" },
        )
    }
}

@Composable
private fun SonucAlani(gosterim: Gosterim?, sayac: Long?, onHesapla: () -> Unit, onTemizle: () -> Unit) {
    Row(Modifier.fillMaxWidth().padding(top = 8.dp), verticalAlignment = Alignment.CenterVertically) {
        Column(
            Modifier
                .weight(1f)
                .semantics { liveRegion = LiveRegionMode.Polite },
        ) {
            if (gosterim == null) {
                Text(
                    "Notlarını gir, HESAPLA'ya bas",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
            } else {
                if (gosterim.durum == Durum.GEREK) Text(FINALDEN, style = MaterialTheme.typography.titleMedium)
                Text(ikiHane(gosterim.sayi), fontSize = 44.sp, fontWeight = FontWeight.Bold)
                Text(gosterim.mesaj, fontFamily = IndieFlower, fontSize = 30.sp, color = gosterim.durum.renk())
            }
        }
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            HesaplaDugmesi(sayac, onHesapla)
            IconButton(onClick = onTemizle, modifier = Modifier.padding(top = 4.dp)) {
                Icon(
                    painterResource(R.drawable.kova),
                    contentDescription = "Notları temizle",
                    modifier = Modifier.size(28.dp),
                )
            }
        }
    }
}

/** iOS'taki yuvarlak turuncu düğme: basılınca beyaz kareye döner. Altında ortak sayaç. */
@Composable
private fun HesaplaDugmesi(sayac: Long?, onClick: () -> Unit) {
    val etkilesim = remember { MutableInteractionSource() }
    val basili by etkilesim.collectIsPressedAsState()
    val kose by animateDpAsState(if (basili) 0.dp else 50.dp, label = "kose")
    Surface(
        onClick = onClick,
        shape = RoundedCornerShape(kose),
        color = if (basili) Color.White else Turuncu,
        contentColor = if (basili) Turuncu else Color.White,
        border = if (basili) BorderStroke(1.dp, Turuncu) else null,
        interactionSource = etkilesim,
        modifier = Modifier.size(100.dp),
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
        ) {
            Text("HESAPLA", fontFamily = IndieFlower, fontSize = 22.sp)
            Box(
                Modifier
                    .padding(top = 2.dp)
                    .semantics { contentDescription = "Toplam hesaplama: ${sayac ?: "bilinmiyor"}" },
            ) {
                Surface(shape = RoundedCornerShape(25.dp), color = Color.White, contentColor = Color.Black) {
                    Text(
                        sayac?.toString() ?: "???",
                        fontSize = 12.sp,
                        modifier = Modifier.padding(horizontal = 6.dp),
                    )
                }
            }
        }
    }
}

/** 5 saniyede bir değişen bilgi notu (web'deki .bilgi). */
@Composable
private fun BilgiNotu(notlar: List<String>) {
    var sira by remember { mutableStateOf(0) }
    LaunchedEffect(notlar.size) {
        while (true) {
            delay(5_000)
            if (notlar.size > 1) sira = (sira + 1 + (0 until notlar.size - 1).random()) % notlar.size
        }
    }
    Crossfade(targetState = notlar.getOrElse(sira % notlar.size) { "" }, label = "bilgi") { metin ->
        Text(
            metin,
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.tertiary,
            modifier = Modifier.fillMaxWidth(),
        )
    }
}
