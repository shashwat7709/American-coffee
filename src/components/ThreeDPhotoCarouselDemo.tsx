import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="min-h-[500px] flex flex-col justify-center border border-amber-200/20 rounded-lg space-y-4 bg-gradient-to-b from-amber-50/10 to-transparent backdrop-blur-sm">
        <div className="p-4">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  )
} 