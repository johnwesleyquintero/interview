export interface InterviewSection {
  id: string;
  title: string;
  target: string;
  question: string;
  content: ContentBlock[];
  keyPoints?: string[];
  alsoAnswers?: string[]; // NEW: Questions this section can also cover
  tools?: string[];       // NEW: Tools mentioned in this section
  metrics?: string[];     // NEW: Metrics/KPIs mentioned
}

export interface ContentBlock {
  type: 'text' | 'list' | 'highlight' | 'quote' | 'table';
  value: string | string[] | { headers: string[]; rows: string[][] };
}

export const sections: InterviewSection[] = [
  {
    id: 'career-story',
    title: 'Career Story',
    target: '60–90 seconds',
    question: '"Tell me about yourself."',
    alsoAnswers: [
      '"Why should we hire you?"',
      '"What makes you unique?"',
      '"Walk me through your resume."',
      '"What\'s your experience with Amazon?"',
      '"How did you get into e-commerce?"',
      '"What are your strengths?"',
    ],
    tools: ['Seller Central', 'Asana', 'Helium 10', 'Google Sheets', 'Sheetsytics'],
    metrics: ['200+ ASINs', '8 years experience', 'multi-marketplace'],
    content: [
      {
        type: 'text',
        value: "Sure. I've been working in Amazon and e-commerce operations for about eight years, starting in 2018.",
      },
      {
        type: 'text',
        value: 'I began my career as an **Amazon FBA Wholesale Buyer**, where I handled product sourcing, supplier management, inventory, FBA operations, and profitability analysis. That gave me a strong foundation in understanding the marketplace from the purchasing and product side.',
      },
      {
        type: 'text',
        value: 'I then moved into **Amazon Account Management**, managing Seller Central operations across multiple brands. I handled catalog management, flat files, listing optimization, inventory reconciliation, shipments, account health, Seller Support cases, and performance reporting.',
      },
      {
        type: 'text',
        value: 'I also worked with **Adorama** as a Marketplace Support Specialist, which strengthened my experience in high-volume troubleshooting, structured ticket workflows, resolving catalog and listing issues, and documenting effective resolutions and repeatable processes. I handled **50+ cases per week** while maintaining high quality scores.',
      },
      {
        type: 'text',
        value: 'After that, I joined **My Amazon Guy**, where I expanded into Amazon SEO, PPC, listing optimization, and keyword and competitor research across multiple client accounts. I used tools like **Helium 10, Jungle Scout, and Keepa** to inform strategy.',
      },
      {
        type: 'text',
        value: "Most recently, I worked as an **E-commerce Operations Manager**, managing Amazon, Shopify, Walmart, and eBay operations across a catalog of **200+ ASINs** while coordinating a small operations team of 3. I was responsible for **P&L oversight, inventory planning, and cross-functional coordination** with the warehouse, marketing, and customer service teams.",
      },
      {
        type: 'text',
        value: "Currently, I'm consulting on Amazon PPC projects and using automation, reporting, and dashboards to improve campaign performance and operational efficiency. I've built custom dashboards in **Google Sheets and Looker Studio** to track KPIs across multiple accounts.",
      },
      {
        type: 'highlight',
        value: "So overall, my background combines **hands-on Amazon operations, catalog management, SEO, PPC, troubleshooting, team leadership, and process improvement**. I enjoy taking ownership of day-to-day operations, solving problems when they come up, improving the process so those problems are less likely to happen again, and **coaching team members** to handle issues independently.",
      },
    ],
  },
  {
    id: 'day-to-day',
    title: 'Day-to-Day Routine',
    target: '45–60 seconds',
    question: '"What does your typical day look like?"',
    alsoAnswers: [
      '"How do you prioritize your work?"',
      '"How do you manage your time?"',
      '"How do you stay organized?"',
      '"What tools do you use daily?"',
      '"How do you handle multiple priorities?"',
      '"What does operational excellence look like to you?"',
    ],
    tools: ['Asana', 'Seller Central', 'Google Sheets', 'Slack', 'Helium 10'],
    metrics: ['Account Health score', 'ACOS', 'ROAS', 'conversion rate', 'stockout risk'],
    content: [
      {
        type: 'text',
        value: "My day-to-day routine depends on the brand and the priorities for that account, because not every e-commerce operation follows exactly the same workflow.",
      },
      {
        type: 'text',
        value: 'Normally, I start by checking our task board in **Asana** to see if there are any priority tasks, projects, or deadlines that need immediate attention. If there is a specific project or urgent issue, I prioritize that first. I use the **Eisenhower matrix** — urgent/important first, then scheduled deep work.',
      },
      {
        type: 'text',
        value: 'If there are no specific tasks requiring immediate attention, I go through my regular operational checks. I usually review **Amazon account health, listing status, inventory levels, orders and fulfillment, and notifications** for anything that may require action.',
      },
      {
        type: 'text',
        value: 'For catalog operations, I check for **suppressed listings, stranded inventory, listing errors, variation issues, pricing or content discrepancies**, and other catalog problems. If something needs correction, I investigate the cause and either resolve it directly or escalate it with the proper documentation.',
      },
      {
        type: 'text',
        value: 'I also monitor **sales and advertising performance** when PPC is part of my responsibilities. I look at metrics such as spend, sales, ACOS, ROAS, conversion, and search-term or keyword performance to identify anything unusual or opportunities for improvement.',
      },
      {
        type: 'text',
        value: 'For inventory, I check **stock levels, inbound shipments, sales velocity, and potential stockout risks**. I also follow up on discrepancies, damaged or lost inventory, and reimbursement issues when applicable.',
      },
      {
        type: 'text',
        value: 'Throughout the day, I communicate with the team via **Slack**, update task statuses in Asana, document important actions in our **SOP library**, and make sure anything requiring follow-up is properly tracked. I also have a **15-minute daily sync** with the team to align on priorities.',
      },
      {
        type: 'highlight',
        value: "So I would say my general routine is **check priorities → monitor the health of the operation → resolve issues → complete scheduled work → communicate with the team → document anything that needs follow-up**. The exact tasks change depending on the brand and what is currently happening in the account.",
      },
    ],
  },
  {
    id: 'star-apn',
    title: 'STAR — APN Suppression Case',
    target: '1–2 minutes',
    question: '"Tell me about a difficult or recurring Amazon problem you had to solve."',
    alsoAnswers: [
      '"Tell me about a recurring issue."',
      '"How do you troubleshoot Amazon issues?"',
      '"How do you improve processes?"',
      '"Give me an example of problem-solving."',
      '"How do you handle ambiguity?"',
      '"Tell me about a time you used data."',
      '"How do you work with other teams?"',
    ],
    tools: ['Voice of the Customer dashboard', 'Returns reports', 'Seller Central cases', 'A+ Content'],
    metrics: ['Listing reinstatement', 'Return rate reduction', 'Negative feedback reduction'],
    content: [
      {
        type: 'text',
        value: '**Situation:** We had several SIM-card ASINs getting suppressed because of listing-related issues, while we were also seeing negative feedback and returns from customers reporting that the SIM wasn\'t working. This was affecting **3 ASINs and about 15% of our monthly revenue** in that category.',
      },
      {
        type: 'text',
        value: '**Task:** My responsibility was to determine whether this was actually a product problem or a listing/customer-instruction problem, resolve the suppression, and prevent the issue from continuing. I had to coordinate with the **warehouse team, customer service, and our Amazon case management** to get a complete picture.',
      },
      {
        type: 'text',
        value: "**Action:** I started by reviewing the **Voice of the Customer dashboard and returns data** to identify patterns instead of treating each complaint separately. I pulled the last 90 days of data and looked for common themes.",
      },
      {
        type: 'text',
        value: "I noticed that many of the complaints were related to **APN configuration and activation** — not the product itself. The difficult part was validating the root cause because the information was spread across Amazon and our internal teams.",
      },
      {
        type: 'text',
        value: "I had to go back and forth with the warehouse to obtain the specific **return IDs** and have the returned units physically tested. I created a simple tracking sheet so the warehouse could log test results consistently.",
      },
      {
        type: 'text',
        value: "The warehouse confirmed that **over 80% of tested units were actually functional**. That pointed us toward a customer setup and instruction issue rather than a widespread hardware failure.",
      },
      {
        type: 'text',
        value: "I proposed adding a **second APN configuration image and an A+ module** to make the activation instructions clearer. After getting approval from the brand owner, I submitted an **Amazon Case with the supporting VOC, returns data, and warehouse verification**, along with the corrective actions we had taken.",
      },
      {
        type: 'text',
        value: "Once the listing was reinstated, I documented the resolution in our **SOP library** and created a repeatable case approach so that if the same issue appeared again, the team wouldn't have to start the investigation from zero. I also trained a team member on the process.",
      },
      {
        type: 'highlight',
        value: "**Result:** The affected listings were reinstated within 5 business days, sales recovered, and the recurring returns and negative feedback associated with the issue were **reduced by approximately 60%** over the next quarter. More importantly, we identified the underlying issue instead of repeatedly treating each suppression or customer complaint as a separate problem, and we turned the resolution into a documented process that the team could handle much faster in the future.",
      },
    ],
  },
  {
    id: 'star-listing',
    title: 'STAR — Listing Audit & Recreation',
    target: '1–2 minutes',
    question: '"Tell me about a time you improved or recreated a listing."',
    alsoAnswers: [
      '"How do you create a listing?"',
      '"How do you audit a listing?"',
      '"How do you improve a listing?"',
      '"When would you recreate a listing?"',
      '"How do you do keyword research?"',
      '"How do you optimize A+ Content?"',
      '"How do you handle bad reviews?"',
      '"How do you improve conversion rate?"',
      '"How do you use Helium 10?"',
      '"What\'s your SEO process?"',
      '"How do you optimize images?"',
      '"How do you write bullet points?"',
    ],
    tools: ['Helium 10 (Cerebro, Magnet, Scribbles, Frankenstein)', 'Amazon Search Box', 'Brand Analytics', 'A+ Content Manager', 'Image optimization tools'],
    metrics: ['Session percentage', 'Unit session percentage', 'Conversion rate', 'Organic rank', 'Review rating', 'Return rate'],
    content: [
      {
        type: 'text',
        value: '**Situation:** We had a Seculife GPS tracker ASIN for kids that was stuck at **2.6 stars with 210+ reviews**. The listing had poor-quality images, weak bullet points, no A+ Content, and was ranking on page 4 for our main keywords like \'GPS tracker for kids\' and \'kids location tracker\'. Sales had dropped **55% over 6 months** and the return rate was **22%** — well above the Electronics category average of 10%.',
      },
      {
        type: 'text',
        value: '**Task:** I needed to determine whether we could rehabilitate this listing or if we should recreate it as a new ASIN. The brand owner wanted to save the reviews, but the negative feedback was overwhelming — customers were complaining about **difficult app setup, poor battery life, inaccurate location tracking, and unclear instructions about the SIM card requirement and monthly subscription fees**.',
      },
      {
        type: 'text',
        value: "**Action — The Audit:** I started with a full listing audit using **Helium 10's Listing Analyzer**. I checked keyword coverage, image quality, bullet point structure, and conversion metrics. I also pulled the **Voice of the Customer dashboard** and analyzed the top 50 negative reviews to identify patterns.",
      },
      {
        type: 'text',
        value: "The data was clear: **the reviews were beyond salvation**. Even if we fixed the product issues, the 2.6-star rating would continue to suppress conversion. I recommended we **close the old ASIN and launch a new one** with improved packaging, a quick-start guide, better app onboarding, and a completely optimized listing that clearly communicated the SIM card and subscription requirements upfront.",
      },
      {
        type: 'text',
        value: "**Keyword Research:** I used **Helium 10 Cerebro** to reverse-ASIN our top 3 competitors in the GPS tracker category and extract their highest-converting keywords. I then used **Magnet** to expand the keyword list and **Amazon's Search Box** to find long-tail variations like 'GPS tracker for elderly parents' and 'real-time GPS tracker no monthly fee' (even though we did have a subscription). I ran everything through **Frankenstein** to remove duplicates and **Scribbles** to ensure we hit all high-value keywords in the title, bullets, and backend.",
      },
      {
        type: 'text',
        value: "**Title & Bullets:** I wrote a keyword-optimized title following Amazon's style guide — brand + key feature + target user + main benefit. For bullets, I used the **feature-benefit-proof structure**: each bullet started with a feature in caps, explained the benefit, and included social proof or specifications. I made sure to address the top 3 customer pain points from the old reviews: app setup difficulty, battery life expectations, and subscription transparency.",
      },
      {
        type: 'text',
        value: "**Images:** I worked with the design team to create **7 high-quality images**: main image on white background showing the tracker device, lifestyle images showing a parent using the app to check their child's location, infographic images highlighting key features like real-time tracking, geofencing, and SOS button, and a comparison chart showing different Seculife models. I also added **alt text to every image** using relevant keywords — this is often overlooked but helps with Amazon's A9 algorithm.",
      },
      {
        type: 'text',
        value: "**A+ Content:** I built a complete A+ Content module with **comparison charts, lifestyle imagery, and brand story**. I used the **3-module layout**: brand story at the top explaining Seculife's mission to keep families connected, feature highlights in the middle showing real-world use cases (kids at school, elderly parents living alone), and comparison chart at the bottom comparing Seculife to competitors. I made sure the A+ Content reinforced the key selling points and addressed customer objections about subscription costs by emphasizing the value of peace of mind.",
      },
      {
        type: 'text',
        value: "**Backend Search Terms:** I filled all 250 bytes with relevant keywords that weren't already in the title or bullets. I avoided repetition, used singular forms, and included common misspellings and Spanish translations since we were selling in the US marketplace. I also included related terms like 'child locator', 'senior tracker', and 'family safety'.",
      },
      {
        type: 'text',
        value: "**Launch Strategy:** For the first 30 days, I ran an aggressive **PPC campaign** with automatic and manual campaigns targeting our top 20 keywords. I also set up a **Vine enrollment** to get early reviews and used **Lightning Deals** to drive initial sales velocity. I monitored the **session percentage and unit session percentage** daily to track conversion.",
      },
      {
        type: 'highlight',
        value: "**Result:** Within 90 days, the new ASIN reached **4.4 stars with 92 reviews**, conversion rate improved from **7% to 16%**, and we were ranking on **page 1 for 14 of our top 20 keywords** including 'GPS tracker for kids' and 'GPS tracker for elderly'. Sales increased **380% compared to the old ASIN's final month**, and the return rate dropped to **8%** — below the Electronics category average. The listing audit and recreation process became a template we used for 3 other underperforming Seculife ASINs that quarter.",
      },
    ],
    keyPoints: [
      'Know when to improve vs. recreate — if reviews are below 3 stars and return rate is 2x category average, recreation is often the better choice.',
      'Use Helium 10 Cerebro for competitive keyword research and Magnet for keyword expansion.',
      'Amazon Search Box autocomplete is a goldmine for long-tail keywords.',
      'Alt text on images is often overlooked but helps with A9 algorithm indexing.',
      'A+ Content should reinforce key selling points and address customer objections, not just look pretty.',
      'Launch strategy matters — PPC, Vine, and promotions in the first 30 days are critical for ranking.',
      'For technical products like GPS trackers, be transparent about requirements (SIM cards, subscriptions, app setup) in the listing to reduce returns.',
    ],
  },
  {
    id: 'star-failure',
    title: 'STAR — Failure & Learning Case',
    target: '1–2 minutes',
    question: '"Tell me about a time you failed or made a mistake."',
    alsoAnswers: [
      '"What\'s your biggest weakness?"',
      '"Tell me about a time you learned something."',
      '"How do you handle mistakes?"',
      '"How do you deal with pressure?"',
      '"Tell me about a difficult decision."',
    ],
    tools: ['Inventory planning spreadsheets', 'Sales velocity reports', 'Replenishment alerts'],
    metrics: ['Stockout duration', 'Lost sales', 'Recovery time'],
    content: [
      {
        type: 'text',
        value: '**Situation:** Early in my role as an E-commerce Operations Manager for Seculife GPS trackers, I was responsible for inventory planning for our best-selling kids GPS tracker ASIN. I had been managing replenishment manually using spreadsheets and sales velocity calculations.',
      },
      {
        type: 'text',
        value: '**Task:** I needed to ensure we had enough stock to cover the upcoming promotional period — a Lightning Deal that had been approved for the following month.',
      },
      {
        type: 'text',
        value: "**Action — and where I went wrong:** I calculated the replenishment based on the **previous 30 days of sales velocity**, but I didn't properly account for the **projected lift from the Lightning Deal**. I also didn't factor in the **3–4 week lead time for manufacturing and shipping** from our supplier.",
      },
      {
        type: 'text',
        value: "When the Lightning Deal went live, we **stocked out within the first 3 days**. The listing went inactive, we lost the Buy Box, and it took about **2 weeks to recover organic ranking** after the new inventory arrived. The estimated lost sales were significant — roughly **$15,000–$20,000 in revenue**.",
      },
      {
        type: 'text',
        value: "**What I did immediately:** I owned the mistake. I informed my manager and the brand owner the same day, explained what happened, and presented a recovery plan — expedited shipping for the next shipment, a temporary PPC pause to conserve budget, and a plan to rebuild the listing's momentum.",
      },
      {
        type: 'text',
        value: "**What I learned and changed:** I built a proper **replenishment planning template** that factors in promotional calendars, lead times, safety stock, and seasonal trends. I also set up **automated alerts in Google Sheets** that flag when stock will run out within 30, 45, and 60 days. I shared this template with the team so it became a standard process.",
      },
      {
        type: 'highlight',
        value: "**Result & Reflection:** We never had a promotional stockout again after implementing the new process. The mistake was painful, but it taught me two important things: first, **always plan for the promotional scenario, not just the baseline**; and second, **a mistake is only a failure if you don't build a system to prevent it from happening again**. That experience fundamentally changed how I approach inventory planning, and the template I built is still in use today.",
      },
    ],
  },
  {
    id: 'fba-walkthrough',
    title: 'FBA Shipment Walkthrough',
    target: '60–90 seconds',
    question: '"Can you walk me through how you handle an FBA shipment?"',
    alsoAnswers: [
      '"How do you manage FBA inventory?"',
      '"What do you do when Amazon receives the wrong quantity?"',
      '"How do you handle inventory discrepancies?"',
      '"How do you coordinate with the warehouse?"',
      '"How do you handle fulfillment issues?"',
      '"Tell me about your experience with logistics."',
    ],
    tools: ['Seller Central', 'Shipping templates', 'Bills of lading', 'Reconciliation reports'],
    metrics: ['Units shipped vs. received', 'Discrepancy rate', 'Reimbursement recovery'],
    content: [
      {
        type: 'text',
        value: "Sure. The exact workflow can vary depending on the brand and its internal process, but generally I start by confirming what inventory needs to be replenished based on **stock levels, sales velocity, and the planned replenishment quantity**. I use a replenishment template that factors in **lead times, safety stock, and any upcoming promotions**.",
      },
      {
        type: 'text',
        value: "Once the products and quantities are confirmed, I create the shipment in **Amazon Seller Central** and make sure the correct SKUs, quantities, fulfillment requirements, and shipment details are reflected accurately. I double-check the **ship-to address, FBA prep requirements, and labeling specs**.",
      },
      {
        type: 'text',
        value: "I then prepare the shipment information for the warehouse or fulfillment team, including the required labels and packing or shipping instructions. Before the shipment leaves, I verify the quantities and documentation against the Seller Central shipment — I use a **packing checklist** to make sure nothing is missed.",
      },
      {
        type: 'text',
        value: "After the shipment is handed over to the carrier, I monitor the shipment status and tracking information. Once Amazon receives it, I check whether the inventory is fully received and available — I typically check within **48–72 hours of delivery confirmation**.",
      },
      {
        type: 'text',
        value: "If there is a discrepancy — for example, the number of units shipped doesn't match the number Amazon received — I reconcile the shipment records, gather the supporting documentation (**bill of lading, packing slip, proof of delivery**), and investigate whether it's a receiving issue, carrier issue, or inventory discrepancy. If necessary, I open an Amazon Case or pursue the appropriate reimbursement process.",
      },
      {
        type: 'highlight',
        value: "So my general approach is **plan the replenishment → create and verify the shipment → coordinate fulfillment → track the inbound → reconcile what Amazon receives → resolve any discrepancies**. I've managed this process for shipments ranging from **small LTL loads to full container shipments**, and the key is always documentation and follow-through.",
      },
    ],
  },
  {
    id: 'commercial-optimization',
    title: 'Commercial Optimization',
    target: '60–90 seconds',
    question: '"How do you improve Amazon sales and visibility?"',
    alsoAnswers: [
      '"How do you improve Amazon SEO?"',
      '"How do you optimize PPC?"',
      '"How do SEO and PPC work together?"',
      '"How do you find good keywords?"',
      '"How do you use PPC data?"',
      '"How do you improve listing conversion?"',
      '"How do you set up an Amazon promotion?"',
      '"How do you decide what products to promote?"',
      '"How do you prepare for Prime Day?"',
      '"How do you measure a promotion?"',
      '"How do you avoid stockouts during promotions?"',
      '"How do you plan seasonal campaigns?"',
      '"How do you use data to make decisions?"',
    ],
    tools: ['Helium 10', 'Jungle Scout', 'Brand Analytics', 'Search Query Performance', 'Advertising Console'],
    metrics: ['ACOS', 'ROAS', 'TACOS', 'conversion rate', 'session count', 'unit session percentage', 'organic rank'],
    content: [
      {
        type: 'text',
        value: "I see **SEO, PPC, and promotions as complementary levers** rather than completely separate activities. They should be planned together, not in silos.",
      },
      {
        type: 'text',
        value: "For SEO, I focus on **relevance, keyword coverage, listing quality, and conversion factors**. I use tools like **Helium 10, Brand Analytics, and Search Query Performance** to identify high-value keywords and gaps in the listing. I look at title, bullets, description, backend search terms, and A+ Content as a unified system.",
      },
      {
        type: 'text',
        value: "For PPC, I use campaign and search-term data to understand which keywords and products are generating traffic, clicks, and sales. I monitor **ACOS, ROAS, TACOS, and conversion rate** at the campaign and keyword level. I segment campaigns by match type, product, and objective (launch, defense, profitability).",
      },
      {
        type: 'text',
        value: "PPC can also provide useful market data that can inform SEO. For example, if certain search terms are consistently generating relevant traffic and conversions, I can evaluate whether those terms are properly represented in the listing and whether the product is competitive for those searches. I regularly **export search term reports and cross-reference them with listing content**.",
      },
      {
        type: 'text',
        value: "At the same time, I don't assume that more traffic automatically means better performance. If a product is receiving clicks but not converting, I would investigate the **listing content, images, offer, pricing, reviews, and overall customer experience**. Conversion rate is often the highest-leverage metric to improve.",
      },
      {
        type: 'text',
        value: "Promotions are another lever I consider when the objective and economics make sense. Before setting one up, I would confirm the **inventory position, margin, current price, product eligibility, and purpose of the promotion**. Then I would select the appropriate promotion type and configure the eligible products, offer or discount, scheduling, and any applicable conditions in Seller Central.",
      },
      {
        type: 'text',
        value: "For major shopping periods, I would also coordinate promotions with the **PPC strategy, inventory position, and promotional calendar** so we're not driving additional demand without having enough inventory or a suitable offer. I build a **pre-event checklist** covering inventory, PPC budget, promotion setup, and creative assets.",
      },
      {
        type: 'text',
        value: "After launch, I monitor the results against the objective. I look beyond sales volume and consider **spend, conversion, profitability, inventory movement, and whether the promotion is producing useful incremental demand**. I track **TACOS** (total advertising cost of sales) to understand the true advertising impact across organic and paid.",
      },
      {
        type: 'highlight',
        value: "So my overall approach is: **Improve relevance → bring qualified traffic → use promotions strategically → monitor conversion and profitability → use the resulting data to improve the next decision.** It's a continuous loop, not a one-time project.",
      },
    ],
    keyPoints: [
      'PPC does not automatically cause better organic ranking.',
      'PPC provides search-term, click, conversion, and product-performance data that can inform listing and SEO decisions.',
      'SEO, PPC, promotions, inventory, pricing, and conversion should be viewed as interconnected parts of commercial optimization.',
      'Always track TACOS, not just ACOS, to understand total advertising impact.',
      'Conversion rate is often the highest-leverage metric — fix it before scaling traffic.',
    ],
  },
];

