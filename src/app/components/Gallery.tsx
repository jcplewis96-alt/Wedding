import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1587053170222-6d3e76bcef85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGVuZ2FnZW1lbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU2MTMwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Couple portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1765615197726-6d2a157620fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwZGFuY2luZyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTYxMzAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Dancing together"
    },
    {
      url: "https://images.unsplash.com/photo-1620968867360-5cda83d2bffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBjbG9zZXVwJTIwbWFjcm98ZW58MXx8fHwxNzc1NjEzMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wedding rings"
    },
    {
      url: "https://images.unsplash.com/photo-1772127822514-682aeffcc0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3JhdGlvbiUyMGZsb3dlcnN8ZW58MXx8fHwxNzc1NjEzMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Reception decoration"
    },
    {
      url: "https://images.unsplash.com/photo-1767986012138-4893f40932d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc1NjEzMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Ceremony venue"
    },
    {
      url: "https://images.unsplash.com/photo-1621797005674-48e0150206da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBjb3VwbGUlMjBzdW5zZXR8ZW58MXx8fHwxNzc1NjEzMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Sunset moment"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-center mb-16 font-serif">Our Moments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer aspect-square"
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
