# GoldRoad Taxation

[Buyer Cart]
│
├── 1. Item Price (Set by Seller)
├── 2. Fetch Express Freight Rate (Carrier API via Origin/Destination Zip & Dimensions)
├── 3. Calculate CIF (Cost + Insurance + Freight)
├── 4. Call Duty/Tax Engine (HS Code + Destination Country Rates)
└── 5. Compute GoldRoad U1 Commission (7.0% first 3 months - 7.5% on Item Price)
│
[Final Checkout Price] = Item Price + Shipping + Insurance + Customs/VAT

## Details

### Formula Engine

1. **CIF Value Calculation**:
   $$\\text{CIF} = \\text{Item Price} + \\text{Shipping Fee} + \\text{Insurance}$$

2. **Customs Duty & Import VAT**:
   $$\\text{Customs Duty} = \\text{CIF} \\times \\text{Duty Rate (by HS Code)}$$
   $$\\text{Import VAT} = (\\text{CIF} + \\text{Customs Duty}) \\times \\text{Destination VAT Rate}$$

3. **GoldRoad U1 Platform Earnings**:
   $$\\text{Platform Fee} = \\text{Item Price} \\times 0.075$$
   $$\\text{Seller Net Payout} = \\text{Item Price} - \\text{Platform Fee}$$

---

## 4. End-to-End Transaction Flow (Numerical Example)

### Scenario Setup

* **Seller**: Kenya ($1,000 Product Value, 500g package)
* **Buyer**: Morocco (Import VAT = 20%, Customs Duty ~10%)
* **Commission Rate**: 7.5%
* **Payment Gateways**: Paystack / PayPal

| Component | Calculation Basis | Amount (USD) | Paid By | Recipient / Destination |
| :--- | :--- | :--- | :--- | :--- |
| **Base Product Price** | Set by Seller | $1,000.00 | Buyer | Seller (via GoldRoad U1 Platform) |
| **Air Freight & Insurance** | Carrier API Quote | $85.00 | Buyer | Express Carrier (DHL/FedEx) |
| **Moroccan Customs Duty (10%)** | $1,085 CIF × 10% | $108.50 | Buyer | Destination Customs |
| **Moroccan Import VAT (20%)** | ($1,085 + $108.50) × 20% | $238.70 | Buyer | Destination Customs |
| **Total Buyer Price** | Sum of all line items | **$1,432.20** | **Buyer** | **Paystack / PayPal Gateway** |
| **GoldRoad U1 Fee (7.5%)** | $1,000 × 7.5% | **$75.00** | **Seller** | **GoldRoad U1 Revenue Account** |
| **Seller Net Payout** | $1,000 - $75 | **$925.00** | **Paystack / PayPal** | **Kenyan Merchant (M-Pesa / Bank)** |

---

## 5. Payment Gateway & Merchant Settlement Strategy

1. **Paystack Integration Architecture**:
   * **Split Payments API**: Paystack's Transaction Split feature routes funds automatically at checkout.
   * **Subaccounts**: Sellers register subaccounts linked to local bank accounts or Mobile Money (M-Pesa).
   * **Execution**: $925.00 transfers to the Seller's Subaccount, while $507.20 (Platform Fee + Shipping + Customs Duties) settles into GoldRoad U1’s operational wallet to pay carriers and customs brokers.

2. **PayPal Integration Architecture**:
   * **PayPal Commerce Platform (PPCP)**: Uses Commerce APIs for multi-party payments.
   * **Payouts API**: GoldRoad U1 receives $1,432.20, retains platform fees, shipping, and taxes, and issues automated payouts to the merchant's PayPal account.

3. **Merchant & Tax Compliance Rules**:
   * **Incoterms Standard**: All GoldRoad U1 cross-border orders execute under **DDP (Delivered Duty Paid)** to prevent packages from stalling at border customs.
   * **Service VAT**: GoldRoad U1’s 7.5% commission fee levied on foreign/export sellers is zero-rated under standard cross-border B2B service provisions, or subject to local service VAT where applicable.

## 6. Landed-Cost Optimization Strategy

To keep final buyer checkout prices competitive against local market rates:

1. **Mandatory HS Classification**: Automated mapping of seller items to specific sub-tier HS codes to prevent destination customs from assigning fallback peak tariff rates.
2. **Trade Agreement Routing**: Utilize regional economic trade preferences (e.g., AfCFTA tariff concessions for intra-African lanes) to qualify orders for reduced or zero-rated import duties.
3. **De Minimis Engine**: Detect destination country threshold rules during cart building to advise buyers on optimal order splitting when applicable.

To protect margin for dropshippers and reduce the final order price for buyers:

1. **AfCFTA Preferential Duty Calculation**: Dynamic origin verification to apply preferential zero-tariff rates on qualifying intra-regional trades.
2. **Order Splitting Engine**: Automated cart recommendations to keep individual dropship packages under destination *de minimis* duty thresholds.
3. **Local Currency Payment Rails**: Integration with local settlement systems (PAPSS/Paystack/PayPal) to eliminate currency conversion markups at checkout.
