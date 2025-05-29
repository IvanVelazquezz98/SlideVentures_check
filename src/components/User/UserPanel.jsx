// components/User/UserPanel.js
import React from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import StatAnimated from "./Stats/StatAnimated";
import marcoUsuario from "../../../assets/marcoPj2.png";
import inicioPlayer from '../../../assets/avatars/inicio.png'
export default function UserPanel({ dropZoneRef, setDropY }) {
  const player = useSelector((state) => state.player);

  return (
    <PlayerContainer
      ref={dropZoneRef}
      onLayout={(event) => {
        const { y } = event.nativeEvent.layout;
        setDropY(y);
      }}
    >
      <UserWrapper>
        <PlayerImage
          source={
            player.avatar
              ? player.avatar
              : inicioPlayer
          }
        />
        <MarcoUsuarioOverlay source={marcoUsuario} resizeMode="stretch" />
      </UserWrapper>

      <StatsRow>
        {Object.entries(player.stats).map(([key, value]) => {
          const icon =
            key === "salud"
              ? "❤️"
              : key === "fuerza"
              ? "💪"
              : key === "hambre"
              ? "🍗"
              : key === "agua"
              ? "💧"
              : key === "dinero"
              ? "💰"
              : key === "respeto"
              ? "🕴️"
              : key === "inteligencia"
              ? "📘"
              : "✨";

          return <StatAnimated key={key} icon={icon} value={value} />;
        })}
      </StatsRow>
    </PlayerContainer>
  );
}

const PlayerContainer = styled.View`
  align-items: center;
  top: 480;
  z-index: 1;
`;

const UserWrapper = styled.View`
  width: 100px;
  height: 100px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const PlayerImage = styled.Image`
  width: 96%;
  height: 96%;
  background-color: black;
`;

const MarcoUsuarioOverlay = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 105px;
  height: 105px;
  z-index: 2;
  pointer-events: none;
`;

const StatsRow = styled.View`
  flex-direction: row;
  margin-top: 20;
  gap: 15px;
`;
