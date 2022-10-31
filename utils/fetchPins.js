export const fetchPins = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPins`);
  const data = await res.json();

  return data.pins[0].categoria;
};
