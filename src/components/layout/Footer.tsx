import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cacheLife } from "next/cache";

const navLinks = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Reservas", href: "/reservations" },
];

const Footer = async () => {
    "use cache";
    cacheLife("days");

    return (
      <footer className="bg-background">
        <Separator />
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#8a7226]">
                Luzia Eventos
              </h2>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Onde a elegância encontra a perfeição. O seu parceiro de
                confiança para celebrações memoráveis.
              </p>
            </div>

            <p className="max-w-xs text-xs text-muted-foreground/80">
              © {new Date().getFullYear()} Luzia Eventos. Desenvolvido por
              Cláudio Francisco.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé" className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div id="#contacs" className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contacto
            </h3>
            <address className="space-y-3 text-sm not-italic text-muted-foreground">
              <p>
                Rua da Dona Chepa, Benfica
                <br />
                Luanda, Angola
              </p>
              <p>
                <a
                  href="mailto:luzia_eventos@gmail.com"
                  className="transition-colors hover:text-foreground"
                >
                  luzia_eventos@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+244937006425"
                  className="transition-colors hover:text-foreground"
                >
                  +244 937 006 425
                </a>
              </p>
            </address>

            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/reservations" />}
              className="border-[#8a7226] text-[#8a7226] hover:bg-[#8a7226] hover:text-white"
            >
              Pedir Orçamento
            </Button>
          </div>
        </div>
      </footer>
    );
};

export default Footer;