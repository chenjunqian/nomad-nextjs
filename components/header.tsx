import Link from "next/link";


export default function SiteHeader() {
    return (
        <header className="sticky top-0 left-0 right-0 z-10 bg-white pl-9 pr-9">
            <div className="w-full flex justify-center bg-white border-b">
                <div className="md:w-1/3 w-1/2 flex justify-start items-center mt-9 mb-9">
                    <Link href="/" className="md:text-xl text-base hover:underline hover:text-extra-red">work</Link>
                    <Link href="/info" className="md:text-xl text-base hover:underline hover:text-extra-red pl-4 md:pl-7">info</Link>
                    <Link href="/contact" className="md:text-xl text-base hover:underline hover:text-extra-red pl-4 md:pl-7">contact</Link>
                </div>
                <div className="w-1/3 justify-center items-center mt-9 mb-9 md:flex hidden">
                    <img className="w-64" src="/icons/title-with-logo.jpg" alt="EXTRA NARRATIVE" />
                </div>
                <div className="md:w-1/3 w-1/2 flex justify-end items-center mt-9 mb-9">
                    <Link href="mailto:extranarrative@foxmail.com" className="md:text-xl text-base hover:underline hover:text-extra-red">email</Link>
                </div>
            </div>
        </header>
    );
}