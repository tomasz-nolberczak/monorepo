// Implementation code where T is the returned data shape
export default async function useAPI<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json<T>();
}
