
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  content: string[];
  subHeader?: string;
  detailedImages?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
