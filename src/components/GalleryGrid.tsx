
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

export const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    "https://lh3.googleusercontent.com/p/AF1QipObTBBXyc0p2TBCEDZk8ZixxktWaC2yHlBWF0Jh=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/p/AF1QipNkxB7NKyoSj9C0RAztxBb5kYzjcJOuGKb-_VHH=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/p/AF1QipOV5bz48RxMXELVjoLJ0x9XA6S_yIK7o0z60Quj=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/p/AF1QipM0tMo9f9c5bwdkBQEQT67JBDFi2SDkt3_fN-FX=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/p/AF1QipNDZQOA6aIT_QBMOzZrwkT0tQesHIbq7AliXMJz=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/p/AF1QipMjclHZpBkpxhAwMcKFv0MQ-HqNIajnm5O0a-Vq=s1360-w1360-h1020"
  ];

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden cursor-pointer"
            onClick={() => openImage(image)}
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none">
          <button 
            onClick={closeImage}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none z-50"
          >
            <X className="h-8 w-8 text-white" />
            <span className="sr-only">Close</span>
          </button>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery preview" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
