export function Schedule() {
  const events = [
    {
      time: "3:30 PM",
      title: "Guest Arrival",
      description: "Please arrive early to find your seats"
    },
    {
      time: "4:00 PM",
      title: "Ceremony Begins",
      description: "The celebration of Emma & James"
    },
    {
      time: "4:45 PM",
      title: "Cocktail Hour",
      description: "Join us for drinks and hors d'oeuvres in the garden"
    },
    {
      time: "6:00 PM",
      title: "Reception Begins",
      description: "Dinner, toasts, and celebration"
    },
    {
      time: "7:30 PM",
      title: "First Dance",
      description: "Watch the newlyweds take the floor"
    },
    {
      time: "8:00 PM",
      title: "Dancing & Celebration",
      description: "Dance the night away with live music"
    },
    {
      time: "11:00 PM",
      title: "Send-Off",
      description: "A sparkler send-off for the happy couple"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ background: "#faf6ed" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl text-center mb-16 font-serif">Schedule</h2>
        
        <div className="relative">
          <div className="absolute left-[31px] top-0 bottom-0 w-0.5 bg-rose-200"></div>
          
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="flex-shrink-0 w-16 text-right">
                  <div className="text-sm text-gray-500">{event.time}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow-md mt-1 relative z-10"></div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl mb-1">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
