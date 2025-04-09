export default function calculateTotalCost(paintCost: number, laborCost: number): number | string {
  if (paintCost < 0 || laborCost < 0) {
    return "Error: Paint cost and labor cost must be non-negative.";
  }
  return paintCost + laborCost;
}