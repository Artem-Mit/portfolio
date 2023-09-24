import { getScopedI18n } from '@/locales/server';

export async function getLinksNames() {
  const getLinksName = await getScopedI18n('NAV_LINKS');
  const aboutLinkName = getLinksName('about')
  const worksLinkName = getLinksName('works')
  const contactsLinkName = getLinksName('contacts')
  const getButtonText = await getScopedI18n('DOWNLOAD');
  const downloadButtonText = getButtonText('text');
  const language = await getScopedI18n('ANOTHER_LANGUAGE')
  const anotherLanguage = language('lang')

  return [aboutLinkName, worksLinkName, contactsLinkName, downloadButtonText, anotherLanguage]
}