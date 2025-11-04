import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Martini, Clock, Phone, MapPin, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import logo from "@/assets/logo/logo_remove.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(var(--hero-overlay) / 0.7), rgba(var(--hero-overlay) / 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="flex justify-center mb-8">
              <img 
                src={logo} 
                alt="El Chipotle Logo" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl animate-bounce-slow"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              ¡Vive la Fiesta del Sabor en El Chipotle!
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-foreground/90 font-medium">
              Auténtica comida Mexicana & Americana en el corazón de Ibarra
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Descubre un ambiente único donde los buenos cócteles, la música en vivo y los sabores inolvidables se encuentran. ¿Listo para tu nueva adicción?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button variant="hero" size="lg" className="text-lg" asChild>
                <a href="https://drive.google.com/file/d/1GjZfmYOtEQvXtWevllOq2dOKtz5_-yCY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  ¡Explora Nuestro Menú!
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg" asChild>
                <a href="https://wa.me/59309999999" target="_blank" rel="noopener noreferrer">
                  Reserva tu Mesa
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promociones Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
               ¡Nuestras Promos Imperdibles!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No dejes pasar nuestras ofertas especiales. ¡Siempre hay una buena excusa para visitarnos!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hora Feliz Card */}
            <Card className="hover:shadow-[var(--shadow-warm)] transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">¡La Hora Feliz!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Relájate después del trabajo. Disfruta de 2x1 en nuestros cócteles seleccionados y piqueos con descuento.
                </CardDescription>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-semibold text-primary">
                    Lunes a Jueves, de 5:00 PM a 7:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Martes de Tacos Card */}
            <Card className="hover:shadow-[var(--shadow-warm)] transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <span className="text-4xl">🌮</span>
                </div>
                <CardTitle className="text-2xl">Martes de Tacos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  ¡Todos los tacos que puedas comer! Pide tu orden de 3 tacos y rellénalos cuantas veces quieras por un precio especial.
                </CardDescription>
                <div className="pt-2 border-t border-border">
                  <p className="text-2xl font-bold text-primary">$9.99</p>
                </div>
              </CardContent>
            </Card>

            {/* Finde de Música Card */}
            <Card className="hover:shadow-[var(--shadow-warm)] transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Music className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Noches de Sabor y Ritmo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Tu cena con banda en vivo. Pide una de nuestras parrilladas para compartir y recibe una ronda de margaritas de la casa.
                </CardDescription>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-semibold text-accent">
                    Viernes y Sábados desde las 8:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experiencia Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Más que Comida, una Experiencia Completa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              En "El Chipotle" nos encargamos de que cada visita sea memorable. No solo vienes a comer, vienes a disfrutar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Buenos Cócteles */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-[var(--shadow-warm)]">
                <Martini className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">🍹 Buenos Cócteles</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nuestros bartenders son expertos en mixología. Desde margaritas clásicas hasta creaciones de autor, tenemos la bebida perfecta para tu plato. ¡Pregunta por nuestra famosa "Margarita Chipotle"!
              </p>
            </div>

            {/* Música en Vivo */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Music className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">🎶 Música en Vivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Siente el ritmo de Ibarra. Disfruta de bandas y artistas locales los fines de semana, creando el ambiente perfecto para tu cena, celebración o simplemente para compartir entre amigos.
              </p>
            </div>

            {/* Hora Feliz */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-6 shadow-[var(--shadow-warm)]">
                <Clock className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">🍻 Comidas en Hora Feliz</h3>
              <p className="text-muted-foreground leading-relaxed">
                ¿Por qué esperar al fin de semana? Únete a nuestra Hora Feliz con piqueos perfectos para compartir, cervezas heladas y cócteles especiales a precios que te encantarán.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* El Chipotle Info */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">El Chipotle</h3>
              <p className="text-background/80 leading-relaxed">
                Auténtico sabor Mexicano & Americano en Ibarra desde 2015. ¡Te esperamos!
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/593999402348" className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Encuéntranos */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary">Encuéntranos</h4>
              <div className="space-y-3 text-background/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p>Av. Rafael Sánchez 634, Ibarra 100108, Ecuador</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+593999402348" className="hover:text-primary transition-colors">
                    +593 99 940 2348
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:contacto@elchipotle.com" className="hover:text-primary transition-colors">
                    contacto@elchipotle.com
                  </a>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary">Horarios</h4>
              <div className="space-y-2 text-background/80">
                <p><span className="font-semibold">Lunes a Jueves:</span> 12:00 PM - 10:00 PM</p>
                <p><span className="font-semibold">Viernes y Sábado:</span> 12:00 PM - 11:00 PM</p>
                <p><span className="font-semibold">Domingo:</span> 12:00 PM - 9:00 PM</p>
              </div>
              <p className="text-sm text-background/60 pt-4">
                Nota: Nuestro horario puede variar en feriados. ¡Llámanos para confirmar!
              </p>
              <p className="text-lg font-semibold text-primary pt-2">
                Precio promedio: $5 - $10 por persona
              </p>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60 text-sm">
              © 2025 El Chipotle. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
