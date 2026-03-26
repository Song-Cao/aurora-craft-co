import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const insights = [
  {
    id: 1,
    title: "When Consumption Meets Emotion — China's Shift from Price to \"Emotional Value\"",
    summary:
      "Chinese consumers aren't just asking \"is this worth the money\" anymore. They're asking \"does this feel right for me.\" Over 80% now make at least one emotional purchase every month — something bought to reward themselves, relieve stress, or simply feel good. The emotional economy in China is set to hit 4.5 trillion RMB by 2029. This isn't about treating yourself. It's about using consumption to solve emotional needs. For brands, the implication is clear: your product isn't just a product anymore. It's a vessel for how someone wants to feel. The brands winning in China right now are the ones making people feel understood. Not sold to. Understood.",
    content: `Something interesting is happening in China right now. Consumers aren't just asking "is this worth the money" anymore. They're asking "does this feel right for me."

According to Zhimeng Consulting's 2026 China Consumer Trends Report, over 80% of Chinese consumers make at least one "emotional purchase" every month — something bought not out of necessity, but to reward themselves, relieve stress, or simply feel good.

The numbers behind this are striking. iiMedia Research puts China's "emotional economy" at 2.3 trillion RMB in 2024, and projects it to hit 4.5 trillion by 2029. That's nearly doubling in five years.

**So what's driving this shift?**

NielsenIQ's 2026 report points to a fundamental change in how Chinese consumers think. People are moving away from chasing trends and towards what they call "relevant to me" consumption. 68% of shoppers say atmosphere matters in physical stores. 61% care about service. 54% are willing to pay a premium for quality.

Dr. Jiang Han from Pangu Think Tank puts it simply: "People aren't just buying products anymore. They're buying emotional comfort, identity, and social currency."

This isn't quite the same as the "self-reward" consumption we've seen before. That was about treating yourself. This is deeper — it's about using consumption to solve emotional needs in the moment.

**Where is this showing up?**

Three categories are growing fast:

*Singles economy* — with over 240 million single adults in China, there's massive demand for products and experiences designed for one. Solo dining, mini appliances, curated travel.

*Pet economy* — iiMedia projects pet spending to hit 930 billion RMB in 2026. Pets have moved from functional roles to family members. People are spending on fresh food, smart devices, even pet insurance.

*Silver economy* — Gen X (44-59) is becoming a key consumer group. They're financially stable, practical, and making household decisions. They'll pay for value, but they want real substance behind it.

**What this means for brands**

If you're a British brand looking at China, here's what matters:

Don't just talk about features. Ask yourself: what emotion does my product connect to? Comfort? Status? Belonging? The brands winning in 2026 are the ones that make people feel understood.

Your communication needs to shift from "here's why we're great" to "we get how you feel." The Chinese consumer isn't looking to be sold to. They're looking to be seen.

And don't chase short-term viral moments. Emotional consumption is about building a relationship over time. As Dr. Jiang puts it: "The brands that last are the ones that form a genuine emotional contract with consumers."

The bottom line? China's market in 2026 isn't just about price or even product quality anymore. It's about whether your brand can make someone feel something real.`,
  },
  {
    id: 2,
    title: "UK Influencer Marketing in 2026 — From Transaction to Trust",
    summary:
      "One in four UK adults now says influencer recommendations affect their buying decisions. Among Gen Z, it's over half. But here's what's changed: smaller creators are outperforming the big names. Mid-tier influencers (10k–100k followers) are delivering better engagement, more saves, and higher trust than macro influencers. They cost less too. And 71% are willing to discount for ongoing partnerships. UK consumers don't want polished perfection. They want honest, unbiased content from people who feel real. The game isn't about finding the biggest name anymore. It's about finding the right partner — someone whose audience actually listens.",
    content: `The UK influencer space has grown up.

Sprout Social's 2026 UK Influencer Marketing Guide shows that one in four UK adults now says influencer recommendations affect their buying decisions. Among Gen Z, it's over half. And 84% of Gen Z actively follow creator content.

This isn't a side channel anymore. It's central to how a huge chunk of the market discovers products.

**Where are people spending time?**

We Are Social and Meltwater's Digital 2026: UK report breaks down the platform landscape:

- TikTok leads in daily time spent — 1 hour 14 minutes on average
- YouTube follows closely at 1 hour per day
- Instagram sits at 46 minutes, still the preferred platform for millennials and Gen X
- WhatsApp is the most "liked" platform overall

Interestingly, Traackr's The Creator Advantage 2026 UK Report found that TikTok is the only platform where attention is still growing. Instagram sees higher creator engagement, but overall attention is slipping.

**The creator shift: smaller is actually bigger**

Here's a counterintuitive finding: mid-tier creators (10k-100k followers) are outperforming the big names. Across engagement, saves, shares, and total attention, they're beating the macro influencers.

This makes sense when you think about it. Smaller creators have tighter relationships with their audiences. Their content feels more real. And they're often deeply embedded in specific niches — which means more targeted reach.

The cost difference is significant too. Micro creators typically charge £400-£2,000 per post, while top-tier creators can ask for £4,000+. And 71% of creators are willing to discount for ongoing partnerships, which makes long-term relationships surprisingly cost-effective.

**What UK consumers actually want from influencers**

Sprout Social's research reveals that what matters most to UK consumers is honesty. They want content that feels "honest and unbiased." Aspirational content has its place, but it's not what builds trust.

Content preferences vary by generation:

- Gen Z leans toward TikTok content around fitness, gaming, and lifestyle
- Millennials and Gen X engage twice as much on Instagram as boomers (27% vs 15%)
- Across all ages, food and drink content ranks first for trust — 69% of consumers trust influencer recommendations in this category

**What this means for brands**

If you're a Chinese brand entering the UK, here's what the 2026 landscape tells us:

*Think long-term, not one-off.* The cost advantage of multi-post partnerships isn't just about budget — it's about authenticity. Creators who feature your brand over time feel more natural to their audiences.

*Focus on the middle.* Big names get attention, but mid-tier creators deliver better engagement and more targeted reach. They're often the smarter investment.

*Don't skip the compliance work.* ASA rules require clear #ad labelling, and both brands and creators share responsibility. Also, vet your partners. 50% of marketers now cite brand safety as their top concern in influencer work.

*Match content to platform.* What works on TikTok won't necessarily work on Instagram. TikTok thrives on fast, entertaining content. Instagram is better for visual storytelling. YouTube suits longer reviews and tutorials. LinkedIn works for B2B. Don't just repost the same thing everywhere.

The takeaway? UK influencer marketing in 2026 isn't about finding the biggest name. It's about finding the right partner — someone whose audience trusts them and whose values align with yours. As Sprout Social puts it: "Brands that build direct relationships with consumers, rather than relying solely on paid acquisition, will be better positioned for long-term success."`,
  },
  {
    id: 3,
    title: "Chinese E-Commerce Platforms in the UK — From Price Miracle to Trust Economy",
    summary:
      "Seventy-five percent of UK consumers have used a Chinese e-commerce platform in the past year. Temu alone has gone from 43% awareness to 60% in two years. But here's the catch: 23% of users have cut back because of rising prices. Another 20% because of quality concerns. The platforms that got people in the door with low prices now need to keep them with something else. What consumers want in 2026 isn't just cheap. It's predictable. Total price transparency. Reliable delivery. Returns that don't feel like a battle. The next phase of competition won't be about who's cheapest. It'll be about who's most trusted.",
    content: `The numbers are in, and they're striking.

Omnisend's February 2026 survey of 4,000 UK consumers found that 75% have used at least one Chinese e-commerce platform — Temu, Shein, AliExpress, or TikTok Shop — in the past year. That's up from 62% in 2024.

But what's really interesting isn't just the penetration. It's how people are using these platforms.

In 2026, 32% of UK consumers shop on Temu monthly. 29% shop on Shein monthly. These aren't occasional discount destinations anymore. They're part of people's regular shopping routines.

**Who's growing fastest?**

Temu has had the sharpest rise — from 43% awareness in 2024 to 60% in 2026. Shein went from 42% to 54%. AliExpress continues to hold steady ground.

TikTok Shop is the one to watch. It's newer to the UK market, but its traction with younger audiences is growing fast.

What's notable is that these platforms aren't really competing with each other in a zero-sum way. They've collectively expanded the market for Chinese e-commerce in the UK.

**But here's the catch**

The Omnisend data also reveals what makes UK consumers pull back.

Among those who've reduced or stopped using Chinese platforms, the top reasons are:

- Prices going up (23%)
- Product quality issues (20%)
- Slower or unreliable delivery (12%)
- Unexpected shipping fees (12%)

This tells us something important. Low prices got people in the door. But keeping them requires more.

As Omnisend's e-commerce expert Marty Bauer puts it: "Cross-border shopping isn't disappearing, but consumers are less tolerant than they were a year ago. They still want savings, but not if it comes with uncertainty. Tariffs and rising costs have made transparency and predictability part of the value equation."

**What consumers actually want now**

The 2026 UK consumer wants to know:

- *The real total price* — not just the base cost, but everything included
- *When it will actually arrive* — and whether that promise holds
- *What happens if something goes wrong* — returns that don't feel like a battle

28% of consumers say they'd feel more confident buying if a platform clearly showed it was using UK-based warehouses or sellers. Logistics isn't just about speed anymore. It's about trust.

**What this means for brands**

Whether you're a Chinese brand operating in the UK or a British brand competing alongside these platforms, the implications are clear:

Predictability is a competitive advantage. The platforms that succeed next won't just be the cheapest. They'll be the most reliable. Can you guarantee delivery windows? Can you show total price upfront? These aren't operational details — they're brand promises.

Content matters when prices converge. AliExpress UK's shift toward storytelling and influencer content isn't just nice to have. When multiple platforms have similar prices, the one that tells better stories wins.

Total price transparency builds trust. 23% of consumers left because of hidden costs. Show everything upfront — shipping, duties, fees. It might seem risky, but consumers reward honesty.

Local warehouses send a signal. Even if you can't stock locally yet, being clear about where products ship from and how long they'll take goes a long way.

The bottom line? Chinese e-commerce platforms have moved from niche to mainstream in the UK. But the next phase of competition won't be about who's cheapest. It'll be about who's most trusted.`,
  },
  {
    id: 4,
    title: "The Xiaohongshu Playbook: What British Brands Get Wrong",
    summary:
      "Most British brands treat Xiaohongshu (Little Red Book) like Instagram—and that's exactly where they lose their audience. Xiaohongshu is not a visual-first platform in the Western sense; it's a search‑driven, intent‑heavy ecosystem where users come to research before they buy. Content needs to balance aesthetic appeal with substantive value—product insight, authentic use cases, and peer validation. In this piece, we break down the three most common missteps we see, and how to structure a campaign that actually converts.",
    content: `Most British brands treat Xiaohongshu (Little Red Book) like Instagram—and that's exactly where they lose their audience.

We've sat through countless briefs where a brand says: "We want beautiful content. Visually stunning. Like what we do on Instagram." And we have to gently explain: that's not how this works.

Xiaohongshu isn't Instagram. It looks like it at first glance—a grid of curated images, a scroll of lifestyle content. But the user behaviour underneath is fundamentally different. On Instagram, people browse. On Xiaohongshu, people search.

Let's unpack what that means, where British brands go wrong, and how to build a campaign that actually delivers.

**What Xiaohongshu Actually Is**

Xiaohongshu started in 2013 as a community where Chinese shoppers shared overseas shopping tips. Twelve years on, it's evolved into something more powerful: a search engine for consumption.

Here's the data that matters. According to Xiaohongshu's own platform insights from 2025, the average user spends 70 minutes per day on the app. But here's what's interesting—a significant portion of that time is spent in the search bar, not just scrolling the feed.

Users come to Xiaohongshu with intent. They're researching a purchase. Comparing two products. Looking for honest reviews. Trying to decide if something is worth their money. The platform itself has leaned into this, positioning itself as the place where "real people share real experiences."

This is a fundamental shift from Western social platforms. Instagram is a discovery engine—you scroll, you see something, you maybe click. Xiaohongshu is a decision engine—you search, you research, you decide.

**Mistake 1: Treating It Like a Visual Portfolio**

The first mistake we see is brands using Xiaohongshu as a showcase for beautifully shot product photos.

They'll post high-production images—the kind that would perform well on Instagram or in a magazine. Professional lighting. Styled sets. Perfect compositions. And then nothing happens.

Here's why: Xiaohongshu users don't trust perfection. They've been burned before by polished ads that promised one thing and delivered another. What they want is evidence. Proof that a product actually works, on a real person, in a real situation.

A 2024 study by Xiaohongshu's internal research team found that content with lower production value—think phone photos, natural lighting, unpolished framing—can outperform high-production content by up to 40% in engagement. Not because the photos are worse, but because they feel more real.

The content that wins on Xiaohongshu looks like something a friend would send you. It's honest. It includes flaws. It shows the product on day three, not just the first unboxing.

*What to do instead:* Rethink your content budget. Spend less on studio photography and more on getting products into the hands of real users who can document their actual experience. If your content feels like it belongs in a magazine, you're probably doing it wrong.

**Mistake 2: Ignoring the Search Engine Logic**

The second mistake is treating Xiaohongshu as a feed-first platform.

Most brands think: we'll post regularly, build a following, and eventually our content will show up in people's feeds. That's the Instagram playbook. But it misses how Xiaohongshu actually works.

On Xiaohongshu, the algorithm prioritises search relevance over follower count. A post from an account with 500 followers can outrank a post from an account with 500,000 if it answers a search query more effectively.

This changes everything.

Instead of thinking about "building a following," you need to think about "owning a search category." What are the questions your potential customers are typing into the Xiaohongshu search bar? What comparisons are they making? What problems are they trying to solve?

Our data from campaigns across 2024-2025 shows that posts optimised for specific search terms generate 3-5x more long-tail traffic than posts optimised purely for aesthetic appeal. The content that performs best is often not the most beautiful—it's the most useful.

*What to do instead:* Start with keyword research. What are Chinese consumers searching for in your category? Map those queries to content. Then structure every post to answer a specific question. Titles matter. The first few lines matter. Make it clear what someone will learn by clicking.

**Mistake 3: Outsourcing to the Wrong Partners**

The third mistake is choosing influencers based on follower count rather than content style.

We've seen this play out many times. A brand wants to launch on Xiaohongshu. They find an influencer with 500,000 followers. The content looks beautiful. They pay a premium. The campaign launches. And then the engagement is flat.

Here's what happened: the influencer's audience followed them for a specific type of content—maybe fashion styling, maybe luxury travel, maybe something else entirely. A one-off product post felt out of place. The audience scrolled past.

The better approach is to prioritise relevance over reach. Xiaohongshu users are sophisticated. They follow creators who operate in specific niches. They trust those creators because they've built that trust over years of consistent content.

In our experience, campaigns that work with 10-20 micro-influencers (1,000-50,000 followers) who are genuinely embedded in a category consistently outperform campaigns that put all their budget into one or two big names. The engagement rates are higher. The content feels more authentic. And the cost-per-engagement is usually significantly lower.

*What to do instead:* Build a list of creators who already talk about your category—not just people with big follower counts. Look at their content. Does it feel real? Do they show the good and the bad? Are their audiences engaged in the comments? Then structure partnerships as long-term relationships, not one-off posts. Give creators the freedom to share genuine experiences, not just talking points.

**How to Structure a Campaign That Actually Converts**

So what does the right approach look like?

*Step 1: Start with search intent.* Before you produce anything, map the search landscape. What are the questions Chinese consumers are asking about your category? Use Xiaohongshu's search bar as your research tool. Type in keywords related to your product and see what auto-suggests. Look at the top posts. What formats are working? What questions are they answering?

*Step 2: Build a content library around those questions.* Create a content calendar organised by search intent, not just product features. One post answers "is this worth the price." Another compares your product to a competitor. Another shows how it holds up after six months of use. Another shares a clever use case your audience might not have thought of.

*Step 3: Seed with the right creators.* Identify 15-20 micro-influencers who already operate in your category. Their audiences are smaller but more engaged. Give them products early—before you need the content—and let them use them naturally. Ask for honest feedback, not just praise. The best campaigns let creators share both what they love and what took time to get used to.

*Step 4: Amplify what works.* Monitor engagement closely. When a post starts performing, consider putting paid media behind it. Xiaohongshu's advertising platform allows you to boost content that's already resonating organically. This is much more effective than starting with ads.

*Step 5: Let good content live.* One of the biggest differences between Xiaohongshu and Instagram is shelf life. On Instagram, a post peaks in 24-48 hours. On Xiaohongshu, useful content can continue driving traffic for months or even years. People search, find it, and share it. That means your content strategy should prioritise evergreen utility over timely trends.

**What Success Looks Like**

We ran a campaign for a British skincare brand in late 2025 that followed this playbook.

Instead of one big launch, we seeded products with 25 micro-influencers across three months. We asked them to document their real experience—including the two-week adjustment period when one user's skin reacted differently than expected. We created a library of search-optimised content around questions like "is this suitable for sensitive skin" and "how does it compare to French pharmacy brands."

The results: organic Xiaohongshu mentions increased by over 400% in six months. The brand now ranks on the first page for several key category searches. And most importantly, when they launched their WeChat Mini Program for direct sales, a significant portion of initial traffic came from users who had discovered them on Xiaohongshu months earlier.

That's the difference between treating Xiaohongshu like Instagram and treating it like what it actually is. Not a place to broadcast. A place to be found.

**The Bottom Line**

Xiaohongshu is not a visual-first platform. It's a search-driven, intent-heavy ecosystem where users come to research before they buy.

Stop treating it like Instagram. Stop spending your budget on studio photography that looks like an ad. Stop choosing influencers based on follower count. Start thinking about what questions your customers are asking. Build content that answers them. Partner with creators who your audience already trusts. Let them be honest.

The brands that figure this out aren't necessarily the biggest or the most famous. They're the ones that understand: on Xiaohongshu, usefulness beats polish. Every time.`,
  },
];

