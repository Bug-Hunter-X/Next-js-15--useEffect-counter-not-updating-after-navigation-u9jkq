# Next.js 15 useEffect Counter Bug

This repository demonstrates a bug encountered in Next.js 15 where a counter updated within a `useEffect` hook does not re-render the component after navigating to a different page and then back.  The counter continues counting in the background, but the UI does not reflect the updated value.

## Bug Description

A simple counter increments every second using `useEffect` and `setInterval`.  Navigating away from and back to the page where the counter is shown does not update the displayed counter value, even though the counter is still updating in the background.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the counter incrementing.
6. Navigate to `/`.
7. Navigate back to `/about`.
8. Notice that the counter does not start where it left off, rather it starts from 0 again.

## Solution

The solution involves using the `useMemo` hook to prevent unnecessary re-renders. This prevents the counter from being reset during component remount and maintains the current count value.