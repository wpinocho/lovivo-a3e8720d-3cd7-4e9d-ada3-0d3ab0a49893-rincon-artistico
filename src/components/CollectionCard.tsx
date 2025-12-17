import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-card border-0 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer" onClick={() => onViewProducts(collection.id)}>
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-light">
              Sin imagen
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-foreground font-light text-2xl mb-3 tracking-tight">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm font-light mb-4 line-clamp-2 leading-relaxed">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="ghost" 
            className="w-full font-light text-primary hover:text-primary/80 justify-start px-0"
            onClick={(e) => {
              e.stopPropagation();
              onViewProducts(collection.id);
            }}
          >
            Explorar colección →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}