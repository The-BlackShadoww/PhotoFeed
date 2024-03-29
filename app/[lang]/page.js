import { getDictionary } from "./dictionaries";
import PhotoList from "@/components/PhotoList";

export default async function Home({ params: { lang } }) {
    const dictionary = await getDictionary(lang);

    const response = await fetch(`${process.env.BASE_API_URL}/photos`);

    const photos = await response.json();

    return <PhotoList photos={photos} />;
}
