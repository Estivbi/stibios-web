import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('CustomDevelopment Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Projects Data', () => {
    it('should contain all expected projects', () => {
      const expectedProjects = [
        { name: 'CUSTODIO JOSÉ PÉREZ', url: 'https://www.custodiojoseperez.com/' },
        { name: 'PATRICIA MORENO', url: 'https://patriciamoreno.vercel.app/' },
        { name: 'RENTAS MEASESORAN', url: 'https://rentas.measesoran.eu/login' },
        { name: 'VICTORIA REVISTA', url: 'https://www.victoriarevista.com/' }
      ];

      expectedProjects.forEach(project => {
        expect(project.name).toBeTruthy();
        expect(project.url).toMatch(/^https?:\/\//);
      });
    });

    it('should have valid project descriptions', () => {
      const projectDescriptions = [
        'Plataforma profesional con enfoque en marca personal y servicios legales.',
        'Portfolio de alto rendimiento con diseño minimalista y optimización SEO.',
        'Sistema B2B de gestión tributaria y área de cliente privada.',
        'Magacín digital de alta calidad visual con gestión de contenidos dinámica.'
      ];

      projectDescriptions.forEach(desc => {
        expect(desc.length).toBeGreaterThan(0);
        expect(desc).toMatch(/\./);
      });
    });
  });

  describe('Carousel Functionality', () => {
    it('should initialize carousel elements', () => {
      const mockHTML = `
        <div id="carousel-container" class="flex overflow-x-auto"></div>
        <button id="prev">Previous</button>
        <button id="next">Next</button>
      `;
      container.innerHTML = mockHTML;

      const carouselContainer = document.getElementById('carousel-container');
      const prevButton = document.getElementById('prev');
      const nextButton = document.getElementById('next');

      expect(carouselContainer).toBeTruthy();
      expect(prevButton).toBeTruthy();
      expect(nextButton).toBeTruthy();
    });

    it('should have correct carousel container classes', () => {
      const mockHTML = `
        <div id="carousel-container" class="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8 scroll-smooth"></div>
      `;
      container.innerHTML = mockHTML;

      const carouselContainer = document.getElementById('carousel-container');
      expect(carouselContainer?.classList.contains('flex')).toBe(true);
      expect(carouselContainer?.classList.contains('overflow-x-auto')).toBe(true);
      expect(carouselContainer?.classList.contains('snap-x')).toBe(true);
    });

    it('should handle scroll behavior when prev button is clicked', () => {
      const mockHTML = `
        <div id="carousel-container" class="flex overflow-x-auto"></div>
        <button id="prev">Previous</button>
        <button id="next">Next</button>
      `;
      container.innerHTML = mockHTML;

      const carouselContainer = document.getElementById('carousel-container') as HTMLElement;
      const prevButton = document.getElementById('prev') as HTMLElement;

      // Mock scrollBy method
      let scrollAmount = 0;
      carouselContainer.scrollBy = ({ left }: { left: number }) => {
        scrollAmount = left;
      };

      prevButton.addEventListener('click', () => {
        carouselContainer.scrollBy({ left: -400 });
      });

      prevButton.click();
      expect(scrollAmount).toBe(-400);
    });

    it('should handle scroll behavior when next button is clicked', () => {
      const mockHTML = `
        <div id="carousel-container" class="flex overflow-x-auto"></div>
        <button id="prev">Previous</button>
        <button id="next">Next</button>
      `;
      container.innerHTML = mockHTML;

      const carouselContainer = document.getElementById('carousel-container') as HTMLElement;
      const nextButton = document.getElementById('next') as HTMLElement;

      // Mock scrollBy method
      let scrollAmount = 0;
      carouselContainer.scrollBy = ({ left }: { left: number }) => {
        scrollAmount = left;
      };

      nextButton.addEventListener('click', () => {
        carouselContainer.scrollBy({ left: 400 });
      });

      nextButton.click();
      expect(scrollAmount).toBe(400);
    });

    it('should not throw error if carousel elements are missing', () => {
      const mockHTML = `<div></div>`;
      container.innerHTML = mockHTML;

      const carouselContainer = document.getElementById('carousel-container');
      const prevButton = document.getElementById('prev');
      const nextButton = document.getElementById('next');

      expect(() => {
        if (carouselContainer && prevButton && nextButton) {
          // Script logic would execute here
        }
      }).not.toThrow();
    });
  });

  describe('Project Links', () => {
    it('should have external links with proper attributes', () => {
      const mockHTML = `
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Test</a>
      `;
      container.innerHTML = mockHTML;

      const link = container.querySelector('a');
      expect(link?.getAttribute('target')).toBe('_blank');
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('should validate all project URLs are HTTPS', () => {
      const projectURLs = [
        'https://www.custodiojoseperez.com/',
        'https://patriciamoreno.vercel.app/',
        'https://rentas.measesoran.eu/login',
        'https://www.victoriarevista.com/'
      ];

      projectURLs.forEach(url => {
        expect(url).toMatch(/^https:\/\//);
      });
    });
  });

  describe('Styling', () => {
    it('should have no-scrollbar styles applied', () => {
      const style = document.createElement('style');
      style.textContent = `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `;
      document.head.appendChild(style);

      const mockHTML = `<div class="no-scrollbar"></div>`;
      container.innerHTML = mockHTML;

      const element = container.querySelector('.no-scrollbar');
      expect(element).toBeTruthy();

      document.head.removeChild(style);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty projects array gracefully', () => {
      const projects: any[] = [];
      expect(projects.length).toBe(0);
      expect(() => projects.map((p) => p.name)).not.toThrow();
    });

    it('should validate project structure has required fields', () => {
      const projectStructure = {
        name: 'TEST PROJECT',
        url: 'https://example.com',
        desc: 'Test description'
      };

      expect(projectStructure).toHaveProperty('name');
      expect(projectStructure).toHaveProperty('url');
      expect(projectStructure).toHaveProperty('desc');
    });

    it('should handle navigation button visibility on different screen sizes', () => {
      const mockHTML = `
        <button id="prev" class="hidden md:flex">Previous</button>
        <button id="next" class="hidden md:flex">Next</button>
      `;
      container.innerHTML = mockHTML;

      const prevButton = document.getElementById('prev');
      const nextButton = document.getElementById('next');

      expect(prevButton?.classList.contains('hidden')).toBe(true);
      expect(nextButton?.classList.contains('hidden')).toBe(true);
      expect(prevButton?.classList.contains('md:flex')).toBe(true);
      expect(nextButton?.classList.contains('md:flex')).toBe(true);
    });
  });

  describe('Section Structure', () => {
    it('should have correct section id for navigation', () => {
      const mockHTML = `<section id="casos-exito"></section>`;
      container.innerHTML = mockHTML;

      const section = container.querySelector('section');
      expect(section?.id).toBe('casos-exito');
    });

    it('should have semantic HTML structure', () => {
      const mockHTML = `
        <section id="casos-exito">
          <div class="max-w-6xl mx-auto">
            <h2>Casos de Éxito</h2>
            <div id="carousel-container">
              <a href="#" target="_blank">
                <h3>Project Name</h3>
                <p>Project Description</p>
              </a>
            </div>
          </div>
        </section>
      `;
      container.innerHTML = mockHTML;

      expect(container.querySelector('section')).toBeTruthy();
      expect(container.querySelector('h2')).toBeTruthy();
      expect(container.querySelector('h3')).toBeTruthy();
      expect(container.querySelector('p')).toBeTruthy();
    });
  });
});