import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const inter    = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], variable: "--font-playfair" });
const mono     = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Rootstratum — Cloud, DevOps & AIOps for Modern Businesses",
  description:
    "Expert Cloud Architecture, DevOps Platform Engineering, and AIOps solutions. Trusted by engineering teams across India and globally to build, migrate, and operate infrastructure at scale.",
};

const nrConfig = `window.NREUM||(NREUM={});NREUM.init={browser_consent_mode:{enabled:false},privacy:{cookies_enabled:true},session_replay:{enabled:true,block_selector:'',mask_text_selector:'*',sampling_rate:10.0,error_sampling_rate:100.0,mask_all_inputs:true,collect_fonts:true,inline_images:false,inline_stylesheet:true,fix_stylesheets:true,preload:false,mask_input_options:{}},distributed_tracing:{enabled:true},performance:{capture_measures:true},ajax:{deny_list:["bam.nr-data.net"],capture_payloads:'none'}};NREUM.loader_config={accountID:"8378955",trustKey:"8378955",agentID:"1589267627",licenseKey:"NRJS-29af7a6ded9d6ccbf00",applicationID:"1589267627"};NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-29af7a6ded9d6ccbf00",applicationID:"1589267627",sa:1};`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-inter, Inter, system-ui, sans-serif)" }}>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: nrConfig }} />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://js-agent.newrelic.com/nr-loader-spa-1.320.1.min.js" />
        {children}
      </body>
    </html>
  );
}
