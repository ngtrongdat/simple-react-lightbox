import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import { SRLEmbedVideoWrapper } from '../../../../../styles/SRLElementContainerStyles'

export default function SRLYoutubeComponent({
  controls,
  autoplay,
  width,
  height,
  src
}) {
  return (
    <SRLEmbedVideoWrapper wrapperWidth={width}>
      <ReactPlayer
        className="SRLEmbedVideoWrapper"
        containerClassName="SRLYouTubeWrapper"
        url={src}
      />
    </SRLEmbedVideoWrapper>
  )
}

SRLYoutubeComponent.propTypes = {
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string
}
