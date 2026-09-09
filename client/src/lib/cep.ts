export type Address = { street: string; neighborhood: string; city: string; state: string; cep: string };

export async function lookupCep(rawCep: string): Promise<Address | null> {
  const cep = rawCep.replace(/\D/g, "");
  if (cep.length !== 8) return null;
  try {
    const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
    if (!response.ok) return null;
    const data = await response.json();
    return {
      street: data.street ?? "",
      neighborhood: data.neighborhood ?? "",
      city: data.city ?? "",
      state: data.state ?? "",
      cep,
    };
  } catch {
    return null;
  }
}
