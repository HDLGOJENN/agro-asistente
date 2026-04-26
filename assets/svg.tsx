import Svg, { Path, Circle, Line } from 'react-native-svg';

interface Icon {
  width?: number;
  height?: number;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export const WeatherCloudIcon = ({ width = 64, height = 48 }: { width?: number; height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 64 48" fill="none">
    <Circle cx={44} cy={18} r={10} fill="#FFD54F" />
    <Line x1={44} y1={4} x2={44} y2={8} stroke="#FFD54F" strokeWidth={2} strokeLinecap="round" />
    <Line x1={44} y1={28} x2={44} y2={32} stroke="#FFD54F" strokeWidth={2} strokeLinecap="round" />
    <Line x1={30} y1={18} x2={34} y2={18} stroke="#FFD54F" strokeWidth={2} strokeLinecap="round" />
    <Line x1={54} y1={18} x2={58} y2={18} stroke="#FFD54F" strokeWidth={2} strokeLinecap="round" />
    <Path d="M8 38 C8 38 6 36 6 33 C6 29 9 27 12 27 C13 24 16 22 20 22 C25 22 28 26 28 26 C30 26 34 28 34 32 C34 36 30 38 28 38 Z" fill="#B0BEC5" />
  </Svg>
);
 
export const PlantStemIcon = ({ width = 40, height = 48 }: { width?: number; height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 40 48" fill="none">
    <Line x1={20} y1={48} x2={20} y2={20} stroke="#4CAF50" strokeWidth={2.5} strokeLinecap="round" />
    <Path d="M20 32 C20 32 10 28 8 18 C14 16 22 22 20 32Z" fill="#66BB6A" />
    <Path d="M20 26 C20 26 30 22 32 12 C26 10 18 16 20 26Z" fill="#4CAF50" />
  </Svg>
);

export const LeaftIcon = ({ width = 68, height = 68 }: { width?: number; height?: number }) => (
<Svg width={68} height={68} viewBox="0 0 36 36">
      <Path
        d="M18 4 C18 4 8 10 8 20 C8 27 13 32 18 33 C23 32 28 27 28 20 C28 10 18 4 18 4Z"
        fill="#43a843"
      />
      <Path
        d="M18 33 L18 18"
        stroke="#2e7d32"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M18 24 C18 24 13 20 10 18"
        stroke="#2e7d32"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
);

export const LocationPinIcon = ({ width = 24, height = 24 }: { width?: number; height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    {/* pin */}
    <Path
      d="M12 2 C7 2 4 6 4 10 C4 15 12 22 12 22 C12 22 20 15 20 10 C20 6 17 2 12 2Z"
      fill="#2E7D32"
    />
    
    {/* círculo interior */}
    <Circle
      cx={12}
      cy={10}
      r={3}
      fill="#FFFFFF"
    />
  </Svg>
);