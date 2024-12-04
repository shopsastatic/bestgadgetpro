import { draftMode, cookies } from "next/headers";

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: { [key: string]: any },
  headers?: { [key: string]: string },
): Promise<T> {
  const { isEnabled: preview } = draftMode() as any;

  try {
    let authHeader = "";
    if (preview) {
      const auth = (cookies() as any).get("wp_jwt")?.value;
      if (auth) {
        authHeader = `Bearer ${auth}`;
      }
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authHeader && { Authorization: authHeader }),
          ...headers,
        },
        body: JSON.stringify({
          query,
          variables: {
            preview,
            ...variables,
          },
        }),
        cache: preview ? "no-store" : "force-cache",
        next: preview 
          ? { revalidate: 0 } 
          : { 
              revalidate: 3600,
              tags: ["wordpress"]
            },
      },
    );

    if (!response.ok) {
      console.error("Response Status:", response);
      throw new Error(response.statusText);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
      throw new Error("Error executing GraphQL query");
    }

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}