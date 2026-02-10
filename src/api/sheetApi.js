export const fetchSheet = async () => {
    const res = await fetch('/data/sheet.json');

    if (!res.ok) {
        throw new Error('Failed to fetch sheet.json');
    }

    return await res.json();
};