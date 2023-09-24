import { getScopedI18n } from '@/locales/server';

export async function getFooterText() {
  const t = await getScopedI18n('FOOTER');
  const footerText = t('text');
  return [footerText]
}