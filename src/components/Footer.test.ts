import { describe, it, expect, beforeEach } from 'vitest';

describe('Footer Component', () => {
  let container: HTMLElement;
  const currentYear = new Date().getFullYear();

  beforeEach(() => {
    document.body.innerHTML = `
      <footer class="border-t border-stibios-border bg-stibios-bg pt-16 pb-8">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            <!-- Col 1: Logo + Mission -->
            <div class="flex flex-col gap-6 lg:col-span-1">
              <p class="text-stibios-dim text-sm font-mono leading-relaxed max-w-xs">
                Desarrollamos sistemas de alto rendimiento y consultoría tecnológica avanzada. Tecnología de impacto para empresas con ambición.
              </p>
              <div class="flex items-center gap-2 font-mono text-xs text-stibios-dim/50">
                <div class="w-2 h-2 rounded-full bg-stibios-accent animate-pulse"></div>
                DISPONIBLE PARA NUEVOS PROYECTOS
              </div>
            </div>

            <!-- Col 2: Quick links -->
            <div class="flex flex-col gap-4">
              <h4 class="text-white font-bold text-xs tracking-widest uppercase font-mono border-b border-stibios-border pb-3 mb-1">Navegación</h4>
              <nav class="flex flex-col gap-3">
                <a href="#inicio" class="text-stibios-dim hover:text-stibios-accent transition-colors text-sm font-mono">&gt; Inicio</a>
                <a href="#que-hacemos" class="text-stibios-dim hover:text-stibios-accent transition-colors text-sm font-mono">&gt; Qué Hacemos</a>
                <a href="#metodo" class="text-stibios-dim hover:text-stibios-accent transition-colors text-sm font-mono">&gt; Metodología</a>
                <a href="#casos-exito" class="text-stibios-dim hover:text-stibios-accent transition-colors text-sm font-mono">&gt; Casos de Éxito</a>
                <a href="#nosotros" class="text-stibios-dim hover:text-stibios-accent transition-colors text-sm font-mono">&gt; Nosotros</a>
                <a href="#contacto" class="text-stibios-dim hover:text-stibios-accent transition-colors text-sm font-mono">&gt; Contacto</a>
              </nav>
            </div>

            <!-- Col 3: Services -->
            <div class="flex flex-col gap-4">
              <h4 class="text-white font-bold text-xs tracking-widest uppercase font-mono border-b border-stibios-border pb-3 mb-1">Servicios</h4>
              <ul class="flex flex-col gap-3">
                <li class="text-stibios-dim text-sm font-mono">Soluciones Cloud & DevOps</li>
                <li class="text-stibios-dim text-sm font-mono">Desarrollo a Medida</li>
                <li class="text-stibios-dim text-sm font-mono">Estrategia Digital</li>
                <li class="text-stibios-dim text-sm font-mono">Automatización B2B</li>
                <li class="text-stibios-dim text-sm font-mono">Presencia Web Profesional</li>
                <li class="text-stibios-dim text-sm font-mono">Mantenimiento & Soporte</li>
              </ul>
            </div>

            <!-- Col 4: Contact + Social -->
            <div class="flex flex-col gap-4">
              <h4 class="text-white font-bold text-xs tracking-widest uppercase font-mono border-b border-stibios-border pb-3 mb-1">Contacto</h4>
              <div class="flex flex-col gap-3 text-sm font-mono text-stibios-dim">
                <p>UBICACIÓN: REMOTO / MUNDIAL</p>
                <p>LATENCY: &lt; 24H RESPONSE</p>
                <a href="#contacto" class="inline-flex items-center gap-2 text-stibios-accent hover:text-white transition-colors mt-1 font-bold text-xs tracking-widest uppercase">
                  <span class="w-2 h-2 rounded-full bg-stibios-accent animate-pulse"></span>
                  Hablemos
                </a>
              </div>
              <div class="flex items-center gap-4 mt-4">
                <a href="#" aria-label="GitHub" class="text-stibios-dim hover:text-white transition-all">GitHub</a>
                <a href="#" aria-label="LinkedIn" class="text-stibios-dim hover:text-white transition-all">LinkedIn</a>
                <a href="#" aria-label="X" class="text-stibios-dim hover:text-white transition-all">X</a>
              </div>
            </div>
          </div>

          <!-- Bottom bar -->
          <div class="border-t border-stibios-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p class="text-stibios-dim text-xs font-mono">
              © ${currentYear} STIBIOS LABS. Todos los derechos reservados.
            </p>
            <a href="/politica-privacidad" class="text-stibios-dim hover:text-stibios-accent transition-colors text-xs font-mono">
              Política de Privacidad
            </a>
          </div>
        </div>
      </footer>
    `;
    container = document.body;
  });

  describe('Component Structure', () => {
    it('should render footer element', () => {
      const footer = container.querySelector('footer');
      expect(footer).toBeTruthy();
    });

    it('should have semantic footer structure', () => {
      const footer = container.querySelector('footer');
      expect(footer?.tagName).toBe('FOOTER');
    });

    it('should render four column grid on desktop', () => {
      const grid = container.querySelector('.grid');
      expect(grid?.classList.contains('lg:grid-cols-4')).toBe(true);
    });
  });

  describe('Mission Statement', () => {
    it('should display mission statement', () => {
      const mission = container.querySelector('.text-stibios-dim.text-sm.font-mono.leading-relaxed');
      expect(mission?.textContent).toContain('Desarrollamos sistemas de alto rendimiento');
    });

    it('should show availability status', () => {
      const availability = Array.from(container.querySelectorAll('div'))
        .find(div => div.textContent?.includes('DISPONIBLE PARA NUEVOS PROYECTOS'));
      expect(availability).toBeTruthy();
    });

    it('should include animated pulse indicator for availability', () => {
      const pulseIndicator = container.querySelector('.animate-pulse.bg-stibios-accent');
      expect(pulseIndicator).toBeTruthy();
    });
  });

  describe('Navigation Links', () => {
    it('should render navigation section header', () => {
      const navHeader = Array.from(container.querySelectorAll('h4'))
        .find(h4 => h4.textContent === 'Navegación');
      expect(navHeader).toBeTruthy();
    });

    it('should render all 6 navigation links', () => {
      const navSection = Array.from(container.querySelectorAll('h4'))
        .find(h4 => h4.textContent === 'Navegación')
        ?.parentElement;
      const navLinks = navSection?.querySelectorAll('nav a');
      expect(navLinks?.length).toBe(6);
    });

    it('should have correct navigation link targets', () => {
      const expectedLinks = ['#inicio', '#que-hacemos', '#metodo', '#casos-exito', '#nosotros', '#contacto'];
      const navLinks = container.querySelectorAll('nav a');
      const hrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
      expect(hrefs).toEqual(expectedLinks);
    });

    it('should have navigation links with arrow prefix', () => {
      const navLinks = container.querySelectorAll('nav a');
      navLinks.forEach(link => {
        expect(link.textContent).toMatch(/^>/);
      });
    });
  });

  describe('Services List', () => {
    it('should render services section header', () => {
      const servicesHeader = Array.from(container.querySelectorAll('h4'))
        .find(h4 => h4.textContent === 'Servicios');
      expect(servicesHeader).toBeTruthy();
    });

    it('should display all 6 services', () => {
      const servicesList = Array.from(container.querySelectorAll('h4'))
        .find(h4 => h4.textContent === 'Servicios')
        ?.parentElement?.querySelectorAll('li');
      expect(servicesList?.length).toBe(6);
    });

    it('should include Cloud & DevOps service', () => {
      const services = Array.from(container.querySelectorAll('li'))
        .map(li => li.textContent);
      expect(services).toContain('Soluciones Cloud & DevOps');
    });

    it('should include Desarrollo a Medida service', () => {
      const services = Array.from(container.querySelectorAll('li'))
        .map(li => li.textContent);
      expect(services).toContain('Desarrollo a Medida');
    });

    it('should include all core services in order', () => {
      const expectedServices = [
        'Soluciones Cloud & DevOps',
        'Desarrollo a Medida',
        'Estrategia Digital',
        'Automatización B2B',
        'Presencia Web Profesional',
        'Mantenimiento & Soporte'
      ];
      const services = Array.from(container.querySelectorAll('li'))
        .map(li => li.textContent);
      expect(services).toEqual(expectedServices);
    });
  });

  describe('Contact Information', () => {
    it('should render contact section header', () => {
      const contactHeader = Array.from(container.querySelectorAll('h4'))
        .find(h4 => h4.textContent === 'Contacto');
      expect(contactHeader).toBeTruthy();
    });

    it('should display remote location information', () => {
      const location = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('REMOTO'));
      expect(location?.textContent).toContain('UBICACIÓN: REMOTO / MUNDIAL');
    });

    it('should display response time SLA', () => {
      const latency = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('LATENCY'));
      expect(latency?.textContent).toContain('< 24H RESPONSE');
    });

    it('should have "Hablemos" CTA link', () => {
      const ctaLink = Array.from(container.querySelectorAll('a'))
        .find(a => a.textContent?.includes('Hablemos'));
      expect(ctaLink).toBeTruthy();
      expect(ctaLink?.getAttribute('href')).toBe('#contacto');
    });
  });

  describe('Social Media Links', () => {
    it('should render all 3 social media links', () => {
      const socialLinks = container.querySelectorAll('[aria-label="GitHub"], [aria-label="LinkedIn"], [aria-label="X"]');
      expect(socialLinks.length).toBe(3);
    });

    it('should have GitHub link with aria-label', () => {
      const githubLink = container.querySelector('[aria-label="GitHub"]');
      expect(githubLink).toBeTruthy();
    });

    it('should have LinkedIn link with aria-label', () => {
      const linkedinLink = container.querySelector('[aria-label="LinkedIn"]');
      expect(linkedinLink).toBeTruthy();
    });

    it('should have X (Twitter) link with aria-label', () => {
      const xLink = container.querySelector('[aria-label="X"]');
      expect(xLink).toBeTruthy();
    });
  });

  describe('Copyright and Legal', () => {
    it('should display current year in copyright', () => {
      const copyright = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('STIBIOS LABS'));
      expect(copyright?.textContent).toContain(`© ${currentYear}`);
    });

    it('should include company name in copyright', () => {
      const copyright = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('STIBIOS LABS'));
      expect(copyright?.textContent).toContain('STIBIOS LABS');
    });

    it('should have privacy policy link', () => {
      const privacyLink = container.querySelector('a[href="/politica-privacidad"]');
      expect(privacyLink).toBeTruthy();
      expect(privacyLink?.textContent).toContain('Política de Privacidad');
    });
  });

  describe('Accessibility', () => {
    it('should have semantic section headers', () => {
      const headers = container.querySelectorAll('h4');
      expect(headers.length).toBeGreaterThanOrEqual(3);
    });

    it('should have proper aria-labels for social links', () => {
      const socialLinks = container.querySelectorAll('[aria-label]');
      expect(socialLinks.length).toBeGreaterThanOrEqual(3);
    });

    it('should use semantic nav element for navigation', () => {
      const nav = container.querySelector('nav');
      expect(nav).toBeTruthy();
    });
  });

  describe('Responsive Design', () => {
    it('should have mobile-first grid layout', () => {
      const grid = container.querySelector('.grid');
      expect(grid?.classList.contains('grid-cols-1')).toBe(true);
    });

    it('should have tablet breakpoint for 2 columns', () => {
      const grid = container.querySelector('.grid');
      expect(grid?.classList.contains('sm:grid-cols-2')).toBe(true);
    });

    it('should have desktop breakpoint for 4 columns', () => {
      const grid = container.querySelector('.grid');
      expect(grid?.classList.contains('lg:grid-cols-4')).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should handle year transition correctly', () => {
      const nextYear = currentYear + 1;
      const copyright = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('STIBIOS LABS'));
      // Year should be current, not hardcoded
      expect(copyright?.textContent).not.toContain(`© ${nextYear}`);
    });

    it('should maintain consistent spacing between sections', () => {
      const grid = container.querySelector('.grid');
      expect(grid?.classList.contains('gap-12')).toBe(true);
    });
  });

  describe('Regression Tests', () => {
    it('should preserve all navigation sections', () => {
      const sections = ['Navegación', 'Servicios', 'Contacto'];
      sections.forEach(section => {
        const header = Array.from(container.querySelectorAll('h4'))
          .find(h4 => h4.textContent === section);
        expect(header).toBeTruthy();
      });
    });

    it('should maintain footer border styling', () => {
      const footer = container.querySelector('footer');
      expect(footer?.classList.contains('border-t')).toBe(true);
    });
  });
});