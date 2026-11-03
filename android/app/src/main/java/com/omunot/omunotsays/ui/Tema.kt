package com.omunot.omunotsays.ui

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Typography
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import com.omunot.omunotsays.R
import com.omunot.omunotsays.hesap.Durum

// Renkler omunot.com css/css.css ve iOS uygulamasından.
val Turuncu = Color(0xFFE46938)
val Yesil = Color(0xFF58975D)
val GectiYesili = Color(0xFF56B856)
val Kirmizi = Color(0xFFDC2A2A)
val Sari = Color(0xFFB1A928)
val Mavi = Color(0xFF457FA5)

val IndieFlower = FontFamily(Font(R.font.indie_flower))
private val Montserrat = FontFamily(Font(R.font.montserrat_alternates))

// M3'ün varsayılan mor tonları kalmasın diye zemin ve kap renkleri de verilir.
private val Acik = lightColorScheme(
    primary = Yesil,
    onPrimary = Color.White,
    primaryContainer = Color(0xFFD6EED8),
    onPrimaryContainer = Color(0xFF0B3A12),
    secondary = Turuncu,
    onSecondary = Color.White,
    secondaryContainer = Color(0xFFD6EED8),
    onSecondaryContainer = Color(0xFF0B3A12),
    tertiary = Mavi,
    error = Kirmizi,
    background = Color.White,
    surface = Color.White,
    surfaceVariant = Color(0xFFEEF3EE),
    surfaceContainerLowest = Color.White,
    surfaceContainerLow = Color(0xFFF6F8F6),
    surfaceContainer = Color(0xFFF1F4F1),
    surfaceContainerHigh = Color(0xFFEBEFEB),
    surfaceContainerHighest = Color(0xFFE5EAE5),
)

private val Koyu = darkColorScheme(
    primary = Color(0xFF7DC283),
    onPrimary = Color(0xFF0B3A12),
    primaryContainer = Color(0xFF2A4D2E),
    onPrimaryContainer = Color(0xFFD6EED8),
    secondary = Turuncu,
    onSecondary = Color.White,
    secondaryContainer = Color(0xFF2A4D2E),
    onSecondaryContainer = Color(0xFFD6EED8),
    tertiary = Color(0xFF8DBEDE),
    error = Color(0xFFFF6B6B),
    background = Color(0xFF121212),
    surface = Color(0xFF121212),
    surfaceVariant = Color(0xFF2A2F2A),
    surfaceContainerLowest = Color(0xFF0D0D0D),
    surfaceContainerLow = Color(0xFF1A1C1A),
    surfaceContainer = Color(0xFF1E211E),
    surfaceContainerHigh = Color(0xFF282B28),
    surfaceContainerHighest = Color(0xFF333633),
)

private val Yazilar = Typography().let { t ->
    fun f(s: androidx.compose.ui.text.TextStyle) = s.copy(fontFamily = Montserrat)
    Typography(
        displayLarge = f(t.displayLarge), displayMedium = f(t.displayMedium), displaySmall = f(t.displaySmall),
        headlineLarge = f(t.headlineLarge), headlineMedium = f(t.headlineMedium), headlineSmall = f(t.headlineSmall),
        titleLarge = f(t.titleLarge), titleMedium = f(t.titleMedium), titleSmall = f(t.titleSmall),
        bodyLarge = f(t.bodyLarge), bodyMedium = f(t.bodyMedium), bodySmall = f(t.bodySmall),
        labelLarge = f(t.labelLarge), labelMedium = f(t.labelMedium), labelSmall = f(t.labelSmall),
    )
}

@Composable
fun OmunotTema(icerik: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = if (isSystemInDarkTheme()) Koyu else Acik,
        typography = Yazilar,
        content = icerik,
    )
}

/** Sonuç mesajının rengi (web'deki .sonuc[data-durum]). */
@Composable
fun Durum.renk(): Color = when (this) {
    // Web sarısı beyaz zeminde soluk kalır; açık temada koyulaştırılır.
    Durum.FAZLA -> if (isSystemInDarkTheme()) Sari else Color(0xFF857F1A)
    Durum.KALDI, Durum.BARAJ -> MaterialTheme.colorScheme.error
    Durum.GECTI -> GectiYesili
    Durum.GEREK -> MaterialTheme.colorScheme.onSurface
}
