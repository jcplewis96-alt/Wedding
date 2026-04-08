import { Heart } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621797005674-48e0150206da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBjb3VwbGUlMjBzdW5zZXR8ZW58MXx8fHwxNzc1NjEzMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
        <h1 className="text-6xl md:text-8xl mb-4 font-serif">
          Emma & James
        </h1>
        <div className="text-2xl md:text-3xl mb-6 tracking-widest">
          ARE GETTING MARRIED
        </div>
        <div className="text-xl md:text-2xl">
          June 15, 2026
        </div>
        <div className="mt-8 text-lg">
          Napa Valley, California
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}
