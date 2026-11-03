import java.util.Properties

plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.google.services) apply false
}

// Firebase ayarı (app/google-services.json) git'e girmez. Dosya yoksa eklenti uygulanmaz: derleme
// ve testler çalışır, ama uygulama Firebase'e (sayaç) bağlanamaz.
if (file("google-services.json").exists()) apply(plugin = "com.google.gms.google-services")

// İmza bilgisi git'e girmez: keystore.properties ~/developer/keys/omunot/ altından kopyalanır.
val imza = Properties().apply {
    rootProject.file("keystore.properties").takeIf { it.exists() }?.inputStream()?.use(::load)
}

android {
    // Hesap testinin golden örnekleri web ile ortak: ortak/web_hesap_ornekleri.json
    sourceSets.getByName("test").resources.srcDir("../../ortak")
    namespace = "com.omunot.omunotsays"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.omunot.omunotsays"
        minSdk = 24
        targetSdk = 36
        // Flutter sürümü en son 4.0.1+10 idi; Play daha yüksek versionCode ister.
        versionCode = 11
        versionName = "5.0.0"
    }

    signingConfigs {
        if (!imza.isEmpty) {
            create("release") {
                storeFile = file(imza.getProperty("storeFile"))
                storePassword = imza.getProperty("storePassword")
                keyAlias = imza.getProperty("keyAlias")
                keyPassword = imza.getProperty("keyPassword")
            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
            signingConfig = signingConfigs.findByName("release")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        compose = true
    }
}

// Anahtar yoksa release sessizce imzasız çıkmasın.
tasks.matching { it.name.matches(Regex("(assemble|bundle)Release")) }.configureEach {
    doFirst {
        if (imza.isEmpty) throw GradleException("keystore.properties yok: ~/developer/keys/omunot/ altından kopyala")
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.lifecycle.runtime.compose)
    implementation(libs.androidx.lifecycle.viewmodel.compose)
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.graphics)
    implementation(libs.androidx.compose.ui.tooling.preview)
    implementation(libs.androidx.compose.material3)
    implementation(libs.androidx.compose.material.icons.core)
    implementation(platform(libs.firebase.bom))
    implementation(libs.firebase.database)

    debugImplementation(libs.androidx.compose.ui.tooling)

    testImplementation(libs.junit)
    testImplementation(libs.org.json)
}
