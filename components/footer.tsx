import Link from "next/link";


export default function SiteFooter() {
    return (
        <footer className="w-full pr-7 pl-7">
            <div className="w-full pb-9 pt-9 md:text-2xl text-sm font-light ">
                <div className="flex justify-center items-center text-center">
                    We are a small multi-disciplinary design studio in Shanghai.
                </div>
                <div className="flex justify-center items-center">
                    <span>Find us via&ensp;</span> <Link href="mailto:extranarrative@foxmail.com" className="underline">email</Link>
                </div>
            </div>
            <div className="w-full border-t-2 md:flex hidden justify-center h-20">
                <div className="w-1/3 flex justify-start items-center">
                    <div className="md:text-xl text-gray-500 text-xs">
                        @EXTRA NARRATIVE 2024.
                    </div>
                </div>
                <div className="w-2/3 flex justify-end items-center md:mt-0 mt-4">
                    <Link href="/Behance" className="text-xl underline pr-16">Behance</Link>
                    <Link href="/Behance" className="text-xl underline pr-16">Instagram</Link>
                    <Link href="/Behance" className="text-xl underline pr-16">gtn9</Link>
                    <Link href="/Behance" className="text-xl underline">Shop{"-->"}</Link>
                </div>
            </div>
            {/* for mobile */}
            <div className="w-full border-t-2 flex md:hidden justify-center items-center h-20">
                <div className="text-sm text-gray-500 w-1/5 flex justify-start">
                    @2024.
                </div>
                <div className="w-4/5 flex justify-end items-center">
                    <Link href="/Behance" className="text-sm underline pr-2">Behance</Link>
                    <Link href="/Behance" className="text-sm underline pr-2">Instagram</Link>
                    <Link href="/Behance" className="text-sm underline pr-2">gtn9</Link>
                    <Link href="/Behance" className="text-sm underline">Shop{"-->"}</Link>
                </div>
            </div>
        </footer>
    );
}