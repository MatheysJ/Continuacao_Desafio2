import "./style.css";

import Git_Fork from "../../../common/assets/icons/Git_Fork";
import GitWatchers from '@mui/icons-material/VisibilityOutlined';
import StarOutlineIcon from "@mui/icons-material/StarOutline";
/* @mui/icons-material/StarOutline */

function Rep({ repositorio }) {
  return (
    <a
      href={repositorio.html_url}
      className="box_rep"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="box_rep_l1">
        <span className="name">{repositorio.name}</span>
        <span className="language">{repositorio.language ? repositorio.language : "////"}</span>
      </div>
      <div className="box_rep_l2">
        <span className="watchers"><GitWatchers />{repositorio.watchers_count}</span>
        <span className="forks"><Git_Fork />{repositorio.forks}</span>
        <span className="stars"><StarOutlineIcon />{repositorio.stargazers_count}</span>
      </div>
    </a>
  );
}

export default Rep;
