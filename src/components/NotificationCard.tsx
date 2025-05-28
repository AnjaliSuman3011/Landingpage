import React from 'react';
import { NotificationCard as NotificationCardType } from '../types';

interface NotificationCardProps {
  card: NotificationCardType;
  onCardClick: (identifier: string, optionId: string) => void;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({ card, onCardClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCardClick(card.identifier, card.id); // ✅ Corrected order
  };

  return (
    <div className="relative flex flex-col items-stretch rounded-xl shadow-lg bg-gradient-to-r from-[#004246] to-[#02BF91] text-white overflow-hidden w-full transition-transform hover:-translate-y-1 hover:shadow-xl group">
      <div className="w-full h-[200px] flex-shrink-0">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between p-6 w-full min-h-[200px]">
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold text-white mb-3">{card.title}</h2>
          <p className="text-base text-[#a4ebf3] leading-relaxed">{card.description}</p>
        </div>
        <div className="flex justify-start mt-6">
          <a
            href={card.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={card.id}
            onClick={handleClick}
            className="inline-block px-8 py-3 text-[#004246] font-medium bg-gradient-to-r from-[#F2F62E] to-[#57F49E] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {card.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};
