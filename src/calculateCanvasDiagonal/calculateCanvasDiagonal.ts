export default function calculateCanvasDiagonal(
  length: string,
  width: string
) {
  return Math.sqrt(Math.pow(parseFloat(length), 2) + Math.pow(parseFloat(width), 2));
}
