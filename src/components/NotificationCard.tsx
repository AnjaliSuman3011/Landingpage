import React, { useState } from 'react';
import { NotificationCard as NotificationCardType } from '../types';

interface NotificationCardProps {
  card: NotificationCardType;
  onCardClick: (identifier: string, optionId: string) => void;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  card,
  onCardClick,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCardClick(card.identifier, card.id);
  };

  return (
    <div className="relative flex flex-col items-stretch rounded-xl shadow-lg bg-gradient-to-r from-[#004246] to-[#02BF91] text-white overflow-visible w-full transition-transform hover:-translate-y-1 hover:shadow-xl group">
      
      {/* Image section */}
      <div className="w-full h-[200px] flex-shrink-0">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between p-6 w-full min-h-[200px]">
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold text-white mb-3">
            {card.title}
          </h2>
          <p className="text-base text-[#a4ebf3] leading-relaxed">
            {card.description}
          </p>
        </div>

        <div className="flex justify-start mt-6 relative">
          {card.id === 'placement-stats-button' && (card as any).links ? (
            <>
              <button
                onClick={(e) => {
                  handleClick(e);
                  setOpen(!open);
                }}
                className="inline-block px-8 py-3 text-[#004246] font-medium bg-gradient-to-r from-[#F2F62E] to-[#57F49E] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {card.buttonText}
              </button>

              {open && (
                <div
                style={{
                  position: 'absolute',
                    top: '50%',
                left: '110%',
                 transform: 'translateY(-50%)',
                background: '#2b2b2b',
                borderRadius: '14px',
                padding: '14px 18px',
                 minWidth: '260px',
                zIndex: 50,
               boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                }}
                 >

                  {(card as any).links.map(
                    (
                      link: { label: string; url: string },
                      index: number
                    ) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          padding: '10px 0',
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontWeight: 500,
                          borderBottom:
                            index !== (card as any).links.length - 1
                              ? '1px solid rgba(255,255,255,0.15)'
                              : 'none',
                        }}
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              )}
            </>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

