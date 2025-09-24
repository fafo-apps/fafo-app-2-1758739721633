import Link from "next/link";
import { menuItems } from "@/data/menu";

export default function Home() {
  const featured = menuItems.filter((m) => m.category === "Burgers").slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-b from-yellow-50 to-white dark:from-zinc-900 dark:to-black border border-black/5 dark:border-white/10 p-8 sm:p-12">
        <p className="uppercase tracking-widest text-xs text-black/60 dark:text-white/60">SmashBite Burgers</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Crispy-edge smashburgers. Shakes. Fries.
        </h1>
        <p className="mt-4 text-balance text-black/70 dark:text-white/70 max-w-2xl">
          Freshly smashed patties, melty cheese, and fluffy potato buns. Order for pickup or dine in today.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/menu" className="rounded-md bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition">View Menu</Link>
          <a href="tel:555-123-4567" className="rounded-md border border-black/10 dark:border-white/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition">Call to Order</a>
        </div>
      </section>

      {/* Featured Burgers */}
      <section aria-labelledby="featured-heading" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 id="featured-heading" className="text-2xl font-bold">Customer Favorites</h2>
          <Link href="/menu" className="text-sm underline hover:no-underline">See full menu →</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <article key={item.id} className="rounded-xl border border-black/10 dark:border-white/15 p-5 hover:shadow-sm transition">
              <header className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <span className="rounded-full bg-black/5 dark:bg-white/10 px-2 py-0.5 text-sm tabular-nums">${item.price.toFixed(2)}</span>
              </header>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{item.description}</p>
              <div className="mt-3 flex gap-2 text-[11px]">
                {item.popular && <span className="rounded-full bg-red-600/10 text-red-700 dark:text-red-300 px-2 py-0.5">Popular</span>}
                {item.spicy && <span className="rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-300 px-2 py-0.5">Spicy</span>}
                {item.vegetarian && <span className="rounded-full bg-green-600/10 text-green-700 dark:text-green-300 px-2 py-0.5">Veg</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hours & Location */}
      <section id="hours" aria-labelledby="hours-heading" className="rounded-2xl border border-black/10 dark:border-white/15 p-6 sm:p-8">
        <h2 id="hours-heading" className="text-2xl font-bold">Hours & Location</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          <div>
            <div className="font-semibold">Visit us</div>
            <p className="text-sm text-black/70 dark:text-white/70">123 Main St, YourCity, ST</p>
            <a className="text-sm underline hover:no-underline" href="https://maps.google.com/?q=123+Main+St+YourCity" target="_blank" rel="noreferrer">Open in Maps</a>
          </div>
          <div>
            <div className="font-semibold">Hours</div>
            <ul className="text-sm text-black/70 dark:text-white/70 space-y-0.5">
              <li>Mon–Thu: 11:00 AM – 9:00 PM</li>
              <li>Fri–Sat: 11:00 AM – 10:00 PM</li>
              <li>Sun: 12:00 PM – 8:00 PM</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <p className="text-sm">Call <a className="underline hover:no-underline" href="tel:555-123-4567">555-123-4567</a></p>
            <p className="text-sm mt-1">Dine-in • Takeout • Curbside</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading" className="space-y-3">
        <h2 id="about-heading" className="text-2xl font-bold">Our Story</h2>
        <p className="text-black/75 dark:text-white/75 max-w-3xl">
          We smash fresh beef on a blazing hot griddle for crunchy edges and juicy centers, then stack it on buttery potato buns with house-made sauces. Simple food done right—fast.
        </p>
      </section>
    </div>
  );
}
