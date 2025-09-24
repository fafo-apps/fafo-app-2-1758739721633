import type { Metadata } from "next";
import Link from "next/link";
import { categories, menuItems } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu | SmashBite Burgers",
  description: "Explore our smashburgers, fries, shakes, and more.",
};

function formatPrice(n: number) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);
}

export default function MenuPage() {
  const byCategory = categories
    .map((cat) => ({
      category: cat,
      items: menuItems.filter((m) => m.category === cat),
    }))
    .filter((c) => c.items.length > 0);

  return (
    <div className="space-y-12">
      <header className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Menu</h1>
        <p className="text-black/70 dark:text-white/70">Crispy-edge smashburgers, golden fries, hand-spun shakes, and ice-cold drinks.</p>
      </header>

      {byCategory.map((group) => (
        <section key={group.category} id={group.category.toLowerCase()} className="space-y-4">
          <h2 className="text-2xl font-bold">{group.category}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <article key={item.id} className="rounded-xl border border-black/10 dark:border-white/15 p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="tabular-nums rounded-full bg-black/5 dark:bg-white/10 px-2 py-0.5 text-sm">{formatPrice(item.price)}</span>
                </div>
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
      ))}

      <div className="rounded-2xl border border-black/10 dark:border-white/15 p-6 sm:p-8 text-center">
        <p className="text-lg font-semibold">Ready to order?</p>
        <div className="mt-3 flex justify-center gap-3">
          <a href="tel:555-123-4567" className="rounded-md bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition">Call Now</a>
          <Link href="/" className="rounded-md border border-black/10 dark:border-white/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
