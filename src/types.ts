export interface NotificationCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  buttonText: string;
  identifier: string;
}

export interface GridSection {
  cards: NotificationCard[];
  layout: 'main' | 'bottom';
}