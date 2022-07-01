import React from "react";
import LiveChannelItem from "./LiveChannelItem";
import live1 from "../public/assets/live/live1.jpeg";
import live2 from "../public/assets/live/live2.jpeg";
import live3 from "../public/assets/live/live3.jpeg";
import live4 from "../public/assets/live/live4.jpeg";
import live5 from "../public/assets/live/live5.jpeg";
import live6 from "../public/assets/live/live6.jpeg";
import live7 from "../public/assets/live/live7.jpeg";
import live8 from "../public/assets/live/live8.jpeg";
import live9 from "../public/assets/live/live9.jpeg";
import live10 from "../public/assets/live/live10.jpeg";
import live11 from "../public/assets/live/live11.jpeg";
import live12 from "../public/assets/live/live12.jpeg";

const LiveChannels = () => {
  return (
    <>
      <div id="live" className="p-2 md:p-8">
        <h2 className="text-xl font-bold px-2">
          <span className="text-[#9147ff]">Live Channels</span> we think you´ll
          like
        </h2>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
          <LiveChannelItem
            img={live1}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/4c0adb78-f81c-4dd3-bca7-61146eb163b9-profile_image-70x70.png"
            title="CHARITY STREAM! Any support is ap..."
            user="Natt"
            game="Valorant"
          />
          <LiveChannelItem
            img={live2}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/5d92c6c6-69f6-4d4e-8fc3-aeb9da5e6260-profile_image-50x50.png"
            title="Deployable shield commin in clutch"
            user="50ZINT"
            game="Call of Duty: Warzone"
          />
          <LiveChannelItem
            img={live3}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/26fac640-e78a-49f4-8ab2-8d12b92574c6-profile_image-50x50.png"
            title="VALORANT WITH NIJI AND FRIENDS!..."
            user="baoo"
            game="Valorant"
          />
          <LiveChannelItem
            img={live4}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/jerma985-profile_image-447425e773e6fd5c-50x50.jpeg"
            title="Local Streamer stuck in a cave: sings..."
            user="Jerma985"
            game="One Hand Clapping"
          />
          <LiveChannelItem
            img={live5}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/bed3ea39-265b-4632-b866-598bb8c045dd-profile_image-50x50.png"
            title="BIG Mario Kart session"
            user="Bigpuffer"
            game="Mario Kart 8 Deluxe"
          />
          <LiveChannelItem
            img={live6}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/b3c347ed-1a7a-40a2-8bee-8a7c4426eb33-profile_image-50x50.png"
            title="Tripod Man Gains RP | Code: MFAM | @..."
            user="NICKMERCS"
            game="Apex Legends"
          />
          <LiveChannelItem
            img={live7}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/25911b2f-6077-4e46-b66e-25f1655f09f6-profile_image-50x50.png"
            title="JESUS LOVES YOU!!!"
            user="coletteleclair"
            game="Just Chatting"
          />
          <LiveChannelItem
            img={live8}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/b3fc1f16-0818-4121-8711-c31b9469bc21-profile_image-50x50.png"
            title="Covert_Muffin teaching Star Wars..."
            user="JamesDoneQuick"
            game="Star Wars: Jedi Knight II - Jedi Outcast"
          />
          <LiveChannelItem
            img={live9}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-50x50.png"
            title="Grinding"
            user="shroud"
            game="The Cycle: Frontier"
          />
          <LiveChannelItem
            img={live10}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/958d17a9-0c82-4210-8376-7e3c00a006f5-profile_image-50x50.png"
            title="GRILLIN / CHILLEN! Steak / Burgers..."
            user="KennyGoodloe"
            game="Just Chatting"
          />
          <LiveChannelItem
            img={live11}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/a9ce83ba-c0bd-49cc-83bd-9d17647a211a-profile_image-50x50.png"
            title="Chilling (Might do WoW later)"
            user="zackrawrr"
            game="Fortnite"
          />
          <LiveChannelItem
            img={live12}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/4dfc565e-69ca-4973-96d6-0b675e899ae8-profile_image-50x50.png"
            title="Gaming!"
            user="yumytv"
            game="Valorant"
          />
        </div>
      </div>
    </>
  );
};

export default LiveChannels;
