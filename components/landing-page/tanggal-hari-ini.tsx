import { useEffect, useState } from "react";

export default function TanggalHariIni() {
  const [tanggal, setTanggal] = useState(getFormattedDate());

  useEffect(() => {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

    const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

    const timer = setTimeout(() => {
      setTanggal(getFormattedDate());
    }, timeUntilMidnight);

    return () => clearTimeout(timer);
  }, [tanggal]);

  return <p className="text-sm text-white">{tanggal}</p>;
}

// Helper function buat format tanggal
function getFormattedDate() {
  return new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
