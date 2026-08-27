import { ExchangeOffer } from "../types"; 
export const mockOffers: 
ExchangeOffer[] = [ { id: "offer-001", agentId:
"agent-001", agentName: "West Africa Liquidity", 
fromCurrency: "GMD", toCurrency: "NGN", 
exchangeRate: 16.45, availableAmount: 150000, 
minAmount: 1000, maxAmount: 50000, status: "ACTIVE", }, 
{ id: "offer-002", agentId: "agent-002", agentName: 
"Lagos Exchange", fromCurrency: "GMD", 
toCurrency: "NGN", exchangeRate: 16.30, 
availableAmount: 90000, minAmount: 2000, 
maxAmount: 30000, status: "ACTIVE", },
 { id: "offer-003", agentId: "agent-003",
agentName: "Senegal Liquidity", fromCurrency:
"USD", toCurrency: "XOF", exchangeRate: 600.5, 
availableAmount: 2500000, minAmount: 50, 
maxAmount: 5000, status: "ACTIVE", }, ];