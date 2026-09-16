/* Long-form bios for the individual pages. Cristina's and Sheryl's are adapted from the
   business profile; Juan's from his own notes of 2026-09-16. All three need the person's approval before launch. */
export type Bio = {
  slug: string;
  headline: string;
  paragraphs: string[];
  helps: string[];
  refuses?: string;
  story?: { h: string; body: string[] };
  languagesNote?: string;
};

export const bios: Record<string, Bio> = {
  'cristina-acosta': {
    slug: 'cristina-acosta',
    headline: 'Securing a mortgage does not have to be complicated.',
    paragraphs: [
      'I have been a licensed Mortgage Associate in Alberta since 2019. My approach is simple: a clear explanation of the process, at no cost to you for most residential mortgages, and a plan built around your goals rather than around one lender’s products.',
      'Through Enrich Mortgage Group and the Mortgage Alliance network I work with a wide range of lenders, which matters most for the clients I see every week: people on work permits or new permanent residents, employees, pensioners and business owners, first-time buyers, investors, and homeowners at renewal or looking to refinance.',
      'I work in English and Spanish. Whatever language we use, you will understand every step before you sign it.',
    ],
    helps: ['Newcomers on work permits, permanent residents and new citizens', 'First-time buyers and move-up buyers', 'Employees, pensioners and self-employed borrowers', 'Renewals, refinances and investment properties'],
  },
  'juan-acosta': {
    slug: 'juan-acosta',
    headline: 'I work for you, not for a bank, and I explain the numbers until they make sense.',
    paragraphs: [
      'I am a bilingual Mortgage Associate in Calgary, licensed in Alberta since 2024. Most of my clients are first-time buyers, self-employed people, and families who were declined once and told nothing useful about why.',
      'Before mortgages in Canada, I was an engineer and a trainer, and before that, back in Colombia, I spent years in real estate and mortgage finance. Numbers and teaching are what I am good at. A mortgage is both: a set of numbers most people never had explained to them properly.',
      'When I moved to Canada six years ago I saw the process from the other side, as a newcomer with no Canadian credit history and a lot of questions. That is why I chose the mortgage side of real estate. For most people it is the complex, difficult, scary part. For me it is the part I can make clear.',
      'I compare lenders to find the one that fits your situation, not just this week’s lowest rate. I work outside banking hours because that is when you are free. Text or call; both are fine.',
    ],
    helps: ['First-time buyers who want to understand the whole process from zero', 'Self-employed and commission income', 'Down payment strategies and investing in real estate', 'Anyone declined by a bank who wants a real answer', 'Clients who prefer to do this in Spanish'],
    refuses: 'I will not give advice I am not qualified to give, cut a corner to close a file, or win a deal at the cost of a client. There is a lot of confident nonsense about mortgages online. You will get the boring, accurate version from me.',
    story: { h: 'The file I think about most', body: [
      'A couple in their fifties, one running a small business from home, the other on long-term disability. They had been told buying again was impossible. It took eight months of preparation, more than a hundred calls, a lot of translation, and a few rides to appointments.',
      'When the approval came, they invited me to their new home for arepas and hot chocolate. "Juan, no lo puedo creer" is still my favourite sentence in this job.',
    ] },
    languagesNote: 'English and Spanish, including all your documents explained in Spanish.',
  },
  'sheryl-beaver': {
    slug: 'sheryl-beaver',
    headline: 'The right mortgage is about more than a competitive rate.',
    paragraphs: [
      'I am a Mortgage Associate in Calgary, licensed in Alberta since 2024. Finding the right mortgage means finding financing that fits your life now and supports where you want to be in five years, and that is what I focus on with every client.',
      'With access to a wide range of lenders through Enrich Mortgage Group and the Mortgage Alliance network, I help first-time buyers, self-employed professionals, homeowners refinancing or accessing their equity, and clients who need a flexible solution for an unusual situation.',
      'My approach is honest, personalized guidance with your best interests in mind. In most cases my services come at no cost to you, and any broker fee is always explained up front, in writing, before anything is submitted.',
    ],
    helps: ['First-time home buyers', 'Self-employed professionals', 'Refinancing and home equity', 'Flexible solutions for unusual situations'],
  },
};
