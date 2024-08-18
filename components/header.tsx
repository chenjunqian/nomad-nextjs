import Link from "next/link";


export default function SiteHeader() {
    return (
        <header className="sticky top-0 left-0 right-0 z-10 bg-white pl-9 pr-9">
            <div className="w-full flex justify-center bg-white border-b">
                <div className="w-1/3 flex justify-start items-center mt-9 mb-9">
                    <Link href="/" className="md:text-xl text-base hover:underline hover:text-extra-red">work</Link>
                    <Link href="/info" className="md:text-xl text-base hover:underline hover:text-extra-red pl-4 md:pl-7">info</Link>
                    <Link href="/contact" className="md:text-xl text-base hover:underline hover:text-extra-red pl-4 md:pl-7">contact</Link>
                </div>
                <div className="w-1/3 flex justify-center items-center mt-9 mb-9">
                    <h1 className="md:text-2xl text-sm md:block hidden">EXTRA NARRATIVE</h1>
                </div>
                <div className="w-1/3 flex justify-end items-center mt-9 mb-9">
                    <Link href="mailto:extranarrative@foxmail.com" className="md:text-xl text-base hover:underline hover:text-extra-red">email</Link>
                </div>
            </div>
        </header>
    );
}