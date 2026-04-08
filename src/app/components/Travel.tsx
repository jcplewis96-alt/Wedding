import { Plane, Hotel, Car } from "lucide-react";

export function Travel() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-center mb-16 font-serif">Travel & Accommodations</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Plane className="w-12 h-12 mx-auto mb-4 text-rose-500" />
            <h3 className="text-2xl mb-3 font-serif">Getting There</h3>
            <p className="text-gray-600 mb-4">
              The nearest airport is San Francisco International Airport (SFO), 
              approximately 90 minutes from the venue.
            </p>
            <p className="text-sm text-gray-500">
              Oakland and Sacramento airports are also convenient options.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Hotel className="w-12 h-12 mx-auto mb-4 text-rose-500" />
            <h3 className="text-2xl mb-3 font-serif">Where to Stay</h3>
            <p className="text-gray-600 mb-4">
              We have reserved room blocks at several local hotels in Napa Valley.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium">Meadowood Napa Valley</p>
                <p className="text-gray-500">Venue Hotel</p>
              </div>
              <div>
                <p className="font-medium">The Inn at St. Helena</p>
                <p className="text-gray-500">Code: EMMAJAMES</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Car className="w-12 h-12 mx-auto mb-4 text-rose-500" />
            <h3 className="text-2xl mb-3 font-serif">Transportation</h3>
            <p className="text-gray-600 mb-4">
              We recommend renting a car to explore beautiful Napa Valley.
            </p>
            <p className="text-sm text-gray-500">
              Shuttle service will be provided between the hotel blocks and the venue.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl mb-3 font-serif">Things to Do</h3>
          <p className="text-gray-600 mb-4">
            Napa Valley is home to world-class wineries, restaurants, and stunning scenery. 
            We encourage you to make a weekend of it!
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-6 text-sm">
            <div>
              <p className="font-medium">Wine Tasting</p>
              <p className="text-gray-500">Visit local vineyards</p>
            </div>
            <div>
              <p className="font-medium">Hot Air Balloons</p>
              <p className="text-gray-500">Morning flights</p>
            </div>
            <div>
              <p className="font-medium">Spa Treatments</p>
              <p className="text-gray-500">Relax and unwind</p>
            </div>
            <div>
              <p className="font-medium">Fine Dining</p>
              <p className="text-gray-500">Michelin-starred restaurants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
