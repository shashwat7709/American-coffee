
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export const SplineCoffeeViewer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false); // Fallback in case loading takes too long
      }
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="w-full h-full relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm">
          <div className="text-white text-lg">Loading 3D model...</div>
        </div>
      )}
      <Spline 
        scene="https://prod.spline.design/7d12f48939108362d53dd572f93a1330/scene.splinecode" 
        onLoad={() => setLoading(false)}
        className="w-full h-full"
      />
    </div>
  );
};
