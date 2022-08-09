export const fetchPost = async ({ url, body }: { url: string; body: any }) => {
  const response = await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error();
  }

  return response.json();
};