export interface FrameworkEntry {
  question: string;
  response: string;
  category?: 'behavioral' | 'operational' | 'commercial' | 'general';
}

export const frameworkTable: FrameworkEntry[] = [
  // General / Introduction
  { question: '"Tell me about yourself."', response: 'Career Story', category: 'general' },
  { question: '"Why should we hire you?"', response: 'Career Story', category: 'general' },
  { question: '"What makes you unique?"', response: 'Career Story', category: 'general' },
  { question: '"Walk me through your resume."', response: 'Career Story', category: 'general' },
  { question: '"What are your strengths?"', response: 'Career Story', category: 'general' },
  
  // Operational
  { question: '"What do you do every day?"', response: 'Day-to-Day Routine', category: 'operational' },
  { question: '"How do you prioritize your work?"', response: 'Day-to-Day Routine', category: 'operational' },
  { question: '"How do you manage your time?"', response: 'Day-to-Day Routine', category: 'operational' },
  { question: '"How do you stay organized?"', response: 'Day-to-Day Routine', category: 'operational' },
  { question: '"What tools do you use daily?"', response: 'Day-to-Day Routine', category: 'operational' },
  { question: '"How do you manage Amazon operations?"', response: 'Day-to-Day Routine + Career Story', category: 'operational' },
  { question: '"How do you handle multiple priorities?"', response: 'Day-to-Day Routine', category: 'operational' },
  
  // Behavioral — Success
  { question: '"Tell me about a difficult problem."', response: 'APN Evidence (STAR)', category: 'behavioral' },
  { question: '"Tell me about a recurring issue."', response: 'APN Evidence (STAR)', category: 'behavioral' },
  { question: '"How do you troubleshoot Amazon issues?"', response: 'APN Evidence + Day-to-Day', category: 'behavioral' },
  { question: '"How do you improve processes?"', response: 'APN Evidence + Career Story', category: 'behavioral' },
  { question: '"Give me an example of problem-solving."', response: 'APN Evidence (STAR)', category: 'behavioral' },
  { question: '"How do you handle ambiguity?"', response: 'APN Evidence (STAR)', category: 'behavioral' },
  { question: '"Tell me about a time you used data."', response: 'APN Evidence (STAR)', category: 'behavioral' },
  { question: '"How do you work with other teams?"', response: 'APN Evidence + Day-to-Day', category: 'behavioral' },
  
  // Listing & SEO
  { question: '"How do you create a listing?"', response: 'Listing Audit STAR', category: 'operational' },
  { question: '"How do you audit a listing?"', response: 'Listing Audit STAR', category: 'operational' },
  { question: '"How do you improve a listing?"', response: 'Listing Audit STAR', category: 'operational' },
  { question: '"When would you recreate a listing?"', response: 'Listing Audit STAR', category: 'operational' },
  { question: '"How do you do keyword research?"', response: 'Listing Audit STAR + Commercial Opt.', category: 'operational' },
  { question: '"How do you optimize A+ Content?"', response: 'Listing Audit STAR', category: 'operational' },
  { question: '"How do you handle bad reviews?"', response: 'Listing Audit STAR', category: 'operational' },
  { question: '"How do you improve conversion rate?"', response: 'Listing Audit STAR + Commercial Opt.', category: 'operational' },
  { question: '"How do you use Helium 10?"', response: 'Listing Audit STAR', category: 'operational' },
  { question: '"What\'s your SEO process?"', response: 'Listing Audit STAR + Commercial Opt.', category: 'operational' },
  { question: '"How do you optimize images?"', response: 'Listing Audit STAR', category: 'operational' },
  { question: '"How do you write bullet points?"', response: 'Listing Audit STAR', category: 'operational' },
  
  // Behavioral — Failure / Learning
  { question: '"Tell me about a time you failed."', response: 'Failure & Learning (STAR)', category: 'behavioral' },
  { question: '"What\'s your biggest weakness?"', response: 'Failure & Learning (STAR)', category: 'behavioral' },
  { question: '"Tell me about a time you learned something."', response: 'Failure & Learning (STAR)', category: 'behavioral' },
  { question: '"How do you handle mistakes?"', response: 'Failure & Learning (STAR)', category: 'behavioral' },
  { question: '"How do you deal with pressure?"', response: 'Failure & Learning (STAR)', category: 'behavioral' },
  { question: '"Tell me about a difficult decision."', response: 'Failure & Learning (STAR)', category: 'behavioral' },
  
  // FBA / Fulfillment
  { question: '"How do you handle an FBA shipment?"', response: 'FBA Operational Walkthrough', category: 'operational' },
  { question: '"How do you manage FBA inventory?"', response: 'FBA Walkthrough + Day-to-Day', category: 'operational' },
  { question: '"What do you do when Amazon receives the wrong quantity?"', response: 'FBA Walkthrough + APN-style', category: 'operational' },
  { question: '"How do you handle inventory discrepancies?"', response: 'FBA Walkthrough', category: 'operational' },
  { question: '"How do you coordinate with the warehouse?"', response: 'FBA Walkthrough + Experience', category: 'operational' },
  { question: '"How do you handle fulfillment issues?"', response: 'Day-to-Day + FBA Walkthrough', category: 'operational' },
  { question: '"Tell me about your experience with logistics."', response: 'FBA Walkthrough', category: 'operational' },
  
  // Commercial / SEO / PPC
  { question: '"How do you improve Amazon SEO?"', response: 'Commercial Optimization', category: 'commercial' },
  { question: '"How do you optimize PPC?"', response: 'Commercial Optimization', category: 'commercial' },
  { question: '"How do SEO and PPC work together?"', response: 'Commercial Optimization', category: 'commercial' },
  { question: '"How do you find good keywords?"', response: 'Commercial Optimization', category: 'commercial' },
  { question: '"How do you use PPC data?"', response: 'Commercial Optimization', category: 'commercial' },
  { question: '"How do you improve listing conversion?"', response: 'Commercial Optimization', category: 'commercial' },
  { question: '"How do you set up an Amazon promotion?"', response: 'Commercial Optimization', category: 'commercial' },
  { question: '"How do you decide what products to promote?"', response: 'Commercial Optimization', category: 'commercial' },
  { question: '"How do you prepare for Prime Day?"', response: 'Commercial Opt. + FBA/Inventory', category: 'commercial' },
  { question: '"How do you measure a promotion?"', response: 'Commercial Optimization', category: 'commercial' },
  { question: '"How do you avoid stockouts during promotions?"', response: 'Commercial Opt. + Failure case', category: 'commercial' },
  { question: '"How do you plan seasonal campaigns?"', response: 'Commercial Opt. + Operations', category: 'commercial' },
  { question: '"How do you use data to make decisions?"', response: 'Commercial Optimization', category: 'commercial' },
  
  // Catch-all
  { question: '"Give me an example."', response: 'Select most relevant evidence/story', category: 'general' },
];

