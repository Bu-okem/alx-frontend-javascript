export default function updateUniqueItems(map) {
  if (!map || typeof map !== "object") {
    throw new Error("Cannot process. Argument must be a map.");
  }

  const updatedMap = new Map();

  for (const [key, value] of map.entries()) {
    if (value.quantity === 1) {
      updatedMap.set(key, { ...value, quantity: 100 });
    } else {
      updatedMap.set(key, value);
    }
  }

  return updatedMap;
}
