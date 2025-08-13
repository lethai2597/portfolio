import { useEffect, useRef, useMemo, ReactNode } from "react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  stagger?: number;
  scrollDistance?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  stagger = 0.15,
  scrollDistance = "bottom-=50%",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    if (typeof children === "string") {
      return children.split(/(\s+)/).map((word, index) => {
        if (word.match(/^\s+$/)) return word;
        return (
          <span className="inline-block word" key={index}>
            {word}
          </span>
        );
      });
    }
    
    // Nếu children là ReactNode, tách theo từng từ và giữ nguyên cấu trúc
    const textContent = children?.toString() || "";
    const words = textContent.split(/(\s+)/);
    
    return words.map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      
      // Nếu word chứa HTML tags, giữ nguyên và wrap trong span có class word
      if (word.includes('<') && word.includes('>')) {
        return (
          <span className="inline-block word" key={index}>
            <span dangerouslySetInnerHTML={{ __html: word }} />
          </span>
        );
      }
      
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller: HTMLElement | Window =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=10%",
          end: "top top+=20%",
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=10%",
            end: "top top+=20%",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    blurStrength,
    stagger,
    scrollDistance,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;

// Component mới để xử lý HTML tags với style
export const ScrollRevealHTML: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  stagger = 0.15,
  scrollDistance = "bottom-=50%",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller: HTMLElement | Window =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    // Tìm tất cả các từ (bao gồm cả HTML tags)
    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=10%",
          end: "top top+=20%",
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=10%",
            end: "top top+=20%",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
    stagger,
    scrollDistance,
  ]);

  // Tách text theo từng từ và wrap HTML tags
  const splitText = useMemo(() => {
    if (typeof children === "string") {
      return children.split(/(\s+)/).map((word, index) => {
        if (word.match(/^\s+$/)) return word;
        return (
          <span className="inline-block word" key={index}>
            {word}
          </span>
        );
      });
    }
    
    // Nếu là ReactNode, xử lý theo cách khác
    if (React.isValidElement(children)) {
      // Nếu children là một element duy nhất, wrap nó
      return (
        <span className="inline-block word" key="single-element">
          {children}
        </span>
      );
    }
    
    // Nếu là array hoặc ReactNode phức tạp, tách theo từng phần
    const textParts: React.ReactNode[] = [];
    let currentText = '';
    
    // Hàm đệ quy để xử lý ReactNode
    const processNode = (node: React.ReactNode, key: string) => {
      if (typeof node === "string") {
        const words = node.split(/(\s+)/);
        words.forEach((word, index) => {
          if (word.match(/^\s+$/)) {
            textParts.push(word);
          } else {
            textParts.push(
              <span className="inline-block word" key={`${key}-${index}`}>
                {word}
              </span>
            );
          }
        });
      } else if (React.isValidElement(node)) {
        // Nếu là JSX element, wrap nó trong span có class word
        textParts.push(
          <span className="inline-block word" key={key}>
            {node}
          </span>
        );
      } else if (Array.isArray(node)) {
        // Nếu là array, xử lý từng phần
        node.forEach((item, index) => {
          processNode(item, `${key}-${index}`);
        });
      }
    };
    
    processNode(children, 'complex');
    return textParts;
  }, [children]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};
