class RingBuffer<T> {
  /* ----------------------- Just some bookkeeping stuff ---------------------- */
  length: number;
  capacity: number;
  headIdx: number;
  tailIdx: number;
  arr: T[];

  /* -------------------- Initializing the new Ring Buffer -------------------- */
  constructor(capacity: number = 1) {
    this.capacity = Math.max(1, capacity); // Store the capacity
    this.headIdx = this.tailIdx = 0; // Point to the same position initially.
    this.arr = new Array<T>(this.capacity); // Create a new underlying array
    this.length = 0; // Set the length to 0 for a new buffer.
  }

  /* ----------------- Get an Item stored at a specific index ----------------- */
  public get(position: number): T | undefined {
    // If the position is less than or more than bounds.
    if (position < 0 || position >= this.length) return undefined;
    // Calculate distance from the head and mod by capacity.
    const idx = (this.headIdx + position) % this.capacity;
    // Return the item.
    return this.arr[idx];
  }

  /* -------------------- Set a value at a specified index -------------------- */
  public set(position: number, value: T): void {
    // If the position is less than or more than bounds.
    if (position < 0 || position > this.length) return;
    // Calculate distance from the head and mod by capacity.
    const idx = (this.headIdx + position) % this.capacity;
    // Set the value.
    this.arr[idx] = value;
  }

  /* ---------------------- Double the size of the array ---------------------- */
  public grow(): void {
    // Create a new Array double the size.
    const temp = new Array<T>(this.capacity * 2);

    for (let i = 0; i < this.length; i++) {
      // Calculate the distance from the head.
      const idx = (this.headIdx + i) % this.capacity;
      // Assign the value to the temp.
      temp[i] = this.arr[idx];
    }

    // Bookkeeping
    this.arr = temp; // Update the new array reference.
    this.headIdx = 0; // Update the head index
    this.tailIdx = this.length - 1; // Update the tail Index
    this.capacity = this.capacity * 2; // Update the internal storage capacity
  }

  /* ---------------------- Remove an item from the back ---------------------- */
  public pop(): T | undefined {
    // If the length is 0, you can't remove anything
    if (this.length === 0) return undefined;

    const value = this.arr[this.tailIdx]; // Get the value at the index

    // Set the tail to move behind
    const newTailIdx = (this.tailIdx - 1 + this.capacity) % this.capacity;

    this.length--; // Decrease the length
    this.tailIdx = newTailIdx; // Update the tail index
    return value; // Return the value
  }

  /* ------------------------ Add the value to the end ------------------------ */
  public push(value: T): void {
    // If the array length at capacity, we need to double the size.
    if (this.length === this.capacity) this.grow();

    // Calculate new tail index
    this.tailIdx = (this.tailIdx + 1 + this.capacity) % this.capacity;
    // Assign the value at the tail
    this.arr[this.tailIdx] = value;
    // Update the length.
    this.length++;
  }

  /* -------------------------- Add to the beginning. ------------------------- */
  public unshift(value: T): void {
    // If the array length at capacity, we need to double the size.
    if (this.length === this.capacity) this.grow();

    // Calculate the new head index.
    this.headIdx = (this.headIdx - 1 + this.capacity) % this.capacity;
    // Assign the value to the head.
    this.arr[this.headIdx] = value;
    // Update the length.
    this.length++;
  }

  /* ------------------------ Remove from the beginning ----------------------- */
  public shift(): T | undefined {
    // If the length is 0, you can't remove anything
    if (this.length === 0) return undefined;

    const value = this.arr[this.headIdx]; // Get the value at the head

    // Set the tail to move behind
    const newHeadIdx = (this.headIdx + 1 + this.capacity) % this.capacity;

    this.length--; // Decrease the length
    this.headIdx = newHeadIdx; // Update the tail index
    return value; // Return the value
  }
}
