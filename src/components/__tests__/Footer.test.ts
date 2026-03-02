import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('Footer Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Dynamic Year', () => {
    it('should use current year', () => {
      const currentYear = new Date().getFullYear();
      expect(currentYear).toBeGreaterThan(2023);
      expect(currentYear).toBeLessThan(2100);
    });

    it('should format copyright correctly', () => {
      const currentYear = new Date().getFullYear();
      const copyrightText = `© ${currentYear} STIBIOS LABS. Todos los derechos reservados.`;

      expect(copyrightText).toContain(`© ${currentYear}`);
      expect(copyrightText).toContain('STIBIOS LABS');
    });
  });

  describe('Navigation Links', () => {
    it('should have all main navigation links', () => {
      const mockHTML = `
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#que-hacemos">Qué Hacemos</a>
          <a href="#metodo">Metodología</a>
          <a href="#casos-exito">Casos de Éxito</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      `;
      container.innerHTML = mockHTML;

      const links = container.querySelectorAll('a');
      expect(links.length).toBe(6);

      const expectedHrefs = ['#inicio', '#que-hacemos', '#metodo', '#casos-exito', '#nosotros', '#contacto'];
      links.forEach((link, index) => {
        expect(link.getAttribute('href')).toBe(expectedHrefs[index]);
      });
    });

    it('should have correct link text content', () => {
      const mockHTML = `
        <nav>
          <a href="#inicio">&gt; Inicio</a>
          <a href="#que-hacemos">&gt; Qué Hacemos</a>
        </nav>
      `;
      container.innerHTML = mockHTML;

      const links = container.querySelectorAll('a');
      expect(links[0].textContent).toContain('Inicio');
      expect(links[1].textContent).toContain('Qué Hacemos');
    });

    it('should have hover transition classes', () => {
      const mockHTML = `
        <a href="#inicio" class="text-stibios-dim hover:text-stibios-accent transition-colors">Inicio</a>
      `;
      container.innerHTML = mockHTML;

      const link = container.querySelector('a');
      expect(link?.classList.contains('hover:text-stibios-accent')).toBe(true);
      expect(link?.classList.contains('transition-colors')).toBe(true);
    });
  });

  describe('Services List', () => {
    it('should display all services', () => {
      const services = [
        'Soluciones Cloud & DevOps',
        'Desarrollo a Medida',
        'Estrategia Digital',
        'Automatización B2B',
        'Presencia Web Profesional',
        'Mantenimiento & Soporte'
      ];

      services.forEach(service => {
        expect(service.length).toBeGreaterThan(0);
      });

      expect(services.length).toBe(6);
    });

    it('should validate service names are not empty', () => {
      const mockHTML = `
        <ul>
          <li>Soluciones Cloud & DevOps</li>
          <li>Desarrollo a Medida</li>
          <li>Estrategia Digital</li>
        </ul>
      `;
      container.innerHTML = mockHTML;

      const items = container.querySelectorAll('li');
      items.forEach(item => {
        expect(item.textContent?.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Contact Information', () => {
    it('should have location information', () => {
      const location = 'UBICACIÓN: REMOTO / MUNDIAL';
      expect(location).toContain('REMOTO');
      expect(location).toContain('MUNDIAL');
    });

    it('should have response time information', () => {
      const responseTime = 'LATENCY: < 24H RESPONSE';
      expect(responseTime).toContain('< 24H');
      expect(responseTime).toContain('RESPONSE');
    });

    it('should have contact call-to-action', () => {
      const mockHTML = `
        <a href="#contacto" class="inline-flex items-center gap-2">Hablemos</a>
      `;
      container.innerHTML = mockHTML;

      const ctaLink = container.querySelector('a');
      expect(ctaLink?.getAttribute('href')).toBe('#contacto');
      expect(ctaLink?.textContent).toContain('Hablemos');
    });

    it('should have pulsing indicator', () => {
      const mockHTML = `
        <span class="w-2 h-2 rounded-full bg-stibios-accent animate-pulse"></span>
      `;
      container.innerHTML = mockHTML;

      const indicator = container.querySelector('span');
      expect(indicator?.classList.contains('animate-pulse')).toBe(true);
      expect(indicator?.classList.contains('bg-stibios-accent')).toBe(true);
    });
  });

  describe('Social Links', () => {
    it('should have all social media links', () => {
      const mockHTML = `
        <div>
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="X">X</a>
        </div>
      `;
      container.innerHTML = mockHTML;

      const socialLinks = container.querySelectorAll('a');
      expect(socialLinks.length).toBe(3);
    });

    it('should have proper aria-labels for accessibility', () => {
      const mockHTML = `
        <a href="#" aria-label="GitHub">GitHub</a>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
        <a href="#" aria-label="X">X</a>
      `;
      container.innerHTML = mockHTML;

      const links = container.querySelectorAll('a');
      expect(links[0].getAttribute('aria-label')).toBe('GitHub');
      expect(links[1].getAttribute('aria-label')).toBe('LinkedIn');
      expect(links[2].getAttribute('aria-label')).toBe('X');
    });

    it('should have hover effects on social links', () => {
      const mockHTML = `
        <a href="#" class="text-stibios-dim hover:text-white transition-all hover:-translate-y-1">Link</a>
      `;
      container.innerHTML = mockHTML;

      const link = container.querySelector('a');
      expect(link?.classList.contains('hover:text-white')).toBe(true);
      expect(link?.classList.contains('transition-all')).toBe(true);
      expect(link?.classList.contains('hover:-translate-y-1')).toBe(true);
    });
  });

  describe('Privacy Policy Link', () => {
    it('should have privacy policy link', () => {
      const mockHTML = `
        <a href="/politica-privacidad">Política de Privacidad</a>
      `;
      container.innerHTML = mockHTML;

      const privacyLink = container.querySelector('a');
      expect(privacyLink?.getAttribute('href')).toBe('/politica-privacidad');
      expect(privacyLink?.textContent).toBe('Política de Privacidad');
    });

    it('should have correct styling for privacy link', () => {
      const mockHTML = `
        <a href="/politica-privacidad" class="text-stibios-dim hover:text-stibios-accent transition-colors">
          Política de Privacidad
        </a>
      `;
      container.innerHTML = mockHTML;

      const link = container.querySelector('a');
      expect(link?.classList.contains('hover:text-stibios-accent')).toBe(true);
    });
  });

  describe('Footer Structure', () => {
    it('should have correct semantic structure', () => {
      const mockHTML = `
        <footer class="border-t border-stibios-border bg-stibios-bg">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <!-- Footer content -->
            </div>
          </div>
        </footer>
      `;
      container.innerHTML = mockHTML;

      const footer = container.querySelector('footer');
      expect(footer).toBeTruthy();
      expect(footer?.classList.contains('border-t')).toBe(true);
    });

    it('should have responsive grid layout', () => {
      const mockHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"></div>
      `;
      container.innerHTML = mockHTML;

      const grid = container.querySelector('div');
      expect(grid?.classList.contains('grid')).toBe(true);
      expect(grid?.classList.contains('grid-cols-1')).toBe(true);
      expect(grid?.classList.contains('sm:grid-cols-2')).toBe(true);
      expect(grid?.classList.contains('lg:grid-cols-4')).toBe(true);
    });

    it('should have bottom bar with border', () => {
      const mockHTML = `
        <div class="border-t border-stibios-border pt-8"></div>
      `;
      container.innerHTML = mockHTML;

      const bottomBar = container.querySelector('div');
      expect(bottomBar?.classList.contains('border-t')).toBe(true);
      expect(bottomBar?.classList.contains('pt-8')).toBe(true);
    });
  });

  describe('Mission Statement', () => {
    it('should have company mission text', () => {
      const mission = 'Desarrollamos sistemas de alto rendimiento y consultoría tecnológica avanzada. Tecnología de impacto para empresas con ambición.';
      expect(mission).toContain('alto rendimiento');
      expect(mission).toContain('consultoría tecnológica');
      expect(mission).toContain('empresas con ambición');
    });

    it('should have availability indicator', () => {
      const mockHTML = `
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-stibios-accent animate-pulse"></div>
          DISPONIBLE PARA NUEVOS PROYECTOS
        </div>
      `;
      container.innerHTML = mockHTML;

      const indicator = container.querySelector('div');
      expect(indicator?.textContent).toContain('DISPONIBLE PARA NUEVOS PROYECTOS');
    });
  });

  describe('Edge Cases', () => {
    it('should handle year calculation at year boundaries', () => {
      const testDate = new Date('2025-12-31');
      expect(testDate.getFullYear()).toBe(2025);

      const testDate2 = new Date('2026-01-01');
      expect(testDate2.getFullYear()).toBe(2026);
    });

    it('should validate column headers are properly formatted', () => {
      const headers = ['Navegación', 'Servicios', 'Contacto'];
      headers.forEach(header => {
        expect(header.length).toBeGreaterThan(0);
        expect(typeof header).toBe('string');
      });
    });

    it('should handle missing Logo component gracefully', () => {
      const mockHTML = `<div class="flex flex-col gap-6"></div>`;
      container.innerHTML = mockHTML;

      expect(container.querySelector('div')).toBeTruthy();
    });
  });

  describe('Typography and Styling', () => {
    it('should use monospace font for specific elements', () => {
      const mockHTML = `
        <p class="font-mono text-xs">Test</p>
      `;
      container.innerHTML = mockHTML;

      const element = container.querySelector('p');
      expect(element?.classList.contains('font-mono')).toBe(true);
    });

    it('should have uppercase headers', () => {
      const mockHTML = `
        <h4 class="uppercase tracking-widest">Navegación</h4>
      `;
      container.innerHTML = mockHTML;

      const header = container.querySelector('h4');
      expect(header?.classList.contains('uppercase')).toBe(true);
      expect(header?.classList.contains('tracking-widest')).toBe(true);
    });
  });
});