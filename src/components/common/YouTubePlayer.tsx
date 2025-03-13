"use client"

import React, {FC, useEffect, useRef, useState} from 'react';
import PlayButton from "@/components/common/PlayButton";
import {cn} from "@/lib/utils";

interface IProps {
  videoId: string;
  poster?: string;
  posterClass?: string;
  bgClass?: string;
  infoLine1?: string;
  infoLine2?: string;
  className?: string;
}

const YouTubePlayer: FC<IProps> = (
  {
    videoId,
    poster,
    posterClass,
    bgClass,
    infoLine1,
    infoLine2,
    className
  }) =>
{
  const playerRef = useRef<HTMLDivElement | null>(null); // Ref for the player
  const [player, setPlayer] = useState<YT.Player | null>(null); // Player instance
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state

  // Load YouTube Iframe API script
  useEffect(() => {
    // Initialize the player after API loads
    const initializePlayer = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      window.YT.ready(() => {
        if (playerRef.current===null) return;
        const newPlayer = new window.YT.Player(playerRef.current, {
          videoId: videoId,
          events: {
            onReady: () => setPlayer(newPlayer), // Set player after it's ready
            onStateChange: onPlayerStateChange
          }
        });
        setPlayer(newPlayer);
      });
    };

    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
      script.onload = () => initializePlayer();
    } else {
      initializePlayer();
    }
  }, [videoId]);

  // Handle state changes (play, pause, etc.)
  const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false);
    }
  };

  const handlePlay = () => {
    if (player && typeof player?.playVideo === 'function') {
      player.playVideo();
    }
  };

  return (
    <div className={cn(
      "relative w-full h-full",
    )}>
      <div
        ref={playerRef}
        className={cn(
          "w-full h-full border-none",
          (className||'')
        )}
      />
      {!isPlaying &&
        <div
          className={cn(
            "absolute z-40 inset-0 flex items-center justify-center",
            "before:absolute before:-z-10 before:inset-0 before:bg-black/20 before:pointer-events-none",
            bgClass || ''
          )}
        >
          {poster && <div
            style={{
              backgroundImage: `url(${poster})`,
            }}
            className={cn('absolute w-full inset-0 -z-10 bg-cover bg-top bg-no-repeat',posterClass || "")}
          />}
          {(infoLine1 || infoLine2) && <div
            className={cn(
              "flex flex-col gap-2.5 justify-end h-[60%] w-full absolute -z-10 bottom-0 left-0 p-6",
              "text-white text-sm lg:text-[18px] leading-[1.3] font-semibold"
            )}
            style={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)"
            }}
          >
            <span>{infoLine1}</span>
            <span>{infoLine2}</span>
          </div>
          }
          <PlayButton onClick={() => handlePlay()}/>
        </div>
      }
    </div>
  );
};

export default YouTubePlayer;
