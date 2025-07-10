interface PricingInput {
  material: string
  quantity: number
  rush: boolean
  fileCount: number
  hasComplexFiles: boolean
}

interface PricingResult {
  lowPrice: number
  highPrice: number
  estLeadDays: number
}

const MATERIAL_RATES: Record<string, { baseRate: number; factor: number }> = {
  'mild-steel': { baseRate: 25, factor: 1.0 },
  'stainless-steel-304': { baseRate: 45, factor: 1.8 },
  'stainless-steel-316': { baseRate: 55, factor: 2.2 },
  'aluminum-6061': { baseRate: 35, factor: 1.4 },
  'aluminum-5052': { baseRate: 38, factor: 1.5 },
  'galvanized-steel': { baseRate: 30, factor: 1.2 },
  'copper': { baseRate: 65, factor: 2.6 },
  'brass': { baseRate: 55, factor: 2.2 },
  'other': { baseRate: 40, factor: 1.6 }
}

const QUANTITY_MULTIPLIERS = [
  { min: 1, max: 10, multiplier: 1.0 },
  { min: 11, max: 50, multiplier: 0.85 },
  { min: 51, max: 100, multiplier: 0.75 },
  { min: 101, max: 500, multiplier: 0.65 },
  { min: 501, max: 1000, multiplier: 0.55 },
  { min: 1001, max: 10000, multiplier: 0.45 }
]

const COMPLEXITY_FACTORS = {
  simple: 1.0,
  moderate: 1.3,
  complex: 1.8
}

const RUSH_MULTIPLIER = 1.5

export function calculatePricing(input: PricingInput): PricingResult {
  const { material, quantity, rush, fileCount, hasComplexFiles } = input
  
  const materialData = MATERIAL_RATES[material] || MATERIAL_RATES['other']
  const baseRate = materialData.baseRate
  const materialFactor = materialData.factor
  
  const quantityMultiplier = QUANTITY_MULTIPLIERS.find(
    qm => quantity >= qm.min && quantity <= qm.max
  )?.multiplier || 0.4
  
  const complexityFactor = hasComplexFiles 
    ? COMPLEXITY_FACTORS.complex
    : fileCount > 0 
      ? COMPLEXITY_FACTORS.moderate 
      : COMPLEXITY_FACTORS.simple
  
  const basePrice = baseRate * materialFactor * quantity * quantityMultiplier * complexityFactor
  
  const rushMultiplier = rush ? RUSH_MULTIPLIER : 1.0
  
  const lowPrice = Math.round(basePrice * 0.8 * rushMultiplier)
  const highPrice = Math.round(basePrice * 1.2 * rushMultiplier)
  
  const baseLead = rush ? 1 : getStandardLeadTime(quantity, hasComplexFiles)
  
  const estLeadDays = Math.max(1, baseLead)
  
  return {
    lowPrice: Math.max(50, lowPrice),
    highPrice: Math.max(75, highPrice),
    estLeadDays
  }
}

function getStandardLeadTime(quantity: number, hasComplexFiles: boolean): number {
  let baseDays = 5
  
  if (quantity > 1000) {
    baseDays = 10
  } else if (quantity > 100) {
    baseDays = 7
  } else if (quantity > 50) {
    baseDays = 6
  }
  
  if (hasComplexFiles) {
    baseDays += 2
  }
  
  return baseDays
}

export function getEstimatedPrice(material: string, quantity: number): { low: number; high: number } {
  const pricing = calculatePricing({
    material,
    quantity,
    rush: false,
    fileCount: 0,
    hasComplexFiles: false
  })
  
  return {
    low: pricing.lowPrice,
    high: pricing.highPrice
  }
}