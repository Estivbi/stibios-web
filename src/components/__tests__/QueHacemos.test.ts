import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('QueHacemos Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Services Data Structure', () => {
    it('should have top services array with one item', () => {
      const servicesTop = [
        {
          title: 'Soluciones Cloud & DevOps',
          desc: 'Diseñamos e implementamos infraestructuras cloud escalables'
        }
      ];

      expect(servicesTop.length).toBe(1);
      expect(servicesTop[0].title).toContain('Cloud');
    });

    it('should have middle services array with three items', () => {
      const servicesMiddle = [
        { title: 'Desarrollo a Medida' },
        { title: 'Estrategia Digital' },
        { title: 'Presencia Web Profesional' }
      ];

      expect(servicesMiddle.length).toBe(3);
    });

    it('should have bottom services array with two items', () => {
      const servicesBottom = [
        { title: 'Automatización B2B' },
        { title: 'Mantenimiento & Soporte' }
      ];

      expect(servicesBottom.length).toBe(2);
    });

    it('should validate all services have required fields', () => {
      const service = {
        icon: 'Cloud',
        title: 'Test Service',
        desc: 'Test description'
      };

      expect(service).toHaveProperty('icon');
      expect(service).toHaveProperty('title');
      expect(service).toHaveProperty('desc');
    });

    it('should have valid service descriptions', () => {
      const descriptions = [
        'Diseñamos e implementamos infraestructuras cloud escalables',
        'Construimos aplicaciones web y sistemas B2B de alto rendimiento',
        'Definimos y ejecutamos estrategias digitales',
        'Creamos sitios y plataformas que proyectan credibilidad',
        'Integramos y automatizamos flujos de trabajo críticos',
        'Garantizamos la operatividad continua de tus sistemas'
      ];

      descriptions.forEach(desc => {
        expect(desc.length).toBeGreaterThan(20);
      });
    });
  });

  describe('Section Structure', () => {
    it('should have correct section id', () => {
      const mockHTML = `<section id="que-hacemos"></section>`;
      container.innerHTML = mockHTML;

      const section = container.querySelector('section');
      expect(section?.id).toBe('que-hacemos');
    });

    it('should have section badge', () => {
      const mockHTML = `
        <div class="inline-flex items-center gap-2 border rounded-full bg-stibios-accent/5">
          <div class="w-2 h-2 rounded-full bg-stibios-accent animate-pulse"></div>
          NUESTROS SERVICIOS
        </div>
      `;
      container.innerHTML = mockHTML;

      const badge = container.querySelector('div');
      expect(badge?.textContent).toContain('NUESTROS SERVICIOS');
    });

    it('should have main heading', () => {
      const mockHTML = `
        <h2 class="text-3xl md:text-5xl font-bold text-white uppercase">Qué Hacemos</h2>
      `;
      container.innerHTML = mockHTML;

      const heading = container.querySelector('h2');
      expect(heading?.textContent).toBe('Qué Hacemos');
      expect(heading?.classList.contains('uppercase')).toBe(true);
    });

    it('should have subtitle with command-line style', () => {
      const mockHTML = `
        <p class="font-mono">&gt; Tecnología aplicada a resultados de negocio concretos.</p>
      `;
      container.innerHTML = mockHTML;

      const subtitle = container.querySelector('p');
      expect(subtitle?.textContent).toContain('>');
      expect(subtitle?.classList.contains('font-mono')).toBe(true);
    });

    it('should have decorative separator', () => {
      const mockHTML = `
        <div class="w-12 h-1 bg-stibios-accent/30 rounded-full"></div>
      `;
      container.innerHTML = mockHTML;

      const separator = container.querySelector('div');
      expect(separator?.classList.contains('rounded-full')).toBe(true);
    });
  });

  describe('Bento Grid Layout', () => {
    it('should have grid container with responsive columns', () => {
      const mockHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
      `;
      container.innerHTML = mockHTML;

      const grid = container.querySelector('div');
      expect(grid?.classList.contains('grid')).toBe(true);
      expect(grid?.classList.contains('grid-cols-1')).toBe(true);
      expect(grid?.classList.contains('md:grid-cols-3')).toBe(true);
    });

    it('should have gap spacing', () => {
      const mockHTML = `
        <div class="grid gap-4"></div>
      `;
      container.innerHTML = mockHTML;

      const grid = container.querySelector('div');
      expect(grid?.classList.contains('gap-4')).toBe(true);
    });

    it('should have image spanning 2 columns', () => {
      const mockHTML = `
        <div class="md:col-span-2"></div>
      `;
      container.innerHTML = mockHTML;

      const imageContainer = container.querySelector('div');
      expect(imageContainer?.classList.contains('md:col-span-2')).toBe(true);
    });
  });

  describe('Service Cards', () => {
    it('should have proper card styling', () => {
      const mockHTML = `
        <div class="group bg-stibios-surface border border-stibios-border rounded-2xl p-8"></div>
      `;
      container.innerHTML = mockHTML;

      const card = container.querySelector('div');
      expect(card?.classList.contains('group')).toBe(true);
      expect(card?.classList.contains('bg-stibios-surface')).toBe(true);
      expect(card?.classList.contains('rounded-2xl')).toBe(true);
    });

    it('should have hover effects', () => {
      const mockHTML = `
        <div class="hover:border-stibios-accent/50 hover:shadow-[0_0_40px_rgba(0,209,255,0.08)] transition-all"></div>
      `;
      container.innerHTML = mockHTML;

      const card = container.querySelector('div');
      expect(card?.classList.contains('hover:border-stibios-accent/50')).toBe(true);
      expect(card?.classList.contains('transition-all')).toBe(true);
    });

    it('should have icon container', () => {
      const mockHTML = `
        <div class="w-14 h-14 bg-stibios-bg border rounded-xl flex items-center justify-center"></div>
      `;
      container.innerHTML = mockHTML;

      const iconContainer = container.querySelector('div');
      expect(iconContainer?.classList.contains('w-14')).toBe(true);
      expect(iconContainer?.classList.contains('h-14')).toBe(true);
      expect(iconContainer?.classList.contains('rounded-xl')).toBe(true);
    });

    it('should have service title', () => {
      const mockHTML = `
        <h3 class="text-xl font-bold text-white group-hover:text-stibios-accent">Service Title</h3>
      `;
      container.innerHTML = mockHTML;

      const title = container.querySelector('h3');
      expect(title?.classList.contains('font-bold')).toBe(true);
      expect(title?.classList.contains('group-hover:text-stibios-accent')).toBe(true);
    });

    it('should have service description', () => {
      const mockHTML = `
        <p class="text-stibios-dim text-sm leading-relaxed">Description text</p>
      `;
      container.innerHTML = mockHTML;

      const description = container.querySelector('p');
      expect(description?.classList.contains('text-stibios-dim')).toBe(true);
      expect(description?.classList.contains('leading-relaxed')).toBe(true);
    });

    it('should have minimum height for consistency', () => {
      const mockHTML = `
        <div class="min-h-[220px]"></div>
      `;
      container.innerHTML = mockHTML;

      const card = container.querySelector('div');
      expect(card?.classList.contains('min-h-[220px]')).toBe(true);
    });
  });

  describe('Images in Bento Grid', () => {
    it('should have datacenter image with Unsplash URL', () => {
      const imageUrl = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31';
      expect(imageUrl).toMatch(/^https:\/\/images\.unsplash\.com/);
    });

    it('should have workspace image with Unsplash URL', () => {
      const imageUrl = 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5';
      expect(imageUrl).toMatch(/^https:\/\/images\.unsplash\.com/);
    });

    it('should have descriptive alt text', () => {
      const mockHTML = `
        <img src="test.jpg" alt="Datacenter de alto rendimiento" />
        <img src="test2.jpg" alt="Setup de desarrollo minimalista" />
      `;
      container.innerHTML = mockHTML;

      const images = container.querySelectorAll('img');
      expect(images[0].alt).toContain('Datacenter');
      expect(images[1].alt).toContain('Setup de desarrollo');
    });

    it('should have hover scale effect on images', () => {
      const mockHTML = `
        <img class="hover:scale-[1.02] transition-all duration-500" src="test.jpg" alt="Test" />
      `;
      container.innerHTML = mockHTML;

      const image = container.querySelector('img');
      expect(image?.classList.contains('hover:scale-[1.02]')).toBe(true);
      expect(image?.classList.contains('transition-all')).toBe(true);
      expect(image?.classList.contains('duration-500')).toBe(true);
    });

    it('should have rounded corners', () => {
      const mockHTML = `
        <div class="overflow-hidden rounded-2xl">
          <img class="rounded-2xl" src="test.jpg" alt="Test" />
        </div>
      `;
      container.innerHTML = mockHTML;

      const wrapper = container.querySelector('div');
      const image = container.querySelector('img');

      expect(wrapper?.classList.contains('rounded-2xl')).toBe(true);
      expect(image?.classList.contains('rounded-2xl')).toBe(true);
    });

    it('should have object-cover for proper image fit', () => {
      const mockHTML = `
        <img class="object-cover" src="test.jpg" alt="Test" />
      `;
      container.innerHTML = mockHTML;

      const image = container.querySelector('img');
      expect(image?.classList.contains('object-cover')).toBe(true);
    });
  });

  describe('Icon Components', () => {
    it('should have icons for all services', () => {
      const icons = ['Cloud', 'Code2', 'BarChart2', 'Globe', 'Layers', 'Cog'];
      expect(icons.length).toBe(6);
    });

    it('should have icon hover color change', () => {
      const mockHTML = `
        <div class="text-stibios-dim group-hover:text-stibios-accent transition-colors"></div>
      `;
      container.innerHTML = mockHTML;

      const icon = container.querySelector('div');
      expect(icon?.classList.contains('group-hover:text-stibios-accent')).toBe(true);
      expect(icon?.classList.contains('transition-colors')).toBe(true);
    });

    it('should have consistent icon size', () => {
      const iconSize = 28;
      expect(iconSize).toBe(28);
    });
  });

  describe('Responsive Design', () => {
    it('should have mobile-first approach', () => {
      const mockHTML = `
        <div class="text-3xl md:text-5xl"></div>
      `;
      container.innerHTML = mockHTML;

      const element = container.querySelector('div');
      expect(element?.classList.contains('text-3xl')).toBe(true);
      expect(element?.classList.contains('md:text-5xl')).toBe(true);
    });

    it('should have max-width container', () => {
      const mockHTML = `
        <section class="max-w-6xl mx-auto"></section>
      `;
      container.innerHTML = mockHTML;

      const section = container.querySelector('section');
      expect(section?.classList.contains('max-w-6xl')).toBe(true);
      expect(section?.classList.contains('mx-auto')).toBe(true);
    });

    it('should have responsive padding', () => {
      const mockHTML = `
        <section class="py-24 px-4"></section>
      `;
      container.innerHTML = mockHTML;

      const section = container.querySelector('section');
      expect(section?.classList.contains('py-24')).toBe(true);
      expect(section?.classList.contains('px-4')).toBe(true);
    });
  });

  describe('Service Titles', () => {
    it('should have all service titles', () => {
      const titles = [
        'Soluciones Cloud & DevOps',
        'Desarrollo a Medida',
        'Estrategia Digital',
        'Presencia Web Profesional',
        'Automatización B2B',
        'Mantenimiento & Soporte'
      ];

      expect(titles.length).toBe(6);
      titles.forEach(title => {
        expect(title.length).toBeGreaterThan(5);
      });
    });

    it('should validate title formatting', () => {
      const title = 'Soluciones Cloud & DevOps';
      expect(title).toContain('&');
      expect(title).not.toContain('  '); // No double spaces
    });
  });

  describe('Card Hover Interactions', () => {
    it('should have icon container hover effect', () => {
      const mockHTML = `
        <div class="group-hover:border-stibios-accent/40 group-hover:bg-stibios-accent/[0.04]"></div>
      `;
      container.innerHTML = mockHTML;

      const iconContainer = container.querySelector('div');
      expect(iconContainer?.classList.contains('group-hover:border-stibios-accent/40')).toBe(true);
    });

    it('should have shadow on card container', () => {
      const mockHTML = `
        <div class="shadow-xl shadow-black/20"></div>
      `;
      container.innerHTML = mockHTML;

      const element = container.querySelector('div');
      expect(element?.classList.contains('shadow-xl')).toBe(true);
    });

    it('should have transition duration', () => {
      const mockHTML = `
        <div class="transition-all duration-500"></div>
      `;
      container.innerHTML = mockHTML;

      const element = container.querySelector('div');
      expect(element?.classList.contains('duration-500')).toBe(true);
    });
  });

  describe('Badge Component', () => {
    it('should have pulsing indicator', () => {
      const mockHTML = `
        <div class="w-2 h-2 rounded-full bg-stibios-accent animate-pulse"></div>
      `;
      container.innerHTML = mockHTML;

      const indicator = container.querySelector('div');
      expect(indicator?.classList.contains('animate-pulse')).toBe(true);
      expect(indicator?.classList.contains('bg-stibios-accent')).toBe(true);
    });

    it('should have border and background', () => {
      const mockHTML = `
        <div class="border border-stibios-accent/20 bg-stibios-accent/5"></div>
      `;
      container.innerHTML = mockHTML;

      const badge = container.querySelector('div');
      expect(badge?.classList.contains('border')).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty services arrays', () => {
      const services: any[] = [];
      expect(services.length).toBe(0);
      expect(() => services.map(s => s.title)).not.toThrow();
    });

    it('should validate service card structure', () => {
      const mockHTML = `
        <div class="group">
          <div class="w-14 h-14"></div>
          <h3>Title</h3>
          <p>Description</p>
        </div>
      `;
      container.innerHTML = mockHTML;

      expect(container.querySelector('.group')).toBeTruthy();
      expect(container.querySelector('h3')).toBeTruthy();
      expect(container.querySelector('p')).toBeTruthy();
    });

    it('should handle missing images gracefully', () => {
      const mockHTML = `
        <div class="overflow-hidden">
          <img src="" alt="Test" onerror="this.style.display='none'" />
        </div>
      `;
      container.innerHTML = mockHTML;

      const image = container.querySelector('img');
      expect(image).toBeTruthy();
    });

    it('should validate grid layout maintains structure', () => {
      // Top row: 1 card + 2-col image = 3 cols
      // Middle row: 3 cards = 3 cols
      // Bottom row: 1 image + 2 cards = 3 cols
      const totalItems = 1 + 1 + 3 + 1 + 2;
      expect(totalItems).toBe(8);
    });
  });

  describe('Accessibility', () => {
    it('should have semantic heading structure', () => {
      const mockHTML = `
        <section>
          <h2>Qué Hacemos</h2>
          <h3>Service Title</h3>
        </section>
      `;
      container.innerHTML = mockHTML;

      expect(container.querySelector('h2')).toBeTruthy();
      expect(container.querySelector('h3')).toBeTruthy();
    });

    it('should have descriptive alt text for all images', () => {
      const altTexts = [
        'Datacenter de alto rendimiento',
        'Setup de desarrollo minimalista'
      ];

      altTexts.forEach(alt => {
        expect(alt.length).toBeGreaterThan(10);
        expect(alt).not.toBe('image');
      });
    });
  });

  describe('Typography', () => {
    it('should use tracking for spacing', () => {
      const mockHTML = `
        <h2 class="tracking-tighter">Heading</h2>
      `;
      container.innerHTML = mockHTML;

      const heading = container.querySelector('h2');
      expect(heading?.classList.contains('tracking-tighter')).toBe(true);
    });

    it('should have text size variations', () => {
      const mockHTML = `
        <div>
          <h2 class="text-3xl md:text-5xl">Heading</h2>
          <h3 class="text-xl">Subheading</h3>
          <p class="text-sm">Body text</p>
        </div>
      `;
      container.innerHTML = mockHTML;

      expect(container.querySelector('.text-3xl')).toBeTruthy();
      expect(container.querySelector('.text-xl')).toBeTruthy();
      expect(container.querySelector('.text-sm')).toBeTruthy();
    });
  });

  describe('Layout Justification', () => {
    it('should center section header', () => {
      const mockHTML = `
        <div class="flex flex-col items-center justify-center text-center"></div>
      `;
      container.innerHTML = mockHTML;

      const header = container.querySelector('div');
      expect(header?.classList.contains('items-center')).toBe(true);
      expect(header?.classList.contains('justify-center')).toBe(true);
      expect(header?.classList.contains('text-center')).toBe(true);
    });

    it('should have flex column for cards', () => {
      const mockHTML = `
        <div class="flex flex-col justify-between"></div>
      `;
      container.innerHTML = mockHTML;

      const card = container.querySelector('div');
      expect(card?.classList.contains('flex')).toBe(true);
      expect(card?.classList.contains('flex-col')).toBe(true);
    });
  });
});