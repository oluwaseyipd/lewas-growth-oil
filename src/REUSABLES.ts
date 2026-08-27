// Type definitions
export interface WhatsAppItem {
  request: 'order' | 'enquiry'
  message: string
}

export interface Testimony {
  quote: string
  name: string
  stars: number
}

export interface FAQ {
  q: string
  a: string
}

export interface FAQGroup {
  group: string
  icon: string
  items: FAQ[]
}

// Constants
export const phoneNumber = '2349021801964'
export const phoneNumberFormatted = '+234 902 180 1964'
export const email = 'omolewaglory38@gmail.com'
export const instagramUrl = 'https://www.instagram.com/omo_lewa05'
export const tiktokUrl = 'https://www.tiktok.com/@queen_lewa02'
export const facebookUrl = 'https://www.facebook.com/glory.omolewa.5'
export const instagramHandle = '@omo_lewa05'
export const tiktokHandle = '@queen_lewa02'
export const facebookHandle = 'Glory Omolewa'

export const WHATSAPP: WhatsAppItem[] = [
    {
        request: 'order',
        message: `https://wa.me/${phoneNumber}?text=Hi%2C%20I'd%20like%20to%20order%20Lewa's%20Growth%20Oil%20%F0%9F%91%91`
    },
    {
        request: 'enquiry',
        message: `https://wa.me/${phoneNumber}?text=Hi%2C%20I%20have%20an%20enquiry%20about%20Lewa's%20Growth%20Oil%20%F0%9F%91%91`    
    },
] 

export const TESTIMONIES: Testimony[] = [
    {
        quote: "Lewa’s Growth Oil reduced my hair breakage and kept my scalp clean. Clean scalp all the way! Please don’t stop the production—keep it coming!",
        name: 'Covenant',
        stars: 5,
    },
    {
        quote: "It’s very efficient. My edges have been growing since I started using it, and my hair length has also increased.",
        name: 'Gracia',
        stars: 5,
    },
    {
        quote: "Yes o, small small, my front hair is coming out.",
        name: 'Wura',
        stars: 4,
    },
    {
        quote: "Lewa’s Growth Oil is 💯 — it works so fast! I can now comb my hair without breakage or dandruff. Thank you, Lewa’s Growth Oil! I even applied it on my eyebrows and you won’t believe it—I saw changes!",
        name: 'Dolapo',
        stars: 5,
    },
    {
        quote: "It works really well. I’m definitely getting another one when this finishes.",
        name: 'Tosin',
        stars: 5,
    },
    {
        quote: "I’ve used expensive products before. In fact, I cut my hair every year. I just decided to try yours—and it worked! Please don’t reduce your quality.",
        name: 'Grace',
        stars: 5,
    },
    {
        quote: "It really works. My front hair is growing.",
        name: 'Funmi',
        stars: 5,
    },
    {
        quote: "Is your oil still available? I want to get another one. My boyfriend took the one I bought earlier because he saw how effective it was. So I want to get two—for both of us.",
        name: 'Oluwatosin',
        stars: 5,
    },
    {
        quote: "Guess whose hair oil just finished 😭 The two I bought before traveling just finished, and I need another one. I had lost almost half of my hair before going home, but now it’s back!",
        name: 'Fathia',
        stars: 5,
    },
    {
        quote: "My hair got thicker and longer. You need to hear how my mum was hyping your oil! She said she used to have serious breakage and your oil stopped it. I’m not even lying—this oil works.",
        name: 'Semilore',
        stars: 5,
    },
    {
        quote: "It smells really good. I like the oil.",
        name: 'Stephen',
        stars: 4,
    },
    {
        quote: "The oil is really good. My hair feels nice and looks healthier. Definitely love it.",
        name: 'Tolulope',
        stars: 5,
    },
    {
        quote: "I just started using the oil yesterday. I’ve been wondering what makes your hair smell so good—turns out it’s the oil! I love the feel it gives my hair.",
        name: 'Samuel',
        stars: 4,
    },
    {
        quote: "Your oil really works—my hair is now softer, easier to comb, and getting longer. This oil is underrated! Please advertise more so people can know you’re selling original growth oil.",
        name: 'Bolu',
        stars: 5,
    },
    {
        quote: "I’m glad the oil works effectively. The itching has stopped and my hair is getting fuller.",
        name: 'Esther',
        stars: 5,
    }
]

