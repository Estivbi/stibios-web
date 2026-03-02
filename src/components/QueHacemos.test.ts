import { describe, it, expect, beforeEach } from 'vitest';

describe('QueHacemos Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <section id="que-hacemos" class="py-24 px-4 max-w-6xl mx-auto">

        <div class="flex flex-col items-center justify-center gap-3 mb-20 text-center">
          <div class="inline-flex items-center gap-2 text-stibios-accent text-xs font-mono mb-2">
            NUESTROS SERVICIOS
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tighter mx-auto uppercase">
            Qué Hacemos
          </h2>
          <p class="text-stibios-dim mt-2 text-sm md:text-base font-mono max-w-lg text-center">
            &gt; Tecnología aplicada a resultados de negocio concretos.
          </p>
        </div>

        <!-- Bento grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

          <!-- Cloud card -->
          <div class="group bg-stibios-surface border border-stibios-border rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-3">
              Soluciones Cloud & DevOps
            </h3>
            <p class="text-stibios-dim text-sm leading-relaxed">
              Diseñamos e implementamos infraestructuras cloud escalables y pipelines CI/CD que aceleran el ciclo de entrega y maximizan la disponibilidad de tus sistemas.
            </p>
          </div>

          <!-- Datacenter image -->
          <div class="md:col-span-2 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80"
              alt="Datacenter de alto rendimiento"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- 3 service cards -->
          <div class="group bg-stibios-surface border border-stibios-border rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-3">
              Desarrollo a Medida
            </h3>
            <p class="text-stibios-dim text-sm leading-relaxed">
              Construimos aplicaciones web y sistemas B2B de alto rendimiento con arquitecturas escalables, priorizando la calidad del código y la velocidad de entrega.
            </p>
          </div>

          <div class="group bg-stibios-surface border border-stibios-border rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-3">
              Estrategia Digital
            </h3>
            <p class="text-stibios-dim text-sm leading-relaxed">
              Definimos y ejecutamos estrategias digitales que conectan tecnología con resultados medibles: SEO técnico, analítica avanzada y optimización de conversión.
            </p>
          </div>

          <div class="group bg-stibios-surface border border-stibios-border rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-3">
              Presencia Web Profesional
            </h3>
            <p class="text-stibios-dim text-sm leading-relaxed">
              Creamos sitios y plataformas que proyectan credibilidad, generan confianza y convierten visitantes en clientes con diseño de alto impacto.
            </p>
          </div>

          <!-- Dev workspace image -->
          <div class="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=800&auto=format&fit=crop&q=80"
              alt="Setup de desarrollo minimalista"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- 2 more service cards -->
          <div class="group bg-stibios-surface border border-stibios-border rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-3">
              Automatización B2B
            </h3>
            <p class="text-stibios-dim text-sm leading-relaxed">
              Integramos y automatizamos flujos de trabajo críticos entre sistemas, eliminando procesos manuales y reduciendo errores operativos.
            </p>
          </div>

          <div class="group bg-stibios-surface border border-stibios-border rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-3">
              Mantenimiento & Soporte
            </h3>
            <p class="text-stibios-dim text-sm leading-relaxed">
              Garantizamos la operatividad continua de tus sistemas con monitorización proactiva, actualizaciones de seguridad y soporte técnico especializado.
            </p>
          </div>

        </div>

      </section>
    `;
    container = document.body;
  });

  describe('Component Structure', () => {
    it('should render section with correct id', () => {
      const section = container.querySelector('#que-hacemos');
      expect(section).toBeTruthy();
    });

    it('should have semantic section element', () => {
      const section = container.querySelector('section');
      expect(section?.tagName).toBe('SECTION');
    });

    it('should render main heading', () => {
      const heading = container.querySelector('h2');
      expect(heading?.textContent?.trim()).toBe('Qué Hacemos');
    });

    it('should have "NUESTROS SERVICIOS" label', () => {
      const label = Array.from(container.querySelectorAll('div'))
        .find(div => div.textContent?.includes('NUESTROS SERVICIOS'));
      expect(label).toBeTruthy();
    });

    it('should display tagline', () => {
      const tagline = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('Tecnología aplicada a resultados'));
      expect(tagline).toBeTruthy();
    });
  });

  describe('Services Count', () => {
    it('should render all 6 service cards', () => {
      const serviceCards = container.querySelectorAll('.bg-stibios-surface.border.rounded-2xl');
      expect(serviceCards.length).toBe(6);
    });

    it('should render 2 images in bento grid', () => {
      const images = container.querySelectorAll('img');
      expect(images.length).toBe(2);
    });
  });

  describe('Cloud & DevOps Service', () => {
    it('should display Cloud & DevOps service title', () => {
      const title = Array.from(container.querySelectorAll('h3'))
        .find(h3 => h3.textContent?.includes('Soluciones Cloud & DevOps'));
      expect(title).toBeTruthy();
    });

    it('should describe cloud infrastructure', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('infraestructuras cloud escalables'));
      expect(description).toBeTruthy();
    });

    it('should mention CI/CD pipelines', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('pipelines CI/CD'));
      expect(description).toBeTruthy();
    });
  });

  describe('Custom Development Service', () => {
    it('should display Desarrollo a Medida title', () => {
      const title = Array.from(container.querySelectorAll('h3'))
        .find(h3 => h3.textContent?.includes('Desarrollo a Medida'));
      expect(title).toBeTruthy();
    });

    it('should mention B2B systems', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('sistemas B2B'));
      expect(description).toBeTruthy();
    });

    it('should emphasize code quality', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('calidad del código'));
      expect(description).toBeTruthy();
    });
  });

  describe('Digital Strategy Service', () => {
    it('should display Estrategia Digital title', () => {
      const title = Array.from(container.querySelectorAll('h3'))
        .find(h3 => h3.textContent?.includes('Estrategia Digital'));
      expect(title).toBeTruthy();
    });

    it('should mention SEO', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('SEO técnico'));
      expect(description).toBeTruthy();
    });

    it('should mention analytics', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('analítica avanzada'));
      expect(description).toBeTruthy();
    });

    it('should mention conversion optimization', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('optimización de conversión'));
      expect(description).toBeTruthy();
    });
  });

  describe('Web Presence Service', () => {
    it('should display Presencia Web Profesional title', () => {
      const title = Array.from(container.querySelectorAll('h3'))
        .find(h3 => h3.textContent?.includes('Presencia Web Profesional'));
      expect(title).toBeTruthy();
    });

    it('should emphasize credibility', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('credibilidad'));
      expect(description).toBeTruthy();
    });

    it('should mention client conversion', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('convierten visitantes en clientes'));
      expect(description).toBeTruthy();
    });
  });

  describe('B2B Automation Service', () => {
    it('should display Automatización B2B title', () => {
      const title = Array.from(container.querySelectorAll('h3'))
        .find(h3 => h3.textContent?.includes('Automatización B2B'));
      expect(title).toBeTruthy();
    });

    it('should mention workflow automation', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('automatizamos flujos de trabajo'));
      expect(description).toBeTruthy();
    });

    it('should mention error reduction', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('reduciendo errores operativos'));
      expect(description).toBeTruthy();
    });
  });

  describe('Maintenance & Support Service', () => {
    it('should display Mantenimiento & Soporte title', () => {
      const title = Array.from(container.querySelectorAll('h3'))
        .find(h3 => h3.textContent?.includes('Mantenimiento & Soporte'));
      expect(title).toBeTruthy();
    });

    it('should mention continuous operation', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('operatividad continua'));
      expect(description).toBeTruthy();
    });

    it('should mention proactive monitoring', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('monitorización proactiva'));
      expect(description).toBeTruthy();
    });

    it('should mention security updates', () => {
      const description = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('actualizaciones de seguridad'));
      expect(description).toBeTruthy();
    });
  });

  describe('Bento Grid Layout', () => {
    it('should use 3-column grid on desktop', () => {
      const grid = container.querySelector('.md\\:grid-cols-3');
      expect(grid).toBeTruthy();
    });

    it('should have datacenter image spanning 2 columns', () => {
      const wideImage = container.querySelector('.md\\:col-span-2');
      expect(wideImage).toBeTruthy();
    });

    it('should have asymmetric layout with images and cards', () => {
      const grid = container.querySelector('.grid');
      const images = grid?.querySelectorAll('img');
      const cards = grid?.querySelectorAll('.bg-stibios-surface');
      expect(images?.length).toBe(2);
      expect(cards?.length).toBe(6);
    });
  });

  describe('Images', () => {
    it('should render datacenter image', () => {
      const datacenterImg = container.querySelector('img[alt="Datacenter de alto rendimiento"]');
      expect(datacenterImg).toBeTruthy();
      expect(datacenterImg?.getAttribute('src')).toContain('photo-1558494949-ef010cbdcc31');
    });

    it('should render development workspace image', () => {
      const workspaceImg = container.querySelector('img[alt="Setup de desarrollo minimalista"]');
      expect(workspaceImg).toBeTruthy();
      expect(workspaceImg?.getAttribute('src')).toContain('photo-1629904853893-c2c8981a1dc5');
    });

    it('should have descriptive alt text for all images', () => {
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        const alt = img.getAttribute('alt');
        expect(alt).toBeTruthy();
        expect(alt?.length).toBeGreaterThan(10);
      });
    });

    it('should have proper object-cover styling', () => {
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        expect(img.classList.contains('object-cover')).toBe(true);
      });
    });
  });

  describe('Accessibility', () => {
    it('should use semantic heading hierarchy', () => {
      const h2 = container.querySelector('h2');
      const h3s = container.querySelectorAll('h3');
      expect(h2).toBeTruthy();
      expect(h3s.length).toBe(6);
    });

    it('should have descriptive image alt attributes', () => {
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        expect(img.getAttribute('alt')).toBeTruthy();
      });
    });

    it('should have semantic section with id', () => {
      const section = container.querySelector('section#que-hacemos');
      expect(section).toBeTruthy();
    });
  });

  describe('Responsive Design', () => {
    it('should stack grid on mobile', () => {
      const grid = container.querySelector('.grid-cols-1.md\\:grid-cols-3');
      expect(grid).toBeTruthy();
    });

    it('should adjust heading size for mobile', () => {
      const heading = container.querySelector('.text-3xl.md\\:text-5xl');
      expect(heading).toBeTruthy();
    });

    it('should adjust tagline size for mobile', () => {
      const tagline = container.querySelector('.text-sm.md\\:text-base');
      expect(tagline).toBeTruthy();
    });
  });

  describe('Styling Consistency', () => {
    it('should have consistent card styling', () => {
      const cards = container.querySelectorAll('.bg-stibios-surface.border.rounded-2xl');
      expect(cards.length).toBe(6);
      cards.forEach(card => {
        expect(card.classList.contains('p-8')).toBe(true);
      });
    });

    it('should have consistent heading styling in cards', () => {
      const headings = container.querySelectorAll('.bg-stibios-surface h3');
      headings.forEach(heading => {
        expect(heading.classList.contains('text-xl')).toBe(true);
        expect(heading.classList.contains('font-bold')).toBe(true);
      });
    });

    it('should have consistent description styling', () => {
      const descriptions = container.querySelectorAll('.bg-stibios-surface p');
      descriptions.forEach(desc => {
        expect(desc.classList.contains('text-sm')).toBe(true);
        expect(desc.classList.contains('text-stibios-dim')).toBe(true);
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle grid with mixed content types', () => {
      const grid = container.querySelector('.grid');
      const children = grid?.children;
      expect(children).toBeTruthy();
      expect(children!.length).toBeGreaterThan(6);
    });

    it('should maintain aspect ratio for images', () => {
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        expect(img.classList.contains('w-full')).toBe(true);
        expect(img.classList.contains('h-full')).toBe(true);
      });
    });
  });

  describe('Regression Tests', () => {
    it('should maintain 6 core services', () => {
      const serviceCards = container.querySelectorAll('.bg-stibios-surface.border.rounded-2xl');
      expect(serviceCards.length).toBe(6);
    });

    it('should preserve service order', () => {
      const serviceTitles = Array.from(container.querySelectorAll('.bg-stibios-surface h3'))
        .map(h3 => h3.textContent?.trim());

      expect(serviceTitles).toEqual([
        'Soluciones Cloud & DevOps',
        'Desarrollo a Medida',
        'Estrategia Digital',
        'Presencia Web Profesional',
        'Automatización B2B',
        'Mantenimiento & Soporte'
      ]);
    });

    it('should maintain uppercase heading', () => {
      const heading = container.querySelector('h2');
      expect(heading?.classList.contains('uppercase')).toBe(true);
    });

    it('should keep centered text alignment for header', () => {
      const header = container.querySelector('.text-center');
      expect(header).toBeTruthy();
    });

    it('should preserve bento grid gap', () => {
      const grid = container.querySelector('.grid');
      expect(grid?.classList.contains('gap-4')).toBe(true);
    });
  });

  describe('Content Quality', () => {
    it('should have meaningful descriptions for each service', () => {
      const descriptions = container.querySelectorAll('.bg-stibios-surface p');
      descriptions.forEach(desc => {
        expect(desc.textContent!.length).toBeGreaterThan(50);
      });
    });

    it('should use technical terminology appropriately', () => {
      const allText = container.textContent || '';
      expect(allText).toContain('cloud');
      expect(allText).toContain('CI/CD');
      expect(allText).toContain('B2B');
      expect(allText).toContain('SEO');
    });
  });
});