import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 * 
 * Este componente solo maneja la presentación del ProductCard.
 * Toda la lógica viene del HeadlessProductCard.
 * 
 * PUEDES MODIFICAR LIBREMENTE:
 * - Colores, temas, estilos
 * - Textos e idioma
 * - Layout y estructura visual
 * - Animaciones y efectos
 * - Agregar features visuales (hover effects, etc.)
 */

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-card border-0 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-[3/4] bg-muted overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground font-light">
                    Sin imagen
                  </div>
                )}

                {/* Badges */}
                {logic.product.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground text-xs px-3 py-1 font-light tracking-wide">
                      Destacada
                    </span>
                  </div>
                )}
                {!logic.inStock && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <span className="text-foreground font-light text-sm">
                      Agotada
                    </span>
                  </div>
                )}
              </div>
            </Link>

            <div className="p-5">
              <Link to={`/products/${logic.product.slug}`} className="block mb-3">
                <h3 className="text-foreground font-light text-xl mb-2 line-clamp-2 tracking-tight group-hover:text-primary transition-colors">
                  {logic.product.title}
                </h3>
              </Link>

            <div className="flex items-end justify-between mt-4">
              <div className="flex flex-col">
                <span className="text-foreground font-light text-2xl">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className="text-muted-foreground text-sm line-through font-light">
                    {logic.formatMoney(logic.currentCompareAt)}
                  </span>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  logic.onAddToCartSuccess()
                  logic.handleAddToCart()
                }}
                disabled={!logic.canAddToCart}
                className="font-light text-primary hover:text-primary/80"
              >
                {logic.inStock ? 'Agregar' : 'Agotada'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}