export default function estimatePaintingTime(area: number, paintingSpeed: number): number {
  if (area < 0 || paintingSpeed < 0) {
    throw new Error('Area and painting speed must be non-negative values');
  }
  
  return area / paintingSpeed;
}