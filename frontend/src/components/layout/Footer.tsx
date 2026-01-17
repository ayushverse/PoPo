export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-cyber-cyan/20 mt-auto bg-cyber-black/50 backdrop-blur-sm z-20 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-[0.1em] text-gray-500">
                <p>[SYSTEM: POPO] © 2026. ALL RIGHTS RESERVED.</p>
                <div className="flex items-center gap-8">
                    <a href="#" className="hover:text-cyber-cyan transition-colors">[PRIVACY]</a>
                    <a href="#" className="hover:text-cyber-pink transition-colors">[TERMS]</a>
                    <a href="#" className="hover:text-cyber-yellow transition-colors">[CONTACT]</a>
                </div>
            </div>
        </footer>
    );
}
