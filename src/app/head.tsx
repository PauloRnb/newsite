export default function Head() {
  return (
    <>
      {/* Favicon padrão (multitamanho) */}
      <link rel="icon" href="/favicon.ico" />

      {/* Apple iOS */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />

      {/* Android */}
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/favicons/android-chrome-512x512.png"
      />

      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
    </>
  );
}
