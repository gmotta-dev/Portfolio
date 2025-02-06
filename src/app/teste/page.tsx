import { revalidateTag, unstable_cache } from "next/cache";

export default async function Page() {
  const { randomNumber, randomColor, someApiResponse } = await getData();

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Revalidation Test Page</h1>

      <div className="space-y-4">
        <p>This page revalidates every 60 seconds</p>

        <div className="rounded border p-4">
          <p>
            <strong>Random Number:</strong> {randomNumber}
          </p>
          <p>
            <strong>Random Color:</strong>
            <span style={{ color: randomColor }}>{randomColor}</span>
          </p>
        </div>

        {someApiResponse}

        <form
          action={async () => {
            "use server";
            revalidateTag("teste");
          }}>
          <button type="submit">Refresh</button>
        </form>

        <p className="text-sm text-gray-600">
          Refresh the page within 60 seconds - the values will stay the same.
          <br />
          Wait 60+ seconds and refresh - you&apos;ll see new values.
        </p>
      </div>
    </div>
  );
}

const getData = async () =>
  await unstable_cache(
    async () => {
      return {
        randomNumber: Math.random(),
        randomColor: ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)],
        /* brazil time */
        someApiResponse: await fetch("https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo")
          .then((res) => res.json())
          .then((json) => json.dateTime),
      };
    },
    ["teste-key"],
    { revalidate: 60, tags: ["teste"] },
  )();
