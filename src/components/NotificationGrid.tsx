import React from 'react';
import { NotificationCard } from './NotificationCard';
import { GridSection as GridSectionType } from '../types';

interface NotificationGridProps {
  sections: GridSectionType[];
}

export const NotificationGrid: React.FC<NotificationGridProps> = ({ sections }) => {
  const sendDataToGoogleSheet = (optionId: string, identifier: string) => {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxixa7Ii02_pmC3z1HFzdOs98rpAakA6X-3XTfcnQ48EB3zMH5t85gSUJxZqjI0sotrBA/exec';
    const now = new Date();
    const dateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} / ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    const params = new URLSearchParams({
        eventType: "click",
        identifier,
        optionId,
        dateTime
    });

    fetch(`${scriptUrl}?${params.toString()}`)
        .then((response) => response.json())
        .then((data) => console.log("Response:", data))
        .catch(error => console.error('Error:', error));
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