export const faqGroups: FAQGroup[] = [
  {
    group: 'Ordering & Delivery',
    icon: '📦',
    items: [
      {
        q: 'How do I place an order?',
        a: "Tap any \"Chat to Order\" button on our site. You'll be taken to WhatsApp where you can tell us your preferred size, quantity, and delivery address. We handle everything from there.",
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept M-Pesa, bank transfer, and cash on delivery for local orders. WhatsApp us for international payment options.',
      },
      {
        q: 'How long will delivery take?',
        a: 'Nairobi and major Kenyan cities: 1–2 business days. Rest of Kenya: 3–5 days. International: 7–14 business days depending on destination.',
      },
    ],
  },
  {
    group: 'Using the Product',
    icon: '✨',
    items: [
      {
        q: 'How often should I use the oil?',
        a: 'For best results, use 3 times per week — on wash day, mid-week, and before protective styling. Consistent use over 4–6 weeks is where the real results begin.',
      },
      {
        q: 'How many drops should I use?',
        a: 'Start with 5–8 drops per application and adjust based on your hair\'s thickness and length. Short to medium hair needs less; long or thick hair may need up to 12 drops.',
      },
      {
        q: 'Can I use it on my children\'s hair?',
        a: "Lewa's Growth Oil is formulated for adults. For children under 12, we recommend consulting a paediatrician before use.",
      },
      {
        q: 'Do I need to wash it out?',
        a: 'No. It\'s designed as a leave-in treatment. Apply to the scalp and lengths and go — it absorbs without residue. On wash days, apply before or after washing as part of your routine.',
      },
      {
        q: 'Can I use it under a wig or braids?',
        a: 'Absolutely. Applying the oil to your scalp before installing protective styles is one of the best ways to maintain growth while your natural hair is tucked away.',
      },
    ],
  },
  {
    group: 'Ingredients & Suitability',
    icon: '🌿',
    items: [
      {
        q: 'Is the formula 100% natural?',
        a: 'Yes. Every ingredient is plant-derived or naturally extracted. There are no mineral oils, silicones, parabens, sulphates, or synthetic fragrances in the formula.',
      },
      {
        q: 'Is it suitable for sensitive scalps?',
        a: "We've formulated with sensitive scalps in mind — no harsh essential oils at irritating concentrations. However, if you have a known allergy to any ingredient, please check the full ingredient list or reach out to us.",
      },
      {
        q: 'Is it cruelty-free?',
        a: 'Completely. No animal testing at any stage of production, and all our suppliers operate under cruelty-free standards.',
      },
      {
        q: 'Is it safe during pregnancy or breastfeeding?',
        a: 'The formula uses gentle plant oils at safe concentrations, but as with all topical products, we advise consulting your healthcare provider during pregnancy or while breastfeeding.',
      },
    ],
  },
]

export const productFaqs: FAQ[] = [
  {
    q: 'Will it make my hair greasy?',
    a: 'No. Lewa\'s Growth Oil is formulated to absorb quickly without residue. Start with 5–6 drops and adjust to your hair\'s thickness and length.',
  },
  {
    q: 'Can I use it on colour-treated hair?',
    a: 'Absolutely. The formula contains no harsh chemicals that would interfere with colour. In fact, the nourishing oils help maintain vibrancy and reduce colour-related brittleness.',
  },
  {
    q: 'Is it safe during pregnancy?',
    a: 'The formula does not contain essential oils at therapeutic doses, but as with all topical products, we recommend consulting your midwife or doctor during pregnancy.',
  },
  {
    q: 'How long does one bottle last?',
    a: 'With typical use (3× per week), a 100ml bottle lasts 6–8 weeks. A 50ml bottle is ideal for travel or first-time buyers.',
  },
]

export const faqs: FAQ[] = [
  {
    q: 'How soon will I see results?',
    a: 'Most customers notice softer, more moisturised hair within the first week. Visible growth and reduced breakage is typically seen from week 3–6 with consistent use.',
  },
  {
    q: 'Is it suitable for all hair types?',
    a: "Yes. Lewa's Growth Oil is formulated for all natural and chemically-treated hair types — from 3A curls to 4C coils, and everything in between.",
  },
  {
    q: 'How do I place an order?',
    a: "Simply tap any \"Chat to Order\" button and we'll connect with you directly on WhatsApp. We guide you through sizes, delivery, and payment — it takes under 5 minutes.",
  },
  {
    q: 'Are the ingredients natural?',
    a: 'Absolutely. Our formula is built on plant-derived, cold-pressed oils with no mineral oil, silicones, parabens, or synthetic fragrance.',
  },
]

