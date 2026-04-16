export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  phone?: string;
}

export interface IAdmin extends IUser {
  role: 'superadmin' | 'moderator' | 'support';
  permissions: string[];
  lastLogin: Date;
  accessLevel: number;
  department?: string;
}

export interface IDeveloper extends IUser {
  telegram: string;
  city: string;
}

export type UploadStatus = "loading" | "success" | "error";
export let uploadStatus: UploadStatus;
export type TextFormat = "uppercase" | "lowercase" | "capitalize";
export let textFormat: TextFormat;
export const products: IProduct[] = [
  { id: 1, name: 'Хлеб', price: 50 },
  { id: 2, name: 'Молоко', price: 80 },
  { id: 3, name: 'Сыр', price: 200 }
];

export const developers: IDeveloper[] = [
  {
    id: 1,
    name: "Владислав",
    surname: "Бабенко",
    telegram: "@babenkovlds",
    age: 25,
    phone: "+7 (999) 11-22-21",
    city: "Лас-Вегас"
  },
  {
    id: 2,
    name: "Фарух",
    surname: "Сафаров",
    telegram: "@safarovfarukh",
    age: 27,
    phone: "+7 (999) 234-56-78",
    city: "Нефтеюганск"
  },
  {
    id: 3,
    name: "Низам",
    surname: "Мекх",
    telegram: "@KhaoKai",
    age: 25,
    phone: "+7 (999) 345-67-89",
    city: "Грозный"
  },
  {
    id: 4,
    name: "Курбан",
    surname: "Садыков",
    telegram: "@KurbanShugu",
    age: 28,
    phone: "+7 (22) 289 85-55",
    city: "Каспийск"
  }
];

export function sumNumbers(a: number, b: number): number {
  return a + b;
}

export function formatString(text: string, format: TextFormat): string {
  switch (format) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "capitalize":
      if (text.length === 0) return text;
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
}

export function removeCharacter(text: string, charToRemove: string): string {
  return text.replaceAll(charToRemove, '');
}

export function filterDevelopersByAge(minAge: number): IDeveloper[] {
  return developers.filter((developer: IDeveloper): boolean => developer.age >= minAge);
}

export function filterDevelopersByCity(city: string): IDeveloper[] {
  return developers.filter((developer: IDeveloper): boolean => developer.city === city);
}

export function filterDevelopersByName(name: string): IDeveloper[] {
  return developers.filter((developer: IDeveloper): boolean => 
    developer.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function filterDevelopersBySurname(surname: string): IDeveloper[] {
  return developers.filter((developer: IDeveloper): boolean => 
    developer.surname.toLowerCase().includes(surname.toLowerCase())
  );
}