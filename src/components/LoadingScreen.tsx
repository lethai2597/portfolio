"use client";

import Lottie from "lottie-react";
import helloAnimation from "../../public/hello.json";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 bg-gray-950">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 mx-auto mb-8">
          <Lottie
            animationData={helloAnimation}
            loop={true}
            autoplay={true}
            onLoopComplete={() => {
              onComplete();
            }}
          />
        </div>
      </div>
    </div>
  );
}