export interface PromoQuestion {
  question: string;
  response: string;
}

export const promoQuestions: PromoQuestion[] = [
  { question: '"How do you improve Amazon SEO?"', response: 'Commercial Optimization' },
  { question: '"How do you optimize PPC?"', response: 'Commercial Optimization' },
  { question: '"How are SEO and PPC related?"', response: 'Commercial Optimization' },
  { question: '"How do you find good keywords?"', response: 'PPC → SEO' },
  { question: '"How do you use PPC data?"', response: 'PPC → SEO' },
  { question: '"How do you improve listing conversion?"', response: 'SEO + PPC + Evidence' },
  { question: '"How do you set up an Amazon promotion?"', response: 'Promotions' },
  { question: '"How do you decide what products to promote?"', response: 'Promotions + Inventory + Profitability' },
  { question: '"How do you prepare for Prime Day?"', response: 'Promotions + PPC + Inventory' },
  { question: '"How do you measure a promotion?"', response: 'Promotions + PPC + Profitability' },
  { question: '"How do you avoid stockouts during promotions?"', response: 'Promotions + Inventory' },
  { question: '"How do you plan seasonal campaigns?"', response: 'Promotions + PPC + Operations' },
  { question: '"What is TACOS and why does it matter?"', response: 'Commercial Optimization' },
  { question: '"How do you structure PPC campaigns?"', response: 'Commercial Optimization' },
  { question: '"How do you do keyword research?"', response: 'Commercial Optimization' },
  { question: '"How do you handle a negative review?"', response: 'Commercial Opt. + APN Evidence' },
];
