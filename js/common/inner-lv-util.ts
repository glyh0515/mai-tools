import {getSongNickname} from './song-util';

export interface SongProperties {
  dx: number;
  lv: ReadonlyArray<number>;
  debut: number;
  songName: string;
  nickname: string;
}

/*
 * Example format:
 * {dx:0, v: 2, lv:[4.0, 6.0, 8.8, 10.9, 12.3], n:"Bad Apple!! feat nomico", nn:"Bad Apple!!"},
 * {dx:1, v:13, lv:[3.0, 7.0, 9.2, 11.8, 0], n:"METEOR"},
 */
const DX_REGEX = /\bdx\s*:\s*([0-9]+)/;
const LV_REGEX = /\blv\s*:\s*(\[.+?\])/;
const VERSION_REGEX = /\bv\s*:\s*([0-9]+)/;
const SONGNAME_REGEX = /\bn\s*:\s*["'](.+?)['"]\s*[,\}]/;
const SONGNICKNAME_REGEX = /\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/;

function fixMismatchSongName(name: string) {
  if (name === "D✪N’T  ST✪P  R✪CKIN’") {
    return "D✪N’T ST✪P R✪CKIN’";
  }
  return name;
}

function parseInnerLevelLine(line: string): SongProperties {
  const dxMatch = line.match(DX_REGEX);
  const lvMatch = line.match(LV_REGEX);
  const debutVerMatch = line.match(VERSION_REGEX);
  const songNameMatch = line.match(SONGNAME_REGEX);
  const nicknameMatch = line.match(SONGNICKNAME_REGEX);
  if (dxMatch && lvMatch && debutVerMatch && songNameMatch) {
    return {
      dx: parseInt(dxMatch[1]),
      lv: JSON.parse(lvMatch[1]),
      debut: parseInt(debutVerMatch[1]),
      songName: fixMismatchSongName(songNameMatch[1]),
      nickname: nicknameMatch && nicknameMatch[1],
    };
  }
}

export function buildSongPropertyMap(text: string): Map<string, SongProperties[]> {
    const lines = text.split("\n");
    // songPropsByName: song name -> array of song properties
    // most arrays have only 1 entry, but some arrays have more than 1 entries
    // because song name duplicates or it has both DX and Standard charts.
    const songPropsByName = new Map<string, SongProperties[]>();
    for (const line of lines) {
      const innerLvData = parseInnerLevelLine(line);
      if (innerLvData) {
        if (!songPropsByName.has(innerLvData.songName)) {
          songPropsByName.set(innerLvData.songName, []);
        }
        songPropsByName.get(innerLvData.songName).push(innerLvData);
      }
    }
    return songPropsByName;
}

function isDxChart(chartType: string) {
  return chartType === "DX";
}

export function getSongProperties(
  songPropsByName: Map<string, ReadonlyArray<SongProperties>>,
  songName: string,
  genre: string,
  chartType: string
) {
  let songPropsArray = songPropsByName.get(songName);
  if (songPropsArray && songPropsArray.length > 0) {
    if (songPropsArray.length > 1) {
      // Song has multiple charts
      const isDX = isDxChart(chartType) ? 1 : 0;
      songPropsArray = songPropsArray.filter(d => d.dx === isDX);
      if (songPropsArray.length > 1) {
        // Duplicate song names
        const nickname = getSongNickname(songName, genre);
        songPropsArray = songPropsArray.filter(d => d.nickname === nickname);
      }
    }
    if (songPropsArray.length === 1) {
      return songPropsArray[0];
    }
  }
  console.warn(`Could not find song properties for ${songName}`);
  return null;
}
