package com.omunot.omunotsays

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.SnackbarResult
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalFocusManager
import androidx.lifecycle.viewmodel.compose.viewModel
import com.omunot.omunotsays.ui.AyarlarEkrani
import com.omunot.omunotsays.ui.HesapViewModel
import com.omunot.omunotsays.ui.HesaplaEkrani
import com.omunot.omunotsays.ui.OmunotTema
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            OmunotTema { Uygulama() }
        }
    }
}

@Composable
private fun Uygulama(vm: HesapViewModel = viewModel()) {
    var sekme by rememberSaveable { mutableIntStateOf(0) }
    val bildirimKutusu = remember { SnackbarHostState() }
    val odak = LocalFocusManager.current

    // Ayarlar'dayken geri tuşu önce Anasayfa'ya döner.
    BackHandler(enabled = sekme != 0) { sekme = 0 }

    LaunchedEffect(Unit) {
        vm.bildirimler.collect { b ->
            // Yeni mesaj eskisini beklemeden yerini alsın.
            bildirimKutusu.currentSnackbarData?.dismiss()
            launch {
                val sonuc = bildirimKutusu.showSnackbar(
                    message = b.metin,
                    actionLabel = if (b.geriAl != null) "Geri al" else null,
                    duration = SnackbarDuration.Short,
                )
                if (sonuc == SnackbarResult.ActionPerformed) b.geriAl?.invoke()
            }
        }
    }

    Scaffold(
        snackbarHost = { SnackbarHost(bildirimKutusu) },
        bottomBar = {
            NavigationBar {
                NavigationBarItem(
                    selected = sekme == 0,
                    onClick = { odak.clearFocus(); sekme = 0 },
                    icon = { Icon(Icons.Filled.Home, contentDescription = null) },
                    label = { Text("Anasayfa") },
                )
                NavigationBarItem(
                    selected = sekme == 1,
                    onClick = { odak.clearFocus(); sekme = 1 },
                    icon = { Icon(Icons.Filled.Settings, contentDescription = null) },
                    label = { Text("Ayarlar") },
                )
            }
        },
    ) { ic ->
        when (sekme) {
            0 -> HesaplaEkrani(vm, ic)
            else -> AyarlarEkrani(vm, ic)
        }
    }
}
