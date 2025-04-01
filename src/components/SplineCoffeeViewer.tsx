
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Skeleton } from "@/components/ui/skeleton";

export const SplineCoffeeViewer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false); // Fallback in case loading takes too long
        setError(true);
      }
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="w-full h-full relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <Skeleton className="h-8 w-36 mb-2" />
            <div className="text-white text-lg">Loading 3D model...</div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-lg bg-black/50 p-4 rounded">
            Unable to load 3D model. Please refresh the page.
          </div>
        </div>
      )}

      {!error && (
        <Spline 
          scene="https://my.spline.design/coffeecuphovereffect-7d12f48939108362d53dd572f93a1330/" 
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          className="w-full h-full"
        />
      )}
    </div>
  );
};
