"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Contatos", href: "#contacts" },
    { label: "Reservas", href: "/reservations" },
];

const Header = () => {
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="w-full bg-background">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                {/* Luzia Logo */}
                <Link
                    href="/"
                    className="font-serif text-2xl text-[#8a7226]"
                >
                    Luzia Eventos
                </Link>

                {/* Navigation (desktop) */}
                <nav
                    aria-label="Navegação principal"
                    className="hidden items-center gap-8 md:flex"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={cn(
                                "text-sm transition-colors hover:text-foreground",
                                isActive(link.href)
                                    ? "font-semibold text-foreground"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions (desktop) */}
                <div className="hidden items-center gap-6 md:flex">
                    <Link
                        href="/login"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Iniciar Sessão
                    </Link>
                    <Button
                        nativeButton={false}
                        render={<Link href="/register" />}
                        size="sm"
                        className="bg-[#8a7226] px-8 text-white hover:bg-[#6f5b1e]"
                    >
                        Cadastrar
                    </Button>
                </div>

                {/* Menu (mobile) */}
                <Sheet>
                    <SheetTrigger
                        render={
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                aria-label="Abrir menu"
                            />
                        }
                    >
                        <MenuIcon />
                    </SheetTrigger>

                    <SheetContent side="right" className="w-72">
                        <SheetHeader>
                            <SheetTitle className="font-serif text-2xl font-normal text-[#8a7226]">
                                Luzia Eventos
                            </SheetTitle>
                        </SheetHeader>

                        <nav
                            aria-label="Navegação móvel"
                            className="flex flex-col gap-4 px-4"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={
                                        isActive(link.href) ? "page" : undefined
                                    }
                                    className={cn(
                                        "text-base transition-colors hover:text-foreground",
                                        isActive(link.href)
                                            ? "font-semibold text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto flex flex-col gap-3 p-4">
                            <Button
                                nativeButton={false}
                                render={<Link href="/login" />}
                                variant="outline"
                            >
                                Iniciar Sessão
                            </Button>
                            <Button
                                nativeButton={false}
                                render={<Link href="/registo" />}
                                className="bg-[#8a7226] text-white hover:bg-[#6f5b1e]"
                            >
                                Cadastrar
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;