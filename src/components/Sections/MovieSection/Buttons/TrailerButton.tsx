import { FC, useState } from "react";
import Button from "../../../ui/Button/Button";
import VideoModal from "../../../Modals/VideoModal/VideoModal";

type TrailerButtonProps = {
  youtubeVideoId: string;
}

const TrailerButton: FC<TrailerButtonProps> = ({ youtubeVideoId }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpened(true)} >Трейлер</Button>
      {isOpened && <VideoModal youtubeVideoId={youtubeVideoId} onClose={() => setIsOpened(false)} /> }
    </>
  )
}

export default TrailerButton;