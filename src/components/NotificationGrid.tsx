import React from 'react';
import { NotificationCard } from './NotificationCard';
import { GridSection as GridSectionType } from '../types';

interface NotificationGridProps {
  sections: GridSectionType[];
}

export const NotificationGrid: React.FC<NotificationGridProps> = ({ sections }) => {
  const sendDataToGoogleSheet = (identifier: string, optionId: string) => {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwUNDuJLsKKuyHEF_026jOc9b8gj01qgiyQwCf2CyF1grCGS-yymNf7ZNuAhuiuGcvd/exec';
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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {sections.map((section, sectionIndex) => {
        const cards = section.cards;
        return (
          <div
            key={sectionIndex}
            className="grid gap-8 mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1800px] mx-auto"
          >
            {cards.map((card) => (
              <NotificationCard
                key={card.id}
                card={card}
                onCardClick={sendDataToGoogleSheet}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
