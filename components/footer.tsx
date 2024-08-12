import Link from "next/link";


export default function SiteFooter() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 pr-7 pl-7">
            <div className="w-full pb-9 pt-9 md:text-2xl text-sm font-light ">
                <div className="flex justify-center items-center">
                    We are a small multi-disciplinary design studio in Shanghai.
                </div>
                <div className="flex justify-center items-center">
                    <span>Find us via&ensp;</span> <Link href="mailto:extranarrative@foxmail.com" className="underline">email</Link>
                </div>
            </div>
            <div className="w-full border-t-2 md:flex justify-center h-20">
                <div className="md:w-1/3 w-full flex justify-start items-center md:pt-0 mt-6">
                    <div className="md:text-xl text-gray-500 text-xs">
                        @EXTRA NARRATIVE 2024.
                    </div>
                </div>
                <div className="md:w-2/3 w-full flex justify-end items-center md:pt-0 mt-2">
                    <Link href="/Behance" className="md:text-xl text-base pr-2 underline md:pr-16">Behance</Link>
                    <Link href="/Behance" className="md:text-xl text-base pr-2 underline md:pr-16">Instagram</Link>
                    <Link href="/Behance" className="md:text-xl text-base pr-2 underline md:pr-16">gtn9</Link>
                    <Link href="/Behance" className="md:text-xl text-base underline">Shop--{">"}</Link>
                </div>
            </div>
        </footer>
    );
}