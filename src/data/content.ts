export interface InterviewSection {
  id: string;
  title: string;
  target: string;
  question: string;
  content: ContentBlock[];
  keyPoints?: string[];
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
        value: 'I also worked with **Adorama** as a Marketplace Support Specialist, which strengthened my experience in high-volume troubleshooting, structured ticket workflows, resolving catalog and listing issues, and documenting effective resolutions and repeatable processes.',
      },
      {
        type: 'text',
        value: 'After that, I joined **My Amazon Guy**, where I expanded into Amazon SEO, PPC, listing optimization, and keyword and competitor research across multiple client accounts.',
      },
      {
        type: 'text',
        value: "Most recently, I worked as an **E-commerce Operations Manager**, managing Amazon, Shopify, Walmart, and eBay operations across a catalog of 200+ ASINs while coordinating a small operations team.",
      },
      {
        type: 'text',
        value: "Currently, I'm consulting on Amazon PPC projects and using automation, reporting, and dashboards to improve campaign performance and operational efficiency.",
      },
      {
        type: 'highlight',
        value: "So overall, my background combines **hands-on Amazon operations, catalog management, SEO, PPC, troubleshooting, and process improvement**. I enjoy taking ownership of day-to-day operations, solving problems when they come up, and improving the process so those problems are less likely to happen again.",
      },
    ],
  },
  {
    id: 'day-to-day',
    title: 'Day-to-Day Routine',
    target: '45–60 seconds',
    question: '"What does your typical day look like?"',
    content: [
      {
        type: 'text',
        value: "My day-to-day routine depends on the brand and the priorities for that account, because not every e-commerce operation follows exactly the same workflow.",
      },
      {
        type: 'text',
        value: 'Normally, I start by checking our task board, such as **Asana**, to see if there are any priority tasks, projects, or deadlines that need immediate attention. If there is a specific project or urgent issue, I prioritize that first.',
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
        value: 'Throughout the day, I communicate with the team, update task statuses, document important actions, and make sure anything requiring follow-up is properly tracked.',
      },
      {
        type: 'highlight',
        value: "So I would say my general routine is **check priorities, monitor the health of the operation, resolve issues, complete scheduled work, and document anything that needs follow-up**. The exact tasks change depending on the brand and what is currently happening in the account.",
      },
    ],
  },
  {
    id: 'star-apn',
    title: 'STAR — APN Suppression Case',
    target: '1–2 minutes',
    question: '"Tell me about a difficult or recurring Amazon problem you had to solve."',
    content: [
      {
        type: 'text',
        value: '**Situation:** We had several SIM-card ASINs getting suppressed because of listing-related issues, while we were also seeing negative feedback and returns from customers reporting that the SIM wasn\'t working.',
      },
      {
        type: 'text',
        value: '**Task:** My responsibility was to determine whether this was actually a product problem or a listing/customer-instruction problem, resolve the suppression, and prevent the issue from continuing.',
      },
      {
        type: 'text',
        value: "**Action:** I started by reviewing the **Voice of the Customer dashboard and returns data** to identify patterns instead of treating each complaint separately.",
      },
      {
        type: 'text',
        value: "I noticed that many of the complaints were related to **APN configuration and activation**.",
      },
      {
        type: 'text',
        value: "The difficult part was validating the root cause because the information was spread across Amazon and our internal teams. I had to go back and forth with the warehouse to obtain the specific **return IDs** and have the returned units physically tested.",
      },
      {
        type: 'text',
        value: "The warehouse confirmed that many of those units were actually functional. That pointed us toward a customer setup and instruction issue rather than a widespread hardware failure.",
      },
      {
        type: 'text',
        value: "I proposed adding a **second APN configuration image and an A+ module** to make the activation instructions clearer. After getting approval, I submitted an **Amazon Case with the supporting VOC, returns, and warehouse verification**, along with the corrective actions we had taken.",
      },
      {
        type: 'text',
        value: "Once the listing was reinstated, I documented the resolution and created a repeatable case approach so that if the same issue appeared again, the team wouldn't have to start the investigation from zero.",
      },
      {
        type: 'highlight',
        value: "**Result:** The affected listings were reinstated, sales recovered, and the recurring returns and negative feedback associated with the issue were reduced. More importantly, we identified the underlying issue instead of repeatedly treating each suppression or customer complaint as a separate problem, and we turned the resolution into a documented process that the team could handle much faster in the future.",
      },
    ],
  },
  {
    id: 'fba-walkthrough',
    title: 'FBA Shipment Walkthrough',
    target: '60–90 seconds',
    question: '"Can you walk me through how you handle an FBA shipment?"',
    content: [
      {
        type: 'text',
        value: "Sure. The exact workflow can vary depending on the brand and its internal process, but generally I start by confirming what inventory needs to be replenished based on **stock levels, sales velocity, and the planned replenishment quantity**.",
      },
      {
        type: 'text',
        value: "Once the products and quantities are confirmed, I create the shipment in **Amazon Seller Central** and make sure the correct SKUs, quantities, fulfillment requirements, and shipment details are reflected accurately.",
      },
      {
        type: 'text',
        value: "I then prepare the shipment information for the warehouse or fulfillment team, including the required labels and packing or shipping instructions. Before the shipment leaves, I verify the quantities and documentation against the Seller Central shipment.",
      },
      {
        type: 'text',
        value: "After the shipment is handed over to the carrier, I monitor the shipment status and tracking information. Once Amazon receives it, I check whether the inventory is fully received and available.",
      },
      {
        type: 'text',
        value: "If there is a discrepancy—for example, the number of units shipped doesn't match the number Amazon received—I reconcile the shipment records, gather the supporting documentation, and investigate whether it's a receiving issue, carrier issue, or inventory discrepancy. If necessary, I open an Amazon Case or pursue the appropriate reimbursement process.",
      },
      {
        type: 'highlight',
        value: "So my general approach is **plan the replenishment → create and verify the shipment → coordinate fulfillment → track the inbound → reconcile what Amazon receives → resolve any discrepancies**.",
      },
    ],
  },
  {
    id: 'commercial-optimization',
    title: 'Commercial Optimization',
    target: '60–90 seconds',
    question: '"How do you improve Amazon sales and visibility?"',
    content: [
      {
        type: 'text',
        value: "I see **SEO, PPC, and promotions as complementary levers** rather than completely separate activities.",
      },
      {
        type: 'text',
        value: "For SEO, I focus on **relevance, keyword coverage, listing quality, and conversion factors**. For PPC, I use campaign and search-term data to understand which keywords and products are generating traffic, clicks, and sales.",
      },
      {
        type: 'text',
        value: "PPC can also provide useful market data that can inform SEO. For example, if certain search terms are consistently generating relevant traffic and conversions, I can evaluate whether those terms are properly represented in the listing and whether the product is competitive for those searches.",
      },
      {
        type: 'text',
        value: "At the same time, I don't assume that more traffic automatically means better performance. If a product is receiving clicks but not converting, I would investigate the **listing content, images, offer, pricing, reviews, and overall customer experience**.",
      },
      {
        type: 'text',
        value: "Promotions are another lever I consider when the objective and economics make sense. Before setting one up, I would confirm the **inventory position, margin, current price, product eligibility, and purpose of the promotion**. Then I would select the appropriate promotion type and configure the eligible products, offer or discount, scheduling, and any applicable conditions in Seller Central.",
      },
      {
        type: 'text',
        value: "For major shopping periods, I would also coordinate promotions with the **PPC strategy, inventory position, and promotional calendar** so we're not driving additional demand without having enough inventory or a suitable offer.",
      },
      {
        type: 'text',
        value: "After launch, I monitor the results against the objective. I look beyond sales volume and consider **spend, conversion, profitability, inventory movement, and whether the promotion is producing useful incremental demand**.",
      },
      {
        type: 'highlight',
        value: "So my overall approach is: **Improve relevance → bring qualified traffic → use promotions strategically → monitor conversion and profitability → use the resulting data to improve the next decision.**",
      },
    ],
    keyPoints: [
      'PPC does not automatically cause better organic ranking.',
      'PPC provides search-term, click, conversion, and product-performance data that can inform listing and SEO decisions.',
      'SEO, PPC, promotions, inventory, pricing, and conversion should be viewed as interconnected parts of commercial optimization.',
    ],
  },
];

