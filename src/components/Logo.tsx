import { Card, Avatar } from '@mui/material';
import { useState } from 'react';

interface LogoProps {
  alt?: string;
  src?: string;
  variant?: 'circular' | 'rounded' | 'square';
  dimension?: number; // Proportion de redimensionnement (ex: 0.5 = 50% des dimensions d'origine)
}

/**
 * Composant Logo - Card responsive affichant une image
 */
export default function Logo({
  alt = "Logo",
  src = "/icons/logo_SP_contour_20250831.png",
  variant = "square",
  dimension = 1, // 1 = 100% des dimensions d'origine
}: LogoProps) {
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

  const detectImageDimensions = (src: string) => {
    const img = new Image();
    img.onload = () => {
      setImageDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
    img.src = src;
  };

  const getLogoDimensions = () => {
    // Si les dimensions réelles sont détectées, les utiliser
    if (imageDimensions) {
      const scaledWidth = imageDimensions.width * dimension;
      const scaledHeight = imageDimensions.height * dimension;
      return {
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
      };
    }
    // Dimensions par défaut avec proportion appliquée
    const defaultWidth = 280 * dimension;
    const defaultHeight = 320 * dimension;
    return { width: `${defaultWidth}px`, height: `${defaultHeight}px` };
  };

  const getBorderRadius = () => {
    switch (variant) {
      case 'rounded':
        return '12px';
      case 'circular':
        return '50%';
      default:
        return '0px';
    }
  };

  // Si SVG, toujours utiliser <img> pour garder la compatibilité (Avatar ne gère pas bien le SVG)
  const isSvg = src?.toLowerCase().endsWith('.svg');
  if (variant === 'circular' && !isSvg) {
    // Utiliser Avatar pour les images non-SVG circulaires
    const size = imageDimensions
      ? Math.max(imageDimensions.width, imageDimensions.height) * dimension
      : 300 * dimension;
    return (
      <Avatar
        src={src}
        alt={alt}
        onLoad={() => detectImageDimensions(src)}
        sx={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    );
  }

  // Pour SVG ou autres variantes, utiliser <img> dans une Card
  return (
    <Card
      sx={{
        ...getLogoDimensions(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: getBorderRadius(),
        overflow: 'hidden',
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => detectImageDimensions(src)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </Card>
  );
}
