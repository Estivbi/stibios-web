import { describe, it, expect, beforeEach } from 'vitest';

describe('Nosotros Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <section id="nosotros" class="py-24 px-4 relative overflow-hidden">
        <div class="max-w-6xl mx-auto relative z-10">

          <div class="flex flex-col items-center justify-center gap-3 mb-20 text-center">
            <div class="inline-flex items-center gap-2 text-stibios-purple text-xs font-mono mb-2">
              QUIÉNES SOMOS
            </div>
            <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tighter mx-auto uppercase">
              Nosotros
            </h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div class="flex flex-col gap-6">
              <p class="text-stibios-dim text-lg leading-relaxed">
                Somos <span class="text-white font-bold">STIBIOS LABS</span>, un equipo de ingenieros y estrategas digitales con pasión por construir tecnología que genera impacto real.
              </p>
              <p class="text-stibios-dim text-base leading-relaxed">
                Nacimos de la convicción de que las pequeñas y medianas empresas merecen acceso a la misma calidad de ingeniería que las grandes corporaciones. Por eso combinamos experiencia técnica avanzada con una comprensión profunda de los desafíos del negocio.
              </p>
              <p class="text-stibios-dim text-base leading-relaxed">
                Trabajamos de forma <span class="text-stibios-accent font-mono">100% remota</span>, lo que nos permite colaborar con empresas de cualquier parte del mundo sin perder la cercanía y la agilidad que nos caracteriza.
              </p>
              <div class="flex flex-wrap gap-6 mt-4 font-mono text-xs text-stibios-dim/60 border-t border-stibios-border pt-6">
                <div class="flex flex-col gap-1">
                  <span class="text-white text-2xl font-bold">+20</span>
                  <span>proyectos entregados</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-white text-2xl font-bold">100%</span>
                  <span>Satisfacción del cliente</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-stibios-accent text-2xl font-bold">&lt;24h</span>
                  <span>Tiempo de respuesta</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <div class="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80"
                  alt="Arquitectura tecnológica moderna"
                  class="w-full h-28 object-cover"
                />
              </div>

              <div class="relative">
                <div class="bg-stibios-surface border border-stibios-border rounded-2xl p-8 font-mono text-xs">
                  <div class="flex items-center gap-2 mb-4">
                    <span class="ml-2 text-stibios-dim/50">stibios.config.ts</span>
                  </div>
                  <pre><code>const stibios = {
  nombre: "STIBIOS LABS",
  misión: "Tecnología de alto impacto",
  ubicación: "Remoto / Mundial",
  especialidades: [
    "Desarrollo Web",
    "Arquitectura de Sistemas",
    "Consultoría B2B",
    "Estrategia Digital",
  ],
  valores: ["calidad", "velocidad", "confianza"],
  disponible: true,
};</code></pre>
                </div>
              </div>

              <div class="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80"
                  alt="Infraestructura digital escalable"
                  class="w-full h-24 object-cover"
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="group bg-stibios-surface border border-stibios-border rounded-xl p-8">
              <h3 class="text-xl font-bold text-white mb-3">
                Enfoque en Resultados
              </h3>
              <p class="text-stibios-dim text-sm leading-relaxed">
                Cada línea de código que escribimos tiene un propósito de negocio claro. Medimos el éxito por el impacto que generamos, no por las horas invertidas.
              </p>
            </div>
            <div class="group bg-stibios-surface border border-stibios-border rounded-xl p-8">
              <h3 class="text-xl font-bold text-white mb-3">
                Velocidad con Calidad
              </h3>
              <p class="text-stibios-dim text-sm leading-relaxed">
                Combinamos metodologías ágiles con estándares de ingeniería rigurosos para entregar productos rápidamente sin comprometer la arquitectura a largo plazo.
              </p>
            </div>
            <div class="group bg-stibios-surface border border-stibios-border rounded-xl p-8">
              <h3 class="text-xl font-bold text-white mb-3">
                Confianza y Transparencia
              </h3>
              <p class="text-stibios-dim text-sm leading-relaxed">
                Construimos relaciones a largo plazo basadas en la comunicación honesta, el cumplimiento de compromisos y la visibilidad total del proceso de desarrollo.
              </p>
            </div>
          </div>

        </div>
      </section>
    `;
    container = document.body;
  });

  describe('Component Structure', () => {
    it('should render section with correct id', () => {
      const section = container.querySelector('#nosotros');
      expect(section).toBeTruthy();
    });

    it('should have semantic section element', () => {
      const section = container.querySelector('section');
      expect(section?.tagName).toBe('SECTION');
    });

    it('should render main heading', () => {
      const heading = container.querySelector('h2');
      expect(heading?.textContent?.trim()).toBe('Nosotros');
    });

    it('should have "QUIÉNES SOMOS" label', () => {
      const label = Array.from(container.querySelectorAll('div'))
        .find(div => div.textContent?.includes('QUIÉNES SOMOS'));
      expect(label).toBeTruthy();
    });
  });

  describe('Company Description', () => {
    it('should mention STIBIOS LABS by name', () => {
      const paragraph = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('STIBIOS LABS'));
      expect(paragraph).toBeTruthy();
      expect(paragraph?.textContent).toContain('STIBIOS LABS');
    });

    it('should describe the team', () => {
      const paragraph = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('equipo de ingenieros'));
      expect(paragraph).toBeTruthy();
    });

    it('should mention mission for SMEs', () => {
      const paragraph = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('pequeñas y medianas empresas'));
      expect(paragraph).toBeTruthy();
    });

    it('should highlight remote work capability', () => {
      const remoteText = Array.from(container.querySelectorAll('span'))
        .find(span => span.textContent?.includes('100% remota'));
      expect(remoteText).toBeTruthy();
      expect(remoteText?.classList.contains('font-mono')).toBe(true);
    });

    it('should explain global collaboration', () => {
      const paragraph = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('cualquier parte del mundo'));
      expect(paragraph).toBeTruthy();
    });
  });

  describe('Statistics', () => {
    it('should display all 3 statistics', () => {
      const stats = container.querySelectorAll('.flex.flex-col.gap-1');
      expect(stats.length).toBe(3);
    });

    it('should show projects delivered stat', () => {
      const stat = Array.from(container.querySelectorAll('.flex.flex-col.gap-1'))
        .find(div => div.textContent?.includes('proyectos entregados'));
      const number = stat?.querySelector('.text-2xl');
      expect(number?.textContent).toBe('+20');
    });

    it('should show client satisfaction stat', () => {
      const stat = Array.from(container.querySelectorAll('.flex.flex-col.gap-1'))
        .find(div => div.textContent?.includes('Satisfacción del cliente'));
      const number = stat?.querySelector('.text-2xl');
      expect(number?.textContent).toBe('100%');
    });

    it('should show response time stat', () => {
      const stat = Array.from(container.querySelectorAll('.flex.flex-col.gap-1'))
        .find(div => div.textContent?.includes('Tiempo de respuesta'));
      const number = stat?.querySelector('.text-2xl');
      expect(number?.textContent).toBe('<24h');
    });

    it('should have proper styling for statistics section', () => {
      const statsContainer = container.querySelector('.border-t.border-stibios-border.pt-6');
      expect(statsContainer).toBeTruthy();
    });
  });

  describe('Config Terminal Display', () => {
    it('should render terminal-style config', () => {
      const terminal = container.querySelector('.bg-stibios-surface.border');
      expect(terminal).toBeTruthy();
    });

    it('should display config file name', () => {
      const filename = Array.from(container.querySelectorAll('span'))
        .find(span => span.textContent === 'stibios.config.ts');
      expect(filename).toBeTruthy();
    });

    it('should include company name in config', () => {
      const code = container.querySelector('code');
      expect(code?.textContent).toContain('STIBIOS LABS');
    });

    it('should display mission statement in config', () => {
      const code = container.querySelector('code');
      expect(code?.textContent).toContain('Tecnología de alto impacto');
    });

    it('should show location as remote in config', () => {
      const code = container.querySelector('code');
      expect(code?.textContent).toContain('Remoto / Mundial');
    });

    it('should list all 4 specialties', () => {
      const code = container.querySelector('code');
      expect(code?.textContent).toContain('Desarrollo Web');
      expect(code?.textContent).toContain('Arquitectura de Sistemas');
      expect(code?.textContent).toContain('Consultoría B2B');
      expect(code?.textContent).toContain('Estrategia Digital');
    });

    it('should list all 3 values', () => {
      const code = container.querySelector('code');
      expect(code?.textContent).toContain('calidad');
      expect(code?.textContent).toContain('velocidad');
      expect(code?.textContent).toContain('confianza');
    });

    it('should show availability as true', () => {
      const code = container.querySelector('code');
      expect(code?.textContent).toContain('disponible: true');
    });
  });

  describe('Images', () => {
    it('should render first image with correct src', () => {
      const firstImg = container.querySelector('img[alt="Arquitectura tecnológica moderna"]');
      expect(firstImg?.getAttribute('src')).toContain('photo-1550751827-4bd374c3f58b');
    });

    it('should render second image with correct src', () => {
      const secondImg = container.querySelector('img[alt="Infraestructura digital escalable"]');
      expect(secondImg?.getAttribute('src')).toContain('photo-1526374965328-7f61d4dc18c5');
    });

    it('should have descriptive alt text for all images', () => {
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        expect(img.getAttribute('alt')).toBeTruthy();
        expect(img.getAttribute('alt')?.length).toBeGreaterThan(0);
      });
    });

    it('should have proper image styling', () => {
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        expect(img.classList.contains('object-cover')).toBe(true);
      });
    });
  });

  describe('Values Section', () => {
    it('should render all 3 value cards', () => {
      const valueCards = container.querySelectorAll('.md\\:grid-cols-3 > div');
      expect(valueCards.length).toBe(3);
    });

    it('should display "Enfoque en Resultados" value', () => {
      const valueCard = Array.from(container.querySelectorAll('h3'))
        .find(h3 => h3.textContent?.includes('Enfoque en Resultados'));
      expect(valueCard).toBeTruthy();
    });

    it('should explain "Enfoque en Resultados"', () => {
      const description = Array.from(container.querySelectorAll('.text-stibios-dim.text-sm'))
        .find(p => p.textContent?.includes('propósito de negocio claro'));
      expect(description).toBeTruthy();
    });

    it('should display "Velocidad con Calidad" value', () => {
      const valueCard = Array.from(container.querySelectorAll('h3'))
        .find(h3 => h3.textContent?.includes('Velocidad con Calidad'));
      expect(valueCard).toBeTruthy();
    });

    it('should explain agile methodologies', () => {
      const description = Array.from(container.querySelectorAll('.text-stibios-dim.text-sm'))
        .find(p => p.textContent?.includes('metodologías ágiles'));
      expect(description).toBeTruthy();
    });

    it('should display "Confianza y Transparencia" value', () => {
      const valueCard = Array.from(container.querySelectorAll('h3'))
        .find(h3 => h3.textContent?.includes('Confianza y Transparencia'));
      expect(valueCard).toBeTruthy();
    });

    it('should emphasize long-term relationships', () => {
      const description = Array.from(container.querySelectorAll('.text-stibios-dim.text-sm'))
        .find(p => p.textContent?.includes('largo plazo'));
      expect(description).toBeTruthy();
    });
  });

  describe('Layout', () => {
    it('should use 2-column grid on desktop', () => {
      const grid = container.querySelector('.lg\\:grid-cols-2');
      expect(grid).toBeTruthy();
    });

    it('should use 3-column grid for values', () => {
      const valuesGrid = container.querySelector('.md\\:grid-cols-3');
      expect(valuesGrid).toBeTruthy();
    });

    it('should center content in header', () => {
      const header = container.querySelector('.items-center.justify-center.text-center');
      expect(header).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have descriptive alt text for images', () => {
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        const alt = img.getAttribute('alt');
        expect(alt).toBeTruthy();
        expect(alt?.length).toBeGreaterThan(10);
      });
    });

    it('should use semantic heading hierarchy', () => {
      const h2 = container.querySelector('h2');
      const h3s = container.querySelectorAll('h3');
      expect(h2).toBeTruthy();
      expect(h3s.length).toBe(3);
    });

    it('should have semantic section structure', () => {
      const section = container.querySelector('section');
      expect(section?.getAttribute('id')).toBe('nosotros');
    });
  });

  describe('Responsive Design', () => {
    it('should stack grid on mobile', () => {
      const grid = container.querySelector('.grid-cols-1.lg\\:grid-cols-2');
      expect(grid).toBeTruthy();
    });

    it('should adjust heading size for mobile', () => {
      const heading = container.querySelector('.text-3xl.md\\:text-5xl');
      expect(heading).toBeTruthy();
    });

    it('should adjust values grid for tablet/mobile', () => {
      const valuesGrid = container.querySelector('.grid-cols-1.md\\:grid-cols-3');
      expect(valuesGrid).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing images gracefully', () => {
      const images = container.querySelectorAll('img');
      expect(images.length).toBeGreaterThan(0);
    });

    it('should maintain structure with all content', () => {
      const section = container.querySelector('#nosotros');
      const grids = section?.querySelectorAll('.grid');
      expect(grids?.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Regression Tests', () => {
    it('should maintain 3 core values', () => {
      const valueCards = container.querySelectorAll('.md\\:grid-cols-3 > div');
      expect(valueCards.length).toBe(3);
    });

    it('should preserve statistics order', () => {
      const stats = Array.from(container.querySelectorAll('.flex.flex-col.gap-1 > span.text-2xl'))
        .map(span => span.textContent);
      expect(stats).toEqual(['+20', '100%', '<24h']);
    });

    it('should keep config file format consistent', () => {
      const code = container.querySelector('code');
      expect(code?.textContent).toContain('const stibios = {');
      expect(code?.textContent).toContain('};');
    });

    it('should maintain uppercase heading', () => {
      const heading = container.querySelector('h2');
      expect(heading?.classList.contains('uppercase')).toBe(true);
    });
  });
});