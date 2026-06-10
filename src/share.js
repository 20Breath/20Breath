export const shareData = {
  title: "20 نفس",
  text: "فريق توعوي يهدف إلى تعريف المجتمع بتخصص العلاج التنفسي.",
  url: "https://20breath.github.io/20Breath/"
};

export async function shareWebsite() {
  if (navigator.share) {
    await navigator.share(shareData);
    return "";
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(shareData.url);
    return "تم نسخ رابط الموقع";
  }

  return shareData.url;
}
