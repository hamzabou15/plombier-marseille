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
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 px-16 max-md:px-6 pl-0 py-3 flex items-center justify-between">
                <Link href={"/"}
                    className="max-md:hidden"

                >
                    <Image
                        src="/images/logo-plombier-aixenprovence-expert.svg"
                        alt="Logo Plombier Aix-En-Provence SOS"
                        width={200}
                        height={50}
                    />
                </Link>
                <Link href={"/"}
                    className="md:hidden"

                >

                    <Image
                        src="/images/logo-plombier-aixenprovence-expert.svg"
                        alt="Logo Plombier Aix-En-Provence SOS"
                        width={150}
                        height={50}
                    />
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <Menu className="text-[#E67E22] w-6 h-6" />
                    </button>
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex gap-6 text-sm font-medium text-[#212121]">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:text-[#E67E22] transition">
                                <Link href="/">Accueil</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:text-[#E67E22] transition mt-2">
                                <NavigationMenuTrigger className="hover:text-[#E67E22]">
                                    <Link href="/services">Services</Link>
                                </NavigationMenuTrigger>
                            </NavigationMenuLink>

                            <NavigationMenuContent className="bg-[#E67E22] text-white rounded-sm shadow-lg p-4 grid gap-2" style={{ width: "300px" }}>
                                {services.map((item) => (
                                    <NavigationMenuLink
                                        key={item.link}
                                        asChild
                                        className={cn(
                                            "block px-3 py-2 text-sm hover:bg-[#8ac2da] hover:text-white transition rounded-sm"
                                        )}
                                    >
                                        <Link href={item.link}>{item.title}</Link>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:text-[#E67E22] transition">
                                <Link href="/a-propos">À propos</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:text-[#E67E22] transition">
                                <Link href="/contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden md:flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#E67E22]" />
                    <a href="tel:+33693788807" className="text-sm text-[#E67E22] font-medium">
                        +33 7 56 93 52 00
                    </a>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t text-sm font-medium px-4 py-4 space-y-3">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-[#212121] hover:text-[#E67E22]">Accueil</Link>

                    <details className="group">
                        <summary className="cursor-pointer text-[##edeff5] hover:text-[#E67E22]">Services</summary>
                        <div className="mt-2 pl-4 space-y-2">
                            <Link
                                href="/services"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-[#E67E22] hover:text-[#E67E22]"
                            >
                                Tous Les Services
                            </Link>
                            {services.map((item) => (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-[#212121] hover:text-[#E67E22]"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </details>

                    <Link href="/a-propos" onClick={() => setMobileMenuOpen(false)} className="block text-[#212121] hover:text-[#E67E22]">À propos</Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-[#212121] hover:text-[#E67E22]">Contact</Link>

                    <div className="flex items-center gap-2 pt-2 border-t">
                        <Phone className="w-4 h-4 text-[#E67E22]" />
                        <a href="tel:+33693788807" className="text-sm text-[#E67E22] font-medium">
                            +33 7 56 93 52 00
                        </a>
                    </div>
                </div>
            )}

        </header>
    );
}
