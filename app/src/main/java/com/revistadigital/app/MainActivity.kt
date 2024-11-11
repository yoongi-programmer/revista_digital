package com.revistadigital.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)

        // Configura el WebView
        webView.webViewClient = WebViewClient() // Evita abrir el navegador externo
        webView.settings.javaScriptEnabled = true // Habilita JavaScript
        webView.settings.cacheMode = WebSettings.LOAD_NO_CACHE // No guarda caché
        webView.settings.domStorageEnabled = true // Habilita almacenamiento DOM

        // Carga la URL de tu GitHub Pages
        webView.loadUrl("https://yoongi-programmer.github.io/revista_digital/")

    }

    // Para manejar el botón "Atrás" y navegar dentro del WebView
    @Deprecated("This method has been deprecated in favor of using the\n      {@link OnBackPressedDispatcher} via {@link #getOnBackPressedDispatcher()}.\n      The OnBackPressedDispatcher controls how back button events are dispatched\n      to one or more {@link OnBackPressedCallback} objects.")
    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}


