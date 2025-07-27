// src/components/NewsSection.tsx
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { NewsArticle } from '@/types/index.types';
import { timeAgo } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';

/* --- skeleton helpers --- */
const SkeletonCard = () => (
  <div className="rounded-lg border bg-card shadow-sm animate-pulse">
    <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-t-lg" />
    <div className="p-4 space-y-2">
      <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
    </div>
  </div>
);

/* --- real card & image helpers --- */
const ShadcnCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const ResponsiveImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-40 object-cover rounded-t-lg"
    loading="lazy"
  />
);

/* ---------------------------------- */
export default function NewsSection({ news, loading }: { news: NewsArticle[]; loading: boolean }) {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center mb-16 p-4 font-sans">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 gradient-text">
          Latest News
        </h2>

        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {loading
              ? Array.from({ length: 8 }).map((_, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <SkeletonCard />
                  </CarouselItem>
                ))
              : news?.map((article) => (
                  <CarouselItem
                    key={article.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/4 cursor-pointer"
                  >
                    <Link to={article.url}>
                    <ShadcnCard className="min-h-[300px] flex flex-col justify-between">
                      <ResponsiveImage src={article.image} alt={article.title} />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
                        <p className="text-xs text-gray-400 mb-2">{timeAgo(article.published_at)}</p>
                        <p className="text-sm text-gray-300 line-clamp-3">{article.description}</p>
                      </div>
                    </ShadcnCard>
                    </Link>
                  </CarouselItem>
                ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}