export interface FrameworkEntry {
  question: string;
  response: string;
}

export const frameworkTable: FrameworkEntry[] = [
  { question: '"Tell me about yourself."', response: 'Career Story' },
  { question: '"What do you do every day?"', response: 'Day-to-Day Routine' },
  { question: '"How do you prioritize your work?"', response: 'Day-to-Day Routine' },
  { question: '"How do you manage Amazon operations?"', response: 'Day-to-Day Routine + Career Story' },
  { question: '"Tell me about a difficult problem."', response: 'APN Evidence' },
  { question: '"Tell me about a recurring issue."', response: 'APN Evidence' },
  { question: '"How do you troubleshoot Amazon issues?"', response: 'APN Evidence + Day-to-Day Routine' },
  { question: '"How do you improve processes?"', response: 'APN Evidence + Career Story' },
  { question: '"How do you improve Amazon SEO?"', response: 'Commercial Optimization + APN Evidence' },
  { question: '"How do you optimize PPC?"', response: 'Commercial Optimization + Current PPC Experience' },
  { question: '"How do SEO and PPC work together?"', response: 'Commercial Optimization' },
  { question: '"How do you set up promotions?"', response: 'Commercial Optimization' },
  { question: '"How do you prepare for Prime Day?"', response: 'Commercial Optimization + FBA/Inventory' },
  { question: '"How do you handle an FBA shipment?"', response: 'FBA Operational Walkthrough' },
  { question: '"How do you manage FBA inventory?"', response: 'FBA Walkthrough + Day-to-Day Routine' },
  { question: '"What do you do when Amazon receives the wrong quantity?"', response: 'FBA Walkthrough + APN-style problem solving' },
  { question: '"How do you handle inventory discrepancies?"', response: 'FBA Walkthrough' },
  { question: '"How do you coordinate with the warehouse?"', response: 'FBA Walkthrough + Relevant Experience' },
  { question: '"How do you handle fulfillment issues?"', response: 'Day-to-Day Routine + FBA Walkthrough' },
  { question: '"Give me an example."', response: 'Select the most relevant evidence/story' },
];

export const promoQuestions: FrameworkEntry[] = [
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
];
