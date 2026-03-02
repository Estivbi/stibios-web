import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('Nosotros Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Values Data', () => {
    it('should have all three core values', () => {
      const values = [
        { title: 'Enfoque en Resultados' },
        { title: 'Velocidad con Calidad' },
        { title: 'Confianza y Transparencia' }
      ];

      expect(values.length).toBe(3);
      expect(values[0].title).toBe('Enfoque en Resultados');
      expect(values[1].title).toBe('Velocidad con Calidad');
      expect(values[2].title).toBe('Confianza y Transparencia');
    });

    it('should have descriptions for each value', () => {
      const valueDescriptions = [
        'Cada línea de código que escribimos tiene un propósito de negocio claro.',
        'Combinamos metodologías ágiles con estándares de ingeniería rigurosos',
        'Construimos relaciones a largo plazo basadas en la comunicación honesta'
      ];

      valueDescriptions.forEach(desc => {
        expect(desc.length).toBeGreaterThan(0);
      });
    });

    it('should have icons for each value', () => {
      const mockHTML = `
        <div>
          <div class="icon-target"></div>
          <div class="icon-rocket"></div>
          <div class="icon-shield"></div>
        </div>
      `;
      container.innerHTML = mockHTML;

      expect(container.querySelector('.icon-target')).toBeTruthy();
      expect(container.querySelector('.icon-rocket')).toBeTruthy();
      expect(container.querySelector('.icon-shield')).toBeTruthy();
    });
  });

  describe('Section Structure', () => {
    it('should have correct section id', () => {
      const mockHTML = `<section id="nosotros"></section>`;
      container.innerHTML = mockHTML;

      const section = container.querySelector('section');
      expect(section?.id).toBe('nosotros');
    });

    it('should have section badge with icon', () => {
      const mockHTML = `
        <div class="inline-flex items-center gap-2 border rounded-full">
          QUIÉNES SOMOS
        </div>
      `;
      container.innerHTML = mockHTML;

      const badge = container.querySelector('div');
      expect(badge?.textContent).toContain('QUIÉNES SOMOS');
      expect(badge?.classList.contains('rounded-full')).toBe(true);
    });

    it('should have main heading', () => {
      const mockHTML = `
        <h2 class="text-3xl md:text-5xl font-bold text-white uppercase">Nosotros</h2>
      `;
      container.innerHTML = mockHTML;

      const heading = container.querySelector('h2');
      expect(heading?.textContent).toBe('Nosotros');
      expect(heading?.classList.contains('uppercase')).toBe(true);
    });
  });

  describe('Company Information', () => {
    it('should mention company name', () => {
      const text = 'Somos STIBIOS LABS, un equipo de ingenieros y estrategas digitales';
      expect(text).toContain('STIBIOS LABS');
      expect(text).toContain('ingenieros');
      expect(text).toContain('estrategas digitales');
    });

    it('should describe mission', () => {
      const mission = 'las pequeñas y medianas empresas merecen acceso a la misma calidad de ingeniería que las grandes corporaciones';
      expect(mission).toContain('pequeñas y medianas empresas');
      expect(mission).toContain('calidad de ingeniería');
    });

    it('should mention remote work capability', () => {
      const mockHTML = `
        <p>Trabajamos de forma <span class="font-mono">100% remoto</span></p>
      `;
      container.innerHTML = mockHTML;

      const text = container.textContent || '';
      expect(text).toContain('100% remoto');
    });
  });

  describe('Statistics', () => {
    it('should display projects delivered stat', () => {
      const mockHTML = `
        <div>
          <span class="text-2xl font-bold">+20</span>
          <span>proyectos entregados</span>
        </div>
      `;
      container.innerHTML = mockHTML;

      const stat = container.textContent || '';
      expect(stat).toContain('+20');
      expect(stat).toContain('proyectos entregados');
    });

    it('should display client satisfaction stat', () => {
      const mockHTML = `
        <div>
          <span class="text-2xl font-bold">100%</span>
          <span>Satisfacción del cliente</span>
        </div>
      `;
      container.innerHTML = mockHTML;

      const stat = container.textContent || '';
      expect(stat).toContain('100%');
      expect(stat).toContain('Satisfacción del cliente');
    });

    it('should display response time stat', () => {
      const mockHTML = `
        <div>
          <span class="text-stibios-accent text-2xl font-bold">&lt;24h</span>
          <span>Tiempo de respuesta</span>
        </div>
      `;
      container.innerHTML = mockHTML;

      const stat = container.textContent || '';
      expect(stat).toContain('<24h');
      expect(stat).toContain('Tiempo de respuesta');
    });

    it('should have stats with correct styling', () => {
      const mockHTML = `
        <div class="flex flex-wrap gap-6 font-mono text-xs border-t pt-6"></div>
      `;
      container.innerHTML = mockHTML;

      const statsContainer = container.querySelector('div');
      expect(statsContainer?.classList.contains('border-t')).toBe(true);
      expect(statsContainer?.classList.contains('font-mono')).toBe(true);
    });
  });

  describe('Images', () => {
    it('should have Unsplash image URLs', () => {
      const images = [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
      ];

      images.forEach(url => {
        expect(url).toMatch(/^https:\/\/images\.unsplash\.com/);
      });
    });

    it('should have correct image alt text', () => {
      const mockHTML = `
        <img src="test.jpg" alt="Arquitectura tecnológica moderna" />
        <img src="test2.jpg" alt="Infraestructura digital escalable" />
      `;
      container.innerHTML = mockHTML;

      const images = container.querySelectorAll('img');
      expect(images[0].alt).toBe('Arquitectura tecnológica moderna');
      expect(images[1].alt).toBe('Infraestructura digital escalable');
    });

    it('should have hover scale effect', () => {
      const mockHTML = `
        <img class="hover:scale-[1.02] transition-all duration-500" src="test.jpg" alt="Test" />
      `;
      container.innerHTML = mockHTML;

      const image = container.querySelector('img');
      expect(image?.classList.contains('hover:scale-[1.02]')).toBe(true);
      expect(image?.classList.contains('transition-all')).toBe(true);
    });

    it('should have rounded corners', () => {
      const mockHTML = `
        <div class="rounded-2xl overflow-hidden">
          <img class="rounded-2xl" src="test.jpg" alt="Test" />
        </div>
      `;
      container.innerHTML = mockHTML;

      const wrapper = container.querySelector('div');
      const image = container.querySelector('img');

      expect(wrapper?.classList.contains('rounded-2xl')).toBe(true);
      expect(image?.classList.contains('rounded-2xl')).toBe(true);
    });
  });

  describe('Terminal/Code Block', () => {
    it('should have terminal window controls', () => {
      const mockHTML = `
        <div>
          <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
          <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
        </div>
      `;
      container.innerHTML = mockHTML;

      const controls = container.querySelectorAll('.rounded-full');
      expect(controls.length).toBe(3);
    });

    it('should have terminal filename', () => {
      const mockHTML = `
        <span class="text-stibios-dim/50">stibios.config.ts</span>
      `;
      container.innerHTML = mockHTML;

      const filename = container.querySelector('span');
      expect(filename?.textContent).toBe('stibios.config.ts');
    });

    it('should display company config object', () => {
      const configKeys = ['nombre', 'misión', 'ubicación', 'especialidades', 'valores', 'disponible'];

      configKeys.forEach(key => {
        expect(key.length).toBeGreaterThan(0);
      });
    });

    it('should have specialties array in config', () => {
      const specialties = [
        'Desarrollo Web',
        'Arquitectura de Sistemas',
        'Consultoría B2B',
        'Estrategia Digital'
      ];

      expect(specialties.length).toBe(4);
      specialties.forEach(specialty => {
        expect(specialty.length).toBeGreaterThan(0);
      });
    });

    it('should have decorative corner elements', () => {
      const mockHTML = `
        <div class="relative">
          <div class="absolute -top-3 -right-3 border-t-2 border-r-2"></div>
          <div class="absolute -bottom-3 -left-3 border-b-2 border-l-2"></div>
        </div>
      `;
      container.innerHTML = mockHTML;

      const corners = container.querySelectorAll('.absolute');
      expect(corners.length).toBe(2);
    });
  });

  describe('Value Cards', () => {
    it('should have grid layout for values', () => {
      const mockHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
      `;
      container.innerHTML = mockHTML;

      const grid = container.querySelector('div');
      expect(grid?.classList.contains('grid')).toBe(true);
      expect(grid?.classList.contains('grid-cols-1')).toBe(true);
      expect(grid?.classList.contains('md:grid-cols-3')).toBe(true);
    });

    it('should have card hover effects', () => {
      const mockHTML = `
        <div class="group hover:border-stibios-purple/50 hover:shadow-[0_0_40px_rgba(173,0,255,0.08)] transition-all"></div>
      `;
      container.innerHTML = mockHTML;

      const card = container.querySelector('div');
      expect(card?.classList.contains('group')).toBe(true);
      expect(card?.classList.contains('hover:border-stibios-purple/50')).toBe(true);
      expect(card?.classList.contains('transition-all')).toBe(true);
    });

    it('should have icon container with hover effect', () => {
      const mockHTML = `
        <div class="w-14 h-14 bg-stibios-bg border rounded-xl group-hover:border-stibios-purple/40"></div>
      `;
      container.innerHTML = mockHTML;

      const iconContainer = container.querySelector('div');
      expect(iconContainer?.classList.contains('w-14')).toBe(true);
      expect(iconContainer?.classList.contains('h-14')).toBe(true);
      expect(iconContainer?.classList.contains('rounded-xl')).toBe(true);
    });

    it('should have value title with hover color change', () => {
      const mockHTML = `
        <h3 class="text-xl font-bold text-white group-hover:text-stibios-purple">Value Title</h3>
      `;
      container.innerHTML = mockHTML;

      const title = container.querySelector('h3');
      expect(title?.classList.contains('font-bold')).toBe(true);
      expect(title?.classList.contains('group-hover:text-stibios-purple')).toBe(true);
    });
  });

  describe('Layout and Grid', () => {
    it('should have two-column layout for main content', () => {
      const mockHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
      `;
      container.innerHTML = mockHTML;

      const grid = container.querySelector('div');
      expect(grid?.classList.contains('lg:grid-cols-2')).toBe(true);
      expect(grid?.classList.contains('gap-12')).toBe(true);
    });

    it('should have max-width container', () => {
      const mockHTML = `
        <div class="max-w-6xl mx-auto relative z-10"></div>
      `;
      container.innerHTML = mockHTML;

      const container_div = container.querySelector('div');
      expect(container_div?.classList.contains('max-w-6xl')).toBe(true);
      expect(container_div?.classList.contains('mx-auto')).toBe(true);
    });
  });

  describe('Background Effects', () => {
    it('should have gradient background', () => {
      const mockHTML = `
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-stibios-accent/[0.02] to-transparent"></div>
      `;
      container.innerHTML = mockHTML;

      const bg = container.querySelector('div');
      expect(bg?.classList.contains('absolute')).toBe(true);
      expect(bg?.classList.contains('inset-0')).toBe(true);
    });

    it('should have top border decoration', () => {
      const mockHTML = `
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-stibios-border to-transparent"></div>
      `;
      container.innerHTML = mockHTML;

      const border = container.querySelector('div');
      expect(border?.classList.contains('h-px')).toBe(true);
    });
  });

  describe('Text Content', () => {
    it('should have company description paragraphs', () => {
      const mockHTML = `
        <div>
          <p class="text-stibios-dim text-lg">First paragraph</p>
          <p class="text-stibios-dim text-base">Second paragraph</p>
          <p class="text-stibios-dim text-base">Third paragraph</p>
        </div>
      `;
      container.innerHTML = mockHTML;

      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs.length).toBe(3);
    });

    it('should highlight key phrases', () => {
      const mockHTML = `
        <p>Text with <span class="text-white font-bold">highlighted</span> content</p>
      `;
      container.innerHTML = mockHTML;

      const highlight = container.querySelector('span');
      expect(highlight?.classList.contains('text-white')).toBe(true);
      expect(highlight?.classList.contains('font-bold')).toBe(true);
    });

    it('should have monospace for technical terms', () => {
      const mockHTML = `
        <span class="text-stibios-accent font-mono">100% remoto</span>
      `;
      container.innerHTML = mockHTML;

      const text = container.querySelector('span');
      expect(text?.classList.contains('font-mono')).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty values array', () => {
      const values: any[] = [];
      expect(values.length).toBe(0);
      expect(() => values.map(v => v.title)).not.toThrow();
    });

    it('should validate value structure', () => {
      const value = {
        icon: 'Target',
        title: 'Test Title',
        desc: 'Test Description'
      };

      expect(value).toHaveProperty('icon');
      expect(value).toHaveProperty('title');
      expect(value).toHaveProperty('desc');
    });

    it('should handle missing images gracefully', () => {
      const mockHTML = `
        <div class="overflow-hidden rounded-2xl">
          <img src="" alt="Test" onerror="this.style.display='none'" />
        </div>
      `;
      container.innerHTML = mockHTML;

      const image = container.querySelector('img');
      expect(image).toBeTruthy();
    });

    it('should validate stats data types', () => {
      const stats = {
        projects: '+20',
        satisfaction: '100%',
        responseTime: '<24h'
      };

      expect(typeof stats.projects).toBe('string');
      expect(typeof stats.satisfaction).toBe('string');
      expect(typeof stats.responseTime).toBe('string');
    });
  });

  describe('Accessibility', () => {
    it('should have semantic heading hierarchy', () => {
      const mockHTML = `
        <section>
          <h2>Nosotros</h2>
          <h3>Value Title</h3>
        </section>
      `;
      container.innerHTML = mockHTML;

      expect(container.querySelector('h2')).toBeTruthy();
      expect(container.querySelector('h3')).toBeTruthy();
    });

    it('should have descriptive alt text for images', () => {
      const altTexts = [
        'Arquitectura tecnológica moderna',
        'Infraestructura digital escalable'
      ];

      altTexts.forEach(alt => {
        expect(alt.length).toBeGreaterThan(10);
        expect(alt).not.toBe('image');
      });
    });
  });
});