const menuGroupCardData = [
  {
    id: "135322636",
    name: "Melts Meal for 1 with Fries - Veg",
    category: "New MELTS - Crispy, Cheesy, Loaded",
    description:
      "Serves 1 | Choose your favourite Melts & Fries. Customize your satisfaction.",
    imageId: "77b13d58799f70f670be31e6fe53374e",
    inStock: 1,
    isVeg: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "39232249",
          name: "Choose your Melt",
          variations: [
            {
              name: "Loaded Veggie BBQ",
              price: 199,
              default: 1,
              id: "124747444",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "39232250",
                variationId: "124747448",
              },
            },
            {
              name: "Cheesy Cheese Popcorn",
              price: 219,
              id: "124747445",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "39232250",
                variationId: "124747448",
              },
            },
            {
              name: "Magical Makhni Paneer",
              price: 299,
              id: "124747447",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "39232250",
                variationId: "124747448",
              },
            },
          ],
        },
        {
          groupId: "39232250",
          name: "Side",
          variations: [
            {
              name: "Sprinkled Fries",
              price: 60,
              default: 1,
              id: "124747448",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "39232249",
              variationId: "124747444",
            },
            {
              groupId: "39232250",
              variationId: "124747448",
            },
          ],
          price: 25900,
        },
        {
          variations: [
            {
              groupId: "39232249",
              variationId: "124747445",
            },
            {
              groupId: "39232250",
              variationId: "124747448",
            },
          ],
          price: 27900,
        },
        {
          variations: [
            {
              groupId: "39232249",
              variationId: "124747447",
            },
            {
              groupId: "39232250",
              variationId: "124747448",
            },
          ],
          price: 35900,
        },
      ],
    },
  },
];
