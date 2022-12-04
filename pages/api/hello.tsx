export const config = {
  runtime: "experimental-edge",
};

async function ApiCall(req: any) {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default ApiCall;
