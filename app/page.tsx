"use client"
import { useState } from "react"

export default function Home(){
  const [tab, setTab] = useState("home")
  const outlets = [
    {name:"Raja Emas Jatinegara", city:"Jakarta Timur", addr:"Jl. Jatinegara Timur No. 57", open:"Buka 09.00-20.00"},
    {name:"Raja Emas Bogor", city:"Bogor", addr:"Jl. Pajajaran No. 12", open:"Buka 09.00-20.00"},
    {name:"Raja Emas Bekasi", city:"Bekasi", addr:"Grand Galaxy City", open:"Buka 10.00-21.00"},
  ]

  return(
    <main className="relative overflow-x-hidden">
      {/* BG GRADIENT + ORBS */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b0a33] via-[#4a1d8f] to-[#8a4fd6]" />
        <div className="absolute w-[46vmax] h-[46vmax] bg-[#9b5cf0] -left-[12vmax] -top-[10vmax] rounded-full blur-[70px] opacity-50 animate-float" />
        <div className="absolute w-[38vmax] h-[38vmax] bg-[#f3cf72]/20 -right-[14vmax] top-[28vh] rounded-full blur-[70px] animate-floatSlow" />
      </div>

      <header className="fixed top-0 w-full z-30 p-3">
        <div className="max-w-[1120px] mx-auto flex justify-between items-center px-6 py-2.5 rounded-full bg-[rgba(32,10,66,0.7)] backdrop-blur-xl border border-white/20">
          <div className="flex items-center gap-2 font-bold text-sm"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f3cf72] to-[#c9972c] grid place-items-center text-[#2a1052]">RE</div>RAJA EMAS</div>
          <nav className="hidden md:flex gap-1">
            {[["home","Beranda"],["about","Tentang"],["outlet","Outlet"],["blog","Blog"],["career","Karir"],["contact","Kontak"]].map(([id,l])=>(
              <button key={id} onClick={()=>setTab(id)} className={`px-4 py-2 rounded-full text-[13px] ${tab===id?"bg-gradient-to-br from-[#f3cf72] to-[#c9972c] text-[#2a1052]":"text-white/70 hover:bg-white/10"}`}>{l}</button>
            ))}
          </nav>
        </div>
      </header>

      {tab==="home" && (
        <>
          <section className="min-h-[100svh] flex flex-col justify-center pt-[110px]">
            <div className="max-w-[1120px] mx-auto w-full px-5 grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-8 md:p-10">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#f3cf72]/10 border border-[#f3cf72]/40 text-[#f3cf72]">✦ INGAT EMAS, INGAT RAJA EMAS</span>
                <h1 className="font-[var(--font-el)] text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.1] font-bold mt-5">Solusi Terpercaya<br/>Jual-Beli Emas &<br/><span className="gold-text">Logam Mulia Internasional</span></h1>
                <p className="text-white/60 mt-6 text-[14.5px]">PT Emas Murni Asli - 107 cabang resmi, XRF Lab transparan, harga tertinggi tanpa potongan.</p>
                <div className="flex gap-3 mt-8">
                  <button onClick={()=>setTab("contact")} className="px-7 py-3 rounded-full bg-gradient-to-br from-[#f3cf72] to-[#c9972c] text-[#2a1052] font-semibold text-sm">Jual Emas Sekarang</button>
                  <button onClick={()=>setTab("outlet")} className="px-7 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm">Lihat Outlet</button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-6">
                <h3 className="font-[var(--font-el)] text-[#f3cf72] text-lg">Mengapa Memilih Raja Emas?</h3>
                <div className="grid grid-cols-3 gap-2 mt-5">
                  <div className="bg-white/10 rounded-2xl p-3 text-center border border-white/10"><b className="block font-[var(--font-el)] text-[#f3cf72] text-2xl">107</b><span className="text-[10px] text-white/60">Cabang</span></div>
                  <div className="bg-white/10 rounded-2xl p-3 text-center border border-white/10"><b className="block text-[#f3cf72] text-[13px]">XRF Lab</b><span className="text-[10px] text-white/60">Uji Cepat</span></div>
                  <div className="bg-white/10 rounded-2xl p-3 text-center border border-white/10"><b className="block text-[#f3cf72] text-[13px]">100% Legal</b><span className="text-[10px] text-white/60">Legal</span></div>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="bg-white/85 text-[#1a0836] rounded-2xl p-3.5 text-[12px]"><b>✓ XRF Modern</b><br/><span className="text-[#3a2660]">Uji cepat transparan tanpa merusak emas.</span></div>
                  <div className="bg-white/85 text-[#1a0836] rounded-2xl p-3.5 text-[12px]"><b>✓ Harga Tertinggi</b><br/><span className="text-[#3a2660]">Ikut kurs internasional harian.</span></div>
                  <div className="bg-white/85 text-[#1a0836] rounded-2xl p-3.5 text-[12px]"><b>✓ Terima Semua Kondisi</b><br/><span className="text-[#3a2660]">Rusak, patah, tanpa surat tetap diterima.</span></div>
                </div>
              </div>
            </div>

            {/* RUANG KOSONG FULL - INI YANG KAMU MAU */}
            <div className="h-[clamp(110px,18vh,240px)] w-full" aria-hidden="true" />

            <div className="bg-[#150628] border-y border-white/10 py-3.5 overflow-hidden">
              <div className="flex gap-10 whitespace-nowrap animate-marquee text-[11px] font-semibold tracking-widest text-[#e9defa]">
                <span>JUAL EMAS TANPA SURAT ✦ HARGA TERTINGGI ✦ XRF AKURAT ✦ 107 CABANG ✦</span>
                <span>JUAL EMAS TANPA SURAT ✦ HARGA TERTINGGI ✦ XRF AKURAT ✦ 107 CABANG ✦</span>
              </div>
            </div>
          </section>

          <section className="bg-[#fbf8ff] text-[#2a0e57] py-20 px-5">
            <div className="max-w-[1120px] mx-auto text-center mb-12">
              <span className="px-3 py-1 rounded-full bg-[#f3cf72]/30 text-[#8a5a0a] text-xs font-semibold">Produk</span>
              <h2 className="font-[var(--font-el)] text-4xl mt-4">Emas Antam, UBS & Perhiasan</h2>
            </div>
            <div className="max-w-[1120px] mx-auto grid md:grid-cols-3 gap-5">
              <div className="rounded-[22px] p-6 bg-white border shadow-lg">Logam Mulia Antam - 1gr to 1000gr</div>
              <div className="rounded-[22px] p-6 bg-white border shadow-lg">Perhiasan Emas 8K-24K</div>
              <div className="rounded-[22px] p-6 bg-white border shadow-lg">Emas UBS Investasi</div>
            </div>
          </section>
        </>
      )}

      {tab!=="home" && (
        <section className="min-h-[100svh] pt-[130px] px-5 max-w-[1120px] mx-auto">
          <h1 className="font-[var(--font-el)] text-4xl capitalize">{tab}</h1>
          <p className="text-white/60 mt-3">Konten {tab} - siap di-expand.</p>
        </section>
      )}
    </main>
  )
}