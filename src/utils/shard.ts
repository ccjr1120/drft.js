export function isNotNull(...args: unknown[]) {
  return args.every((item) => item !== null)
}
