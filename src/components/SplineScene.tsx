import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export const SplineScene = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-white/50" />
        </div>
      )}
      <div className="w-full h-full">
        <Spline
          scene="https://prod.spline.design/6IqoCKABXLwt0ccV/scene.splinecode"
          style={{ 
            width: '100%', 
            height: '100%',
            transform: 'scale(1.1)',
            transformOrigin: 'center center'
          }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}; 