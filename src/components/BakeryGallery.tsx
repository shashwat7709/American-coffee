import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

export const BakeryGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const bakeryImages = [
    {
      src: "/images/tm-breads-1.jpg",
      caption: "Fresh Baked Breads",
      description: "Our signature artisanal breads, baked fresh daily"
    },
    {
      src: "/images/tm-breads-2.jpg",
      caption: "Pastry Selection",
      description: "A delightful array of handcrafted pastries"
    },
    {
      src: "/images/tm-breads-3.jpg",
      caption: "Bakery Display",
      description: "Explore our wide variety of freshly baked goods"
    },
    {
      src: "/images/tm-breads-4.jpg",
      caption: "Specialty Breads",
      description: "Unique and flavorful artisanal creations"
    },
    {
      src: "/images/tm-breads-5.jpg",
      caption: "Breakfast Pastries",
      description: "Start your day with our delicious pastries"
    },
    {
      src: "/images/tm-breads-6.jpg",
      caption: "Artisan Collection",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bakeryImages.map((image, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl bg-white border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-amber-300"
            onClick={() => openImage(image.src)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={image.src} 
                alt={image.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-semibold text-lg tracking-wide">{image.caption}</h3>
              <p className="text-amber-100 text-sm mt-2 font-light">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="sm:max-w-5xl p-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
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