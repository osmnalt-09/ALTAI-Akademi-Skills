---
name: video-analiz
description: Video, animasyon, skeç, Reels, Shorts ve eğitim videolarını V1/V2/V3 dahil tüm sürümler arasında analiz eder; referanslardan teknik çözümleme, revizyon planı ve üretim promptu oluşturur. Kullanıcı açıkça istemedikçe mevcut karakter, stil ve sahne kimliğini değiştirmez.
---
# Video Analiz — Evrensel Sürüm ve Stil Analiz Skill'i

## Kapsam
Bu skill **bir animasyon markası veya tek bir görsel stil değildir**. V1, V2, V3 ve ilerideki tüm sürümler; animasyon, skeç, kısa film, belgesel, öğretici video, sosyal medya Reels/Shorts, kapak ve storyboard analizinde kullanılır. Sürüm adları kalite sıralaması değildir: projeye özgü varyant etiketleridir.

## Önce oku
- `references/ANALIZ_SISTEMI.md`: 12 boyutlu analiz ve zaman kodu şablonu
- `references/SURUM_YONETIMI.md`: V1/V2/V3 kıyas ve değişiklik koruma kuralları
- `references/REVIZE_PROTOKOLU.md`: revizyon ve teslim formatı

## Zorunlu iş akışı
1. Girdi envanteri: tüm video/görsel/ses/metin dosyalarını ve sürüm etiketlerini listele. Hangi sürümün hangisi olduğu bilinmiyorsa tahmin etme.
2. İçeriği gerçekten incele: süre, en-boy, kare/sahne, konuşma, altyazı, müzik, efekt, kamera ve kurgu. İzlenemeyen veya ölçülemeyen ayrıntıyı açıkça belirt.
3. Her sürümü **aynı 12 analiz boyutunda** ayrı değerlendir. Tek bir sürümü diğerlerinin yerine geçirme.
4. Kullanıcının korunacak öğelerini kilitle: karakter, yüz, logo, renk, font, ses, sahne, oran, anlatı veya zamanlama. Belirtilmeyenleri varsayılan olarak koru.
5. V1/V2/V3 arasında zaman kodlu karşılaştırma matrisi hazırla; güçlü yanları ve sorunları kanıta dayalı göster.
6. Yeni sürüm önerirken yalnızca istenen değişiklikleri uygula; diğer unsurları aynı tut. Çakışan talimatları belirt.
7. İstenirse Claude veya başka üretim aracı için uygulanabilir sahne sahne revizyon promptu oluştur; araçların gerçekten yapabildiklerini aşan iddialarda bulunma.
8. Kullanıcı üretim de isterse `engine/` klasöründeki **opsiyonel prototip** modülünü kullanabilirsin; analiz görevinde kod veya render zorunlu değildir.
9. Çıktıda doğrulanmış gözlem, yorum ve öneriyi ayrı tut. İzlenme/başarı tahmini garanti değildir.

## Yanıt formatı
**Girdi/sürüm envanteri → teknik kimlik → zaman kodlu sahne analizi → V1/V2/V3 karşılaştırması → korunacaklar → revizyonlar → üretim promptu → kalite kontrol listesi.** İstenen kapsam daha darsa yalnızca gerekli bölümleri sun.

## Önemli
V1/V2/V3 kaynak videoları bu paketin içinde değildir; kullanıcı videoları sağladığında analiz edilir. Önceki sohbetlerdeki stil adlarını ve karakter kimliklerini kullanıcı teyidi olmadan tek bir standartla değiştirme.
