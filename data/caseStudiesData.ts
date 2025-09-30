// /data/caseStudiesData.ts

// -------- Types --------
export type CaseSection = {
    id: string;                 // anchor / id секції
    title: string;              // заголовок у контенті та в правому меню
    body?: string;              // короткий опис
    images?: string[];          // шляхи до картинок у /public
    layout?: "grid-2" | "grid-3" | "single"; // допоміжний лейаут для секції
  };
  
  export type CaseStudy = {
    slug: string;               // буде в URL: /case-studies/[slug]
    title: string;              // велика назва зверху
    subtitle?: string;          // підзаголовок
    description?: string;       // короткий опис під хедером
    coverImages: string[];      // 2-4 героїчні зображення
    sections: CaseSection[];    // секції сторінки
    cta?: {
      title: string;
      subtitle?: string;
      href?: string;            // куди вести кнопку CTA (наприклад #get-in-touch)
    };
  };
  
  // -------- Data (Sonum) --------
  // картинки покладемо у /public/projects/sonum/ (створимо на кроці з картинками)
  // якщо їх поки нема — код все одно збілдиться, просто зображення не відобразяться
  export const caseStudies: CaseStudy[] = [
    {
      slug: "sonum",
      title: "SONUM",
      subtitle: "Revolutionary Music App",
      description:
        "A concept iOS app focused on music discovery, social experience and lightning-fast interactions.",
      coverImages: [
        "/projects/sonum/hero-1.png",
        "/projects/sonum/hero-2.png",
        "/projects/sonum/hero-3.png",
      ],
      sections: [
        {
          id: "overview",
          title: "Overview",
          body:
            "We designed a clean, dark UI with accent orange to highlight primary actions and states.",
          images: ["/projects/sonum/overview-card.png"],
          layout: "single",
        },
        {
          id: "information-architecture",
          title: "Information Architecture",
          body:
            "We mapped core flows to reduce friction: onboarding → feed → search → playlist → profile.",
          images: [
            "/projects/sonum/ia-1.png",
            "/projects/sonum/ia-2.png",
          ],
          layout: "grid-2",
        },
        {
          id: "typography",
          title: "Typography",
          body:
            "Plus Jakarta Sans as the primary typeface. Emphasis on readability and scalable hierarchy.",
          images: ["/projects/sonum/typography.png"],
          layout: "single",
        },
        {
          id: "color-system",
          title: "Color System",
          body:
            "Dark gray palette with an orange accent for primary CTAs and strong visual feedback.",
          images: [
            "/projects/sonum/color-1.png",
            "/projects/sonum/color-2.png",
            "/projects/sonum/color-3.png",
          ],
          layout: "grid-3",
        },
        {
          id: "onboarding",
          title: "Onboarding",
          body:
            "Fast, focused onboarding with minimal steps to get users straight to music discovery.",
          images: [
            "/projects/sonum/onboarding-1.png",
            "/projects/sonum/onboarding-2.png",
            "/projects/sonum/onboarding-3.png",
          ],
          layout: "grid-3",
        },
        {
          id: "interact-with-friends",
          title: "Interact with friends",
          body:
            "Share tracks, comment and react on friends’ activity with a frictionless UI.",
          images: [
            "/projects/sonum/friends-1.png",
            "/projects/sonum/friends-2.png",
            "/projects/sonum/friends-3.png",
          ],
          layout: "grid-3",
        },
        {
          id: "create-playlists",
          title: "Create unique playlists",
          body:
            "Curate mixes with smart suggestions and quick actions right from the player.",
          images: [
            "/projects/sonum/playlist-1.png",
            "/projects/sonum/playlist-2.png",
            "/projects/sonum/playlist-3.png",
          ],
          layout: "grid-3",
        },
        {
          id: "profile",
          title: "Profile management",
          body:
            "A compact profile with history, favorites and privacy controls at your fingertips.",
          images: [
            "/projects/sonum/profile-1.png",
            "/projects/sonum/profile-2.png",
            "/projects/sonum/profile-3.png",
          ],
          layout: "grid-3",
        },
        {
          id: "search",
          title: "Search tracks effectively",
          body:
            "Smart search with recent queries, filters and instant previews to speed up discovery.",
          images: [
            "/projects/sonum/search-1.png",
            "/projects/sonum/search-2.png",
            "/projects/sonum/search-3.png",
          ],
          layout: "grid-3",
        },
        {
          id: "optimized-feed",
          title: "Optimized Feed",
          body:
            "Balanced content density for quick browsing, with clear affordances for actions.",
          images: [
            "/projects/sonum/feed-1.png",
            "/projects/sonum/feed-2.png",
            "/projects/sonum/feed-3.png",
          ],
          layout: "grid-3",
        },
      ],
      cta: {
        title: "Let’s talk",
        subtitle: "Tell us about your project and timeline. We’ll get back within 1 business day.",
        href: "#get-in-touch",
      },
    },
  ];
  
  // -------- Helpers --------
  export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((c) => c.slug === slug);
  }
  