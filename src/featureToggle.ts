export interface FeatureToggle {
  chainId: number
  wallet: {
    collectiveBuy: boolean
  }
  fractionalizeDetails: {
    auction: boolean
  }
  marketplace: {
    fractionPrice: boolean
    liquidityFilter: boolean
    priceOrder: boolean
    collectiveBuy: boolean
  }
  marketplaceDetails: {
    priceQuotation: boolean
    liquidityAddition: boolean
  }
  portfolio: {
    trade: boolean
  }
  page: {
    mint: boolean
    profile: boolean
    wallet: boolean
    marketplaceIntro: boolean
  }
}

const chainsFeatureToggle: FeatureToggle[] = [
  {
    chainId: 1,
    wallet: {
      collectiveBuy: false
    },
    fractionalizeDetails: {
      auction: true
    },
    marketplace: {
      fractionPrice: true,
      priceOrder: false,
      liquidityFilter: false,
      collectiveBuy: false
    },
    marketplaceDetails: {
      liquidityAddition: true,
      priceQuotation: true
    },
    portfolio: {
      trade: true
    },
    page: {
      mint: true,
      profile: false,
      wallet: false,
      marketplaceIntro: false
    }
  },
  {
    chainId: 42,
    wallet: {
      collectiveBuy: false
    },
    fractionalizeDetails: {
      auction: true
    },
    marketplace: {
      fractionPrice: true,
      priceOrder: false,
      liquidityFilter: false,
      collectiveBuy: false
    },
    marketplaceDetails: {
      liquidityAddition: true,
      priceQuotation: true
    },
    portfolio: {
      trade: true
    },
    page: {
      mint: true,
      profile: false,
      wallet: false,
      marketplaceIntro: false
    }
  },
  {
    chainId: 56,
    wallet: {
      collectiveBuy: false
    },
    fractionalizeDetails: {
      auction: false
    },
    marketplace: {
      fractionPrice: false,
      priceOrder: false,
      liquidityFilter: false,
      collectiveBuy: false
    },
    marketplaceDetails: {
      liquidityAddition: false,
      priceQuotation: false
    },
    portfolio: {
      trade: false
    },
    page: {
      mint: true,
      profile: false,
      wallet: false,
      marketplaceIntro: false
    }
  },
  {
    chainId: 97,
    wallet: {
      collectiveBuy: false
    },
    fractionalizeDetails: {
      auction: false
    },
    marketplace: {
      fractionPrice: false,
      priceOrder: false,
      liquidityFilter: false,
      collectiveBuy: false
    },
    marketplaceDetails: {
      liquidityAddition: false,
      priceQuotation: false
    },
    portfolio: {
      trade: false
    },
    page: {
      mint: true,
      profile: false,
      wallet: false,
      marketplaceIntro: false
    }
  }
]

export const getFeatureToggleByChainId = (chainId: number): FeatureToggle | undefined => {
  return chainsFeatureToggle.find(featureToggle => featureToggle.chainId === chainId)
}
