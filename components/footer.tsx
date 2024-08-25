import Link from "next/link";


export default function SiteFooter() {
    return (
        <footer className="w-full pr-7 pl-7 mt-16">
            <div className="w-full pb-9 pt-9 md:text-3xl text-xl font-light ">
                <div className="flex justify-center items-center text-center">
                    We are a small multi-disciplinary design studio in Shanghai.
                </div>
                <div className="flex justify-center items-center">
                    <span>Find us via&ensp;</span> <Link href="mailto:extranarrative@foxmail.com" className="hover:underline hover:text-extra-red text-gray-500">email</Link>
                </div>
            </div>
            <div className="w-full md:flex hidden justify-center h-20 mt-16">
                <div className="w-1/3 flex justify-start items-center">
                    <div className="md:text-xl text-gray-500 text-xs">
                        @EXTRA NARRATIVE 2024.
                    </div>
                </div>
                <div className="w-2/3 flex justify-end items-center md:mt-0 mt-4">
                    <Link href="https://www.behance.net/extranarrative" target="_blank" className="text-xl hover:underline hover:text-extra-red pr-16">Behance</Link>
                    <Link href="https://www.instagram.com/extranarrative" target="_blank" className="text-xl hover:underline hover:text-extra-red pr-16">Instagram</Link>
                    <Link href="https://www.gtn9.com/user_center.aspx?categories=0&subclass=0&id=CF9DC08D07FA9462" target="_blank" className="text-xl hover:underline hover:text-extra-red pr-16">gtn9</Link>
                    <Link href="/" target="_blank" className="text-xl hover:underline hover:text-extra-red ">Shop{"-->"}</Link>
                </div>
            </div>
            {/* for mobile */}
            <div className="w-full flex md:hidden justify-center items-center h-20">
                <div className="text-sm text-gray-500 w-1/5 flex justify-start">
                    @2024.
                </div>
                <div className="w-4/5 flex justify-end items-center">
                    <Link href="https://www.behance.net/extranarrative" target="_blank" className="text-sm hover:underline hover:text-extra-red pr-4">Behance</Link>
                    <Link href="https://www.instagram.com/extranarrative" target="_blank" className="text-sm hover:underline hover:text-extra-red pr-4">Instagram</Link>
                    <Link href="https://www.gtn9.com/user_center.aspx?categories=0&subclass=0&id=CF9DC08D07FA9462" target="_blank" className="text-sm hover:underline hover:text-extra-red pr-4">gtn9</Link>
                    <Link href="/" target="_blank" className="text-sm hover:underline hover:text-extra-red">Shop{"-->"}</Link>
                </div>
            </div>
        </footer>
    );
}