import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import { writeFileSync } from 'fs'

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
  <rect width="256" height="256" rx="32" fill="#4E4540"/>
  <text x="128" y="176" font-family="serif" font-size="160" font-weight="bold" fill="#FAEBD7" text-anchor="middle">胡</text>
</svg>`

async function generateFavicon() {
  try {
    const sizes = [16, 32, 48]
    const pngBuffers = []

    for (const size of sizes) {
      const pngBuffer = await sharp(Buffer.from(svgContent))
        .resize(size, size)
        .png()
        .toBuffer()
      pngBuffers.push(pngBuffer)
    }

    const icoBuffer = await pngToIco(pngBuffers)
    writeFileSync('./public/favicon.ico', icoBuffer)
    console.log('favicon.ico generated successfully!')
  } catch (error) {
    console.error('Error:', error)
  }
}

generateFavicon()
