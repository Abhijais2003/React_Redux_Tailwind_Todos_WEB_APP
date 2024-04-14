/**
 * Remove the item at `from` position and then insert it into `to` position
 * @param from Index of the item to be removed
 * @param to Index where the item should be inserted
 * @param array The array to perform the operation on
 * @returns The array with the item moved from `from` to `to`
 */
function removeInsert<T>(from: number, to: number, array: T[]) {
  // Get the item to be moved
  const insertItem = array[from];
  // Create a copy of the original array
  const nextArray = [...array];
  // Remove the item from the original position
  nextArray.splice(from, 1);
  // Insert the item at the new position
  nextArray.splice(to, 0, insertItem);
  // Return the updated array
  return nextArray;
}

/**
 * Map the order of the items, which satisfy `condition` in `origin`, to be the same as the order of `sorted`
 * @param origin The original array of items
 * @param sorted The array with items in the desired order
 * @param condition A function to determine which items to reorder
 * @returns A new array with items reordered according to the sorted array
 */
function mapToSorted<T>(origin: T[], sorted: T[], condition: (originItem: T) => boolean) {
  let count = -1;
  // Map over the original array
  const mapResult = origin.map(originItem => {
    // If the condition is met, increment the count and return the corresponding item from the sorted array
    if (condition(originItem)) {
      count += 1;
      // Throw an error if the sorted array is shorter than expected
      if (count >= sorted.length) throw new Error('The sorted length is too short');
      return sorted[count];
    }
    // If the condition is not met, return the original item
    return originItem;
  });

  // Return the mapped result
  return mapResult;
}

// Export the utility functions
export { removeInsert, mapToSorted };
