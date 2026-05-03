import { useState, useEffect } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxhwQ68ZvVL8245SZ3zzAa0iGctiAQQmCS-mjBfz6Nc-3Dw5ukM8Ae3XKLwZZVIhZTz0Q/exec";
const TOKEN = "boda-juma-2026-secret";

export interface Guest {
  invitado: string;
  cupos: number;
}

let cache: Guest | null | "notfound" = null;
let fetchPromise: Promise<void> | null = null;

const _codigo = new URLSearchParams(window.location.search).get("i") || "";
if (_codigo) {
  fetchPromise = fetch(`${SCRIPT_URL}?i=${_codigo}&token=${TOKEN}`)
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

  const [guest,    setGuest]    = useState<Guest | null>(null);
  const [loading,  setLoading]  = useState(!!codigo);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!codigo) { setLoading(false); return; }

    if (cache !== null) {
      if (cache === "notfound") { setNotFound(true); }
      else { setGuest(cache); }
      setLoading(false);
      return;
    }

    if (!fetchPromise) {
      fetchPromise = fetch(`${SCRIPT_URL}?i=${codigo}&token=${TOKEN}`)
        .then(r => r.json())
        .then(d => {
          cache = d.found
            ? { invitado: d.nombre, cupos: Number(d.cupos) }
            : "notfound";
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
