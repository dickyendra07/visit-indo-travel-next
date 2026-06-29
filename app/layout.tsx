import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visit Indo Travel",
  description: "Premium Indonesia private travel journeys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17514030878"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;

            gtag('js', new Date());
            gtag('config', 'AW-17514030878');

            window.gtagSendEvent = function(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };

              if (typeof window.gtag === 'function') {
                window.gtag('event', 'ads_conversion_Hubungi_Kami_1', {
                  event_callback: callback,
                  event_timeout: 2000
                });
              } else {
                callback();
              }

              return false;
            };

            document.addEventListener('click', function(event) {
              var target = event.target && event.target.closest ? event.target.closest('a') : null;
              if (!target) return;

              var href = target.getAttribute('href') || '';
              var shouldTrack =
                href === '#contact' ||
                href.indexOf('wa.me') !== -1 ||
                href.indexOf('whatsapp') !== -1 ||
                href.indexOf('tel:') === 0 ||
                href.indexOf('mailto:') === 0;

              if (!shouldTrack) return;

              event.preventDefault();
              window.gtagSendEvent(target.href || href);
            });
          `}
        </Script>

{children}
      </body>
    </html>
  );
}
