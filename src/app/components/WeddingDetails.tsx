import { FadeIn } from "./FadeIn";
import { Calendar, Clock, MapPin, Church } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WeddingDetails() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <FadeIn direction="up" duration={900}><div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-center mb-16 font-serif">Wedding Details</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1767986012138-4893f40932d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc1NjEzMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ceremony venue"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl mb-6 font-serif flex items-center gap-2">
                <Church className="w-8 h-8" />
                Ceremony
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 mt-1 text-rose-500" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p>Sunday, June 15, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-rose-500" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p>4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-rose-500" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p>Meadowood Napa Valley</p>
                    <p className="text-sm text-gray-600">900 Meadowood Lane, St. Helena, CA 94574</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1772127822514-682aeffcc0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3JhdGlvbiUyMGZsb3dlcnN8ZW58MXx8fHwxNzc1NjEzMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Reception venue"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl mb-6 font-serif flex items-center gap-2">
                <span className="text-3xl">🥂</span>
                Reception
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 mt-1 text-rose-500" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p>Sunday, June 15, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-rose-500" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p>6:00 PM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-rose-500" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p>Meadowood Napa Valley</p>
                    <p className="text-sm text-gray-600">900 Meadowood Lane, St. Helena, CA 94574</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-4 font-serif">Dress Code</h3>
          <p className="text-lg text-gray-600">Formal / Black Tie Optional</p>
          <p className="text-sm text-gray-500 mt-2">
            Please note that the ceremony will be held outdoors on grass
          </p>
        </div>
      </div>
    </div></FadeIn></section>
  );
}
