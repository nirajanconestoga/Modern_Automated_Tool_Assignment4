export default function calculateCanvasPerimeter(
  length: string,
  width: string
) {
  return 2 * (parseFloat(length) + parseFloat(width));
}
