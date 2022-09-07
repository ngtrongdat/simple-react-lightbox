export function isSimpleImage(e) {
  return e.nodeName === 'IMG' && e.parentNode?.nodeName !== 'A'
}

export function isGalleryImage(e) {
  return (
    e.getAttribute('srl_gallery_image') ||
    (e.nodeName === 'IMG' &&
      (e.offsetParent?.nodeName === 'A' || e.parentNode?.nodeName === 'A')) ||
    (e.nodeName === 'IMG' &&
      e.parentNode.nodeName === 'PICTURE' &&
      e.offsetParent?.nodeName === 'A') ||
    e.parentNode?.nodeName === 'A'
  )
}

export function isGatsbyGalleryImage(e) {
  return (
    e.nodeName === 'IMG' &&
    e.parentNode.nodeName === 'PICTURE' &&
    e.parentNode.parentNode.className.includes('gatsby-image-wrapper') &&
    e.parentNode.parentNode.parentNode.nodeName === 'A'
  )
}

export function isImageByUser(e) {
  // const regex = /\.(jpeg|jpg|gif|svg|png|webp)\/?$/g
  // return regex.test(e.src)
  return e.src
}

export function isImageWithVideo(e) {
  return e.nodeName === 'IMG' && e.nextSibling?.nodeName === 'VIDEO'
}

export function isVideo(e) {
  return e.nodeName === 'VIDEO' && e.nextSibling?.nodeName !== 'VIDEO'
}

export function isEmbedVideo(e) {
  const regex =
    /(https?:\/\/)www.(youtube.com\/watch[?]v=([a-zA-Z0-9_-]{11}))|https?:\/\/(www.)?vimeo.com\/([0-9]{9})/g
  return (
    e.nodeName === 'IMG' &&
    e.parentNode?.nodeName === 'A' &&
    regex.test(e.parentNode.href)
  )
}

export function isEmbedVideoByUser(e) {
  const regex =
    /(https?:\/\/)www.(youtube.com\/watch[?]v=([a-zA-Z0-9_-]{11}))|https?:\/\/(www.)?vimeo.com\/([0-9]{9})/g
  return regex.test(e.src)
}
