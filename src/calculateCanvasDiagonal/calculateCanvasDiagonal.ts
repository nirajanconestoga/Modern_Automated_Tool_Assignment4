export default function calculateCanvasDiagonal(
  length: string,
  width: string
) {
  return Math.sqrt(Math.pow(parseInt(length), 2) + Math.pow(parseInt(width), 2));
}
