"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lottie from "lottie-react";
import helloAnimation from "../../public/hello.json";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showContent, setShowContent] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Hiển thị content sau 0.5s
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Bắt đầu fade out sau khi animation chạy xong (khoảng 3s)
    const completeTimer = setTimeout(() => {
      setIsFading(true);
      // Gọi onComplete ngay khi bắt đầu fade out
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gray-950">
        
      <AnimatePresence>
        {!isComplete && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: isFading ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Lottie Animation */}
            <AnimatePresence>
              {showContent && (
                <motion.div
                  className="text-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isFading ? 0.8 : 1, 
                    opacity: isFading ? 0 : 1 
                  }}
                  transition={{
                    duration: 1.0,
                    ease: [0.68, -0.55, 0.265, 1.55],
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <div className="w-64 h-64 mx-auto mb-8">
                    <Lottie
                      animationData={helloAnimation}
                      loop={true}
                      autoplay={true}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
