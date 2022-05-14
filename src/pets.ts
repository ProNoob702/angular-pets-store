export interface IPet {
  id: number;
  category?: { id: number; name: string };
  name: string | null;
  photoUrls: string[];
  tags: { id: number; name: string }[];
  status: 'available' | 'pending' | 'sold';
}

export const petsList: IPet[] = [
  {
    id: 1,
    name: 'Zouta',
    photoUrls: [],
    tags: [{ id: 1, name: 'good' }],
    status: 'available',
  },
  {
    id: 2,
    name: 'Kouta',
    photoUrls: [],
    tags: [{ id: 1, name: 'nice' }],
    status: 'available',
  },
  {
    id: 3,
    name: 'Nouta',
    photoUrls: [],
    tags: [{ id: 1, name: 'not good' }],
    status: 'pending',
  },
];
