import { FC } from "react";
import IconClose from '/src/assets/icons/close.svg?react';
import ModalsOverlay from "../ModalsOverlay";
import './VideoModal.scss';

type VideoModalProps = {
  youtubeVideoId: string;
  onClose: () => void;
}

const VideoModal: FC<VideoModalProps> = ({ youtubeVideoId, onClose }) => {
  return (
    <ModalsOverlay>
      <div className="video-modal">
        <div className="video-modal__container">
          <iframe
            className="video-modal__iframe"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          />
          <button className="video-modal__close" onClick={onClose}>
            <IconClose width={24} height={24} aria-hidden={true} />
          </button>
        </div>
      </div>

    </ModalsOverlay>
  )
}

export default VideoModal;