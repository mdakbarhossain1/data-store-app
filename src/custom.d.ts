// custom.d.ts

declare module '*.css' {
  // Allow for a generic module without a specific type
  const content: unknown;
  export default content;
}
// Specifically handle swiper CSS (often this is enough)
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
// Add other swiper styles if you use them (e.g., swiper/css/effect-fade)