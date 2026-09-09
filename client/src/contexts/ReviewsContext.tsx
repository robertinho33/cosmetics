import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Review = {
  id: string;
  productId: string;
  author: string;
  title: string;
  body: string;
  rating: number;
  date: string;
  verified: boolean;
};

type ReviewsContextValue = {
  reviews: Review[];
  getReviews: (productId: string) => Review[];
  addReview: (review: Omit<Review, "id" | "date" | "verified">) => void;
};

const seedReviews: Review[] = [
  { id: "r-1", productId: "serum-01", author: "Marina S.", title: "Pele com viço de verdade", body: "A textura é leve, absorve rápido e minha pele acordou muito mais bonita depois da primeira semana.", rating: 5, date: "há 2 dias", verified: true },
  { id: "r-2", productId: "serum-01", author: "Julia C.", title: "Virou meu passo favorito", body: "Não esfarela com o protetor e deixa aquele glow saudável, sem ficar oleoso.", rating: 5, date: "há 8 dias", verified: true },
  { id: "r-3", productId: "serum-01", author: "Ana Luiza R.", title: "Delicado e eficiente", body: "Tenho pele sensível e me adaptei super bem. O cheiro é quase imperceptível.", rating: 4, date: "há 15 dias", verified: true },
  { id: "r-4", productId: "cleanser-02", author: "Clara M.", title: "Limpa sem repuxar", body: "A espuma é baixinha e a pele fica confortável depois. Gostei muito para usar de manhã.", rating: 5, date: "há 4 dias", verified: true },
  { id: "r-5", productId: "cream-03", author: "Bia T.", title: "Textura perfeita", body: "Hidrata bem e não pesa. Minha maquiagem assentou melhor desde que comecei a usar.", rating: 5, date: "há 11 dias", verified: true },
];

const ReviewsContext = createContext<ReviewsContextValue | null>(null);

export function ReviewsProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const stored = localStorage.getItem("vela-reviews");
      return stored ? [...seedReviews, ...JSON.parse(stored)] : seedReviews;
    } catch {
      return seedReviews;
    }
  });

  useEffect(() => {
    const customReviews = reviews.filter((review) => !seedReviews.some((seed) => seed.id === review.id));
    localStorage.setItem("vela-reviews", JSON.stringify(customReviews));
  }, [reviews]);

  const value = useMemo(() => ({
    reviews,
    getReviews: (productId: string) => reviews.filter((review) => review.productId === productId),
    addReview: (review: Omit<Review, "id" | "date" | "verified">) => setReviews((current) => [{ ...review, id: `review-${Date.now()}`, date: "agora", verified: false }, ...current]),
  }), [reviews]);

  return <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>;
}

export function useReviews() {
  const context = useContext(ReviewsContext);
  if (!context) throw new Error("useReviews must be used inside ReviewsProvider");
  return context;
}
