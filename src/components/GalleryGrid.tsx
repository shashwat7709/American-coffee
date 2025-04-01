import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";

export const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: "/images/Screenshot 2025-04-01 080019.png",
      title: "Fresh Baked Breads",
      description: "Our signature artisanal breads, baked fresh daily"
    },
    {
      src: "/images/Screenshot 2025-04-01 080048.png",
      title: "Pastry Selection",
      description: "A delightful array of handcrafted pastries"
    },
    {
      src: "/images/Screenshot 2025-04-01 080100.png",
      title: "Bakery Display",
      description: "Explore our wide variety of freshly baked goods"
    },
    {
      src: "/images/Screenshot 2025-04-01 080119.png",
      title: "Specialty Breads",
      description: "Unique and flavorful artisanal creations"
    },
    {
      src: "/images/Screenshot 2025-04-01 080134.png",
      title: "Breakfast Pastries",
      description: "Start your day with our delicious pastries"
    },
    {
      src: "/images/Screenshot 2025-04-01 080153.png",
      title: "Artisan Collection",
      description: "Expertly crafted breads and pastries"
    }
  ];

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3] h-[300px] md:h-[250px] lg:h-[300px]">
            <Tilt
              rotationFactor={6}
              isRevese
              springOptions={{
                stiffness: 300,
                damping: 30,
                mass: 0.5,
              }}
              className="group relative h-full w-full rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <div 
                className="relative h-full w-full overflow-hidden rounded-xl border border-amber-200/20 shadow-lg"
                onClick={() => openImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{image.title}</h3>
                    <p className="text-amber-100 text-sm font-light">{image.description}</p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="sm:max-w-4xl p-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl">
          <button 
            onClick={closeImage}
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none z-50"
          >
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Close</span>
          </button>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery preview" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
