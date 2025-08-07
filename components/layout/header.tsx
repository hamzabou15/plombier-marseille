"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Phone, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/service";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-[#e8dfd6] shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo Desktop */}
                <Link href="/" className="hidden md:block">
                    <Image
                        src="/images/logo-plombier-marseille.png"
                        alt="Logo Plombier Marseille Expert"
                        width={200}
                        height={50}
                        className="h-[80px] w-[140px]"
                    />
                </Link>

                {/* Logo Mobile */}
                <Link href="/" className="md:hidden">
                    <Image
                        src="/images/logo-plombier-marseille.png"
                        alt="Logo Plombier Marseille Expert"
                        width={150}
                        height={50}
                        className="h-[80px] w-[140px]"


                    />
                </Link>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        className="text-[#43926b] focus:outline-none focus:ring-2 focus:ring-[#43926b] rounded"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex gap-8 text-sm font-medium text-[#2f2f2f]">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="hover:text-[#43926b] transition-colors duration-200"
                            >
                                <Link href="/">Accueil</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="hover:text-[#43926b] transition-colors duration-200"
                            >
                                <NavigationMenuTrigger className="hover:text-[#43926b] transition-colors duration-200">
                                    <Link href={"/services"}>  Services</Link>

                                </NavigationMenuTrigger>
                            </NavigationMenuLink>

                            <NavigationMenuContent
                                className="bg-[#43926b] text-white rounded-md shadow-lg p-4 grid gap-2"
                                style={{ width: "300px" }}
                            >
                                {services.map((item) => (
                                    <NavigationMenuLink
                                        key={item.link}
                                        asChild
                                        className={cn(
                                            "block px-3 py-2 text-sm rounded-md hover:bg-[#3d2d20] hover:text-white transition-colors"
                                        )}
                                    >
                                        <Link href={item.link}>{item.title}</Link>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="hover:text-[#43926b] transition-colors duration-200"
                            >
                                <Link href="/a-propos">À propos</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="hover:text-[#43926b] transition-colors duration-200"
                            >
                                <Link href="/contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Phone contact desktop */}
                <div className="hidden md:flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#43926b]" />
                    <a
                        href="tel:+33756935200"
                        className="text-sm text-[#43926b] font-semibold"
                    >
                        +33 7 56 93 52 00
                    </a>
                </div>
            </div>

            {/* MOBILE MENU */}
            {
                mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-[#e8dfd6] text-sm font-medium px-6 py-4 space-y-4">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[#2f2f2f] hover:text-[#43926b] transition-colors duration-200"
                        >
                            Accueil
                        </Link>

                        <details className="group">
                            <summary className="cursor-pointer text-[#2f2f2f] hover:text-[#43926b] transition-colors duration-200">
                                Services
                            </summary>
                            <div className="mt-2 pl-4 space-y-2">
                                <Link
                                    href="/services"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-[#43926b]"
                                >
                                    Tous Les Services
                                </Link>
                                {services.map((item) => (
                                    <Link
                                        key={item.link}
                                        href={item.link}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-[#2f2f2f] hover:text-[#43926b] transition-colors duration-200"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </details>

                        <Link
                            href="/a-propos"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[#2f2f2f] hover:text-[#43926b] transition-colors duration-200"
                        >
                            À propos
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[#2f2f2f] hover:text-[#43926b] transition-colors duration-200"
                        >
                            Contact
                        </Link>

                        <div className="flex items-center gap-2 pt-4 border-t border-[#e8dfd6]">
                            <Phone className="w-5 h-5 text-[#43926b]" />
                            <a
                                href="tel:+33756935200"
                                className="text-sm text-[#43926b] font-semibold"
                            >
                                +33 7 56 93 52 00
                            </a>
                        </div>
                    </div>
                )
            }
        </header >
    );
}
