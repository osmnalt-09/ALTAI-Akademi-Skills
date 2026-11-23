# Video Analiz Skill
V1/V2/V3 ve sonraki sürümler dahil tüm animasyon, skeç, kısa film ve eğitim videoları için analiz/revizyon sistemi.

## Claude Code kurulumu
`skills/video-analiz` klasörünü `~/.claude/skills/video-analiz` dizinine kopyalayın. Claude'a analiz edilecek videoları ve sürüm etiketlerini verin.

## Kullanım örneği
"Video Analiz skill'ini kullan. V1, V2, V3 videolarımı ayrı ayrı analiz et; 12 boyutlu karşılaştırma yap, korunacak karakter ve görsel stilleri değiştirme, V3 revizyon promptunu zaman kodlarıyla hazırla."

## Motor
`engine/` klasörü önceki ALT Animasyon v2 paketinden korunmuş **isteğe bağlı Canvas prototipidir**. Bu motor V1/V2/V3 videolarını kendiliğinden analiz etmez; otomatik TTS, Three.js ve gerçek 3D ışıklandırma içermez. Video analizi için motorun çalıştırılması gerekmez. Render doğrulaması bu pakette yapılmadı.
