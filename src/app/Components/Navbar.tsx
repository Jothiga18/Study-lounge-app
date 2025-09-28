import Link from "next/link";

export default function Navbar(){
    return (
        <div className = "flex flex-row justify-between m-7 text-xl text-white font-bold">
            <div className = "flex flex-row">
                <Link href = "/">Study Together</Link>
                
            </div>
            <div className = "flex flex-row justify-between m-2 gap-10">
                <Link href = "">How To study Together</Link>
                <Link href = "">Design a Study Universe</Link>
                <Link href = "">Community Events</Link>
                <Link href = "">About</Link>
            </div>
        </div>
    );
}