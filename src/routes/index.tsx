import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { ArrowRight, MessageCircle, Phone, Mail, Star, Sparkles, Ruler, ShieldCheck, Hammer, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import heroSofa from "@/assets/hero-sofa.jpg";
import sofa1 from "@/assets/sofa-1.jpg";
import sofa2 from "@/assets/sofa-2.jpg";
import sofa3 from "@/assets/sofa-3.jpg";
import sofa4 from "@/assets/sofa-4.jpg";
import sofa5 from "@/assets/sofa-5.png";
import sofa6 from "@/assets/sofa-6.png";
import sofa7 from "@/assets/sofa-7.png";
import sofa8 from "@/assets/sofa-8.png";
import craft from "@/assets/craft.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";

const WHATSAPP = "https://wa.me/917386898855?text=Hi%20ReCreate%20Living%2C%20I%27d%20like%20to%20enquire%20about%20a%20custom%20sofa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ReCreate Living — Crafted For Comfort" },
      { name: "description", content: "Premium handcrafted sofas, sofa beds and bespoke seating by ReCreate Living. The Palagani Legacy." },
      { property: "og:title", content: "ReCreate Living — Crafted For Comfort" },
      { property: "og:description", content: "Luxury sofas, sofa beds and custom seating solutions." },
      { property: "og:image", content: heroSofa },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const products = [
  { img: sofa1, name: "Chesterfield Classic", tag: "Tufted • 3 Seater", desc: "Hand-tufted heritage silhouette in premium linen." },
  { img: sofa2, name: "Noir Sectional", tag: "L-Shape • Modular", desc: "Architectural sectional with brushed gold legs." },
  { img: sofa3, name: "Convertible Lounger", tag: "Sofa Bed", desc: "Effortless conversion. Full leather upholstery." },
  { img: sofa4, name: "Boucle Curve", tag: "Curved • 2 Seater", desc: "Sculptural curves in soft ivory bouclé." },
  { img: sofa5, name: "Emerald Luxe", tag: "Velvet • 3 Seater", desc: "Rich emerald green velvet with a modern luxury silhouette." },
  { img: sofa6, name: "Cognac Recliner", tag: "Leather • Recliner", desc: "Premium Italian leather in a warm cognac finish." },
  { img: sofa7, name: "Cloud Minimalist", tag: "Linen • Modular", desc: "Pure white linen modular sofa for spacious living." },
  { img: sofa8, name: "Burgundy Heritage", tag: "Tufted • Leather", desc: "Classic deep burgundy leather with timeless tufting." },];

