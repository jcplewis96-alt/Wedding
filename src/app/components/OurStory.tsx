import { FadeIn } from "./FadeIn";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function OurStory() {
  return (
    <section className="py-20 px-4 bg-white">
      <FadeIn direction="up" duration={900}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center mb-16 font-serif">Our Story</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587053170222-6d3e76bcef85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGVuZ2FnZW1lbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU2MTMwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Couple"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-3 font-serif">How We Met</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our story began on a rainy Tuesday afternoon at a coffee shop in San Francisco.
                  James accidentally spilled his coffee on Emma's laptop, and what started as an
                  embarrassing moment turned into a three-hour conversation about everything from
                  travel to philosophy. From that day forward, we were inseparable.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-3 font-serif">The Proposal</h3>
                <p className="text-gray-600 leading-relaxed">
                  Three years later, James proposed at the same coffee shop where we first met.
                  He had arranged with the staff to recreate our first encounter, complete with
                  the same table and even the same type of coffee. But this time, instead of
                  spilling coffee, he got down on one knee and asked Emma to spend forever with him.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
