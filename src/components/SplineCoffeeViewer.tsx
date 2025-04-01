
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Skeleton } from "@/components/ui/skeleton";
import { CoffeeIcon } from 'lucide-react';

export const SplineCoffeeViewer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setError(true);
      }
    }, 10000); // Give it a bit more time to load
    
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="w-full h-full relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <Skeleton className="h-8 w-36 mb-2" />
            <div className="text-white text-lg">Loading 3D model...</div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center bg-black/50 p-6 rounded text-center">
            <CoffeeIcon className="h-12 w-12 text-amber-500 mb-3" />
            <div className="text-white text-lg mb-2">
              Unable to load 3D model
            </div>
            <p className="text-gray-300 text-sm">
              Enjoy our beautiful coffee in person instead!
            </p>
          </div>
        </div>
      )}

      {!error && (
        <div className="w-full h-full">
          <Spline 
            scene="https://prod.spline.design/4l3a4v06TqMQqPfO/scene.splinecode" 
            onLoad={() => setLoading(false)}
            onError={() => {
              console.log("Spline load error encountered");
              setLoading(false);
              setError(true);
            }}
          />
        </div>
      )}
    </div>
  );
};
