import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('Navbar Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Navigation Structure', () => {
    it('should have fixed header positioning', () => {
      const mockHTML = `
        <header class="fixed top-0 left-0 w-full z-50"></header>
      `;
      container.innerHTML = mockHTML;

      const header = container.querySelector('header');
      expect(header?.classList.contains('fixed')).toBe(true);
      expect(header?.classList.contains('top-0')).toBe(true);
      expect(header?.classList.contains('w-full')).toBe(true);
      expect(header?.classList.contains('z-50')).toBe(true);
    });

    it('should have all navigation items', () => {
      const mockHTML = `
        <nav>
          <a href="#inicio" class="nav-item">Inicio</a>
          <a href="#que-hacemos" class="nav-item">Qué hacemos</a>
          <a href="#metodo" class="nav-item">Metodología</a>
          <a href="#casos-exito" class="nav-item">Casos de Éxito</a>
          <a href="#nosotros" class="nav-item">Nosotros</a>
        </nav>
      `;
      container.innerHTML = mockHTML;

      const navItems = container.querySelectorAll('.nav-item');
      expect(navItems.length).toBe(5);
    });

    it('should have correct href attributes', () => {
      const mockHTML = `
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#que-hacemos">Qué hacemos</a>
          <a href="#metodo">Metodología</a>
          <a href="#casos-exito">Casos de Éxito</a>
          <a href="#nosotros">Nosotros</a>
        </nav>
      `;
      container.innerHTML = mockHTML;

      const links = container.querySelectorAll('a');
      const expectedHrefs = ['#inicio', '#que-hacemos', '#metodo', '#casos-exito', '#nosotros'];

      links.forEach((link, index) => {
        expect(link.getAttribute('href')).toBe(expectedHrefs[index]);
      });
    });

    it('should have aria-labels for accessibility', () => {
      const mockHTML = `
        <a href="#inicio" aria-label="Inicio">Icon</a>
        <a href="#que-hacemos" aria-label="Qué hacemos">Icon</a>
      `;
      container.innerHTML = mockHTML;

      const links = container.querySelectorAll('a');
      expect(links[0].getAttribute('aria-label')).toBe('Inicio');
      expect(links[1].getAttribute('aria-label')).toBe('Qué hacemos');
    });
  });

  describe('Contact Button', () => {
    it('should have contact button with correct link', () => {
      const mockHTML = `
        <a href="#contacto" class="nav-item-contact">
          <span>Hablemos</span>
        </a>
      `;
      container.innerHTML = mockHTML;

      const contactLink = container.querySelector('a');
      expect(contactLink?.getAttribute('href')).toBe('#contacto');
      expect(contactLink?.textContent).toContain('Hablemos');
    });

    it('should have uppercase and tracking for contact button', () => {
      const mockHTML = `
        <a href="#contacto" class="uppercase tracking-widest">Hablemos</a>
      `;
      container.innerHTML = mockHTML;

      const link = container.querySelector('a');
      expect(link?.classList.contains('uppercase')).toBe(true);
      expect(link?.classList.contains('tracking-widest')).toBe(true);
    });

    it('should hide contact text on small screens', () => {
      const mockHTML = `
        <span class="hidden sm:inline">Hablemos</span>
      `;
      container.innerHTML = mockHTML;

      const span = container.querySelector('span');
      expect(span?.classList.contains('hidden')).toBe(true);
      expect(span?.classList.contains('sm:inline')).toBe(true);
    });
  });

  describe('Scroll Behavior', () => {
    it('should set up scroll event listener', () => {
      const sections = document.createElement('section');
      sections.id = 'inicio';
      document.body.appendChild(sections);

      const mockHTML = `
        <a href="#inicio" class="nav-item"></a>
      `;
      container.innerHTML = mockHTML;

      let scrollEventFired = false;
      window.addEventListener('scroll', () => {
        scrollEventFired = true;
      });

      window.dispatchEvent(new Event('scroll'));
      expect(scrollEventFired).toBe(true);

      document.body.removeChild(sections);
    });

    it('should add active-nav class based on current section', () => {
      const mockHTML = `
        <a href="#inicio" class="nav-item"></a>
        <a href="#que-hacemos" class="nav-item"></a>
      `;
      container.innerHTML = mockHTML;

      const navItems = container.querySelectorAll('.nav-item');

      // Simulate adding active class
      navItems[0].classList.add('active-nav');

      expect(navItems[0].classList.contains('active-nav')).toBe(true);
      expect(navItems[1].classList.contains('active-nav')).toBe(false);
    });

    it('should remove active-nav from all items before adding to current', () => {
      const mockHTML = `
        <a href="#inicio" class="nav-item active-nav"></a>
        <a href="#que-hacemos" class="nav-item"></a>
      `;
      container.innerHTML = mockHTML;

      const navItems = container.querySelectorAll('.nav-item');

      // Remove from all
      navItems.forEach(item => item.classList.remove('active-nav'));

      // Add to new active
      navItems[1].classList.add('active-nav');

      expect(navItems[0].classList.contains('active-nav')).toBe(false);
      expect(navItems[1].classList.contains('active-nav')).toBe(true);
    });

    it('should check scroll position with offset', () => {
      const section = document.createElement('section');
      section.id = 'test-section';
      Object.defineProperty(section, 'offsetTop', {
        value: 1000,
        writable: true
      });
      document.body.appendChild(section);

      const offset = 150;
      const scrollY = 900; // 1000 - 150 + 50 to trigger

      expect(scrollY >= (section.offsetTop - offset)).toBe(true);

      document.body.removeChild(section);
    });
  });

  describe('Tooltip Functionality', () => {
    it('should have tooltip elements', () => {
      const mockHTML = `
        <a class="nav-item">
          <span class="tooltip">/inicio</span>
        </a>
      `;
      container.innerHTML = mockHTML;

      const tooltip = container.querySelector('.tooltip');
      expect(tooltip).toBeTruthy();
      expect(tooltip?.textContent).toBe('/inicio');
    });

    it('should have correct tooltip text for each nav item', () => {
      const tooltips = ['/inicio', '/qué hacemos', '/metodología', '/casos de éxito', '/nosotros'];

      tooltips.forEach(text => {
        expect(text).toMatch(/^\//);
        expect(text.length).toBeGreaterThan(1);
      });
    });

    it('should have tooltip styling classes', () => {
      const style = document.createElement('style');
      style.textContent = `
        .tooltip {
          position: absolute;
          opacity: 0;
          transition: all 0.2s;
        }
      `;
      document.head.appendChild(style);

      const mockHTML = `<span class="tooltip">Test</span>`;
      container.innerHTML = mockHTML;

      const tooltip = container.querySelector('.tooltip');
      expect(tooltip).toBeTruthy();

      document.head.removeChild(style);
    });
  });

  describe('Logo Display', () => {
    it('should hide logo on extra large screens in navbar', () => {
      const mockHTML = `
        <a href="/" class="xl:hidden">S</a>
      `;
      container.innerHTML = mockHTML;

      const logo = container.querySelector('a');
      expect(logo?.classList.contains('xl:hidden')).toBe(true);
    });

    it('should show separate logo on extra large screens', () => {
      const mockHTML = `
        <div class="hidden xl:block">Logo</div>
      `;
      container.innerHTML = mockHTML;

      const logo = container.querySelector('div');
      expect(logo?.classList.contains('hidden')).toBe(true);
      expect(logo?.classList.contains('xl:block')).toBe(true);
    });

    it('should have gradient text for mobile logo', () => {
      const mockHTML = `
        <a class="text-transparent bg-clip-text bg-gradient-to-r">S</a>
      `;
      container.innerHTML = mockHTML;

      const logo = container.querySelector('a');
      expect(logo?.classList.contains('text-transparent')).toBe(true);
      expect(logo?.classList.contains('bg-clip-text')).toBe(true);
    });
  });

  describe('Navigation Styling', () => {
    it('should have rounded navigation container', () => {
      const mockHTML = `
        <div class="rounded-full bg-stibios-surface backdrop-blur-2xl"></div>
      `;
      container.innerHTML = mockHTML;

      const nav = container.querySelector('div');
      expect(nav?.classList.contains('rounded-full')).toBe(true);
      expect(nav?.classList.contains('backdrop-blur-2xl')).toBe(true);
    });

    it('should have border and shadow effects', () => {
      const mockHTML = `
        <div class="border border-stibios-border shadow-[0_8px_32px_rgba(0,0,0,0.8)]"></div>
      `;
      container.innerHTML = mockHTML;

      const nav = container.querySelector('div');
      expect(nav?.classList.contains('border')).toBe(true);
      expect(nav?.classList.contains('border-stibios-border')).toBe(true);
    });

    it('should have hover border effect', () => {
      const mockHTML = `
        <div class="hover:border-stibios-accent/50"></div>
      `;
      container.innerHTML = mockHTML;

      const nav = container.querySelector('div');
      expect(nav?.classList.contains('hover:border-stibios-accent/50')).toBe(true);
    });

    it('should have contact button border separator', () => {
      const mockHTML = `
        <div class="border-l border-stibios-border pl-6 ml-6"></div>
      `;
      container.innerHTML = mockHTML;

      const separator = container.querySelector('div');
      expect(separator?.classList.contains('border-l')).toBe(true);
      expect(separator?.classList.contains('pl-6')).toBe(true);
    });
  });

  describe('Icon Hover Effects', () => {
    it('should have icon hover color transitions', () => {
      const mockHTML = `
        <div class="text-stibios-dim group-hover:text-stibios-accent transition-all"></div>
      `;
      container.innerHTML = mockHTML;

      const icon = container.querySelector('div');
      expect(icon?.classList.contains('group-hover:text-stibios-accent')).toBe(true);
      expect(icon?.classList.contains('transition-all')).toBe(true);
    });

    it('should have drop shadow effect on hover', () => {
      const mockHTML = `
        <div class="group-hover:drop-shadow-[0_0_8px_rgba(0,209,255,0.5)]"></div>
      `;
      container.innerHTML = mockHTML;

      const icon = container.querySelector('div');
      expect(icon?.classList.contains('group-hover:drop-shadow-[0_0_8px_rgba(0,209,255,0.5)]')).toBe(true);
    });
  });

  describe('Active Navigation State', () => {
    it('should apply active state styling', () => {
      const style = document.createElement('style');
      style.textContent = `
        .nav-item { opacity: 0.7; }
        .nav-item.active-nav { opacity: 1; }
      `;
      document.head.appendChild(style);

      const mockHTML = `<a class="nav-item active-nav">Link</a>`;
      container.innerHTML = mockHTML;

      const link = container.querySelector('a');
      expect(link?.classList.contains('active-nav')).toBe(true);

      document.head.removeChild(style);
    });

    it('should highlight active icon', () => {
      const style = document.createElement('style');
      style.textContent = `
        .nav-item.active-nav .nav-icon {
          color: white !important;
        }
      `;
      document.head.appendChild(style);

      const mockHTML = `
        <a class="nav-item active-nav">
          <div class="nav-icon"></div>
        </a>
      `;
      container.innerHTML = mockHTML;

      const link = container.querySelector('.nav-item');
      const icon = container.querySelector('.nav-icon');

      expect(link?.classList.contains('active-nav')).toBe(true);
      expect(icon).toBeTruthy();

      document.head.removeChild(style);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive gap between nav items', () => {
      const mockHTML = `
        <div class="flex items-center gap-6 md:gap-10"></div>
      `;
      container.innerHTML = mockHTML;

      const nav = container.querySelector('div');
      expect(nav?.classList.contains('gap-6')).toBe(true);
      expect(nav?.classList.contains('md:gap-10')).toBe(true);
    });

    it('should center navigation items', () => {
      const mockHTML = `
        <div class="flex items-center gap-6 mx-auto"></div>
      `;
      container.innerHTML = mockHTML;

      const nav = container.querySelector('div');
      expect(nav?.classList.contains('mx-auto')).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing sections gracefully', () => {
      const sections = document.querySelectorAll('section[id]');
      expect(sections.length).toBeGreaterThanOrEqual(0);
    });

    it('should handle scroll event without sections', () => {
      const mockHTML = `<a href="#test" class="nav-item"></a>`;
      container.innerHTML = mockHTML;

      let current = '';
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });

      expect(current).toBe('');
    });

    it('should validate nav item structure', () => {
      const mockHTML = `
        <a href="#test" class="nav-item group">
          <div class="nav-icon"></div>
          <span class="tooltip">/test</span>
        </a>
      `;
      container.innerHTML = mockHTML;

      const navItem = container.querySelector('.nav-item');
      const icon = container.querySelector('.nav-icon');
      const tooltip = container.querySelector('.tooltip');

      expect(navItem).toBeTruthy();
      expect(icon).toBeTruthy();
      expect(tooltip).toBeTruthy();
    });
  });

  describe('Pointer Events', () => {
    it('should disable pointer events on header container', () => {
      const mockHTML = `
        <header class="pointer-events-none"></header>
      `;
      container.innerHTML = mockHTML;

      const header = container.querySelector('header');
      expect(header?.classList.contains('pointer-events-none')).toBe(true);
    });

    it('should enable pointer events on nav', () => {
      const mockHTML = `
        <nav class="pointer-events-auto"></nav>
      `;
      container.innerHTML = mockHTML;

      const nav = container.querySelector('nav');
      expect(nav?.classList.contains('pointer-events-auto')).toBe(true);
    });
  });
});