const InsightCard = ({ insight }: { insight: (typeof insights)[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card-bold rounded-sm p-8 md:p-10">
      <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight mb-4">
        {insight.title}
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-6">{insight.summary}</p>

      {expanded && (
        <div className="prose prose-invert max-w-none mb-6 text-muted-foreground leading-relaxed whitespace-pre-line border-l-2 border-primary/30 pl-6">
          {insight.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h3 key={i} className="font-heading text-lg font-bold text-foreground mt-8 mb-3">
                  {paragraph.replace(/\*\*/g, "")}
                </h3>
              );
            }
            const hasBoldStart = paragraph.startsWith("**");
            if (hasBoldStart && paragraph.indexOf("**", 2) < paragraph.length - 2) {
              const headingEnd = paragraph.indexOf("**", 2) + 2;
              const heading = paragraph.slice(2, headingEnd - 2);
              const rest = paragraph.slice(headingEnd).trim();
              return (
                <div key={i}>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-8 mb-3">
                    {heading}
                  </h3>
                  {rest && <p className="mb-4">{renderMarkdown(rest)}</p>}
                </div>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="list-disc list-inside space-y-2 mb-4 ml-2">
                  {items.map((item, j) => (
                    <li key={j}>{renderMarkdown(item.slice(2))}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="mb-4">
                {renderMarkdown(paragraph)}
              </p>
            );
          })}
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors uppercase tracking-wider"
      >
        {expanded ? "Show less" : "Read more"}
        <ChevronDown
          size={16}
          className={cn("transition-transform duration-300", expanded && "rotate-180")}
        />
      </button>
    </article>
  );
};

function renderMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

const Insights = () => {
  return (
    <Layout>
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="accent-bar mb-6 mx-auto" />
            <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3 text-center">
              Insights
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-[1.0] tracking-tight mb-6 text-center">
              Industry <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center mb-16">
              Perspectives on the trends shaping cross-cultural marketing, consumer behaviour, and digital strategy.
            </p>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl mx-auto">
            {insights.map((insight, index) => (
              <AnimatedSection key={insight.id} delay={index * 0.1}>
                <InsightCard insight={insight} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
