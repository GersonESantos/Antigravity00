import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadlineRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (headlineRef.current && subheadlineRef.current && ctaRef.current) {
            tl.fromTo(headlineRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.5 }
            )
                .fromTo(subheadlineRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.5'
                )
                .fromTo(ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    '-=0.5'
                );
        }
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 text-center z-10">
                <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    Build the <span className="text-gradient">Future</span> <br />
                    with Precision
                </h1>

                <p ref={subheadlineRef} className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Experience the next generation of web development. Fast, responsive, and beautifully animated.
                </p>

                <div ref={ctaRef} className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/25">
                        Get Started Now
                    </button>
                    <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm">
                        View Demo
                    </button>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-16 h-16 bg-blue-500/20 rounded-2xl backdrop-blur-md border border-white/10 hidden md:block"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-10 w-24 h-24 bg-purple-500/20 rounded-full backdrop-blur-md border border-white/10 hidden md:block"
            />
        </section>
    );
};

export default Hero;
