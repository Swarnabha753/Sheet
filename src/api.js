// src/api.js
export async function fetchSheet() {
  const res = await fetch(
    "https://node.codolio.com/api/question-tracker/v1/sheet/public/get-sheet-by-slug/striver-sde-sheet"
  );
  return res.json();
}