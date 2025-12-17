import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-muted/20 py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-accent/10 rounded-full p-4">
                    <Mail className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-3xl font-light text-foreground tracking-tight">
                  ¡Gracias por suscribirte!
                </h3>
                <p className="text-muted-foreground font-light text-lg">
                  Recibirás noticias sobre nuevas obras y eventos especiales.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-light text-foreground tracking-tight">
                    Mantente informado
                  </h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Suscríbete para recibir noticias sobre nuevas obras y exhibiciones
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 font-light"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto font-light"
                  >
                    {logic.isSubmitting ? 'Suscribiendo...' : 'Suscribir'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive font-light">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};