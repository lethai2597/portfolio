"use client";

import CircularText from "@/components/CircularText";
import CurvedLoop from "@/components/CurvedLoop";
import SquaresBackground from "@/components/SquaresBackground";
import SpotlightCard from "@/components/SpotlightCard";
import TextType from "@/components/TextType";
import TiltedCard from "@/components/TiltedCard";
import {
  Earth,
  Send,
  Code2,
  Database,
  Globe,
  Server,
  Play,
  Mail,
  Facebook,
  Video,
  Code,
  Youtube,
  Music,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white/80 scroll-smooth">
      <motion.header
        className="fixed top-0 left-0 w-full z-50 p-3"
        initial={{ y: -100, opacity: 0, visibility: "hidden" }}
        animate={{ y: 0, opacity: 1, visibility: "visible" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between max-w-screen-sm mx-auto border border-white/20 backdrop-blur-sm rounded-full py-3 px-4">
          <button
            onClick={() =>
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex gap-4 items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <Earth className="w-5 h-5" />
            <div className="font-medium flex gap-1 text-white">
              <div className="hidden md:block">Lê Huy </div>
              Thái
            </div>
          </button>

          <div className="flex gap-4 md:gap-8 text-sm font-semibold">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-amber-400 transition-colors duration-200 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-amber-400 transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </motion.header>

      <section
        id="hero"
        className="h-dvh flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <SquaresBackground
            direction="diagonal"
            speed={0.5}
            borderColor="#333"
            squareSize={40}
            hoverFillColor="#444"
          />
        </div>

        <div className="absolute w-full h-40 bottom-0 z-0 bg-gradient-to-b from-transparent to-gray-950"></div>

        <div className="absolute w-full h-3/5 md:h-4/6 bottom-0 z-0">
          <div className="max-w-[1800px] mx-auto">
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, visibility: "hidden" }}
              animate={{ opacity: 1, visibility: "visible" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <CurvedLoop
                marqueeText="Mình là Lê Huy Thái ✦ một Sortware Engineer mong muốn hoàn thiện bản thân ✦ muốn chia sẻ điều đó ✦ "
                speed={2}
                className="text-7xl md:text-5xl font-bold"
                curveAmount={250}
                direction="right"
              />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center grid gap-8 p-4">
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0.5, opacity: 0, visibility: "hidden" }}
            animate={{ scale: 1, opacity: 1, visibility: "visible" }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              <TiltedCard
                imageSrc="/avatar.jpg"
                altText="Tilted card image"
                captionText="Xin chào, mình là Thái"
                containerHeight="300px"
                containerWidth="100%"
                imageHeight="300px"
                imageWidth="300px"
                displayOverlayContent={true}
                defaultTilt={{ x: 10, y: 10 }}
                overlayContent={
                  <div className="mt-4 ml-4 bg-black/50 rounded-xl px-2 py-1 font-medium text-white text-sm border border-white/50">
                    Lê Huy Thái
                  </div>
                }
              />
              <div className="absolute -bottom-12 -right-12 w-32 h-32">
                <motion.div
                  className="mb-8 flex justify-center"
                  initial={{ scale: 2, opacity: 0, visibility: "hidden" }}
                  animate={{ scale: 1, opacity: 1, visibility: "visible" }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  <CircularText
                    text="CONTACT ✦ ME ✦ HERE ✦ "
                    onHover="slowDown"
                    spinDuration={20}
                    className="text-4xl font-bold bg-black/50"
                  />
                </motion.div>
              </div>
              <div
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="absolute -bottom-12 -right-12 w-32 h-32 text-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
              >
                <Send className="w-8 h-16" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center text-3xl md:text-4xl font-black md:flex md:gap-2"
            initial={{ y: 50, opacity: 0, visibility: "hidden" }}
            animate={{ y: 0, opacity: 1, visibility: "visible" }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          >
            <div className="mb-2 md:mb-0">XIN CHÀO, </div>
            <div>MÌNH LÀ THÁI</div>
          </motion.div>

          {/* amber-500, lime-500 */}
          <motion.div
            className="text-center text-3xl font-bold flex items-center justify-center"
            initial={{ y: 50, opacity: 0, visibility: "hidden" }}
            animate={{ y: 0, opacity: 1, visibility: "visible" }}
            transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
          >
            <div className="hidden md:block">Mình là </div>
            <TextType
              text={["Software Engineer", "Content Creator"]}
              className="text-center text-3xl font-bold ml-2"
              cursorCharacter="_"
              textColors={["#f59e0b", "#84cc16"]}
            />
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ y: 50, opacity: 0, visibility: "hidden" }}
            animate={{ y: 0, opacity: 1, visibility: "visible" }}
            transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-black px-8 md:px-12 py-3 md:py-4 rounded-full font-medium cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              Khám phá
            </button>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="relative w-full min-h-screen flex items-center justify-center py-20 pt-32 overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1)_0%,transparent_50%)]"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-amber-500/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-amber-400/20 rotate-45"
            animate={{
              rotate: [45, 135, 45],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-8 h-8 border-2 border-amber-500/40 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <motion.div
              className="space-y-8"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Code className="w-4 h-4" /> 5+ Năm Kinh Nghiệm
                </motion.div>

                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  <span className="text-amber-500">FULLSTACK</span>
                  <br />
                  <span className="text-white/90">REMOTE</span>
                  <br />
                  <span className="text-white/70">ENGINEER</span>
                </h2>

                <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                  Mình tạo ra những sản phẩm kỹ thuật số bằng khả năng làm việc
                  với frontend đến backend, database đến deployment.
                </p>
              </div>
            </motion.div>

            {/* Right side - Skills grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-8"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Code2,
                  label: "Frontend",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                  border: "border-blue-500/30",
                },
                {
                  icon: Server,
                  label: "Backend",
                  color: "text-green-400",
                  bg: "bg-green-500/10",
                  border: "border-green-500/30",
                },
                {
                  icon: Database,
                  label: "Database",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  border: "border-purple-500/30",
                },
                {
                  icon: Globe,
                  label: "Web3",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
                  border: "border-amber-500/30",
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className={`group relative p-4 md:p-8 rounded-3xl ${skill.bg} border ${skill.border} hover:scale-105 transition-all duration-300 cursor-pointer`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="text-center space-y-4">
                    <skill.icon
                      className={`w-8 h-8 md:w-12 md:h-12 mx-auto ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <p className={`md:text-lg font-bold ${skill.color}`}>
                      {skill.label}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl ${skill.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  ></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom tech stack with icons */}
          <motion.div
            className="mt-20 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-white/40 text-sm font-medium mb-8">
              CÔNG NGHỆ CHÍNH
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                {
                  name: "HTML",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                },
                {
                  name: "CSS",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                },
                {
                  name: "JavaScript",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                },
                {
                  name: "TypeScript",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                },
                {
                  name: "React",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                },
                {
                  name: "Next.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                },
                {
                  name: "Express.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
                },
                {
                  name: "Nest.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
                },
                {
                  name: "TailwindCSS",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                },
                {
                  name: "Node.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                },
                {
                  name: "Figma",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
                },
                {
                  name: "Git",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 mb-4">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="w-8 h-8"
                    />
                  </div>

                  <div
                    className={`text-xs font-medium group-hover:text-amber-400 transition-colors duration-300`}
                  >
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="content"
        className="relative w-full min-h-screen py-20 pt-32 bg-gradient-to-b from-black via-gray-950 to-gray-900"
      >
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-lime-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full flex flex-col justify-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 w-full">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 bg-lime-500/10 border border-lime-500/30 rounded-full text-lime-400 text-sm font-medium mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Video className="w-4 h-4" /> Chia Sẻ Kiến Thức
              </motion.div>

              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
                <span className="text-lime-500">CONTENT</span>{" "}
                <span className="text-white/90">CREATOR</span>
              </h2>

              <p className="text-xl text-white/60 max-w-lg mx-auto leading-relaxed">
                Mình muốn hoàn thiện bản thân mỗi ngày và chia sẻ điều đó. Tìm
                mình trên:
              </p>

              {/* Social links */}
              <motion.div
                className="flex justify-center gap-4 md:gap-6 mt-12 max-w-4xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    name: "TikTok",
                    icon: Music,
                    color: "text-pink-400",
                    spotlightColor: "rgba(236, 72, 153, 0.3)",
                    href: "https://www.tiktok.com/@lehuythaidotcom",
                  },
                  {
                    name: "Facebook",
                    icon: Facebook,
                    color: "text-blue-400",
                    spotlightColor: "rgba(59, 130, 246, 0.3)",
                    href: "https://www.facebook.com/lehuythaidotcom/",
                  },
                  {
                    name: "YouTube",
                    icon: Youtube,
                    color: "text-red-400",
                    spotlightColor: "rgba(239, 68, 68, 0.3)",
                    href: "https://www.youtube.com/@lehuythaidotcom",
                  },
                ].map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ scale: 0, y: 20 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="w-full max-w-xs"
                  >
                    <SpotlightCard
                      spotlightColor={platform.spotlightColor}
                      className="p-6 md:p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                    >
                      <a
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-4 text-center"
                      >
                        <div className="relative">
                          <platform.icon
                            className={`w-12 h-12 md:w-16 md:h-16 ${platform.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>
                        <div className="space-y-2">
                          <h3
                            className={`text-lg md:text-xl font-bold ${platform.color}`}
                          >
                            {platform.name}
                          </h3>
                          <p className="text-white/60 text-sm">
                            Theo dõi mình trên {platform.name}
                          </p>
                        </div>
                      </a>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Video Mới nhất
                </h3>
                <p className="text-white/60 max-w-lg mx-auto">
                  Đừng bỏ lỡ những video mới nhất của mình.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                {[
                  {
                    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit`,
                    status: "Coming Soon",
                  },
                  {
                    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit`,
                    status: "Coming Soon",
                  },
                  {
                    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit`,
                    status: "Coming Soon",
                  },
                ].map((video, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-lime-500/50 transition-all duration-300 hover:scale-105"
                    initial={{ scale: 0, rotate: 5 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative aspect-[9/16] bg-gradient-to-br from-lime-500/20 to-green-500/20 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/avatar.jpg"
                        alt="Video thumbnail"
                        fill
                        className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="relative z-10 text-center">
                        <Play className="w-12 h-12 text-lime-400/80 group-hover:scale-110 transition-transform duration-300 mx-auto mb-2" />
                        <div className="px-3 py-1 bg-black/60 rounded-full text-xs text-white font-medium">
                          {video.status}
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-between p-4">
                      <h3 className="text-white font-bold text-sm mb-3 group-hover:text-lime-400 transition-colors duration-300">
                        {video.title}
                      </h3>

                      <div className="flex gap-2">
                        <div className="p-2 bg-pink-500/60 rounded-full text-white hover:bg-pink-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                          <Music className="w-3 h-3" />
                        </div>
                        <div className="p-2 bg-blue-500/60 rounded-full text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                          <Youtube className="w-3 h-3" />
                        </div>
                        <div className="p-2 bg-red-500/60 rounded-full text-white hover:bg-red-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                          <Facebook className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative w-full min-h-screen py-20 pt-32 bg-gradient-to-t from-gray-950 via-black to-gray-900 overflow-hidden flex items-center justify-center"
      >
        {/* Animated network background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(34,197,94,0.1)_0%,transparent_50%)]"></div>
        </div>

        {/* Floating connection lines */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${100 + Math.random() * 200}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Share2 className="w-4 h-4" /> Kết Nối Với Tôi
            </motion.div>

            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
              <span className="text-blue-400">LET&apos;S</span>{" "}
              <span className="text-white/90">CONNECT</span>
            </h2>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
              <motion.div
                className="mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Bắt đầu cuộc trò chuyện
              </h3>

              <p className="text-white/60 mb-8 leading-relaxed max-w-lg mx-auto">
                Tôi luôn sẵn sàng thảo luận về các ý tưởng mới, cơ hội hợp tác
                hoặc chỉ đơn giản là trò chuyện về bất cứ điều gì.
              </p>

              <div className="flex gap-4 justify-center">
                <motion.a
                  href="mailto:lethai2597@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium md:font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6" />
                  Email
                </motion.a>
                <motion.a
                  href="https://facebook.com/ko.ten.2571997"
                  className="inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-white/10 hover:bg-white/20 text-white text-sm md:text-base font-medium md:font-bold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                >
                  <Facebook className="w-6 h-6" />
                  Facebook
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
