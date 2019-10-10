export type TagsType = Partial<Record<'area' | 'slot' | 'name' | 'id', string>>;

export default function htmlTags(tags?: TagsType) {
  // Safe return
  if (!tags) {
    return null;
  }

  const { name, id, slot, area } = tags;
  return {
    'data-bi-area': area,
    'data-bi-id': id,
    'data-bi-name': name,
    'data-bi-slot': slot,
  };
}
