/* Content for the seven situation pages. Written 2026-09-16 from the Phase 3 blueprint.
   Every figure that can change carries a "verify" note; QA checks each before launch. */
import type { SituationKey } from './site';

export type FAQ = { q: string; a: string };
export type Situation = {
  key: SituationKey;
  slug: string;
  title: string;          // H1
  metaTitle: string;
  description: string;    // meta
  eyebrow: string;
  intro: string;          // lead
  who: string[];          // "This is for you if"
  lenders: { h: string; items: string[] };   // what lenders look at
  different: { h: string; items: string[] }; // what we do differently
  example: { h: string; body: string[]; note: string };
  documents: string[];
  faqs: FAQ[];
  tool?: { href: string; label: string; blurb: string };
  leadFirst?: string[];   // associate first names to list first on CTA
  verify: string[];       // QA notes, not rendered to visitors
};

export const situations: Situation[] = [
  {
    key: 'first', slug: 'first-time-buyers',
    title: 'Your first home, explained before you sign anything.',
    metaTitle: 'First-Time Home Buyer Mortgages in Calgary',
    description: 'First-time buyer mortgages in Calgary and Alberta: down payment rules, the programs you can use, pre-approval, and what happens after your offer. Explained step by step.',
    eyebrow: 'First-time buyers',
    intro: 'You do not need to know how a mortgage works. You need someone who explains it as you go, tells you what you can afford before you fall for a listing, and stays on the phone after the offer is accepted.',
    who: ['You are renting and wondering whether buying is realistic yet.', 'You have savings but are not sure they count as a down payment.', 'You got a number from a bank app and do not trust it.', 'You want to understand the process, not just be told what to sign.'],
    lenders: { h: 'What lenders look at', items: [
      'Income they can verify: pay stubs and an employment letter for employees, two years of tax returns if you are self-employed or earn commission.',
      'Your down payment and where it came from. Ninety days of bank statements, plus paperwork for any gift.',
      'Credit history: score, how long you have had credit, and how you have handled it.',
      'Existing debts: car loans, student loans, cards and lines of credit, because they reduce what you can borrow.',
      'The property itself: price, type, and whether it qualifies for mortgage insurance.',
    ] },
    different: { h: 'What we do differently', items: [
      'We calculate what you can afford precisely, then explain how each factor moved the number, so you know what would change it.',
      'We tell you the minimum down payment and the real cost of mortgage insurance, so you can decide whether to wait for 20% or buy now.',
      'We compare lenders on prepayment terms and penalties, not only the rate, because most first mortgages are broken or changed before the term ends.',
      'We stay in the loop with your realtor and lawyer so conditions get met before they become a problem.',
    ] },
    example: { h: 'A worked example', body: [
      'A couple earning a combined $115,000 a year with a $600 car payment and $45,000 saved. At a 4.5% contract rate they must qualify at 6.5%, the stress test. That caps their mortgage near $430,000, so with their savings they can look at homes around $470,000.',
      'With 9.6% down, mortgage insurance adds about 4% to the loan. If they wait a year and reach 10%, the premium drops to 3.1% and the monthly payment falls by roughly $40. We show both paths and let them choose.',
    ], note: 'Illustrative numbers only, rounded, using the constants shown on our calculators. Not a quote or an approval.' },
    documents: ['Government photo ID', 'Two recent pay stubs and an employment letter', 'Last two years of T4s and Notices of Assessment', 'Ninety days of statements for your down payment accounts', 'Gift letter, if part of the down payment is a gift', 'Details of debts and monthly payments', 'For the property: the listing and the accepted offer, once you have one'],
    faqs: [
      { q: 'How much down payment do I need in Alberta?', a: 'At least 5% of the first $500,000 of the price and 10% of the portion above that, up to $1.5 million. From $1.5 million the minimum is 20%. Below 20% the mortgage must be insured, and the premium is added to the loan.' },
      { q: 'Can I use my RRSP or an FHSA?', a: 'Yes. The Home Buyers’ Plan lets a first-time buyer withdraw from an RRSP tax-free for a down payment and repay it over time, and a First Home Savings Account lets you save and withdraw tax-free. Limits change; we confirm the current ones with you.' },
      { q: 'Does a pre-approval guarantee my mortgage?', a: 'No. A pre-approval tells you what a lender is likely to approve based on your file today, and usually holds a rate for 90 to 120 days. The final approval depends on the property and on nothing changing in your finances.' },
      { q: 'Does applying hurt my credit?', a: 'One credit check through us is shared with the lenders we approach. You do not get a separate check for every lender. What hurts a score is many separate applications at different places over a short time.' },
      { q: 'What does it cost to work with you?', a: 'For most residential mortgages we are paid by the lender and there is no fee to you. When a file needs an alternative or private lender and a fee applies, we tell you the amount in writing before anything is submitted.' },
    ],
    tool: { href: '/calculators/affordability', label: 'Check your buying power', blurb: 'See the maximum price for your income and savings, and how the stress test changes it.' },
    verify: ['Home Buyers’ Plan withdrawal limit and FHSA limits for 2026', '30-year amortization eligibility for insured first-time buyers', 'GST rebate for first-time buyers on new homes: status in 2026'],
  },
  {
    key: 'new', slug: 'new-to-canada',
    title: 'New to Canada? Your file deserves a lender who reads it properly.',
    metaTitle: 'Mortgages for Newcomers to Canada in Calgary',
    description: 'Mortgages for newcomers in Calgary and Alberta on a work permit, permanent residency or recent citizenship. Which lenders accept your status, foreign income and thin credit. In English and Spanish.',
    eyebrow: 'New to Canada',
    intro: 'A short Canadian credit history is not a bad credit history, and income earned abroad is still income. Some lenders know that. We have been newcomers ourselves, and we know which ones.',
    who: ['You are on a work permit and were told to wait until you have PR.', 'You have PR or citizenship but only a year or two of Canadian credit.', 'Part of your down payment is coming from outside Canada.', 'You would rather go through this in Spanish.'],
    lenders: { h: 'What lenders look at', items: [
      'Your status: work permit, permanent residency or citizenship, and how long remains on a permit.',
      'Canadian income history, even a short one, and an employment letter.',
      'Credit: a Canadian report if you have one, and for some lenders an international credit report or alternative proof such as rent and utilities paid on time.',
      'Down payment and where it came from, including foreign accounts and the paper trail for transfers.',
      'Time in Canada: several newcomer programs require you to have arrived within the last five years.',
    ] },
    different: { h: 'What we do differently', items: [
      'We match your status and time in Canada to the lenders and insurer programs that actually accept them, instead of trying one bank and hoping.',
      'We tell you what an international credit report or a letter from your previous bank can do for your file, and help you get it.',
      'We prepare the down payment paper trail the way Canadian compliance rules require, so a transfer from abroad does not stall the approval.',
      'Meetings, documents and calls in English or Spanish. Cristina and Juan both speak Spanish.',
    ] },
    example: { h: 'A worked example', body: [
      'An engineer arrived 14 months ago on a work permit, earns $92,000, has one Canadian credit card and a $60,000 down payment, $40,000 of it transferred from home. A bank declined the file for thin credit.',
      'Under a newcomer program a lender accepted twelve months of on-time rent and utility payments in place of a long credit history, and the transfer records satisfied the down-payment rules. Approved for a $360,000 purchase with 5% down insured.',
    ], note: 'Illustrative only. Programs and their conditions change; we confirm the current rules for your file.' },
    documents: ['Passport and your permit, PR card or citizenship document', 'Employment letter and recent pay stubs', 'Canadian bank statements, ninety days', 'Records of any transfers from abroad, with the source account', 'International credit report or bank reference letter, if your Canadian history is short', 'Proof of rent and utility payments, for some programs'],
    faqs: [
      { q: 'Can I get a mortgage on a work permit?', a: 'Often, yes. Several lenders and both mortgage insurers have newcomer programs that accept work permit holders, usually with conditions on how long you have been in Canada and how much time remains on the permit.' },
      { q: 'How much down payment do newcomers need?', a: 'The same minimums as everyone else, starting at 5% under an insured program. Some lenders ask for more when the credit history is very short. Money from abroad is fine if the paper trail is complete.' },
      { q: 'I have no Canadian credit history. Is that the end?', a: 'No. Some programs accept alternative proof: twelve months of rent, utilities or phone bills paid on time, or a credit report from your home country. We tell you which applies.' },
      { q: 'Do you work in Spanish?', a: 'Yes. Cristina and Juan work in Spanish and English. Documents are still in English for the lender, and we explain every one of them.' },
    ],
    tool: { href: '/calculators/readiness', label: 'Check whether you are ready', blurb: 'Five questions about status, income, savings and timing, ending in a clear next step.' },
    leadFirst: ['Cristina', 'Juan'],
    verify: ['Newcomer program conditions: time-in-Canada limits and permit requirements for each insurer in 2026'],
  },
  {
    key: 'self', slug: 'self-employed',
    title: 'Your tax return is not your income. We show lenders the business behind it.',
    metaTitle: 'Self-Employed Mortgages in Calgary',
    description: 'Self-employed mortgages in Calgary and Alberta: how lenders read your income, two-year averages and add-backs, stated-income and alternative options, and what to do after a bank declines you.',
    eyebrow: 'Self-employed',
    intro: 'If you run a business, drive a truck, earn commission or contract, a bank often sees the smallest number on your return and stops there. A properly built file shows the whole picture, and there is a lender for almost every version of it.',
    who: ['You own a business or work for yourself and write off expenses.', 'Your income is commission, contract or seasonal.', 'You have been declined once and were not told why.', 'Your last two years look very different from each other.'],
    lenders: { h: 'What lenders look at', items: [
      'Two years of personal tax returns and Notices of Assessment, and for corporations the financial statements.',
      'The average of the two years, or the lower year if income fell sharply.',
      'Add-backs: some expenses, such as capital cost allowance and business use of home, can be added back to income by some lenders.',
      'Proof the business exists and is active: registration, GST number, contracts, invoices, business bank statements.',
      'For stated-income programs, whether the income you state is reasonable for your trade.',
    ] },
    different: { h: 'What we do differently', items: [
      'We calculate the income a lender is likely to use before we approach anyone, so the answer is not a surprise.',
      'We choose the route on purpose: a prime lender with add-backs, a stated-income program, or an alternative lender, with the cost of each shown side by side.',
      'When a bank has declined you, we find out the real reason and fix that, rather than sending the same file to the next bank.',
      'We work with your accountant on timing. Sometimes a mortgage is easier three months after year end than three months before.',
    ] },
    example: { h: 'A worked example', body: [
      'A contractor shows $58,000 and $71,000 of net income over two years after $30,000 a year in write-offs, and a bank declines a $450,000 purchase.',
      'One lender averages the two years and adds back $9,000 of eligible expenses, reaching $73,500. Another uses twelve months of business bank deposits under a stated-income program. The first route is cheaper; the second approves a higher amount. We show both, with the fees and rates of each, and the client chooses.',
    ], note: 'Illustrative only. Add-back rules and stated-income programs differ by lender and change over time.' },
    documents: ['Two years of personal T1 returns and Notices of Assessment', 'Corporate financial statements and T2, if incorporated', 'Business registration or articles, and GST number', 'Six to twelve months of business bank statements', 'Contracts or invoices showing ongoing work', 'Personal bank statements for the down payment'],
    faqs: [
      { q: 'How many years self-employed do I need?', a: 'Most prime lenders want two years of history. Some accept one year if you were previously employed in the same field. Alternative lenders can be more flexible.' },
      { q: 'What is a stated-income mortgage?', a: 'A program where the lender accepts a declared income that is reasonable for your business, supported by bank deposits and proof the business is active, rather than tax returns alone. It usually costs a little more.' },
      { q: 'Will an alternative lender cost a lot more?', a: 'Rates are higher and there is usually a lender fee. It can still be the right move for a year or two while the returns catch up, with a plan to move to a prime lender at renewal. We show the total cost before you decide.' },
      { q: 'I was declined by my bank. Does that hurt my next application?', a: 'The credit check may show, but a decline itself is not recorded. What matters is why. We find out and address it before anything else is submitted.' },
    ],
    tool: { href: '/calculators/self-employed', label: 'Estimate your lender income', blurb: 'Enter two years of net income and add-backs to see the figure a lender is likely to use.' },
    leadFirst: ['Juan'],
    verify: ['Add-back conventions currently accepted by the main insurers and lenders'],
  },
  {
    key: 'refi', slug: 'refinance',
    title: 'Equity is a tool. We show you the cost of each way to use it.',
    metaTitle: 'Refinance and Home Equity in Calgary',
    description: 'Refinancing, debt consolidation, HELOCs and home equity in Calgary and Alberta. What each option costs over time, what the penalty to break your mortgage is, and when waiting is smarter.',
    eyebrow: 'Refinance and equity',
    intro: 'You can refinance, open a line of credit, or take a second mortgage. Each one costs something different, and the lower monthly payment is rarely the whole story. We put the total cost of each option beside the others and let you decide.',
    who: ['You are paying high interest on cards or loans and own a home with equity.', 'You want to renovate, help a child with a down payment, or buy a rental.', 'Your circumstances changed: separation, a new business, a change in income.', 'Your current lender offered a refinance and you want a second opinion.'],
    lenders: { h: 'What lenders look at', items: [
      'Your home’s current value, usually confirmed by an appraisal, and your remaining balance.',
      'The limit: a refinance can go up to 80% of the value; a HELOC portion up to 65%.',
      'Your income and debts, qualified at the stress-test rate on the new, larger amount.',
      'What the money is for. Consolidating debt, renovating and investing are all acceptable reasons.',
      'The penalty to break your current mortgage, which the lender does not pay for you.',
    ] },
    different: { h: 'What we do differently', items: [
      'We calculate the penalty first. If it is large, we look at whether a blend, a second mortgage or waiting for renewal beats breaking the mortgage.',
      'We show the total cost over time, not just the new monthly payment, so a debt consolidation that stretches $30,000 over 25 years is seen for what it is.',
      'We compare a refinance against a HELOC honestly. A line of credit is flexible; it is also easy to run back up.',
      'We check whether your current lender will match, because sometimes staying is the cheaper answer.',
    ] },
    example: { h: 'A worked example', body: [
      'A homeowner has $38,000 on cards and a line at 20% and 9%, a home worth $620,000, a balance of $360,000 and two years left on a fixed term.',
      'Refinancing to $400,000 clears the debts and cuts total monthly payments by about $900. The penalty is roughly $4,800 and the new amortization is reset. We also show the alternative: keeping the mortgage, adding a $40,000 second mortgage for two years, then folding it in at renewal. Lower penalty, higher rate on the small piece. The homeowner chooses with the full numbers in front of them.',
    ], note: 'Illustrative only. Penalties depend on your lender’s formula and rates on the day.' },
    documents: ['Current mortgage statement and the penalty quote from your lender', 'Statements for the debts you want to consolidate', 'Income documents, as for a purchase', 'Property tax bill and home insurance', 'Appraisal, arranged once we have chosen the route'],
    faqs: [
      { q: 'How much can I refinance?', a: 'Up to 80% of your home’s appraised value, minus what you owe. On a $600,000 home with a $350,000 balance, that is up to $130,000.' },
      { q: 'What is the penalty to break my mortgage?', a: 'Three months of interest for most variable mortgages. For fixed mortgages it is the greater of three months’ interest and the interest rate differential, which each lender calculates its own way. Ask your lender for a written quote; we check it.' },
      { q: 'Is a HELOC better than a refinance?', a: 'It depends on how you will use the money. A HELOC suits money you draw and repay in stages, like a renovation. A refinance suits a one-time need with a fixed payment plan. We show both.' },
      { q: 'Should I consolidate debt into my mortgage?', a: 'Often it lowers the monthly cost and the interest rate, and often it lengthens how long you pay. We show the total interest each way, and suggest keeping the payment up after consolidating so the saving is real.' },
    ],
    tool: { href: '/calculators/penalty', label: 'Estimate your penalty', blurb: 'Three months’ interest versus interest rate differential, with the difference explained.' },
    verify: ['Refinance LTV limit and HELOC limit in current insurer and OSFI rules'],
  },
  {
    key: 'renew', slug: 'renewal',
    title: 'Your renewal letter is an offer. It is not the only one.',
    metaTitle: 'Mortgage Renewal and Switch in Calgary',
    description: 'Mortgage renewal in Calgary and Alberta: why the first offer is rarely the best, how switching lenders works, what it costs, and how to start 120 days before your date.',
    eyebrow: 'Renewal and switch',
    intro: 'Most people sign the renewal letter because it is easy. Lenders count on that. A renewal is the one moment you can change lender with no penalty, and the market is usually better than the letter.',
    who: ['Your mortgage renews within the next twelve months.', 'You received a letter with a rate and a signature line.', 'Your income or plans changed since you first signed.', 'You want to know whether switching is worth the paperwork.'],
    lenders: { h: 'What lenders look at', items: [
      'For a straight switch of the same balance: income, credit and the property, qualified at the stress-test rate if the mortgage is uninsured.',
      'Whether your mortgage is insured. Insured mortgages can switch with fewer hurdles and often better rates.',
      'Payment history on the current mortgage.',
      'Whether you want to change anything: amortization, amount, adding a HELOC.',
    ] },
    different: { h: 'What we do differently', items: [
      'We start 120 days out, because most lenders let you hold a rate for that long and the letter usually arrives later than that.',
      'We compare your lender’s offer against the market and send you the comparison in writing, including the case for staying.',
      'When switching wins, the new lender usually covers the legal and appraisal costs. We tell you exactly what, if anything, you pay.',
      'We ask what has changed. A renewal is a cheap moment to fix an amortization, add prepayment room or restructure debt.',
    ] },
    example: { h: 'A worked example', body: [
      'A $410,000 balance renews next spring. The lender’s letter offers 5.09% for five years. The best comparable offer in the market is 4.49%.',
      'Over the term the difference is roughly $11,000 in interest. The switch costs the homeowner nothing because the new lender covers the transfer fees. We show the numbers; the current lender is given a chance to match; the homeowner decides.',
    ], note: 'Illustrative only. Rates are examples, not offers.' },
    documents: ['Your renewal letter or current mortgage statement', 'Recent pay stubs and employment letter, or self-employed documents', 'Property tax bill and home insurance', 'Government photo ID'],
    faqs: [
      { q: 'When should I start?', a: 'About 120 days before the maturity date. Rates can be held for that long, and it leaves time for the lender to match or for a switch to complete without pressure.' },
      { q: 'Does switching lenders cost money?', a: 'For a straight switch, usually not. Most lenders cover the appraisal and transfer fees. If you increase the amount or change the structure, it becomes a refinance and legal fees apply. We tell you which one you are doing.' },
      { q: 'Can I switch if my income dropped?', a: 'Renewing with your current lender does not require re-qualifying. Switching does. If income is the issue, staying may be the right move and we will say so.' },
      { q: 'What if I am on a fixed rate that is now higher than the market?', a: 'Before renewal, breaking costs a penalty. We calculate whether paying it beats waiting. At renewal, there is no penalty, and that is the moment to move.' },
    ],
    tool: { href: '/calculators/renewal', label: 'Compare your renewal offer', blurb: 'Your letter’s rate against a market rate, over the whole term.' },
    verify: ['Current rules on stress-testing uninsured switches at renewal'],
  },
  {
    key: 'invest', slug: 'investment-properties',
    title: 'Cash flow first. Then the property.',
    metaTitle: 'Investment Property Mortgages in Calgary',
    description: 'Rental and investment property mortgages in Calgary and Alberta: down payment rules, how lenders count rental income, using your equity, and planning the second property before the first.',
    eyebrow: 'Investment properties',
    intro: 'A rental should carry itself. Before we look at the mortgage, we look at whether the numbers work, because a lender will, and because you will be living with them for years.',
    who: ['You want to buy your first rental property.', 'You own one and want to know how the next one gets financed.', 'You are thinking of using your home’s equity as the down payment.', 'You want to keep a home you are moving out of and rent it.'],
    lenders: { h: 'What lenders look at', items: [
      'Down payment: at least 20% for a non-owner-occupied rental. Mortgage insurance is not available.',
      'Rental income: most lenders count 50% to 80% of it, or use a rental offset, and they want a lease or a market rent appraisal.',
      'Your own income and debts, because the rental rarely qualifies on its own.',
      'Number of units and whether you will live in one. Owner-occupied two to four unit buildings can qualify with less down.',
      'How many rentals you already own. Some lenders cap the count.',
    ] },
    different: { h: 'What we do differently', items: [
      'We run the cash flow with real Calgary or Edmonton taxes, insurance and vacancy before we run the qualification.',
      'We choose the lender by how they treat rental income, which changes what you qualify for by tens of thousands.',
      'We plan the portfolio: which lender for property one so property two is still possible.',
      'We explain the equity route honestly, including the risk of borrowing the down payment.',
    ] },
    example: { h: 'A worked example', body: [
      'A $380,000 duplex unit rents for $2,100. One lender adds 50% of the rent to income; another uses an 80% rental offset against the payment. For a buyer earning $95,000 with a $200,000 balance on their own home, the second lender approves about $60,000 more.',
      'Taxes, insurance, condo fees and a 4% vacancy allowance leave the unit roughly cash-flow neutral at a 4.6% rate with 20% down. We show that before the offer, not after.',
    ], note: 'Illustrative only. Lender rental-income policies differ and change.' },
    documents: ['Income documents, as for a purchase', 'Current mortgage statements and property tax bills for properties you own', 'Leases for existing rentals', 'For the new property: the listing, the offer and the lease or a market rent letter', 'Down payment statements, ninety days'],
    faqs: [
      { q: 'How much down payment do I need for a rental?', a: 'At least 20% if you will not live there. If you buy a two to four unit property and live in one unit, insured financing with less down can be possible.' },
      { q: 'Can I use my home equity for the down payment?', a: 'Yes, through a refinance or a HELOC on your home. It works, and it means the whole purchase is borrowed. We show the combined payment so the decision is clear.' },
      { q: 'Will the rent count as income?', a: 'Partly. Lenders use a percentage of it or offset it against the new payment. The method makes a big difference, and choosing the lender for it is a large part of our job.' },
    ],
    tool: { href: '/calculators/payment', label: 'Run the payment', blurb: 'The mortgage payment at 20% down. The rental cash-flow tool follows after launch.' },
    verify: ['Rental income treatment ranges across lenders in 2026'],
  },
  {
    key: 'commercial', slug: 'commercial',
    title: 'Commercial financing, with the right partner leading when it matters.',
    metaTitle: 'Commercial Mortgages in Calgary',
    description: 'Commercial mortgages in Calgary and Alberta: multi-unit, mixed-use and owner-occupied premises. We assess the file, explain what commercial lenders need, and coordinate with commercial specialists.',
    eyebrow: 'Commercial',
    intro: 'Commercial lending is its own world: different lenders, longer timelines, and underwriting built on the property’s income rather than yours. We assess the file, explain what will be asked, and bring in a commercial specialist to lead when the deal calls for one.',
    who: ['You own a business and want to buy the premises instead of renting.', 'You are looking at a five-plus unit residential building.', 'You are buying mixed-use or retail space as an investment.', 'You have been told your deal is "too commercial" for a residential mortgage.'],
    lenders: { h: 'What commercial lenders look at', items: [
      'The property’s net operating income and the debt service coverage it supports.',
      'Down payment of 25% to 35% or more, depending on property type and lender.',
      'The borrower: business financials, personal net worth, experience with similar properties.',
      'Environmental and building condition reports, appraisals and leases.',
      'Timelines of weeks, not days, and lender and legal fees that are higher than residential.',
    ] },
    different: { h: 'How we handle it', items: [
      'We start with a plain assessment: is this a residential file in disguise, a small commercial file, or a deal for a specialist?',
      'We explain the documents and fees before you spend money on reports.',
      'When a specialist should lead, we introduce a licensed commercial mortgage professional and stay involved so you are not starting over.',
      'For a five-plus unit residential building, we look at CMHC multi-unit programs, which can change the whole structure.',
    ] },
    example: { h: 'What the process looks like', body: [
      'A business owner wants to buy the $1.4 million building the business rents. We gather the business financials and the lease terms, run the coverage ratio, and it is a real commercial file.',
      'We introduce a commercial specialist, join the first meeting, and follow the file to funding. The owner has one point of contact who already knows the story.',
    ], note: 'Every commercial file is different; this shows the process, not an outcome.' },
    documents: ['Two to three years of business financial statements', 'Rent roll and leases for the property', 'Personal net worth statement', 'Purchase agreement and property details', 'Existing environmental or building reports, if any'],
    faqs: [
      { q: 'Do you arrange commercial mortgages yourselves?', a: 'We assess and coordinate. Files that fit a residential or small-commercial lender we handle; larger or more complex deals are led by a licensed commercial mortgage specialist we introduce and work alongside.' },
      { q: 'How much down payment does commercial need?', a: 'Usually 25% to 35%, sometimes more. CMHC-insured multi-unit residential programs can allow less for buildings of five or more units.' },
      { q: 'How long does it take?', a: 'Six to twelve weeks is common, because of appraisals, reports and lender committees. Start before you have a firm deadline.' },
    ],
    verify: ['Confirm with the broker how referral and co-handling of commercial files is described. Approved in concept 2026-09-16.'],
  },
];

export const bySlug = (slug: string) => situations.find((s) => s.slug === slug);
