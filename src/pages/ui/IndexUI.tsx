import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/676d6365-cce7-48b6-addb-6ede9960d4c1/1766012806504-y67zjmek35.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-light text-foreground mb-6 tracking-tight">
              Acuarelas que<br />inspiran serenidad
            </h1>
            <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Obras originales que evocan la tranquilidad del mar.<br />
              Por Patricia Etchegaray J.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="rounded-none px-8 py-6 text-base font-light tracking-wide"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver obras
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-foreground mb-16 text-center tracking-tight">
              Colecciones
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-light text-foreground tracking-tight">
              {selectedCollectionId 
                ? collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'
                : 'Obras destacadas'
              }
            </h2>
            {selectedCollectionId && (
              <Button 
                variant="ghost" 
                onClick={handleShowAllProducts}
                className="font-light"
              >
                Ver todas las obras
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-muted aspect-[3/4] animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-light text-lg">
                No hay obras disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-foreground mb-8 tracking-tight">
            Azul Profundo
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
            El dibujo siempre me ha llamado la atención. Ahora, lo disfruto muchísimo. 
            Cada acuarela nace de mi fascinación por el mar y los paisajes tranquilos 
            que invitan a la contemplación.
          </p>
          <p className="text-base text-muted-foreground font-light">
            — Patricia Etchegaray J.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};