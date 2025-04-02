import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <div className="w-full h-full relative">
      <main className="w-full h-full">
        <Spline
          scene="https://prod.spline.design/NVxJQyrVJy9Ium3Y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </main>
    </div>
  );
} 