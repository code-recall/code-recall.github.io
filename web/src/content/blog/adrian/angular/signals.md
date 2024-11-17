---
title: 'Angular Signals'
description: 'What on earth are Angular signals'
pubDate: 11/18/2024
author: 'Adrian Rivers'
tags:
  - Frontend
  - Angular
---

### What are signals?

- Signals are wrappers around a value that notify consumers when that value has changed
  - Capable of containing any value, from primitives to complex data structures
- Signals are read by calling their getter functions
  - Angular keeps track of where signals are used
- Signals can be either _writable_ or _read-only_

### Writable signals

```typescript
// create a signal by calling the signal function and initialising with a value
const count = signal(0)

// signals are getter functions, calling them reads their value
console.log(`Current count: ${count()}`)

// to change the value of a writeable signal either
// set it directly
count.set(3)

// or use the update operation to compute a new value from the previous one
// similar to passing an updater function to a useState instance in React
count.update((value) => value + 1)
```
