"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

const corporateMembers = [
  { name: "BitBox", url: "https://shiftcrypto.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1596551209231-6DTNGQPKB6CHPIPF3GRS/02b+db-BitBox+margin+bkg-transparent.png" },
  { name: "Bitcoin Suisse", url: "https://www.bitcoinsuisse.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1539339845417-XB6KMLWHKWCXKYOIDQLL/full_logo_new.png" },
  { name: "Blockchain Source", url: "https://blockchainsource.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728027563887-9D9OLHIZYI2BQQB4XUNH/logo-354x59.png" },
  { name: "Crypto Finance", url: "https://www.cryptofinance.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1556548120132-FDRR0QNN1G4YMFDGJHJO/Crypto-Finance-logo.jpg" },
  { name: "21 Analytics", url: "https://www.21analytics.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1594364557839-RTANLGKYTOHNW3W7DWNB/Logo.png" },
  { name: "Tatoshi Services", url: "https://tatoshi-services.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727654250834-4V6KRLIF5N1AROCN4JT1/Logo+Tatoshi+Services.png" },
  { name: "Apps with love", url: "https://appswithlove.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624207019607-RBOKOAIK9P121899L034/Awl_Logo_17_black_rgb.png" },
  { name: "Hodling", url: "https://hodling.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624369670385-FICD1IXHLKO0KISG37QF/hodling-logo.png" },
  { name: "Alephium", url: "https://alephium.org/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636130674575-E9EBWE86QJOH1R038Z47/image_2021-11-01_09-39-50.png" },
  { name: "Aktionariat", url: "https://aktionariat.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636188901843-LKE49EDOBMHBW0NQLD2V/Aktionariat.jpg" },
  { name: "21 Lectures", url: "https://www.21lectures.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1681299724574-ROJH85FPQ8DDD36W8MKJ/yellow_black.png" },
  { name: "Incore Bank", url: "https://incorebank.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1765804013568-ON3P0X10SFU43PP1GCK9/InC_Logotype_rgb-hex-1749C6_0724.jpg" },
  { name: "Pocket", url: "#", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1738872657909-DN85KSD3N76MHRTHKACR/pocket-light.png" },
  { name: "House of Satoshi", url: "https://www.house-of-satoshi.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920586590-25CR1IXKQRR83AL62VQG/HoS.jpg" },
  { name: "Berglinde", url: "https://www.berglinde.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920800707-V2WQ0NY7MCAMG4F5W79I/Berglinde.jpg" },
  { name: "Infinity21", url: "https://infinity21.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726921284073-GBCP6S64DOUMQOIC4OQL/Infintiy21_com.jpg" },
  { name: "SayNode", url: "https://www.saynode.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568467135-P6HCSME3M25YDVSLY0BS/Logo+Saynode+B+transparent+%282%29.png" },
  { name: "NYM", url: "https://nymtech.net/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728216316012-B4YYGCSVJ9I6K23GTI9R/nym_1200x630-2dfd28cf.png" },
  { name: "Zeus ATM", url: "https://zeusatm.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568701020-HLH119V9BFJEPE1P3GM3/Zeus+Logo+ohne+Claim%403x.png" },
  { name: "Bitcoin Schweiz", url: "https://bitcoin-schweiz.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727571196505-TICAF3KK9275JC9NJGRW/Logo+bitcoin-schweiz.ch.jpg" },
  { name: "Lamassu", url: "https://lamassu.is/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1730642437107-NM6E7FDWMOGHSA5DJ1H9/logo-atms-colored-b-320px.png" },
  { name: "Scholarium", url: "http://scholarium.at/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734428968346-05XILAMCMAT5R1B5GQ4C/scholarium-logo.png" },
  { name: "House of Test", url: "https://www.houseoftest.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734444147758-EDKRGTOED8C3F698QV1L/hot-logotype-black-rebels.png" },
  { name: "Relai", url: "https://relai.app/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1736800666643-VZ8Z4HLZQD4QEZN5FGMM/Relai_Julian+Liniger_.png" },
  { name: "Nakamochi", url: "https://nakamochi.io/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1741777487636-80VAQDB2JONCFEZ3M4XW/nakamochi-logo-black.png" },
  { name: "Bittr", url: "https://getbittr.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742559399401-2H32H2A9OV1BSDEZ0MF9/Bittr+Logo+%281%29.png" },
  { name: "Unita", url: "https://unitafinance.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742910303034-A4PS8AGV0RLXQ0RU5EC7/unita.jpg" },
  { name: "NiceHash", url: "https://www.nicehash.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1744446762941-RQH7Y2A8OZXB8Z1ESJH9/logo_big_light.png" },
  { name: "Pandora Prime", url: "https://pandoraprime.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1752831944031-GC9P7Z15VHE0EPSRTKU5/logo.png" },
  { name: "BitVault", url: "https://www.bitvault.sv/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1755722769067-OPN83O8PS2ETJIW4LY2G/BitVault-logo_transparent.png" },
];

const partnerOrganisations = [
  { name: "University of Basel", url: "https://cif.unibas.ch/en/home/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1520356559322-8UKNRYQO16Z2GTXPRAML/Uni-Basel.png" },
  { name: "SICTIC", url: "https://www.sictic.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1540280919184-RH9SE12KSTY2777PXEUT/sictic_logo.png" },
  { name: "Swiss Blockchain Federation", url: "https://blockchainfederation.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1569996178809-N8448S1PPEBRDGJHT0E9/sbf.png" },
  { name: "AvalBit", url: "https://avalbit.org/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506741-Y72G6ITZERNQ8UOVVZLZ/a.png" },
  { name: "Hayek", url: "https://hayekianer.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506913-WWZRVR2S1AD9U92L462X/hayek.png" },
  { name: "Swiss Finance Startups", url: "https://www.swissfinancestartups.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506935-BS73Y360VY3M5S58P3UC/sfs.png" },
  { name: "Swiss Fintech Association", url: "https://swissfinte.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1506110586651-SVS7P6PJWLFNRMGH85OK/sfta-logo-tiny.png" },
  { name: "Blockchain for Europe", url: "https://www.blockchain4europe.eu/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1618314774016-HWBC7ALLQEVOIVV6IXOD/logo_B4E_titre_Plan+de+travail+1+%284%29.png" },
];

const locationPartners = [
  { name: "Trust Square", url: "https://www.trustsquare.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1526644625552-BW81AAI2VT3SK71SIQPF/tr.jpg" },
  { name: "CV Labs", url: "https://www.cvlabs.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1537969038775-2CPBS6A53NYZK5B0HW1Y/CV_Labs_Logo.png" },
  { name: "Finance 2.0", url: "https://finance20.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1597070217402-M7RUREYX7Q9I7SLT7PVY/unnamed.jpg" },
];

const generousDonors = [
  { name: "Daniel Gutenberg", url: "http://www.gutenberg.ch/" },
  { name: "William Taborda", url: null },
  { name: "Andre Drommershausen", url: null },
  { name: "Thierry Fragniere", url: "https://thierryfragniere.ch/" },
];

export default function OurCorporateMembersPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:w-48 flex-shrink-0">
              <nav className="space-y-2">
                <div className="text-sm font-proxima tracking-widest text-primary mb-2">
                  membership
                </div>
                <Link 
                  href="/private" 
                  className="block text-xs font-proxima tracking-widest text-dark/60 hover:text-primary transition-colors uppercase"
                >
                  Private
                </Link>
                <Link 
                  href="/corporate" 
                  className="block text-xs font-proxima tracking-widest text-dark/60 hover:text-primary transition-colors uppercase"
                >
                  Corporate
                </Link>
                <Link 
                  href="/our-corporate-members" 
                  className="block text-xs font-proxima tracking-widest text-dark font-semibold uppercase"
                >
                  Our Corporate Members
                </Link>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Corporate Members Section */}
              <section className="mb-16">
                <h1 className="text-3xl font-garamond font-bold text-center text-dark mb-6">
                  Corporate Members
                </h1>
                
                <div className="space-y-4 text-sm text-dark/80 font-garamond mb-10 max-w-2xl mx-auto text-center leading-relaxed">
                  <p>
                    The following organizations have chosen to support the work of the «Bitcoin Association Switzerland« (BAS) financially, through a corporate membership.
                  </p>
                  <p>
                    The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
                  </p>
                </div>

                {/* Logo Grid - 5 per row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {corporateMembers.map((member, index) => (
                    <a
                      key={index}
                      href={member.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 bg-white hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={member.img}
                        alt={member.name}
                        className="max-w-full max-h-16 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </section>

              {/* Partner Organisations Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-garamond font-bold text-center text-dark mb-6">
                  Partner Organisations
                </h2>
                
                <div className="space-y-4 text-sm text-dark/80 font-garamond mb-10 max-w-2xl mx-auto text-center leading-relaxed">
                  <p>
                    The following organizations have chosen to support the work of the «Bitcoin Association Switzerland« (BAS) through various means and services, other than a corporate membership..
                  </p>
                  <p>
                    The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
                  </p>
                </div>

                {/* Logo Grid - 4 per row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {partnerOrganisations.map((org, index) => (
                    <a
                      key={index}
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 bg-white hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={org.img}
                        alt={org.name}
                        className="max-w-full max-h-20 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </section>

              {/* Location Partners Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-garamond font-bold text-center text-dark mb-8">
                  Location Partners
                </h2>

                {/* Logo Grid - 3 per row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                  {locationPartners.map((partner, index) => (
                    <a
                      key={index}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 bg-white hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={partner.img}
                        alt={partner.name}
                        className="max-w-full max-h-24 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </section>

              {/* Generous Donors Section */}
              <section>
                <h2 className="text-2xl font-garamond font-bold text-center text-dark mb-4">
                  Generous Donors
                </h2>
                
                <p className="text-sm text-dark/80 font-garamond text-center mb-6">
                  The following individuals donated 1 Bitcoin or more to support our mission:
                </p>

                <div className="text-center space-y-3">
                  {generousDonors.map((donor, index) => (
                    donor.url ? (
                      <a
                        key={index}
                        href={donor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm font-garamond font-semibold text-primary hover:underline"
                      >
                        {donor.name}
                      </a>
                    ) : (
                      <p key={index} className="text-sm font-garamond font-semibold text-dark">
                        {donor.name}
                      </p>
                    )
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Pre-footer with social icons */}
      <div className="bg-[#333] py-8">
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
            aria-label="Meetup"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.6 12.3c0-2.4.7-4.5 1.3-5.8.2-.4.4-.5.7-.5.5 0 1.1.1 1.6.2.4.1.6.6.7 1 .5 1.7 1.8 7.1 2.1 8.5.1.3.2.8 0 .9-.2.1-1 .4-1.5.4-.2 0-.4-.2-.5-.6-.6-1.8-1.3-4.5-2-6.3 0 1.4-.1 4.1-.2 4.6 0 .6-.2 1.4-.7 1.5-.4.1-.9.2-1.5.2-.5 0-.7-.3-1-.7-.4-.5-1.2-1.8-1.6-2.6.1.9.3 1.8.4 2.2 0 .3 0 .6-.2.7-.4.3-1.2.5-1.6.5-.3 0-.6-.3-.6-.6-.3-1.3-.5-3-.5-4.2 0-1.1 0-2.2.1-3.1 0-.3.1-.4.4-.5.5-.2 1.1-.2 1.8-.1.3 0 .4.3.5.5.6 1.1 1.4 2.6 2.1 4.1z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 9.8c0-.3-.1-1.2-.5-1.7-.4-.5-.9-.5-1.1-.6-2-.1-5-.1-5-.1s-3 0-5 .1c-.2 0-.7.1-1.1.6-.3.3-.5 1.2-.5 1.7s-.1 1.9-.1 1.9v.9c0 .5.1 1.9.1 1.9s.1 1.2.5 1.7c.4.5 1 .5 1.3.6 1 .1 4 .1 4 .1s3 0 5-.1c.3 0 .7-.1 1.1-.6.4-.5.5-1.2.5-1.7s.1-1.9.1-1.9v-.9c0-.5-.1-1.9-.1-1.9zM10.8 13.9l0-5 3.5 2.5-3.5 2.5z"/>
            </svg>
          </a>
          <a
            href="https://x.com/bitcoin_ch"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
            aria-label="X"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.7 11.2L16.7 7.5H15.4L13.1 10.4L11.2 7.5H7.2L10.6 12.3L7.2 16.5H8.5L11 13.3L13.1 16.5H17.1L13.7 11.2ZM12.6 12.5L12.2 11.9L9 7.8H10.5L13 11.1L13.4 11.7L16.8 16.3H15.3L12.6 12.5Z"/>
            </svg>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
