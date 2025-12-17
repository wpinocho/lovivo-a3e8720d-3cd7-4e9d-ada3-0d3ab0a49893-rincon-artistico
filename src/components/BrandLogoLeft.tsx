export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Mi Rincón - Home" className="ml-2 flex items-center">
      <img 
        src="/logo.svg" 
        alt="Mi Rincón"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-light text-foreground tracking-tight">Mi Rincón</span>';
        }}
      />
    </a>
  )
}