import { h } from 'preact';
import { CuteBadge, UseCuteBadge } from './cute';
import { LolBadge, UseLolBadge } from './lol';
import { TrendingBadge, UseTrendingBadge } from './trending';
import { OmgBadge, UseOmgBadge } from './omg';
import { WtfBadge, UseWtfBadge } from './wtf';
import { MeudeusBadge, UseMeudeusBadge } from './meudeus';
import { HahahaBadge, UseHahahaBadge } from './hahaha';
import { FofoBadge, UseFofoBadge } from './fofo';
import { JajajaBadge, UseJajajaBadge } from './jajaja';
import { KawaiiBadge, UseKawaiiBadge } from './kawaii';
import { MadreMiaBadge, UseMadreMiaBadge } from './madremia';
import { LindoBadge, UseLindoBadge } from './lindo';
import { OoohBadge, UseOoohBadge } from './oooh';
import { WinBadge, UseWinBadge } from './win';

export const createBadgeSVGByName = badgeName => ({
  cute: <CuteBadge />,
  lol: <LolBadge />,
  omg: <OmgBadge />,
  wtf: <WtfBadge />,
  trending: <TrendingBadge />,
  meudeus: <MeudeusBadge />,
  hahaha: <HahahaBadge />,
  fofo: <FofoBadge />,
  jajaja: <JajajaBadge />,
  kawaii: <KawaiiBadge />,
  madremia: <MadreMiaBadge />,
  lindo: <LindoBadge />,
  oooh: <OoohBadge />,
  win: <WinBadge />
}[badgeName]);

export const BadgeSVG = ({ badgeName, ...props }) => {
  switch (badgeName) {
  case 'cute':
    return <UseCuteBadge {...props} />;
  case 'lol':
    return <UseLolBadge {...props} />;
  case 'omg':
    return <UseOmgBadge {...props} />;
  case 'wtf':
    return <UseWtfBadge {...props} />;
  case 'trending':
    return <UseTrendingBadge {...props} />;
  case 'meudeus':
    return <UseMeudeusBadge {...props} />;
  case 'hahaha':
    return <UseHahahaBadge {...props} />;
  case 'fofo':
    return <UseFofoBadge {...props} />;
  case 'jajaja':
    return <UseJajajaBadge {...props} />;
  case 'kawaii':
    return <UseKawaiiBadge {...props} />;
  case 'madremia':
    return <UseMadreMiaBadge {...props} />;
  case 'lindo':
    return <UseLindoBadge {...props} />;
  case 'oooh':
    return <UseOoohBadge {...props} />;
  case 'win':
    return <UseWinBadge {...props} />;
  }

  return null;
};
