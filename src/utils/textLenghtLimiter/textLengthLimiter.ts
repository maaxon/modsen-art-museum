export const textLengthLimiter = (text:string,limit: number) => text.length > limit
  ? text.slice(0,limit) + '...'
  : text;