export const formatListItems = ({ items = [] }) =>
  items.map(({ slug, title }) => ({
    id: slug,
    label: title,
  }));
