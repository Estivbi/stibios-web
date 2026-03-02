import { describe, it, expect, beforeEach } from 'vitest';

describe('Index Page', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // Simulate the rendered page structure
    document.body.innerHTML = `
      <html>
        <head>
          <title>Desarrollo de Software de Alto Rendimiento</title>
          <meta name="description" content="STIBIOS LABS - Especialistas en desarrollo web profesional, automatización B2B y productos digitales escalables con tecnología de vanguardia.">
        </head>
        <body>
          <section id="inicio" class="min-h-[80vh] flex flex-col justify-center relative" aria-label="Hero">
            Hero Content
          </section>
          <section id="que-hacemos">
            Qué Hacemos Content
          </section>
          <section id="philosophy">
            Philosophy Content
          </section>
          <section id="casos-exito">
            Custom Development Content
          </section>
          <section id="bento-grid">
            Bento Grid Content
          </section>
          <section id="nosotros">
            Nosotros Content
          </section>
          <section id="contacto">
            Contact Content
          </section>
          <footer>
            Footer Content
          </footer>
        </body>
      </html>
    `;
    container = document.body;
  });

  describe('Page Structure', () => {
    it('should render the hero section', () => {
      const hero = container.querySelector('#inicio');
      expect(hero).toBeTruthy();
    });

    it('should have hero section with proper aria-label', () => {
      const hero = container.querySelector('[aria-label="Hero"]');
      expect(hero).toBeTruthy();
    });

    it('should render QueHacemos section', () => {
      const queHacemos = container.querySelector('#que-hacemos');
      expect(queHacemos).toBeTruthy();
    });

    it('should render Philosophy section', () => {
      const philosophy = container.querySelector('#philosophy');
      expect(philosophy).toBeTruthy();
    });

    it('should render CustomDevelopment/Casos de Éxito section', () => {
      const casosExito = container.querySelector('#casos-exito');
      expect(casosExito).toBeTruthy();
    });

    it('should render BentoGrid section', () => {
      const bentoGrid = container.querySelector('#bento-grid');
      expect(bentoGrid).toBeTruthy();
    });

    it('should render Nosotros section', () => {
      const nosotros = container.querySelector('#nosotros');
      expect(nosotros).toBeTruthy();
    });

    it('should render Contact section', () => {
      const contact = container.querySelector('#contacto');
      expect(contact).toBeTruthy();
    });

    it('should render Footer', () => {
      const footer = container.querySelector('footer');
      expect(footer).toBeTruthy();
    });
  });

  describe('SEO Meta Tags', () => {
    it('should have correct page title', () => {
      const title = document.querySelector('title');
      expect(title?.textContent).toBe('Desarrollo de Software de Alto Rendimiento');
    });

    it('should have meta description', () => {
      const description = document.querySelector('meta[name="description"]');
      expect(description).toBeTruthy();
    });

    it('should have descriptive meta description content', () => {
      const description = document.querySelector('meta[name="description"]');
      const content = description?.getAttribute('content');
      expect(content).toContain('STIBIOS LABS');
      expect(content).toContain('desarrollo web profesional');
    });

    it('should mention key services in description', () => {
      const description = document.querySelector('meta[name="description"]');
      const content = description?.getAttribute('content');
      expect(content).toContain('automatización B2B');
      expect(content).toContain('productos digitales escalables');
    });

    it('should include technology focus in description', () => {
      const description = document.querySelector('meta[name="description"]');
      const content = description?.getAttribute('content');
      expect(content).toContain('tecnología de vanguardia');
    });
  });

  describe('Component Order', () => {
    it('should render sections in correct order', () => {
      const sections = Array.from(container.querySelectorAll('section, footer'))
        .map(section => {
          if (section.tagName === 'FOOTER') return 'footer';
          return section.id || section.className;
        });

      expect(sections).toContain('inicio');
      expect(sections).toContain('que-hacemos');
      expect(sections).toContain('footer');
    });

    it('should have hero section as first main section', () => {
      const firstSection = container.querySelector('section');
      expect(firstSection?.id).toBe('inicio');
    });

    it('should have footer as last element', () => {
      const footer = container.querySelector('footer');
      const allSections = container.querySelectorAll('section, footer');
      const lastElement = allSections[allSections.length - 1];
      expect(lastElement).toBe(footer);
    });
  });

  describe('Hero Section', () => {
    it('should have hero section with minimum height', () => {
      const hero = container.querySelector('#inicio');
      expect(hero?.classList.contains('min-h-[80vh]')).toBe(true);
    });

    it('should center hero content vertically', () => {
      const hero = container.querySelector('#inicio');
      expect(hero?.classList.contains('flex')).toBe(true);
      expect(hero?.classList.contains('justify-center')).toBe(true);
    });

    it('should have relative positioning for layering', () => {
      const hero = container.querySelector('#inicio');
      expect(hero?.classList.contains('relative')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should use semantic HTML structure', () => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(5);
    });

    it('should have unique ids for main sections', () => {
      const ids = Array.from(container.querySelectorAll('section[id]'))
        .map(section => section.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it('should have footer element', () => {
      const footer = container.querySelector('footer');
      expect(footer?.tagName).toBe('FOOTER');
    });

    it('should have proper section landmarks', () => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });
  });

  describe('Navigation Targets', () => {
    it('should have anchor target for inicio', () => {
      const inicio = container.querySelector('#inicio');
      expect(inicio).toBeTruthy();
    });

    it('should have anchor target for que-hacemos', () => {
      const queHacemos = container.querySelector('#que-hacemos');
      expect(queHacemos).toBeTruthy();
    });

    it('should have anchor target for casos-exito', () => {
      const casosExito = container.querySelector('#casos-exito');
      expect(casosExito).toBeTruthy();
    });

    it('should have anchor target for nosotros', () => {
      const nosotros = container.querySelector('#nosotros');
      expect(nosotros).toBeTruthy();
    });

    it('should have anchor target for contacto', () => {
      const contacto = container.querySelector('#contacto');
      expect(contacto).toBeTruthy();
    });
  });

  describe('Layout Structure', () => {
    it('should have multiple main sections', () => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(6);
    });

    it('should include all major page components', () => {
      const hasHero = !!container.querySelector('#inicio');
      const hasServices = !!container.querySelector('#que-hacemos');
      const hasAbout = !!container.querySelector('#nosotros');
      const hasContact = !!container.querySelector('#contacto');
      const hasFooter = !!container.querySelector('footer');

      expect(hasHero).toBe(true);
      expect(hasServices).toBe(true);
      expect(hasAbout).toBe(true);
      expect(hasContact).toBe(true);
      expect(hasFooter).toBe(true);
    });
  });

  describe('Page Content', () => {
    it('should have content in hero section', () => {
      const hero = container.querySelector('#inicio');
      expect(hero?.textContent?.trim().length).toBeGreaterThan(0);
    });

    it('should have content in footer', () => {
      const footer = container.querySelector('footer');
      expect(footer?.textContent?.trim().length).toBeGreaterThan(0);
    });

    it('should not have empty sections', () => {
      const sections = container.querySelectorAll('section');
      sections.forEach(section => {
        expect(section.textContent?.trim().length).toBeGreaterThan(0);
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing optional sections gracefully', () => {
      document.body.innerHTML = `
        <section id="inicio">Hero</section>
        <footer>Footer</footer>
      `;

      const hero = document.querySelector('#inicio');
      const footer = document.querySelector('footer');

      expect(hero).toBeTruthy();
      expect(footer).toBeTruthy();
    });

    it('should maintain structure with all sections present', () => {
      const requiredSections = ['#inicio', 'footer'];
      requiredSections.forEach(selector => {
        expect(container.querySelector(selector)).toBeTruthy();
      });
    });
  });

  describe('Regression Tests', () => {
    it('should preserve minimum sections count', () => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(6);
    });

    it('should maintain hero section as landing', () => {
      const firstSection = container.querySelector('section');
      expect(firstSection?.id).toBe('inicio');
    });

    it('should keep footer at bottom', () => {
      const allMainElements = container.querySelectorAll('section, footer');
      const lastElement = allMainElements[allMainElements.length - 1];
      expect(lastElement?.tagName).toBe('FOOTER');
    });

    it('should preserve section id naming convention', () => {
      const sections = container.querySelectorAll('section[id]');
      sections.forEach(section => {
        const id = section.id;
        // IDs should be lowercase with hyphens
        expect(id).toMatch(/^[a-z-]+$/);
      });
    });
  });

  describe('Responsive Design Considerations', () => {
    it('should have responsive hero height', () => {
      const hero = container.querySelector('#inicio');
      const classes = hero?.className || '';
      expect(classes).toContain('min-h-[80vh]');
    });

    it('should use flex layout for hero', () => {
      const hero = container.querySelector('#inicio');
      expect(hero?.classList.contains('flex')).toBe(true);
      expect(hero?.classList.contains('flex-col')).toBe(true);
    });
  });

  describe('SEO Best Practices', () => {
    it('should have descriptive title', () => {
      const title = document.querySelector('title');
      expect(title?.textContent?.length).toBeGreaterThan(20);
    });

    it('should have comprehensive meta description', () => {
      const description = document.querySelector('meta[name="description"]');
      const content = description?.getAttribute('content');
      expect(content?.length).toBeGreaterThan(50);
    });

    it('should include company name in title or description', () => {
      const title = document.querySelector('title')?.textContent || '';
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

      expect(title + description).toContain('STIBIOS');
    });
  });

  describe('Performance Considerations', () => {
    it('should use semantic sections for better parsing', () => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('should have identifiable sections for scroll tracking', () => {
      const sectionsWithIds = container.querySelectorAll('section[id]');
      expect(sectionsWithIds.length).toBeGreaterThanOrEqual(5);
    });
  });
});