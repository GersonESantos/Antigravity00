import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 py-12 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <div className="text-2xl font-bold font-outfit mb-2">
                        <span className="text-gradient">Neo</span>Land
                    </div>
                    <p className="text-gray-400 text-sm">
                        © 2024 NeoLand Inc. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    {['Twitter', 'GitHub', 'LinkedIn', 'Instagram'].map((social) => (
                        <a
                            key={social}
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
