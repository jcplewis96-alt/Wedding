import { useState, useEffect } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKsuONKHIOp8g6F3FJFX4fUlru2UZpmN4BPDLPueN2rMvZYrwqpm7roe7yIRb5pjxlgw/exec";

export interface Guest {
  invitado: string;
  cupos: number;
}

// Module-level cache so fetch only happens once per page load
let cache: Guest | null | "notfound" = null;
let fetchPromise: Promise<void> | null = null;

// Kick off the fetch IMMEDIATELY when the module loads (before React mounts)
// This runs in parallel with the splash/envelope animation
const _codigo = new URLSearchParams(window.location.search).get("i") || "";
if (_codigo) {
  fetchPromise = fetch(`${SCRIPT_URL}?i=${_codigo}`)
    .then(r => r.json())
    .then(d => {
      cache = d.found
        ? { invitado: d.nombre, cupos: Number(d.cupos) }
        : "notfound";
    })
    .catch(() => { cache = "notfound"; });
}

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

    // fetchPromise already started at module load time — just wait for it

    fetchPromise.then(() => {
      if (cache === "notfound") { setNotFound(true); }
      else if (cache) { setGuest(cache); }
      setLoading(false);
    });
  }, [codigo]);

  return { guest, loading, notFound };
}
