import { useState, useEffect } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKsuONKHIOp8g6F3FJFX4fUlru2UZpmN4BPDLPueN2rMvZYrwqpm7roe7yIRb5pjxlgw/exec";

export interface Guest {
  invitado: string;
  cupos: number;
}

export function useGuest(): { guest: Guest | null; loading: boolean; notFound: boolean } {
  const params = new URLSearchParams(window.location.search);
  const codigo = params.get("i") || "";

  const [guest,    setGuest]    = useState<Guest | null>(null);
  const [loading,  setLoading]  = useState(!!codigo);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!codigo) { setLoading(false); return; }

    fetch(`${SCRIPT_URL}?i=${codigo}`)
      .then(r => r.json())
      .then(d => {
        if (d.found) {
          setGuest({ invitado: d.nombre, cupos: Number(d.cupos) });
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [codigo]);

  return { guest, loading, notFound };
}
