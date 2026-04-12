import { useState, useEffect } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKsuONKHIOp8g6F3FJFX4fUlru2UZpmN4BPDLPueN2rMvZYrwqpm7roe7yIRb5pjxlgw/exec";

export interface Guest {
  invitado: string;
  cupos: number;
}

// Module-level cache so fetch only happens once per page load
let cache: Guest | null | "notfound" = null;
let fetchPromise: Promise<void> | null = null;

export function useGuest(): { guest: Guest | null; loading: boolean; notFound: boolean } {
  const params = new URLSearchParams(window.location.search);
  const codigo = params.get("i") || "";

  // No code in URL — never load, show default text immediately
  const [guest,    setGuest]    = useState<Guest | null>(null);
  const [loading,  setLoading]  = useState(!!codigo);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!codigo) { setLoading(false); return; }

    // If already cached, use it immediately with no flash
    if (cache !== null) {
      if (cache === "notfound") { setNotFound(true); }
      else { setGuest(cache); }
      setLoading(false);
      return;
    }

    // Deduplicate: if a fetch is already in flight, wait for it
    if (!fetchPromise) {
      fetchPromise = fetch(`${SCRIPT_URL}?i=${codigo}`)
        .then(r => r.json())
        .then(d => {
          if (d.found) {
            cache = { invitado: d.nombre, cupos: Number(d.cupos) };
          } else {
            cache = "notfound";
          }
        })
        .catch(() => { cache = "notfound"; });
    }

    fetchPromise.then(() => {
      if (cache === "notfound") { setNotFound(true); }
      else if (cache) { setGuest(cache); }
      setLoading(false);
    });
  }, [codigo]);

  return { guest, loading, notFound };
}
