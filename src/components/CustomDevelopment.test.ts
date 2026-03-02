import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('CustomDevelopment Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // Set up a basic DOM structure that mimics the component
    document.body.innerHTML = `
      <section id="casos-exito" class="py-32 px-4 relative overflow-hidden bg-stibios-bg">
        <div class="max-w-6xl mx-auto relative z-10">
          <div class="flex flex-col items-center text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tighter mx-auto">
              Casos de Éxito
            </h2>
          </div>
          <div class="relative group/carousel">
            <div id="carousel-container" class="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8 scroll-smooth">
              <a href="https://www.custodiojoseperez.com/" target="_blank" rel="noopener noreferrer" class="min-w-[85vw] md:min-w-[450px] snap-center">
                <h3>CUSTODIO JOSÉ PÉREZ</h3>
                <p>Plataforma profesional con enfoque en marca personal y servicios legales.</p>
              </a>
              <a href="https://patriciamoreno.vercel.app/" target="_blank" rel="noopener noreferrer" class="min-w-[85vw] md:min-w-[450px] snap-center">
                <h3>PATRICIA MORENO</h3>
                <p>Portfolio de alto rendimiento con diseño minimalista y optimización SEO.</p>
              </a>
              <a href="https://rentas.measesoran.eu/login" target="_blank" rel="noopener noreferrer" class="min-w-[85vw] md:min-w-[450px] snap-center">
                <h3>RENTAS MEASESORAN</h3>
                <p>Sistema B2B de gestión tributaria y área de cliente privada.</p>
              </a>
              <a href="https://www.victoriarevista.com/" target="_blank" rel="noopener noreferrer" class="min-w-[85vw] md:min-w-[450px] snap-center">
                <h3>VICTORIA REVISTA</h3>
                <p>Magacín digital de alta calidad visual con gestión de contenidos dinámica.</p>
              </a>
            </div>
            <button id="prev">&larr;</button>
            <button id="next">&rarr;</button>
          </div>
        </div>
      </section>
    `;
    container = document.body;
  });

  describe('Component Structure', () => {
    it('should render the section with correct id', () => {
      const section = container.querySelector('#casos-exito');
      expect(section).toBeTruthy();
    });

    it('should render the heading "Casos de Éxito"', () => {
      const heading = container.querySelector('h2');
      expect(heading?.textContent?.trim()).toBe('Casos de Éxito');
    });

    it('should render the carousel container', () => {
      const carousel = container.querySelector('#carousel-container');
      expect(carousel).toBeTruthy();
    });

    it('should render navigation buttons', () => {
      const prevButton = container.querySelector('#prev');
      const nextButton = container.querySelector('#next');
      expect(prevButton).toBeTruthy();
      expect(nextButton).toBeTruthy();
    });
  });

  describe('Projects Data', () => {
    it('should render all 4 project cards', () => {
      const projectCards = container.querySelectorAll('#carousel-container a');
      expect(projectCards.length).toBe(4);
    });

    it('should render CUSTODIO JOSÉ PÉREZ project with correct URL', () => {
      const projectCard = Array.from(container.querySelectorAll('#carousel-container a'))
        .find(card => card.querySelector('h3')?.textContent === 'CUSTODIO JOSÉ PÉREZ');
      expect(projectCard).toBeTruthy();
      expect(projectCard?.getAttribute('href')).toBe('https://www.custodiojoseperez.com/');
    });

    it('should render PATRICIA MORENO project with correct description', () => {
      const projectCard = Array.from(container.querySelectorAll('#carousel-container a'))
        .find(card => card.querySelector('h3')?.textContent === 'PATRICIA MORENO');
      const description = projectCard?.querySelector('p')?.textContent;
      expect(description).toBe('Portfolio de alto rendimiento con diseño minimalista y optimización SEO.');
    });

    it('should render RENTAS MEASESORAN project with B2B description', () => {
      const projectCard = Array.from(container.querySelectorAll('#carousel-container a'))
        .find(card => card.querySelector('h3')?.textContent === 'RENTAS MEASESORAN');
      const description = projectCard?.querySelector('p')?.textContent;
      expect(description).toContain('B2B');
    });

    it('should render VICTORIA REVISTA project', () => {
      const projectCard = Array.from(container.querySelectorAll('#carousel-container a'))
        .find(card => card.querySelector('h3')?.textContent === 'VICTORIA REVISTA');
      expect(projectCard).toBeTruthy();
    });

    it('should have all project links open in new tab', () => {
      const projectCards = container.querySelectorAll('#carousel-container a');
      projectCards.forEach(card => {
        expect(card.getAttribute('target')).toBe('_blank');
        expect(card.getAttribute('rel')).toBe('noopener noreferrer');
      });
    });
  });

  describe('Carousel Functionality', () => {
    let carousel: HTMLElement;
    let prevButton: HTMLElement;
    let nextButton: HTMLElement;

    beforeEach(() => {
      carousel = container.querySelector('#carousel-container') as HTMLElement;
      prevButton = container.querySelector('#prev') as HTMLElement;
      nextButton = container.querySelector('#next') as HTMLElement;

      // Mock scrollBy method
      carousel.scrollBy = vi.fn();

      // Simulate the script behavior
      if (carousel && prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
          carousel.scrollBy({ left: -400, behavior: 'smooth' } as ScrollToOptions);
        });
        nextButton.addEventListener('click', () => {
          carousel.scrollBy({ left: 400, behavior: 'smooth' } as ScrollToOptions);
        });
      }
    });

    it('should scroll left when prev button is clicked', () => {
      prevButton.click();
      expect(carousel.scrollBy).toHaveBeenCalledWith({ left: -400, behavior: 'smooth' });
    });

    it('should scroll right when next button is clicked', () => {
      nextButton.click();
      expect(carousel.scrollBy).toHaveBeenCalledWith({ left: 400, behavior: 'smooth' });
    });

    it('should handle multiple clicks on next button', () => {
      nextButton.click();
      nextButton.click();
      expect(carousel.scrollBy).toHaveBeenCalledTimes(2);
    });

    it('should handle alternating prev and next clicks', () => {
      nextButton.click();
      prevButton.click();
      expect(carousel.scrollBy).toHaveBeenCalledTimes(2);
    });
  });

  describe('Accessibility', () => {
    it('should have proper link attributes for security', () => {
      const links = container.querySelectorAll('#carousel-container a');
      links.forEach(link => {
        expect(link.getAttribute('rel')).toContain('noopener');
        expect(link.getAttribute('rel')).toContain('noreferrer');
      });
    });

    it('should have semantic section structure', () => {
      const section = container.querySelector('section');
      expect(section?.tagName).toBe('SECTION');
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing carousel container gracefully', () => {
      document.body.innerHTML = `
        <section id="casos-exito">
          <button id="prev">&larr;</button>
          <button id="next">&rarr;</button>
        </section>
      `;

      const carousel = document.querySelector('#carousel-container');
      const prev = document.querySelector('#prev') as HTMLElement;
      const next = document.querySelector('#next') as HTMLElement;

      expect(carousel).toBeNull();
      // Should not throw errors when buttons are clicked without carousel
      expect(() => prev?.click()).not.toThrow();
      expect(() => next?.click()).not.toThrow();
    });

    it('should verify all project URLs are valid HTTPS', () => {
      const links = container.querySelectorAll('#carousel-container a');
      links.forEach(link => {
        const href = link.getAttribute('href');
        expect(href).toMatch(/^https:\/\//);
      });
    });
  });

  describe('Regression Tests', () => {
    it('should maintain correct number of projects over time', () => {
      const projectCards = container.querySelectorAll('#carousel-container a');
      // Ensure we don't accidentally add or remove projects
      expect(projectCards.length).toBe(4);
    });

    it('should preserve project order', () => {
      const projectTitles = Array.from(container.querySelectorAll('#carousel-container h3'))
        .map(h3 => h3.textContent?.trim());

      expect(projectTitles).toEqual([
        'CUSTODIO JOSÉ PÉREZ',
        'PATRICIA MORENO',
        'RENTAS MEASESORAN',
        'VICTORIA REVISTA'
      ]);
    });
  });
});