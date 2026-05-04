export function ProductThumbnail({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="size-12 rounded-md object-cover" />;
}
