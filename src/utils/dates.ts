export function toDate(value: Date | string | number) {
  return value instanceof Date ? value : new Date(value);
}

export function sortNewestFirst(
  a: { id: string; data: { pubDate: Date | string | number } },
  b: { id: string; data: { pubDate: Date | string | number } },
) {
  const dateDifference =
    toDate(b.data.pubDate).valueOf() - toDate(a.data.pubDate).valueOf();

  return dateDifference || b.id.localeCompare(a.id);
}
