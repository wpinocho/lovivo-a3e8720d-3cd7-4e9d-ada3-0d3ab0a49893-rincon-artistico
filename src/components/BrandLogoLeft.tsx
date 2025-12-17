export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Azul Profundo - Home" className="ml-2 flex items-center">
      <img 
        src="/logo.png" 
        alt="Azul Profundo"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-light text-foreground tracking-tight">Azul Profundo</span>';
        }}
      />
    </a>
  )
}