import Link from "next/link";


export default function SiteHeader() {
    return (
        <header className="bg-white pl-7 pr-7">
            <div className="w-full flex justify-center md:h-24 h-12 border-b-2">
                <div className="w-1/3 flex justify-start items-center">
                    <Link href="/work" className="md:text-xl text-base underline">work</Link>
                    <Link href="/info" className="md:text-xl text-base underline pl-2 md:pl-7">info</Link>
                    <Link href="/contact" className="md:text-xl text-base underline pl-2 md:pl-7">contact</Link>
                </div>
                <div className="w-1/3 flex justify-center items-center">
                    <h1 className="md:text-2xl text-sm md:block hidden">EXTRA NARRATIVE</h1>
                </div>
                <div className="w-1/3 flex justify-end items-center">
                    <Link href="mailto:extranarrative@foxmail.com" className="md:text-xl text-base underline">email</Link>
                </div>
            </div>
        </header>
    );
}