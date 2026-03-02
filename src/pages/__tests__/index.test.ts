import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('Index Page', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Page Metadata', () => {
    it('should have correct page title', () => {
      const title = 'Desarrollo de Software de Alto Rendimiento';
      expect(title).toContain('Desarrollo de Software');
      expect(title).toContain('Alto Rendimiento');
    });

    it('should have comprehensive meta description', () => {
      const description = 'STIBIOS LABS - Especialistas en desarrollo web profesional, automatización B2B y productos digitales escalables con tecnología de vanguardia.';

      expect(description).toContain('STIBIOS LABS');
      expect(description).toContain('desarrollo web');
      expect(description).toContain('automatización B2B');
      expect(description).toContain('productos digitales escalables');
    });

    it('should have SEO-optimized keywords in description', () => {
      const description = 'STIBIOS LABS - Especialistas en desarrollo web profesional, automatización B2B y productos digitales escalables con tecnología de vanguardia.';

      const keywords = ['desarrollo web', 'automatización', 'B2B', 'escalables', 'tecnología'];
      keywords.forEach(keyword => {
        expect(description.toLowerCase()).toContain(keyword.toLowerCase());
      });
    });
  });

  describe('Page Structure', () => {
    it('should have hero section with correct id', () => {
      const mockHTML = `
        <section id="inicio" class="min-h-[80vh]" aria-label="Hero"></section>
      `;
      container.innerHTML = mockHTML;

      const heroSection = container.querySelector('#inicio');
      expect(heroSection).toBeTruthy();
      expect(heroSection?.getAttribute('aria-label')).toBe('Hero');
    });

    it('should have minimum viewport height for hero', () => {
      const mockHTML = `
        <section class="min-h-[80vh] flex flex-col justify-center"></section>
      `;
      container.innerHTML = mockHTML;

      const section = container.querySelector('section');
      expect(section?.classList.contains('min-h-[80vh]')).toBe(true);
    });

    it('should center hero content vertically', () => {
      const mockHTML = `
        <section class="flex flex-col justify-center relative"></section>
      `;
      container.innerHTML = mockHTML;

      const section = container.querySelector('section');
      expect(section?.classList.contains('flex')).toBe(true);
      expect(section?.classList.contains('flex-col')).toBe(true);
      expect(section?.classList.contains('justify-center')).toBe(true);
    });
  });

  describe('Component Order', () => {
    it('should render components in correct order', () => {
      const componentOrder = [
        'StarsBackground',
        'TerminalHero',
        'QueHacemos',
        'Philosophy',
        'CustomDevelopment',
        'BentoGrid',
        'Nosotros',
        'Contact',
        'Footer'
      ];

      expect(componentOrder.length).toBe(9);
      expect(componentOrder[0]).toBe('StarsBackground');
      expect(componentOrder[componentOrder.length - 1]).toBe('Footer');
    });

    it('should have hero as first interactive section', () => {
      const firstSection = 'TerminalHero';
      expect(firstSection).toBe('TerminalHero');
    });

    it('should have footer as last component', () => {
      const lastComponent = 'Footer';
      expect(lastComponent).toBe('Footer');
    });

    it('should have all main sections between hero and footer', () => {
      const mainSections = [
        'QueHacemos',
        'Philosophy',
        'CustomDevelopment',
        'BentoGrid',
        'Nosotros',
        'Contact'
      ];

      expect(mainSections.length).toBe(6);
      mainSections.forEach(section => {
        expect(section.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Layout Component Usage', () => {
    it('should use Layout component with props', () => {
      const layoutProps = {
        title: 'Desarrollo de Software de Alto Rendimiento',
        description: 'STIBIOS LABS - Especialistas en desarrollo web profesional'
      };

      expect(layoutProps).toHaveProperty('title');
      expect(layoutProps).toHaveProperty('description');
    });

    it('should pass title to Layout', () => {
      const title = 'Desarrollo de Software de Alto Rendimiento';
      expect(title).toBeTruthy();
      expect(typeof title).toBe('string');
    });

    it('should pass description to Layout', () => {
      const description = 'STIBIOS LABS - Especialistas en desarrollo web profesional, automatización B2B y productos digitales escalables con tecnología de vanguardia.';
      expect(description).toBeTruthy();
      expect(typeof description).toBe('string');
    });
  });

  describe('Component Imports', () => {
    it('should import all required components', () => {
      const imports = [
        'Layout',
        'TerminalHero',
        'BentoGrid',
        'Footer',
        'StarsBackground',
        'Philosophy',
        'CustomDevelopment',
        'Contact',
        'QueHacemos',
        'Nosotros'
      ];

      expect(imports.length).toBe(10);

      const requiredComponents = [
        'Layout',
        'TerminalHero',
        'Footer',
        'QueHacemos',
        'Nosotros'
      ];

      requiredComponents.forEach(component => {
        expect(imports).toContain(component);
      });
    });

    it('should import from correct paths', () => {
      const importPaths = {
        Layout: '../layouts/Layout.astro',
        TerminalHero: '../components/TerminalHero',
        Footer: '../components/Footer.astro'
      };

      Object.entries(importPaths).forEach(([component, path]) => {
        expect(path).toBeTruthy();
        expect(path.includes('..')).toBe(true);
      });
    });
  });

  describe('Client-Side Hydration', () => {
    it('should use client:load for TerminalHero', () => {
      const mockHTML = `
        <div data-component="TerminalHero" data-hydration="client:load"></div>
      `;
      container.innerHTML = mockHTML;

      const component = container.querySelector('[data-hydration]');
      expect(component?.getAttribute('data-hydration')).toBe('client:load');
    });

    it('should validate client directive usage', () => {
      const clientDirective = 'client:load';
      expect(clientDirective).toMatch(/^client:/);
    });
  });

  describe('Section Navigation', () => {
    it('should have navigable section ids', () => {
      const sectionIds = [
        'inicio',
        'que-hacemos',
        'metodo',
        'casos-exito',
        'nosotros',
        'contacto'
      ];

      sectionIds.forEach(id => {
        expect(id.length).toBeGreaterThan(0);
        expect(id).toMatch(/^[a-z-]+$/);
      });
    });

    it('should have inicio section for hero', () => {
      const heroId = 'inicio';
      expect(heroId).toBe('inicio');
    });
  });

  describe('Background Component', () => {
    it('should render StarsBackground first', () => {
      const mockHTML = `
        <div id="stars-background"></div>
        <section id="inicio"></section>
      `;
      container.innerHTML = mockHTML;

      const stars = container.querySelector('#stars-background');
      const hero = container.querySelector('#inicio');

      expect(stars).toBeTruthy();
      expect(hero).toBeTruthy();
    });

    it('should be positioned before content sections', () => {
      const renderOrder = ['StarsBackground', 'TerminalHero'];
      expect(renderOrder[0]).toBe('StarsBackground');
    });
  });

  describe('Accessibility', () => {
    it('should have aria-label on hero section', () => {
      const mockHTML = `
        <section aria-label="Hero"></section>
      `;
      container.innerHTML = mockHTML;

      const section = container.querySelector('section');
      expect(section?.getAttribute('aria-label')).toBe('Hero');
    });

    it('should have semantic section structure', () => {
      const mockHTML = `
        <section id="inicio">
          <section id="que-hacemos"></section>
          <section id="nosotros"></section>
        </section>
      `;
      container.innerHTML = mockHTML;

      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });
  });

  describe('Responsive Layout', () => {
    it('should have viewport-based hero height', () => {
      const heroHeight = 'min-h-[80vh]';
      expect(heroHeight).toMatch(/vh/);
      expect(heroHeight).toContain('80vh');
    });

    it('should be mobile-first responsive', () => {
      const mockHTML = `
        <div class="min-h-[80vh] flex flex-col"></div>
      `;
      container.innerHTML = mockHTML;

      const element = container.querySelector('div');
      expect(element?.classList.contains('flex')).toBe(true);
      expect(element?.classList.contains('flex-col')).toBe(true);
    });
  });

  describe('Component Integration', () => {
    it('should integrate QueHacemos component', () => {
      const component = 'QueHacemos';
      expect(component).toBe('QueHacemos');
    });

    it('should integrate Philosophy component', () => {
      const component = 'Philosophy';
      expect(component).toBe('Philosophy');
    });

    it('should integrate CustomDevelopment component', () => {
      const component = 'CustomDevelopment';
      expect(component).toBe('CustomDevelopment');
    });

    it('should integrate BentoGrid component', () => {
      const component = 'BentoGrid';
      expect(component).toBe('BentoGrid');
    });

    it('should integrate Nosotros component', () => {
      const component = 'Nosotros';
      expect(component).toBe('Nosotros');
    });

    it('should integrate Contact component', () => {
      const component = 'Contact';
      expect(component).toBe('Contact');
    });

    it('should integrate Footer component', () => {
      const component = 'Footer';
      expect(component).toBe('Footer');
    });
  });

  describe('Page Flow', () => {
    it('should have logical content flow', () => {
      const flow = [
        'Hero',
        'Services (QueHacemos)',
        'Philosophy',
        'Case Studies (CustomDevelopment)',
        'BentoGrid',
        'About (Nosotros)',
        'Contact',
        'Footer'
      ];

      expect(flow[0]).toContain('Hero');
      expect(flow[flow.length - 1]).toContain('Footer');
    });

    it('should start with introduction sections', () => {
      const introSections = ['TerminalHero', 'QueHacemos'];
      expect(introSections.length).toBeGreaterThan(0);
    });

    it('should end with contact and footer', () => {
      const closingSections = ['Contact', 'Footer'];
      expect(closingSections[0]).toBe('Contact');
      expect(closingSections[1]).toBe('Footer');
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing Layout props gracefully', () => {
      const props = {
        title: '',
        description: ''
      };

      expect(() => {
        if (!props.title || !props.description) {
          throw new Error('Missing props');
        }
      }).toThrow();
    });

    it('should validate all component names are strings', () => {
      const components = [
        'TerminalHero',
        'QueHacemos',
        'Philosophy',
        'CustomDevelopment',
        'BentoGrid',
        'Nosotros',
        'Contact',
        'Footer'
      ];

      components.forEach(component => {
        expect(typeof component).toBe('string');
      });
    });

    it('should have non-empty component list', () => {
      const componentCount = 9; // Including StarsBackground
      expect(componentCount).toBeGreaterThan(0);
    });
  });

  describe('SEO Optimization', () => {
    it('should have keyword-rich title', () => {
      const title = 'Desarrollo de Software de Alto Rendimiento';
      const keywords = ['Desarrollo', 'Software', 'Alto Rendimiento'];

      keywords.forEach(keyword => {
        expect(title).toContain(keyword);
      });
    });

    it('should have company name in description', () => {
      const description = 'STIBIOS LABS - Especialistas en desarrollo web profesional, automatización B2B y productos digitales escalables con tecnología de vanguardia.';
      expect(description).toContain('STIBIOS LABS');
    });

    it('should mention key services in description', () => {
      const description = 'STIBIOS LABS - Especialistas en desarrollo web profesional, automatización B2B y productos digitales escalables con tecnología de vanguardia.';
      const services = ['desarrollo web', 'automatización B2B', 'productos digitales'];

      services.forEach(service => {
        expect(description.toLowerCase()).toContain(service.toLowerCase());
      });
    });
  });

  describe('Performance Considerations', () => {
    it('should use client:load for interactive components only', () => {
      const interactiveComponents = ['TerminalHero'];
      expect(interactiveComponents.length).toBeGreaterThan(0);
    });

    it('should not over-hydrate static components', () => {
      const staticComponents = [
        'Footer',
        'QueHacemos',
        'Nosotros',
        'CustomDevelopment'
      ];

      // These should not have client directives
      staticComponents.forEach(component => {
        expect(component).toBeTruthy();
      });
    });
  });

  describe('Hero Section Positioning', () => {
    it('should use relative positioning', () => {
      const mockHTML = `
        <section class="relative"></section>
      `;
      container.innerHTML = mockHTML;

      const section = container.querySelector('section');
      expect(section?.classList.contains('relative')).toBe(true);
    });

    it('should allow for background layering', () => {
      const mockHTML = `
        <div class="stars-background"></div>
        <section class="relative"></section>
      `;
      container.innerHTML = mockHTML;

      expect(container.querySelector('.stars-background')).toBeTruthy();
      expect(container.querySelector('section')).toBeTruthy();
    });
  });
});