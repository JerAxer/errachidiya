import { translations as en } from './en';
import { translations as fr } from './fr';
import { translations as ar } from './ar';

export const translations = {
  en,
  fr,
  ar
};

export type TranslationKey = keyof typeof en;