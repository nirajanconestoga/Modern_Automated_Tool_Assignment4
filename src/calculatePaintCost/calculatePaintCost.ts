export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number | string {
  if (paintRequired < 0 || costPerLiter < 0) {
    return "Error: Paint required and cost per liter must be non-negative.";
  }
  return paintRequired * costPerLiter;
}