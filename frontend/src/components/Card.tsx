import { RemoveItem } from "../icons/removeItem";
import { ShareIcon } from "../icons/ShareIcon";

interface CardInterface {
  type: "youtube" | "x";
  link: string;
  title: string;
}

const EmbedLink = (link: string | null): string | null => {
  try {
    if (!link) return null;
    const url = new URL(link);
    const videoId = url.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  } catch (error) {
    console.error("Invalid YouTube URL:", error);
    return null;
  }
};

export function Card({ type, link, title }: CardInterface) {
  return (
    <>
      <div>
        <div className="bg-white rounded-md shadow-md border max-w-72 border-gray-100 p-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-3">
              <div className="text-gray-500">
                <ShareIcon />
              </div>
              {title}
            </div>
            <div className="flex items-center gap-x-3 text-gray-500">
              <ShareIcon />
              <RemoveItem />
            </div>
          </div>
          <div className="mt-4">
            {type === "youtube" && (
              <iframe
                className="w-full"
                src={EmbedLink(link) || ""}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            {type === "x" && (
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
