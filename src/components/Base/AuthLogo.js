import Image from "next/image"
import Link from "next/link"

export default function AuthLogo() {
    return (
        <Link href="/" className="text-left ">
            <div className="flex items-center font-bold mb-4 p-5">
                <Image src="/logo-ra.png" width={56} height={56} alt="Logo" />
                <div className="leading-tight ml-2">
                    <span className="inline-block">Radio América</span>
                    <span className="text-red-500 font-light block -mt-1">Clasificados</span>
                </div>
            </div>
        </Link>
    )
}
