"use client"

export default function RedirectToMaps({ lat, long }: { lat: string, long: string }) {
    return (
        <button
            className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded-full"
            onClick={() => {
                window.open(`https://maps.google.com?q=${lat},${long}`);
            }}
        >
            Open in maps
        </button>
    )
}