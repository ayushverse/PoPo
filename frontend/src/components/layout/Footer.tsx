export function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-black/5 dark:border-white/5 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
                <p>© 2025 PoPo Studio. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-indigo-500 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-indigo-500 transition-colors">Terms</a>
                    <a href="#" className="hover:text-indigo-500 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
