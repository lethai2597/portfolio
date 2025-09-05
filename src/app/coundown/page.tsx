"use client";

import SquaresBackground from "@/components/SquaresBackground";
import TiltedCard from "@/components/TiltedCard";
import { Youtube } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Countdown() {
  const searchParams = useSearchParams();
  const countToParam = searchParams.get('countTo');
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number } | null>(null);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    if (!countToParam) {
      // Nếu không có param, hiển thị thời gian mặc định
      setTimeLeft({ minutes: 32, seconds: 33 });
      return;
    }

    // Parse thời gian từ format hh:mm-dd/mm/yyyy
    const parseCountToTime = (timeString: string): Date | null => {
      try {
        // Format: hh:mm-dd/mm/yyyy
        const [timePart, datePart] = timeString.split('-');
        const [hours, minutes] = timePart.split(':').map(Number);
        const [day, month, year] = datePart.split('/').map(Number);
        
        return new Date(year, month - 1, day, hours, minutes, 0);
      } catch (error) {
        console.error('Invalid time format:', error);
        return null;
      }
    };

    const targetTime = parseCountToTime(countToParam);
    if (!targetTime) {
      setTimeLeft({ minutes: 32, seconds: 33 });
      return;
    }

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetTime.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ minutes: 0, seconds: 0 });
        setIsEnded(true);
        return;
      }

      const totalSeconds = Math.floor(difference / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ minutes, seconds });
      setIsEnded(false);
    };

    // Cập nhật ngay lập tức
    updateCountdown();

    // Cập nhật mỗi giây
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [countToParam]);

  const formatTime = () => {
    if (!timeLeft) return "Đang tải...";
    
    if (isEnded) {
      return "Sẽ sớm bắt đầu";
    }

    if (timeLeft.minutes === 0) {
      return `${timeLeft.seconds} giây`;
    }

    return `${timeLeft.minutes} phút, ${timeLeft.seconds} giây`;
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative bg-gray-950">
      <div className="absolute inset-0 z-0">
        <SquaresBackground
          direction="diagonal"
          speed={0.5}
          borderColor="#1f2937"
          squareSize={40}
          hoverFillColor="#374151"
        />
      </div>

      <div className="w-full max-w-screen-md flex gap-16 items-center relative z-10 text-white">
        <div className="relative">
          {/* Main avatar circle */}
          <div className="aspect-square w-80 h-80 bg-orange-500 rounded-full overflow-hidden relative z-10">
            <Image
              src="/avatar.jpg"
              alt="avatar"
              width={300}
              height={300}
              className="object-cover object-center w-full h-full"
            />
          </div>

          {/* Decorative blobs around avatar */}
          {/* Cyan circles */}
          <motion.div 
            className="absolute -top-0 right-6 w-4 h-4 bg-cyan-400 rounded-full z-20"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute -bottom-0 right-10 w-6 h-6 bg-cyan-400 rounded-full z-20"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute -top-0 right-16 w-8 h-8 bg-cyan-400 rounded-full z-20"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Orange circle */}
          <motion.div 
            className="absolute top-4 left-12 w-8 h-8 bg-orange-400 rounded-full z-20"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* White circles */}
          <motion.div 
            className="absolute bottom-8 left-4 w-6 h-6 bg-white rounded-full z-20"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute top-1/2 -right-4 w-10 h-10 bg-white rounded-full z-20"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Pink/magenta rounded rectangles over the avatar */}
          <motion.div 
            className="absolute top-16 -left-4 w-32 h-8 bg-pink-500 rounded-full z-30"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-20 -right-4 w-28 h-6 bg-pink-500 rounded-full z-30"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-16 -right-2 w-20 h-2 bg-pink-500 rounded-full z-30"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 1.9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
        <div className="grid gap-4">
          <div className="flex mb-4">
            <div className="flex items-center gap-2 bg-white px-3 py-0.5 rounded-full text-black">
              <Youtube className="w-8 h-8 text-red-500" />
              <div className="text-sm font-bold italic">/ @lehuythaidotcom</div>
            </div>
          </div>
          <div className="text-5xl font-bold text-orange-500">LIVESTREAM</div>
          <div className="text-3xl font-bold">CODING, CHÉM GIÓ</div>
          <div className="text-2xl font-bold">Review thử CV của mình</div>
          <div className="text-2xl font-bold text-orange-500">
            {isEnded ? "Sẽ sớm bắt đầu" : `Bắt đầu sau ${formatTime()}`}
          </div>
        </div>
      </div>
    </div>
  );
}
