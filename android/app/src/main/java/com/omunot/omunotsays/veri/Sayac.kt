package com.omunot.omunotsays.veri

import android.util.Log
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.MutableData
import com.google.firebase.database.Transaction
import com.google.firebase.database.ValueEventListener
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow

/**
 * Canlı "HESAPLA" sayacı: Realtime Database'de sayac/sayac (web ve iOS ile ortak).
 * Firebase'e ulaşılamazsa değer null kalır, hesap makinesi yine çalışır.
 */
class Sayac {
    private val ref = runCatching { FirebaseDatabase.getInstance().getReference("sayac") }
        .onFailure { Log.w("Sayac", "Firebase başlatılamadı", it) }
        .getOrNull()

    val deger: Flow<Long?> = callbackFlow {
        val dinleyici = object : ValueEventListener {
            override fun onDataChange(anlik: DataSnapshot) {
                trySend(runCatching { anlik.child("sayac").getValue(Long::class.java) }.getOrNull())
            }

            override fun onCancelled(hata: DatabaseError) {
                Log.w("Sayac", "Sayaç okunamadı: ${hata.message}")
                trySend(null)
            }
        }
        ref?.addValueEventListener(dinleyici) ?: trySend(null)
        awaitClose { ref?.removeEventListener(dinleyici) }
    }

    /** İki kişi aynı anda bassa da artış kaybolmasın diye transaction ile. */
    fun arttir() {
        ref?.runTransaction(object : Transaction.Handler {
            override fun doTransaction(veri: MutableData): Transaction.Result {
                val eski = runCatching { veri.child("sayac").getValue(Long::class.java) }.getOrNull() ?: 0L
                veri.child("sayac").value = eski + 1
                return Transaction.success(veri)
            }

            override fun onComplete(hata: DatabaseError?, yazildi: Boolean, anlik: DataSnapshot?) {
                if (hata != null) Log.w("Sayac", "Sayaç artırılamadı: ${hata.message}")
            }
        })
    }
}
