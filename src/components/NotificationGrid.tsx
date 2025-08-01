import React from 'react';
import { NotificationCard } from './NotificationCard';
import { GridSection as GridSectionType } from '../types';

interface NotificationGridProps {
  sections: GridSectionType[];
}

export const NotificationGrid: React.FC<NotificationGridProps> = ({ sections }) => {
  const sendDataToGoogleSheet = (identifier: string, optionId: string) => {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw2EriLqA6q02nFEk3MNSrzxK3AW_nBEYNi6eRBF1ZttvSQoHp6pw5H5U-MDaYPbXO1/exec';
    const dateTime = new Date().toISOString();

    const params = new URLSearchParams({
      eventType: "click",
      identifier,
      optionId,
      dateTime
    });

    fetch(`${scriptUrl}?${params.toString()}`)
      .then(res => res.json())
      .then(data => console.log("Click logged:", data))
      .catch(err => console.error("Click log failed:", err));
  };

  // Flatten all cards across sections into a single array
  const allCards = sections.flatMap(section => section.cards);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 mb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-[1800px] mx-auto">
        {allCards.slice(0, 8).map((card) => (
          <NotificationCard
            key={card.id}
            card={card}
            onCardClick={sendDataToGoogleSheet}
          />
        ))}
      </div>
    </div>
  );
};

