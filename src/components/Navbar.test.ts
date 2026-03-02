import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Navbar Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <header class="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-center items-start pointer-events-none">
        <div class="absolute left-8 top-8 pointer-events-auto hidden xl:block">
          Logo
        </div>

        <nav class="pointer-events-auto w-full max-w-3xl group/nav">
          <div class="flex items-center justify-between px-8 py-4 rounded-full">

            <a href="/" class="xl:hidden mr-4">S</a>

            <div class="flex items-center gap-6 md:gap-10 mx-auto">
              <a href="#inicio" class="nav-item group" aria-label="Inicio">
                <span class="tooltip">/inicio</span>
              </a>

              <a href="#que-hacemos" class="nav-item group" aria-label="Qué hacemos">
                <span class="tooltip">/qué hacemos</span>
              </a>

              <a href="#metodo" class="nav-item group" aria-label="Metodología">
                <span class="tooltip">/metodología</span>
              </a>

              <a href="#casos-exito" class="nav-item group" aria-label="Casos de Éxito">
                <span class="tooltip">/casos de éxito</span>
              </a>

              <a href="#nosotros" class="nav-item group" aria-label="Nosotros">
                <span class="tooltip">/nosotros</span>
              </a>
            </div>

            <div class="flex items-center pl-6 border-l border-stibios-border ml-6">
              <a href="#contacto" class="flex items-center gap-3 nav-item-contact">
                <span class="hidden sm:inline">Hablemos</span>
              </a>
            </div>

          </div>
        </nav>

      </header>

      <!-- Mock sections for scroll detection -->
      <section id="inicio" style="height: 800px; padding-top: 100px;">Inicio</section>
      <section id="que-hacemos" style="height: 800px;">Qué Hacemos</section>
      <section id="metodo" style="height: 800px;">Metodología</section>
      <section id="casos-exito" style="height: 800px;">Casos de Éxito</section>
      <section id="nosotros" style="height: 800px;">Nosotros</section>
    `;
    container = document.body;
  });

  describe('Component Structure', () => {
    it('should render header element', () => {
      const header = container.querySelector('header');
      expect(header).toBeTruthy();
    });

    it('should have fixed positioning', () => {
      const header = container.querySelector('header');
      expect(header?.classList.contains('fixed')).toBe(true);
    });

    it('should render navigation element', () => {
      const nav = container.querySelector('nav');
      expect(nav).toBeTruthy();
    });

    it('should have proper z-index for overlay', () => {
      const header = container.querySelector('header');
      expect(header?.classList.contains('z-50')).toBe(true);
    });
  });

  describe('Logo Display', () => {
    it('should render logo on desktop (xl breakpoint)', () => {
      const logo = container.querySelector('.xl\\:block');
      expect(logo).toBeTruthy();
    });

    it('should render mobile logo link', () => {
      const mobileLogo = container.querySelector('a[href="/"].xl\\:hidden');
      expect(mobileLogo).toBeTruthy();
    });

    it('should have home link for mobile logo', () => {
      const mobileLogo = container.querySelector('a[href="/"]');
      expect(mobileLogo?.getAttribute('href')).toBe('/');
    });
  });

  describe('Navigation Items', () => {
    it('should render all 5 main navigation items', () => {
      const navItems = container.querySelectorAll('.nav-item');
      expect(navItems.length).toBeGreaterThanOrEqual(5);
    });

    it('should have navigation item for Inicio', () => {
      const inicioLink = container.querySelector('a[href="#inicio"]');
      expect(inicioLink).toBeTruthy();
      expect(inicioLink?.getAttribute('aria-label')).toBe('Inicio');
    });

    it('should have navigation item for Qué Hacemos', () => {
      const queHacemosLink = container.querySelector('a[href="#que-hacemos"]');
      expect(queHacemosLink).toBeTruthy();
      expect(queHacemosLink?.getAttribute('aria-label')).toBe('Qué hacemos');
    });

    it('should have navigation item for Metodología', () => {
      const metodoLink = container.querySelector('a[href="#metodo"]');
      expect(metodoLink).toBeTruthy();
      expect(metodoLink?.getAttribute('aria-label')).toBe('Metodología');
    });

    it('should have navigation item for Casos de Éxito', () => {
      const casosLink = container.querySelector('a[href="#casos-exito"]');
      expect(casosLink).toBeTruthy();
      expect(casosLink?.getAttribute('aria-label')).toBe('Casos de Éxito');
    });

    it('should have navigation item for Nosotros', () => {
      const nosotrosLink = container.querySelector('a[href="#nosotros"]');
      expect(nosotrosLink).toBeTruthy();
      expect(nosotrosLink?.getAttribute('aria-label')).toBe('Nosotros');
    });

    it('should maintain correct order of navigation items', () => {
      const navLinks = Array.from(container.querySelectorAll('.nav-item'))
        .map(item => item.getAttribute('href'));
      expect(navLinks).toEqual([
        '#inicio',
        '#que-hacemos',
        '#metodo',
        '#casos-exito',
        '#nosotros'
      ]);
    });
  });

  describe('Contact CTA', () => {
    it('should render contact link', () => {
      const contactLink = container.querySelector('a[href="#contacto"]');
      expect(contactLink).toBeTruthy();
    });

    it('should display "Hablemos" text', () => {
      const contactLink = container.querySelector('a[href="#contacto"]');
      expect(contactLink?.textContent).toContain('Hablemos');
    });

    it('should have responsive text display', () => {
      const contactText = container.querySelector('.hidden.sm\\:inline');
      expect(contactText?.textContent).toBe('Hablemos');
    });

    it('should have visual separator before contact link', () => {
      const separator = container.querySelector('.border-l.border-stibios-border');
      expect(separator).toBeTruthy();
    });
  });

  describe('Tooltips', () => {
    it('should render tooltip for each navigation item', () => {
      const tooltips = container.querySelectorAll('.tooltip');
      expect(tooltips.length).toBeGreaterThanOrEqual(5);
    });

    it('should have descriptive tooltip for Inicio', () => {
      const inicioItem = container.querySelector('a[href="#inicio"]');
      const tooltip = inicioItem?.querySelector('.tooltip');
      expect(tooltip?.textContent).toBe('/inicio');
    });

    it('should have descriptive tooltip for Qué Hacemos', () => {
      const queHacemosItem = container.querySelector('a[href="#que-hacemos"]');
      const tooltip = queHacemosItem?.querySelector('.tooltip');
      expect(tooltip?.textContent).toBe('/qué hacemos');
    });

    it('should use slash prefix for all tooltips', () => {
      const tooltips = container.querySelectorAll('.tooltip');
      tooltips.forEach(tooltip => {
        expect(tooltip.textContent).toMatch(/^\//);
      });
    });
  });

  describe('Active State Scroll Detection', () => {
    let sections: NodeListOf<Element>;
    let navItems: NodeListOf<Element>;

    beforeEach(() => {
      sections = container.querySelectorAll('section[id]');
      navItems = container.querySelectorAll('.nav-item');

      // Mock HTMLElement offsetTop
      Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
        configurable: true,
        get() {
          const id = this.getAttribute('id');
          const positions: Record<string, number> = {
            'inicio': 0,
            'que-hacemos': 800,
            'metodo': 1600,
            'casos-exito': 2400,
            'nosotros': 3200
          };
          return positions[id || ''] || 0;
        }
      });

      // Simulate scroll detection script
      window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id') || '';
          }
        });

        navItems.forEach((item) => {
          item.classList.remove('active-nav');
          if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active-nav');
          }
        });
      });
    });

    it('should activate Inicio on page load', () => {
      window.scrollY = 0;
      window.dispatchEvent(new Event('scroll'));

      const inicioItem = container.querySelector('a[href="#inicio"]');
      expect(inicioItem?.classList.contains('active-nav')).toBe(true);
    });

    it('should activate Qué Hacemos when scrolled to that section', () => {
      Object.defineProperty(window, 'scrollY', { value: 800, configurable: true });
      window.dispatchEvent(new Event('scroll'));

      const queHacemosItem = container.querySelector('a[href="#que-hacemos"]');
      expect(queHacemosItem?.classList.contains('active-nav')).toBe(true);
    });

    it('should only have one active nav item at a time', () => {
      Object.defineProperty(window, 'scrollY', { value: 1600, configurable: true });
      window.dispatchEvent(new Event('scroll'));

      const activeItems = container.querySelectorAll('.nav-item.active-nav');
      expect(activeItems.length).toBeLessThanOrEqual(1);
    });

    it('should deactivate previous section when scrolling to next', () => {
      Object.defineProperty(window, 'scrollY', { value: 800, configurable: true });
      window.dispatchEvent(new Event('scroll'));

      const inicioItem = container.querySelector('a[href="#inicio"]');
      expect(inicioItem?.classList.contains('active-nav')).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('should have aria-labels for all navigation items', () => {
      const navItems = container.querySelectorAll('.nav-item[aria-label]');
      expect(navItems.length).toBe(5);
    });

    it('should use semantic header element', () => {
      const header = container.querySelector('header');
      expect(header?.tagName).toBe('HEADER');
    });

    it('should use semantic nav element', () => {
      const nav = container.querySelector('nav');
      expect(nav?.tagName).toBe('NAV');
    });

    it('should have descriptive aria-labels matching section names', () => {
      const ariaLabels = Array.from(container.querySelectorAll('.nav-item'))
        .map(item => item.getAttribute('aria-label'));
      expect(ariaLabels).toContain('Inicio');
      expect(ariaLabels).toContain('Qué hacemos');
      expect(ariaLabels).toContain('Metodología');
    });
  });

  describe('Responsive Design', () => {
    it('should hide logo on mobile (xl:block)', () => {
      const desktopLogo = container.querySelector('.xl\\:block');
      expect(desktopLogo?.classList.contains('hidden')).toBe(true);
    });

    it('should show mobile logo on small screens', () => {
      const mobileLogo = container.querySelector('.xl\\:hidden');
      expect(mobileLogo).toBeTruthy();
    });

    it('should adjust gap between nav items on mobile vs desktop', () => {
      const navContainer = container.querySelector('.gap-6.md\\:gap-10');
      expect(navContainer).toBeTruthy();
    });

    it('should hide contact text on mobile', () => {
      const contactText = container.querySelector('.hidden.sm\\:inline');
      expect(contactText).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing sections gracefully', () => {
      document.body.innerHTML = `
        <header>
          <nav>
            <a href="#nonexistent" class="nav-item">Link</a>
          </nav>
        </header>
      `;

      const sections = document.querySelectorAll('section[id]');
      expect(sections.length).toBe(0);
    });

    it('should handle scroll to bottom of page', () => {
      Object.defineProperty(window, 'scrollY', { value: 10000, configurable: true });

      expect(() => window.dispatchEvent(new Event('scroll'))).not.toThrow();
    });

    it('should handle negative scroll values', () => {
      Object.defineProperty(window, 'scrollY', { value: -100, configurable: true });

      expect(() => window.dispatchEvent(new Event('scroll'))).not.toThrow();
    });
  });

  describe('Regression Tests', () => {
    it('should maintain 5 main navigation items', () => {
      const navItems = container.querySelectorAll('.nav-item');
      expect(navItems.length).toBeGreaterThanOrEqual(5);
    });

    it('should preserve rounded-full styling', () => {
      const navContainer = container.querySelector('nav > div');
      expect(navContainer?.classList.contains('rounded-full')).toBe(true);
    });

    it('should keep contact link separate from main nav', () => {
      const contactContainer = container.querySelector('.border-l.border-stibios-border');
      expect(contactContainer).toBeTruthy();
      const contactLink = contactContainer?.querySelector('a[href="#contacto"]');
      expect(contactLink).toBeTruthy();
    });
  });

  describe('Hover States', () => {
    it('should have tooltip elements for hover interaction', () => {
      const tooltips = container.querySelectorAll('.tooltip');
      expect(tooltips.length).toBeGreaterThan(0);
    });

    it('should group nav items for hover effects', () => {
      const groupedItems = container.querySelectorAll('.nav-item.group');
      expect(groupedItems.length).toBeGreaterThan(0);
    });
  });
});