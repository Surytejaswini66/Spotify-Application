import { Song } from "@/types";
type SectionGridProps = {
    title: string;
    songs: Song[];
    isLoading: boolean;
};
declare const SectionGrid: ({ songs, title, isLoading }: SectionGridProps) => import("react/jsx-runtime").JSX.Element;
export default SectionGrid;
