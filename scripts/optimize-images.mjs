import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ASSETS = path.join(__dirname, '../src/assets')
const PUBLIC = path.join(__dirname, '../public')

async function run() {
  // Logo: 935×1089 → 300px wide WebP (shown at 48px; 300 is generous 2× for high-DPI)
  await sharp(path.join(ASSETS, 'logo.png'))
    .resize(300)
    .webp({ quality: 92 })
    .toFile(path.join(ASSETS, 'logo.webp'))
  console.log('logo.webp done')

  // Panel hero: 1699×926 → 1400px WebP (CSS background, 2× desktop)
  await sharp(path.join(ASSETS, 'New panel.png'))
    .resize(1400)
    .webp({ quality: 85 })
    .toFile(path.join(ASSETS, 'panel-new.webp'))
  console.log('panel-new.webp done')

  // Renan portrait: 589×1280 → 600px wide WebP
  await sharp(path.join(ASSETS, 'Renan.png'))
    .resize(600)
    .webp({ quality: 88 })
    .toFile(path.join(ASSETS, 'renan.webp'))
  console.log('renan.webp done')

  // Department of the Environment logo → WebP
  await sharp(path.join(ASSETS, 'Department of the Environment.png'))
    .webp({ quality: 90 })
    .toFile(path.join(ASSETS, 'doe.webp'))
  console.log('doe.webp done')

  // OG social preview image — 1200×630
  const logoBuffer = await sharp(path.join(ASSETS, 'logo.png'))
    .resize(null, 110)
    .png()
    .toBuffer()

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <!-- Subtle decorative panels (right side) -->
    <polygon points="860,0 1200,0 1200,630 980,630" fill="#D9A21B" opacity="0.07"/>
    <polygon points="1000,0 1200,0 1200,630 1120,630" fill="#D9A21B" opacity="0.07"/>

    <!-- Gold left accent bar -->
    <rect x="72" y="104" width="7" height="300" fill="#D9A21B"/>

    <!-- Company name -->
    <text x="104" y="208"
      font-family="Arial Black, Arial, Helvetica, sans-serif"
      font-weight="900"
      font-size="104"
      fill="#F3F1EA"
      letter-spacing="-2">BERNARD'S</text>

    <text x="106" y="288"
      font-family="Arial, Helvetica, sans-serif"
      font-weight="700"
      font-size="46"
      fill="#D9A21B"
      letter-spacing="5">ELECTRICAL SOLUTIONS</text>

    <!-- Divider -->
    <line x1="104" y1="318" x2="680" y2="318" stroke="#4A5D80" stroke-width="1.5"/>

    <!-- Tagline -->
    <text x="104" y="380"
      font-family="Arial, Helvetica, sans-serif"
      font-weight="400"
      font-size="34"
      fill="#C9D1E0">Wired right, the first time.</text>

    <!-- Details row -->
    <text x="104" y="460"
      font-family="Arial, Helvetica, sans-serif"
      font-size="22"
      fill="#A9B4C8">PUC Licensed · Belmopan, Belize</text>

    <!-- Phone -->
    <text x="104" y="556"
      font-family="Arial, Helvetica, sans-serif"
      font-weight="700"
      font-size="34"
      fill="#F3F1EA"
      letter-spacing="1">501-610-2396</text>
  </svg>`

  await sharp({ create: { width: 1200, height: 630, channels: 4, background: { r: 11, g: 31, b: 63, alpha: 1 } } })
    .composite([
      { input: Buffer.from(svg), top: 0, left: 0 },
      { input: logoBuffer, top: 36, left: 1050 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC, 'og-image.png'))
  console.log('og-image.png done')
}

run().catch(err => { console.error(err); process.exit(1) })