const reviews = [
  { name: "Sridevi Reddy", role: "Hyderabad", text: "Absolutely stunning craftsmanship. Our custom sofa arrived earlier than promised and the finish is hotel-grade.", rating: 5 },
  { name: "Arjun Mehta", role: "Bengaluru", text: "ReCreate Living understood exactly what we wanted. The velvet finish and gold piping are pure luxury.", rating: 5 },
  { name: "Kavya Iyer", role: "Chennai", text: "From fabric to firmness — every detail customised. Five years of legacy clearly shows in the quality.", rating: 5 },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const msg = `Hi ReCreate Living!%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AProduct: ${data.get("product")}%0ADetails: ${data.get("details")}`;
    window.open(`https://wa.me/917386898855?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp with your enquiry…");
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-navy-deep/70 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="ReCreate Living" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-9 text-sm tracking-wide text-foreground/80">
            {[["Collection","#collection"],["Custom","#custom"],["Gallery","#gallery"],["Legacy","#legacy"],["Reviews","#reviews"],["Contact","#contact"]].map(([l,h]) => (
              <a key={h} href={h} className="hover:text-gold transition-colors">{l}</a>
            ))}
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
            <Button className="bg-gradient-to-r from-[oklch(0.88_0.09_88)] to-[oklch(0.7_0.13_78)] text-primary-foreground hover:opacity-90 shadow-gold">
              Enquire <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <button className="md:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border/40 bg-navy-deep/95">
            <div className="px-6 py-4 flex flex-col gap-4 text-sm">
              {[["Collection","#collection"],["Custom","#custom"],["Gallery","#gallery"],["Legacy","#legacy"],["Reviews","#reviews"],["Contact","#contact"]].map(([l,h]) => (
                <a key={h} href={h} onClick={() => setMenuOpen(false)} className="hover:text-gold">{l}</a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-gold">WhatsApp Enquiry →</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img src={heroSofa} alt="Luxury navy velvet sofa" className="w-full h-full object-cover opacity-50" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-gold uppercase mb-6">
              <Sparkles className="h-4 w-4" /> The Palagani Legacy
            </div>
            <h1 className="text-5xl md:text-7xl font-medium leading-[1.05]">
              Crafted for <span className="gradient-gold-text italic">Comfort.</span><br/>
              Designed for <span className="gradient-gold-text italic">Legacy.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Bespoke sofas, sofa beds and custom seating — handmade by master craftsmen
              and tailored to the way you live.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#collection">
                <Button size="lg" className="bg-gradient-to-r from-[oklch(0.88_0.09_88)] to-[oklch(0.7_0.13_78)] text-primary-foreground hover:opacity-90 shadow-gold h-12 px-8">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#custom">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary-foreground h-12 px-8 bg-transparent">
                  Design Your Own
                </Button>
              </a>
            </div>
            <div className="mt-14 flex items-center gap-10 text-sm text-muted-foreground">
              <div><div className="text-2xl text-gold font-display">15+</div>Years Crafted</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="text-2xl text-gold font-display">2K+</div>Happy Homes</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="text-2xl text-gold font-display">100%</div>Custom Made</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BAR */}
      <div className="border-y border-border/50 bg-navy-deep py-5 overflow-hidden">
        <div className="flex gap-16 text-xs tracking-[0.4em] uppercase text-gold/70 justify-center flex-wrap px-6">
          <span>Handcrafted In India</span>
          <span className="text-border">◆</span>
          <span>Lifetime Frame Warranty</span>
          <span className="text-border">◆</span>
          <span>Custom Fabrics</span>
          <span className="text-border">◆</span>
          <span>Pan-India Delivery</span>
        </div>
      </div>

      {/* COLLECTION */}
      <section id="collection" className="py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">The Collection</div>
              <h2 className="text-4xl md:text-5xl font-medium">Sofas worth coming home to.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A curated edit of our most-loved silhouettes. Every piece is made to order
              in fabric, leather and configuration of your choice.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <article key={p.name} className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-gold/50 transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={p.img} alt={p.name} loading="lazy" width={900} height={700} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-2">{p.tag}</div>
                  <h3 className="text-xl font-medium mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all">
                    Enquire <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEGACY / CRAFT */}
      <section id="legacy" className="py-28 px-6 bg-navy-deep">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={craft} alt="Master craftsman stitching leather sofa" loading="lazy" width={1200} height={800} className="rounded-lg shadow-elegant" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-gold/40 rounded-lg p-6 shadow-gold max-w-[220px]">
              <Hammer className="h-6 w-6 text-gold mb-3" />
              <div className="text-sm text-muted-foreground">Each sofa passes through</div>
              <div className="text-2xl text-gold font-display">37 hands</div>
              <div className="text-sm text-muted-foreground">before it reaches yours.</div>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Our Legacy</div>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">A family name. A craftsman's promise.</h2>
            <div className="gold-divider my-8 max-w-[120px]" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              ReCreate Living carries forward the Palagani family's legacy of furniture craftsmanship —
              a tradition built on uncompromising materials, time-honoured joinery and an obsession with comfort.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From kiln-dried frames to hand-stitched upholstery, every sofa is built to be lived on,
              loved on, and passed down.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, label: "10-Yr Warranty" },
                { icon: Ruler, label: "Made-to-Measure" },
                { icon: Sparkles, label: "Premium Fabrics" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="border border-border rounded-lg p-4 text-center hover:border-gold/50 transition">
                  <Icon className="h-5 w-5 text-gold mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Gallery</div>
            <h2 className="text-4xl md:text-5xl font-medium">In the homes we've graced.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-lg group">
              <img src={gal1} alt="Emerald velvet sofa in luxury living room" loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img src={gal2} alt="Modular sofa with sunset" loading="lazy" width={800} height={700} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img src={gal3} alt="Navy velvet cushion detail" loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-lg group">
              <img src={gal4} alt="Home theatre recliner sofas" loading="lazy" width={800} height={900} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 px-6 bg-navy-deep">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Loved By</div>
            <h2 className="text-4xl md:text-5xl font-medium">Words from our patrons.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-card border border-border rounded-lg p-8 hover:border-gold/40 transition">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-foreground/90 leading-relaxed mb-6 font-display text-lg italic">
                  "{r.text}"
                </blockquote>
                <figcaption>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM / ENQUIRY */}
      <section id="custom" className="py-28 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Custom Order</div>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">Tell us how you want to live.</h2>
            <div className="gold-divider my-8 max-w-[120px]" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              Share your space, your style, and your dreams. Our design team will craft a sofa
              that's uniquely yours — from dimensions to fabric to finish.
            </p>
            <div className="space-y-4">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center group-hover:bg-gold/20 transition">
                  <MessageCircle className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Chat instantly</div>
                  <div className="text-gold">WhatsApp +91 73868 98855</div>
                </div>
              </a>
              <a href="tel:+917386898855" className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center group-hover:bg-gold/20 transition">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call us</div>
                  <div className="text-gold">+91 7386 898 855</div>
                </div>
              </a>
              <a href="mailto:recreatelivingstudio@gmail.com" className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center group-hover:bg-gold/20 transition">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-gold">recreatelivingstudio@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={onEnquiry} className="bg-card border border-border rounded-lg p-8 shadow-elegant">
            <h3 className="text-2xl font-medium mb-6">Request a Custom Quote</h3>
            <div className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</Label>
                <Input id="name" name="name" required className="mt-2 bg-input border-border focus-visible:ring-gold" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone</Label>
                <Input id="phone" name="phone" type="tel" required className="mt-2 bg-input border-border focus-visible:ring-gold" />
              </div>
              <div>
                <Label htmlFor="product" className="text-xs uppercase tracking-wider text-muted-foreground">Product Interest</Label>
                <Input id="product" name="product" placeholder="e.g. L-shape sectional, sofa bed…" className="mt-2 bg-input border-border focus-visible:ring-gold" />
              </div>
              <div>
                <Label htmlFor="details" className="text-xs uppercase tracking-wider text-muted-foreground">Tell us more</Label>
                <Textarea id="details" name="details" rows={4} placeholder="Dimensions, fabric, colours, timeline…" className="mt-2 bg-input border-border focus-visible:ring-gold" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-[oklch(0.88_0.09_88)] to-[oklch(0.7_0.13_78)] text-primary-foreground hover:opacity-90 shadow-gold h-12">
                Send via WhatsApp <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-border bg-navy-deep pt-20 pb-10 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logo} alt="ReCreate Living" className="h-16 w-auto mb-5" />
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              The Palagani Legacy — crafting premium sofas, sofa beds and bespoke seating
              for homes that deserve more.
            </p>
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#collection" className="hover:text-gold">Collection</a></li>
              <li><a href="#custom" className="hover:text-gold">Custom Orders</a></li>
              <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-gold">Reviews</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Reach Us</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+917386898855" className="hover:text-gold">+91 7386 898 855</a></li>
              <li><a href="tel:+919949819132" className="hover:text-gold">+91 9949 819 132</a></li>
              <li><a href="mailto:recreatelivingstudio@gmail.com" className="hover:text-gold break-all">recreatelivingstudio@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="gold-divider mt-16 mb-6 max-w-xs mx-auto" />
        <p className="text-center text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} ReCreate Living. The Palagani Legacy. All rights reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer"
         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[oklch(0.88_0.09_88)] to-[oklch(0.65_0.13_75)] shadow-gold hover:scale-110 transition-transform"
         aria-label="WhatsApp us">
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-50 animate-ping" />
      </a>
    </div>
  );
}
