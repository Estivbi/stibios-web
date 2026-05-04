import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        url,
      });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank',
      'width=550,height=420'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank',
      'width=550,height=420'
    );
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-stibios-dim text-sm font-mono">Compartir</span>
      <div className="flex gap-2">
        {navigator.share && (
          <button
            onClick={handleShare}
            className="p-2 rounded-lg border border-stibios-border hover:border-stibios-accent/50 hover:bg-stibios-accent/10 transition-all"
            aria-label="Compartir"
            title="Compartir"
          >
            <svg className="w-4 h-4 text-stibios-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C9.589 12.938 10 12.077 10 11.25c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3c.377 0 .74-.093 1.063-.271m0 0a6 6 0 016.604 1.746m0 0l1.414-1.414m-1.414 1.414l1.414 1.414m0 0a6 6 0 10-8.496 8.496l1.414-1.414m-1.414 1.414l-1.414-1.414" />
            </svg>
          </button>
        )}
        <button
          onClick={shareOnTwitter}
          className="p-2 rounded-lg border border-stibios-border hover:border-stibios-accent/50 hover:bg-stibios-accent/10 transition-all"
          aria-label="Compartir en Twitter"
          title="Twitter"
        >
          <svg className="w-4 h-4 text-stibios-text" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-3.14 1.53" />
          </svg>
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="p-2 rounded-lg border border-stibios-border hover:border-stibios-accent/50 hover:bg-stibios-accent/10 transition-all"
          aria-label="Compartir en LinkedIn"
          title="LinkedIn"
        >
          <svg className="w-4 h-4 text-stibios-text" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </button>
        <button
          onClick={handleCopyLink}
          className="p-2 rounded-lg border border-stibios-border hover:border-stibios-accent/50 hover:bg-stibios-accent/10 transition-all"
          aria-label="Copiar enlace"
          title={copied ? "¡Copiado!" : "Copiar enlace"}
        >
          {copied ? (
            <svg className="w-4 h-4 text-stibios-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-stibios-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
