package com.omunot.omunotsays.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Card
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.omunot.omunotsays.hesap.INSTAGRAM
import com.omunot.omunotsays.hesap.SINIFLAR
import com.omunot.omunotsays.hesap.sayiYaz

@Composable
fun AyarlarEkrani(vm: HesapViewModel, ic: PaddingValues) {
    val a = vm.ayarlar
    val degistir = vm::ayarlariDegistir
    var sifirlaSor by rememberSaveable { mutableStateOf(false) }
    val uri = LocalUriHandler.current

    // Sıfırlamada kutulardaki yazılı metin de varsayılana dönsün.
    key(vm.sifirlamaSurumu) {
        Column(
            Modifier
                .fillMaxSize()
                .padding(ic)
                .consumeWindowInsets(ic)
                .imePadding()
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            Bolum("Hesaplama detayları") {
                SayiSatiri("Geçme notu", a.gecmeNotu) { degistir(a.copy(gecmeNotu = it)) }
                AnahtarSatiri("Geçme notunu ${sayiYaz(a.gecmeNotu - 0.5)} olarak hesapla", a.gecmeVirgul) {
                    degistir(a.copy(gecmeVirgul = it))
                }
                SayiSatiri("Final barajı", a.finalBaraji) { degistir(a.copy(finalBaraji = it)) }
                AnahtarSatiri("Final barajını ${sayiYaz(a.finalBaraji - 0.5)} olarak hesapla", a.finalVirgul) {
                    degistir(a.copy(finalVirgul = it))
                }
            }

            Bolum("Katsayı ayarları") {
                SayiSatiri("Blokların payı", a.blokPayi, onek = "%") { degistir(a.copy(blokPayi = it)) }
                SayiSatiri("MDU", a.mduPayi, onek = "%") { degistir(a.copy(mduPayi = it)) }
                SayiSatiri("PDÖ", a.pdoPayi, onek = "%") { degistir(a.copy(pdoPayi = it)) }
                SayiSatiri("Gelişim", a.gelisimPayi, onek = "%") { degistir(a.copy(gelisimPayi = it)) }
                SayiSatiri("Final", a.finalPayi, onek = "%") { degistir(a.copy(finalPayi = it)) }
                if (a.payToplami != 100) {
                    Text(
                        "Payların toplamı %${a.payToplami}; 100 olmalı, yoksa ortalama yanlış çıkar.",
                        color = MaterialTheme.colorScheme.error,
                        style = MaterialTheme.typography.bodySmall,
                        modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
                    )
                }
                if (a.finalPayi == 0) {
                    Text(
                        "Final payı 0 iken \"finalden kaç almalıyım\" hesaplanamaz.",
                        color = MaterialTheme.colorScheme.error,
                        style = MaterialTheme.typography.bodySmall,
                        modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
                    )
                }
            }

            SINIFLAR.forEach { sinif ->
                Bolum("${sinif.sekme} blok katsayıları") {
                    val agirliklar = a.agirliklar(sinif)
                    sinif.bloklar.forEachIndexed { i, blok ->
                        SayiSatiri(blok.ad, agirliklar[i], onek = "x") { degistir(a.agirlikDegistir(sinif, i, it)) }
                    }
                }
            }

            TextButton(onClick = { sifirlaSor = true }, modifier = Modifier.fillMaxWidth()) {
                Text("Ayarları varsayılana sıfırla", color = MaterialTheme.colorScheme.error)
            }

            Text(
                "2024 yılında Yusuf Özil tarafından tasarlanmıştır.",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.tertiary,
                textAlign = TextAlign.End,
                modifier = Modifier
                    .fillMaxWidth()
                    .clickable { runCatching { uri.openUri(INSTAGRAM) } }
                    .padding(vertical = 12.dp),
            )
            Spacer(Modifier.height(8.dp))
        }
    }

    if (sifirlaSor) {
        AlertDialog(
            onDismissRequest = { sifirlaSor = false },
            title = { Text("Ayarlar sıfırlansın mı?") },
            text = { Text("Geçme notu, final barajı ve tüm katsayılar varsayılana döner. Girdiğin notlar silinmez.") },
            confirmButton = {
                TextButton(onClick = { sifirlaSor = false; vm.ayarlariSifirla() }) {
                    Text("Sıfırla", color = MaterialTheme.colorScheme.error)
                }
            },
            dismissButton = { TextButton(onClick = { sifirlaSor = false }) { Text("Vazgeç") } },
        )
    }
}

@Composable
private fun Bolum(baslik: String, icerik: @Composable () -> Unit) {
    Text(
        baslik,
        style = MaterialTheme.typography.titleSmall,
        color = MaterialTheme.colorScheme.primary,
        modifier = Modifier.padding(start = 4.dp, top = 8.dp),
    )
    Card(Modifier.fillMaxWidth()) {
        Column { icerik() }
    }
}

/**
 * 0–100 arası tam sayı. Geçersiz yazımda kutu kırmızı olur ve ayar değişmez;
 * böylece yazarken (ör. kutuyu boşaltıp yeniden yazarken) hesap bozulmaz.
 */
@Composable
private fun SayiSatiri(etiket: String, deger: Int, onek: String = "", onDegis: (Int) -> Unit) {
    var metin by remember { mutableStateOf(deger.toString()) }
    val gecerli = metin.toIntOrNull()?.let { it in 0..100 } == true
    Column {
        Row(
            Modifier.padding(horizontal = 16.dp, vertical = 4.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(etiket, style = MaterialTheme.typography.bodyLarge, modifier = Modifier.weight(1f))
            OutlinedTextField(
                value = metin,
                onValueChange = { yeni ->
                    if (yeni.length <= 3 && yeni.all(Char::isDigit)) {
                        metin = yeni
                        yeni.toIntOrNull()?.takeIf { it in 0..100 }?.let(onDegis)
                    }
                },
                singleLine = true,
                isError = !gecerli,
                prefix = if (onek.isNotEmpty()) ({ Text(onek) }) else null,
                textStyle = MaterialTheme.typography.bodyLarge.copy(textAlign = TextAlign.End),
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number, imeAction = ImeAction.Next),
                modifier = Modifier.width(96.dp),
            )
        }
        HorizontalDivider(Modifier.padding(horizontal = 16.dp))
    }
}

@Composable
private fun AnahtarSatiri(etiket: String, acik: Boolean, onDegis: (Boolean) -> Unit) {
    Column {
        Row(
            Modifier
                .fillMaxWidth()
                .clickable { onDegis(!acik) }
                .padding(horizontal = 16.dp, vertical = 8.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(etiket, style = MaterialTheme.typography.bodyLarge, modifier = Modifier.weight(1f))
            Switch(checked = acik, onCheckedChange = onDegis)
        }
        HorizontalDivider(Modifier.padding(horizontal = 16.dp))
    }
}
