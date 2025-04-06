"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" }
]

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <>
           <div>
            {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} key={link.name} href={link.href}>
                        {link.name}
                    </Link>
                );
            })}
            {children}
           </div>
        </>
    )
}
export default AuthLayout;