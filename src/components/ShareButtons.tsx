import { useState, useEffect } from 'react';
import { Share2, Linkedin, Github, Check, Link as LinkIcon } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share);
  }, []);

  const handleShare = async () => {
    if (typeof navigator === 'undefined' || !navigator.share) return;
    try {
      await navigator.share({ title, url });
    } catch {
      // User cancelled or share failed — ignore silently
    }
  };

  const handleCopyLink = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Copy failed — ignore silently
    }
  };

  const openGitHub = () => {
    window.open(
      'https://github.com/Estivbi',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank',
      'noopener,noreferrer,width=550,height=420'
    );
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-stibios-dim text-sm font-mono">Compartir</span>
      <div className="flex gap-2">
        {canShare && (
          <button
            onClick={handleShare}
            className="p-2 rounded-lg border border-stibios-border hover:border-stibios-accent/50 hover:bg-stibios-accent/10 transition-all"
            aria-label="Compartir"
            title="Compartir"
          >
            <Share2 className="w-4 h-4 text-stibios-text" />
          </button>
        )}
        <button
          onClick={shareOnLinkedIn}
          className="p-2 rounded-lg border border-stibios-border hover:border-stibios-accent/50 hover:bg-stibios-accent/10 transition-all"
          aria-label="Compartir en LinkedIn"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4 text-stibios-text" />
        </button>
        <button
          onClick={openGitHub}
          className="p-2 rounded-lg border border-stibios-border hover:border-stibios-accent/50 hover:bg-stibios-accent/10 transition-all"
          aria-label="GitHub"
          title="GitHub"
        >
          <Github className="w-4 h-4 text-stibios-text" />
        </button>
        <button
          onClick={handleCopyLink}
          className="p-2 rounded-lg border border-stibios-border hover:border-stibios-accent/50 hover:bg-stibios-accent/10 transition-all"
          aria-label="Copiar enlace"
          title={copied ? "¡Copiado!" : "Copiar enlace"}
        >
          {copied ? (
            <Check className="w-4 h-4 text-stibios-accent" />
          ) : (
            <LinkIcon className="w-4 h-4 text-stibios-text" />
          )}
        </button>
      </div>
    </div>
  );
}
