export const shareData = {
  title: "20 Ù†ÙØ³",
  text: "ÙØ±ÙŠÙ‚ ØªÙˆØ¹ÙˆÙŠ ÙŠÙ‡Ø¯Ù Ø¥Ù„Ù‰ ØªØ¹Ø±ÙŠÙ Ø§Ù„Ù…Ø¬ØªÙ…Ø¹ Ø¨ØªØ®ØµØµ Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ØªÙ†ÙØ³ÙŠ.",
  url: "https://20breath.github.io/20Breath/"
};

export async function shareWebsite() {
  if (navigator.share) {
    await navigator.share(shareData);
    return "";
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(shareData.url);
    return "ØªÙ… Ù†Ø³Ø® Ø±Ø§Ø¨Ø· Ø§Ù„Ù…ÙˆÙ‚Ø¹";
  }

  return shareData.url;
}
